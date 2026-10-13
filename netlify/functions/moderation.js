// 仅供已登录的作品集后台账户使用：统一管理公开涂鸦和视频评论。
import { getStore } from "@netlify/blobs";
import { getUser } from "@netlify/identity";

const JSON_HEADERS = { "Content-Type": "application/json", "Cache-Control": "no-store" };
const makeId = (prefix, ts, n) => prefix + Number(ts || Date.now()).toString(36) + n.toString(36);

async function requireEditor() {
  const user = await getUser();
  if (!user) return null;
  return user;
}

function publicStickers(items) {
  return items.slice(0, 100).map(({ owner, ...item }) => item);
}

function normalizeComments(data) {
  let changed = false;
  for (const [work, comments] of Object.entries(data.comments || {})) {
    if (!Array.isArray(comments)) { data.comments[work] = []; changed = true; continue; }
    data.comments[work] = comments.map((comment, i) => {
      if (comment.id) return comment;
      changed = true;
      return { ...comment, id: makeId("legacy-", comment.ts, i) };
    });
  }
  return changed;
}

export default async req => {
  const user = await requireEditor();
  if (!user) return Response.json({ error: "请先登录作品集后台" }, { status: 401, headers: JSON_HEADERS });

  const stickerStore = getStore("stickers");
  const engageStore = getStore("engage");
  let stickers = [];
  let engage = { likes: {}, comments: {} };
  try { stickers = (await stickerStore.get("wall", { type: "json" })) || []; } catch (e) {}
  try { engage = (await engageStore.get("data", { type: "json" })) || engage; } catch (e) {}
  if (!Array.isArray(stickers)) stickers = [];
  if (!engage || typeof engage !== "object") engage = { likes: {}, comments: {} };
  if (!engage.comments) engage.comments = {};
  const commentsChanged = normalizeComments(engage);

  if (req.method === "GET") {
    if (commentsChanged) await engageStore.setJSON("data", engage);
    const comments = Object.entries(engage.comments).flatMap(([work, entries]) =>
      entries.map(comment => ({ ...comment, work }))
    ).sort((a, b) => Number(b.ts || 0) - Number(a.ts || 0)).slice(0, 200);
    return Response.json({ stickers: publicStickers(stickers), comments }, { headers: JSON_HEADERS });
  }

  if (req.method !== "POST") return new Response("Method not allowed", { status: 405 });
  const body = await req.json().catch(() => null);
  if (!body) return Response.json({ error: "请求无效" }, { status: 400, headers: JSON_HEADERS });

  if (body.op === "delete-sticker") {
    const id = String(body.id || "").slice(0, 40);
    stickers = stickers.filter(item => item.id !== id);
    await stickerStore.setJSON("wall", stickers);
  } else if (body.op === "delete-comment") {
    const work = String(body.work || "").slice(0, 40);
    const id = String(body.id || "").slice(0, 60);
    engage.comments[work] = (engage.comments[work] || []).filter(comment => comment.id !== id);
    await engageStore.setJSON("data", engage);
  } else {
    return Response.json({ error: "不支持的操作" }, { status: 400, headers: JSON_HEADERS });
  }
  return Response.json({ ok: true }, { headers: JSON_HEADERS });
};
