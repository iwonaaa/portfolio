// 全站共享的贴纸墙：存在 Netlify Blobs（免费，无需额外注册）
import { getStore } from "@netlify/blobs";

const CORS = { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" };
const MAX_ITEMS = 24;        // 墙上最多保留 24 张（新的把旧的挤掉）
const MAX_IMG_LEN = 260000;  // dataURL 长度上限，约 190KB 图片

export default async (req) => {
  const store = getStore("stickers");
  let items = [];
  try { items = (await store.get("wall", { type: "json" })) || []; } catch (e) { items = []; }
  if (!Array.isArray(items)) items = [];

  if (req.method === "GET") {
    return Response.json({ items: items.slice(0, MAX_ITEMS) }, { headers: CORS });
  }

  if (req.method === "POST") {
    const body = await req.json().catch(() => null);
    if (!body) return Response.json({ error: "bad request" }, { status: 400, headers: CORS });

    if (body.op === "add") {
      const img = String(body.img || "");
      if (!img.startsWith("data:image/png") && !img.startsWith("data:image/jpeg")) {
        return Response.json({ error: "bad image" }, { status: 400, headers: CORS });
      }
      if (img.length > MAX_IMG_LEN) {
        return Response.json({ error: "too big" }, { status: 413, headers: CORS });
      }
      const num = (v, d) => (typeof v === "number" && isFinite(v) ? v : d);
      const item = {
        id: "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
        img,
        rot: Math.max(-12, Math.min(12, num(body.rot, 0))),
        dx: Math.max(-30, Math.min(30, num(body.dx, 0))),
        dy: Math.max(-30, Math.min(30, num(body.dy, 0))),
        ts: Date.now()
      };
      items.unshift(item);
      items = items.slice(0, MAX_ITEMS);
      await store.setJSON("wall", items);
      return Response.json({ items, id: item.id }, { headers: CORS });
    }

    if (body.op === "del") {
      const id = String(body.id || "").slice(0, 30);
      items = items.filter(it => it.id !== id);
      await store.setJSON("wall", items);
      return Response.json({ items }, { headers: CORS });
    }

    return Response.json({ error: "bad op" }, { status: 400, headers: CORS });
  }

  return new Response("Method not allowed", { status: 405 });
};