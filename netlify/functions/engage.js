// 全站共享的点赞 + 评论后端：存在 Netlify Blobs（免费，无需额外注册）
import { getStore } from "@netlify/blobs";

const CORS = { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" };
const EMPTY = { likes: {}, comments: {} };

export default async (req) => {
  const store = getStore("engage");
  const url = new URL(req.url);
  const work = (url.searchParams.get("work") || "").slice(0, 40);
  let data = EMPTY;
  try { data = (await store.get("data", { type: "json" })) || EMPTY; } catch (e) { data = EMPTY; }
  if (!data.likes) data.likes = {};
  if (!data.comments) data.comments = {};

  if (req.method === "GET") {
    return Response.json({
      likes: data.likes[work] || 0,
      comments: (data.comments[work] || []).slice(0, 50)
    }, { headers: CORS });
  }

  if (req.method === "POST") {
    const body = await req.json().catch(() => null);
    if (!body || typeof body.work !== "string" || !body.work || body.work.length > 40) {
      return Response.json({ error: "bad request" }, { status: 400, headers: CORS });
    }
    const w = body.work;
    if (body.op === "like") {
      data.likes[w] = Math.max(0, (data.likes[w] || 0) + (body.delta === -1 ? -1 : 1));
    } else if (body.op === "comment") {
      const name = String(body.name || "匿名观众").slice(0, 20);
      const text = String(body.text || "").slice(0, 300);
      if (!text.trim()) return Response.json({ error: "empty" }, { status: 400, headers: CORS });
      (data.comments[w] = data.comments[w] || []).unshift({ name, text, ts: Date.now() });
      data.comments[w] = data.comments[w].slice(0, 50);
    } else {
      return Response.json({ error: "bad op" }, { status: 400, headers: CORS });
    }
    await store.setJSON("data", data);
    return Response.json({
      likes: data.likes[w] || 0,
      comments: (data.comments[w] || []).slice(0, 50)
    }, { headers: CORS });
  }

  return new Response("Method not allowed", { status: 405 });
};