"use strict";
(function () {
  const bootBook = () => {
  if (typeof THREE === "undefined") return;
  const wrap = document.getElementById("book3d-wrap");
  const canvas = document.getElementById("book3d");
  if (!wrap || !canvas) return;
  if (wrap.dataset.bookInitialized) return;
  wrap.dataset.bookInitialized = "true";

  const DATA = window.PAGE_DATA || { site: {}, works: [], postcards: [] };
  const RED = "#E6392B", INK = "#221D15", SOFT = "#5C5343", PAPER = "#FFFDF6";

  const recovery = document.createElement("div");
  recovery.className = "book-recovery";
  recovery.hidden = true;
  const recoveryCover = document.createElement("img");
  recoveryCover.alt = "笔记本封面";
  const coverSource = DATA.site.book && DATA.site.book.cover;
  if (coverSource) recoveryCover.src = location.protocol === "file:" && coverSource.startsWith("/") ? `.${coverSource}` : coverSource;
  else recoveryCover.hidden = true;
  const recoveryText = document.createElement("p");
  recoveryText.setAttribute("role", "status");
  const retry = document.createElement("button");
  retry.className = "chip-btn";
  retry.textContent = "重新载入笔记本";
  retry.hidden = true;
  retry.addEventListener("click", () => location.reload());
  recovery.append(recoveryCover, recoveryText, retry);
  wrap.appendChild(recovery);
  let contextLost = false, recoveryTimer;
  function showRecovery(message) {
    recoveryText.textContent = message;
    recovery.hidden = false;
    wrap.dataset.renderState = "recovering";
  }
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "low-power" });
  } catch (error) {
    showRecovery("笔记本暂时无法显示，请重新载入。");
    retry.hidden = false;
    console.warn("笔记本渲染初始化失败", error);
    return;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
  else if ("outputEncoding" in renderer && THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(41, 1, 0.1, 60);
  camera.position.set(0, 2.4, 5.1);
  camera.lookAt(0, 1.8, 0);

  scene.add(new THREE.AmbientLight(0xfff6e8, 0.55));
  const hemi = new THREE.HemisphereLight(0xfff3df, 0x4a4438, 0.5);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, 1.1);
  sun.position.set(3.5, 6, 4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(512, 512);
  sun.shadow.camera.left = -5; sun.shadow.camera.right = 5;
  sun.shadow.camera.top = 5; sun.shadow.camera.bottom = -5;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 20;
  sun.shadow.bias = -0.0004;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xdfeaff, 0.35);
  fill.position.set(-4, 3, 3);
  scene.add(fill);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.ShadowMaterial({ opacity: 0.16 })
  );
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -0.02;
  ground.receiveShadow = true;
  scene.add(ground);

  const PW = 2.3, PH = 3.3;
  const FW = 640, FH = Math.round(FW * PH / PW);
  // 3D 笔记本：封面与非涂鸦页完全由后台的“索引标签 → 页面图片”驱动。
  const bookConfig = (DATA.site && DATA.site.book) || {};
  const ticketColors = ["#dfcba4", "#dfb0a5", "#adc3b6", "#d9bc78", "#c4b1c9"];
  const tabColor = (color, fallback = ticketColors[0]) => /^#[0-9a-f]{6}$/i.test(String(color || "")) ? String(color) : fallback;
  const tabInk = tabColor(bookConfig.tabTextColor, "#4d413a");
  const legacyPages = Array.isArray(bookConfig.pages)
    ? bookConfig.pages.map(page => typeof page === "string" ? page : (page && page.image)).filter(Boolean)
    : [];
  const rawTabs = Array.isArray(bookConfig.tabs) && bookConfig.tabs.length
    ? bookConfig.tabs
    : [{ label: "AE动画", color: ticketColors[0], pages: legacyPages }];
  let pageCursor = 0;
  const TAB_DEFS = rawTabs.map((tab, index) => {
    const pages = Array.isArray(tab.pages) ? tab.pages.map(page => typeof page === "string" ? page : (page && page.image)).filter(Boolean) : [];
    const def = {
      name: String(tab.label || tab.name || `标签 ${index + 1}`).slice(0, 12),
      color: tabColor(tab.color, ticketColors[index % ticketColors.length]),
      pages,
      start: pageCursor,
      isDoodle: false
    };
    pageCursor += pages.length;
    return def;
  });
  const uploadedPages = TAB_DEFS.flatMap(tab => tab.pages);
  const pageFaceKeys = uploadedPages.map((_, index) => `page-${index}`);
  // 让最后一张内容页后面始终接涂鸦页，维持“涂鸦＋贴纸墙”的最后一跨布局。
  const pageSlots = pageFaceKeys.length ? pageFaceKeys.slice() : ["blank"];
  if (pageSlots.length % 2) pageSlots.push("blank");
  const faceOfSheet = [["cover", pageSlots[0]]];
  for (let i = 1; i < pageSlots.length; i += 2) {
    faceOfSheet.push(i + 1 < pageSlots.length ? [pageSlots[i], pageSlots[i + 1]] : [pageSlots[i], "doodle"]);
  }
  faceOfSheet.push(["wall", "blank"]);
  const DOODLE_FLIP_COUNT = faceOfSheet.length - 1;
  const DOODLE_TAB = bookConfig.doodleTab || {};
  TAB_DEFS.push({
    name: String(DOODLE_TAB.label || "涂鸦").slice(0, 12),
    color: tabColor(DOODLE_TAB.color, ticketColors[rawTabs.length % ticketColors.length]),
    start: uploadedPages.length,
    flipCount: DOODLE_FLIP_COUNT,
    isDoodle: true
  });
  TAB_DEFS.forEach(tab => { if (!tab.isDoodle) tab.flipCount = Math.floor(tab.start / 2) + 1; });
  const uploadFaceKeys = ["cover", ...pageFaceKeys];
  const localAssetPath = path => location.protocol === "file:" && String(path || "").startsWith("/") ? `.${path}` : path;
  const uploadSources = { cover: bookConfig.cover || "" };
  pageFaceKeys.forEach((key, index) => { uploadSources[key] = uploadedPages[index] || ""; });
  const uploadImages = {};
  const uploadImageLoaders = uploadFaceKeys.map(key => new Promise(done => {
    const src = uploadSources[key];
    if (!src) { uploadImages[key] = null; done(); return; }
    const image = new Image();
    const timeout = setTimeout(done, 10000);
    image.onload = () => { clearTimeout(timeout); done(); if (faces[key]) redrawFace(key); };
    image.onerror = () => { clearTimeout(timeout); done(); };
    image.src = localAssetPath(src);
    uploadImages[key] = image;
  }));

  function makeFaceCanvas() {
    const cv = document.createElement("canvas");
    cv.width = FW; cv.height = FH;
    return cv;
  }
  function gridBg(ctx) {
    ctx.save();
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, FW, FH);
    ctx.strokeStyle = "rgba(43,79,216,0.08)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= FW; x += 24) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, FH); ctx.stroke(); }
    for (let y = 0; y <= FH; y += 24) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(FW, y); ctx.stroke(); }
    ctx.restore();
  }

  function faceTitle(ctx, cn, en) {
    ctx.fillStyle = RED;
    ctx.font = '96px "ZCOOL KuaiLe", sans-serif';
    ctx.textBaseline = "top";
    ctx.fillText(cn, 48, 64);
    ctx.fillStyle = SOFT;
    ctx.font = '21px ui-monospace, monospace';
    ctx.fillText(en, 50, 170);
    ctx.strokeStyle = RED;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(48, 212);
    ctx.quadraticCurveTo(110, 156, 170, 166);
    ctx.quadraticCurveTo(220, 174, 250, 164);
    ctx.stroke();
  }
  function faceNote(ctx, lines, y0) {
    ctx.fillStyle = INK;
    ctx.font = '600 36px "PingFang SC", "Microsoft YaHei", sans-serif';
    lines.forEach((t, i) => ctx.fillText(t, 48, y0 + i * 50));
  }
  function faceWorksList(ctx, list) {
    ctx.font = '700 34px "PingFang SC", "Microsoft YaHei", sans-serif';
    list.forEach((w, i) => {
      const y = 330 + i * 96;
      ctx.strokeStyle = "rgba(34,29,21,0.35)";
      ctx.setLineDash([6, 6]);
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(48, y + 34); ctx.lineTo(FW - 48, y + 34); ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = INK;
      ctx.fillText(w.title, 48, y);
      ctx.fillStyle = "#463E31";
      ctx.font = '600 23px ui-monospace, monospace';
      ctx.fillText(w.year + " · " + w.dur + " · " + w.cat, 48, y + 58);
      ctx.font = '700 34px "PingFang SC", "Microsoft YaHei", sans-serif';
    });
  }

  const posters = {};
  const posterFiles = { "动效": "poster-dongxiao", "特效": "poster-texiao", "动画": "poster-donghua", "其他": "poster-qita" };
  const imgLoaders = [];
  for (const k in posterFiles) {
    const img = new Image();
    img.src = "assets/" + posterFiles[k] + ".svg";
    posters[k] = img;
    imgLoaders.push(new Promise(r => { img.onload = r; img.onerror = r; }));
  }

  function faceMinis(ctx, list) {
    list.slice(0, 2).forEach((w, i) => {
      const img = posters[w.cat];
      ctx.save();
      ctx.translate(FW / 2, 300 + i * 260);
      ctx.rotate((i === 0 ? -1 : 1) * 0.045);
      const mw = FW * 0.72, mh = mw * 9 / 16;
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "rgba(34,29,21,0.35)";
      ctx.shadowBlur = 18;
      ctx.shadowOffsetY = 8;
      ctx.fillRect(-mw / 2 - 10, -mh / 2 - 10, mw + 20, mh + 20);
      ctx.shadowColor = "transparent";
      if (img && img.complete && img.naturalWidth) ctx.drawImage(img, -mw / 2, -mh / 2, mw, mh);
      else {
        ctx.fillStyle = "#16130F";
        ctx.fillRect(-mw / 2, -mh / 2, mw, mh);
      }
      ctx.fillStyle = INK;
      ctx.font = '24px "ZCOOL KuaiLe", sans-serif';
      ctx.textAlign = "center";
      ctx.fillText(w.title, 0, mh / 2 + 34);
      ctx.restore();
    });
  }

  const DOODLE_COLORS = ["#221D15", "#E6392B", "#2B4FD8", "#E8A800", "#3E9B4F"];
  const PAD = { x0: 46, y0: 176, x1: FW - 46, y1: 578 };
  const COLOR_Y = 656, COLOR_X0 = 130, COLOR_DX = 56, COLOR_R = 17;
  const DOODLE_BTNS = [
    { id: "undo", label: "撤回", x0: 48, x1: 178, y0: 712, y1: 782 },
    { id: "clear", label: "清除", x0: 194, x1: 324, y0: 712, y1: 782 },
    { id: "save", label: "贴上墙 ↓", x0: 340, x1: FW - 48, y0: 712, y1: 782, accent: true }
  ];
  function faceDoodlePad(ctx) {
    gridBg(ctx);
    faceTitle(ctx, "涂鸦板", "SKETCH & PIN");
    ctx.save();
    ctx.strokeStyle = "rgba(34,29,21,0.45)";
    ctx.lineWidth = 3;
    ctx.setLineDash([14, 10]);
    ctx.beginPath();
    ctx.roundRect(PAD.x0, PAD.y0, PAD.x1 - PAD.x0, PAD.y1 - PAD.y0, 16);
    ctx.stroke();
    ctx.setLineDash([]);
    ctx.fillStyle = "rgba(92,83,67,0.7)";
    ctx.font = '600 22px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText("画在这个框里", PAD.x0 + 20, PAD.y0 + 34);
    ctx.font = '24px "ZCOOL KuaiLe", sans-serif';
    ctx.fillStyle = SOFT;
    ctx.fillText("选色", 52, COLOR_Y + 7);
    DOODLE_COLORS.forEach((col, i) => {
      const cx = COLOR_X0 + i * COLOR_DX;
      ctx.beginPath();
      ctx.arc(cx, COLOR_Y, COLOR_R, 0, Math.PI * 2);
      ctx.fillStyle = col;
      ctx.fill();
      ctx.strokeStyle = "rgba(34,29,21,0.35)";
      ctx.lineWidth = 2;
      ctx.stroke();
      if (doodleColor === col) {
        ctx.beginPath();
        ctx.arc(cx, COLOR_Y, COLOR_R + 8, 0, Math.PI * 2);
        ctx.strokeStyle = INK;
        ctx.lineWidth = 4;
        ctx.stroke();
      }
    });
    DOODLE_BTNS.forEach(b => {
      ctx.beginPath();
      ctx.roundRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0, 12);
      if (b.accent) { ctx.fillStyle = RED; ctx.fill(); ctx.strokeStyle = "#B02A20"; }
      else { ctx.fillStyle = "#FFFDF6"; ctx.fill(); ctx.strokeStyle = INK; }
      ctx.lineWidth = 3;
      if (!b.accent) ctx.setLineDash([9, 7]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = b.accent ? "#FFFDF6" : INK;
      ctx.font = '30px "ZCOOL KuaiLe", sans-serif';
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(b.label, (b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2 + 2);
      ctx.textAlign = "left";
      ctx.textBaseline = "alphabetic";
    });
    ctx.fillStyle = "rgba(92,83,67,0.85)";
    ctx.font = '600 21px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText("拖框外的页面边缘可以往前翻", 48, FH - 56);
    ctx.restore();
  }

  const wallImages = [];
  const WALL_API = "/.netlify/functions/stickers";
  let wallOnline = false;
  const wallOwner = (() => {
    try {
      let key = localStorage.getItem("pf_doodle_owner");
      if (!key) {
        key = (crypto.randomUUID ? crypto.randomUUID() : "d" + Date.now().toString(36) + Math.random().toString(36).slice(2));
        localStorage.setItem("pf_doodle_owner", key);
      }
      return key;
    } catch (e) { return ""; }
  })();
  const loadWallCache = () => { try { return JSON.parse(localStorage.getItem("pf_doodles") || "[]"); } catch (e) { return []; } };
  const saveWallCache = arr => { try { localStorage.setItem("pf_doodles", JSON.stringify(arr.slice(0, 12))); } catch (e) {} };
  const loadMineIds = () => { try { return JSON.parse(localStorage.getItem("pf_doodle_mine") || "[]"); } catch (e) { return []; } };
  const saveMineIds = ids => { try { localStorage.setItem("pf_doodle_mine", JSON.stringify(ids.slice(0, 30))); } catch (e) {} };
  function setWallItems(arr) {
    wallImages.length = 0;
    arr.slice(0, 12).forEach(d => {
      const img = new Image();
      img.onload = () => redrawFace("wall");
      img.src = d.img;
      wallImages.push({ img, rot: d.rot ?? 0, id: d.id || null, mine: wallOnline ? d.mine === true : true });
    });
    redrawFace("wall");
  }
  function loadWall() { setWallItems(loadWallCache()); }
  async function syncWall() {
    try {
      const r = await fetch(WALL_API, { headers: { "x-doodle-owner": wallOwner } });
      if (!r.ok) throw 0;
      const d = await r.json();
      if (!Array.isArray(d.items)) throw 0;
      wallOnline = true;
      setWallItems(d.items);
      saveWallCache(d.items);
    } catch (e) { wallOnline = false; }
  }
  async function postWall(body) {
    if (!wallOnline) return null;
    try {
      const r = await fetch(WALL_API, { method: "POST", headers: { "Content-Type": "application/json", "x-doodle-owner": wallOwner }, body: JSON.stringify(body) });
      if (!r.ok) return null;
      return await r.json();
    } catch (e) { return null; }
  }

  const wallLayout = [];
  const TRASH = { x: FW - 170, y: FH - 232, w: 118, h: 158 };
  const wallState = { dragIdx: -1, dx: 0, dy: 0, px: 0, py: 0, trashScale: 1, crumple: null };

  function drawSticker(ctx, d, i, cx, cy, scale) {
    const w = 236, h = 154;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate((d.rot || (i % 2 ? 2 : -2)) * Math.PI / 180);
    ctx.scale(scale, scale);
    ctx.fillStyle = "#fff";
    ctx.shadowColor = "rgba(34,29,21,0.35)";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetY = 4;
    ctx.fillRect(-w / 2 - 6, -h / 2 - 6, w + 12, h + 12);
    ctx.shadowColor = "transparent";
    ctx.drawImage(d.img, -w / 2, -h / 2, w, h);
    ctx.restore();
  }

  function drawTrash(ctx, scale) {
    ctx.save();
    const cx = TRASH.x + TRASH.w / 2, by = TRASH.y + TRASH.h - 10;
    ctx.translate(cx, by);
    ctx.scale(scale, scale);
    ctx.translate(-cx, -by);
    ctx.strokeStyle = INK;
    ctx.lineWidth = 8;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.beginPath();
    ctx.moveTo(TRASH.x + 14, TRASH.y + 48);
    ctx.lineTo(TRASH.x + 24, TRASH.y + TRASH.h - 24);
    ctx.quadraticCurveTo(TRASH.x + 26, TRASH.y + TRASH.h - 8, TRASH.x + 40, TRASH.y + TRASH.h - 10);
    ctx.lineTo(TRASH.x + TRASH.w - 28, TRASH.y + TRASH.h - 14);
    ctx.quadraticCurveTo(TRASH.x + TRASH.w - 14, TRASH.y + TRASH.h - 14, TRASH.x + TRASH.w - 18, TRASH.y + TRASH.h - 30);
    ctx.lineTo(TRASH.x + TRASH.w - 12, TRASH.y + 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(TRASH.x + 4, TRASH.y + 46);
    ctx.quadraticCurveTo(TRASH.x + TRASH.w / 2, TRASH.y + 34, TRASH.x + TRASH.w - 2, TRASH.y + 44);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(TRASH.x + TRASH.w / 2 - 16, TRASH.y + 36);
    ctx.quadraticCurveTo(TRASH.x + TRASH.w / 2, TRASH.y + 16, TRASH.x + TRASH.w / 2 + 16, TRASH.y + 34);
    ctx.stroke();
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(TRASH.x + 42, TRASH.y + 70); ctx.lineTo(TRASH.x + 46, TRASH.y + TRASH.h - 40); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(TRASH.x + 68, TRASH.y + 68); ctx.lineTo(TRASH.x + 70, TRASH.y + TRASH.h - 42); ctx.stroke();
    ctx.restore();
  }

  function faceWall(ctx) {
    gridBg(ctx);
    ctx.save();
    ctx.fillStyle = RED;
    ctx.font = '96px "ZCOOL KuaiLe", sans-serif';
    ctx.textBaseline = "top";
    ctx.fillText("贴纸墙", 48, 56);
    ctx.fillStyle = SOFT;
    ctx.font = '21px ui-monospace, monospace';
    ctx.fillText("PINNED DOODLES", 50, 128);
    wallLayout.length = 0;
    wallImages.forEach((d, i) => {
      if (i >= 6) return;
      const col = i % 2, row = Math.floor(i / 2);
      const w = 236, h = 154;
      const x = 66 + col * 262, y = 188 + row * 202 + (col % 2) * 16;
      wallLayout[i] = { cx: x + w / 2, cy: y + h / 2, w: w + 16, h: h + 16 };
      if (i === wallState.dragIdx) return;
      if (wallState.crumple && wallState.crumple.idx === i) return;
      if (!d.img.complete || !d.img.naturalWidth) return;
      drawSticker(ctx, d, i, x + w / 2, y + h / 2, 1);
    });
    if (wallState.dragIdx >= 0 && !wallState.crumple) {
      const d = wallImages[wallState.dragIdx];
      if (d && d.img.complete && d.img.naturalWidth) drawSticker(ctx, d, wallState.dragIdx, wallState.px, wallState.py, 1.08);
    }
    if (wallState.crumple) {
      const cp = wallState.crumple;
      const t = cp.t;
      const tcx = TRASH.x + TRASH.w / 2, tcy = TRASH.y + 26;
      const cx = cp.x0 + (tcx - cp.x0) * t;
      const cy = cp.y0 + (tcy - cp.y0) * t - Math.sin(t * Math.PI) * 46;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 2.4);
      ctx.globalAlpha = Math.max(0, 1 - Math.max(0, t - 0.65) / 0.35);
      const scale = 1 - t * 0.65;
      ctx.scale(scale, scale);
      if (cp.surface) {
        ctx.drawImage(cp.surface, -145, -220, 290, 440);
      } else if (cp.img) {
        ctx.drawImage(cp.img, -126, -85, 252, 170);
      }
      ctx.restore();
    }
    drawTrash(ctx, wallState.trashScale);
    ctx.fillStyle = "rgba(92,83,67,0.85)";
    ctx.font = '600 21px "PingFang SC", "Microsoft YaHei", sans-serif';
    ctx.fillText("自己贴的贴纸，可以拖进垃圾桶删除", 48, FH - 52);
    ctx.restore();
  }

  function removeWallItem(i) {
    const target = wallImages[i];
    if (wallOnline && target && target.id) {
      saveMineIds(loadMineIds().filter(x => x !== target.id));
      wallImages.splice(i, 1);
      redrawFace("wall");
      postWall({ op: "del", id: target.id }).then(d => {
        if (d && Array.isArray(d.items)) { setWallItems(d.items); saveWallCache(d.items); }
      });
      return;
    }
    const arr = loadWallCache();
    arr.splice(i, 1);
    saveWallCache(arr);
    loadWall();
  }

  function grabWallPaper(i) {
    const d = wallImages[i];
    const cp = { idx: i, img: d ? d.img : null, x0: wallState.px, y0: wallState.py, originX: wallState.px, originY: wallState.py, t: 0, surface: null, phase: "held", effect: null, started: 0 };
    wallState.crumple = cp;
    redrawFace("wall");
    if (typeof sfx === "function") sfx("page");
    cp.ready = (async () => {
      try {
        if (d && window.portfolioPaperCrumple) {
          cp.effect = await window.portfolioPaperCrumple(d.img, source => {
            if (wallState.crumple !== cp) return;
            if (!cp.surface) cp.surface = document.createElement("canvas");
            if (cp.surface.width !== source.width || cp.surface.height !== source.height) {
              cp.surface.width = source.width;
              cp.surface.height = source.height;
            }
            const ctx = cp.surface.getContext("2d");
            ctx.clearRect(0, 0, source.width, source.height);
            ctx.drawImage(source, 0, 0);
            redrawFace("wall");
          });
          cp.started = performance.now();
        }
      } catch (error) {
        console.warn("揉纸效果未能加载，保留贴纸拖动", error);
      }
    })();
  }

  async function releaseWallPaper(intoTrash) {
    const cp = wallState.crumple;
    if (!cp || cp.phase !== "held") return;
    cp.phase = intoTrash ? "trash" : "return";
    await cp.ready;
    if (wallState.crumple !== cp) { cp.effect?.dispose(); return; }
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!intoTrash) {
      cp.effect?.release();
      gsap.to(cp, {
        x0: cp.originX, y0: cp.originY, duration: reduced ? 0 : 0.4, ease: "power2.out",
        onUpdate: () => redrawFace("wall"),
        onComplete: () => { cp.effect?.dispose(); wallState.crumple = null; redrawFace("wall"); }
      });
      return;
    }
    // A fast drop still finishes closing the folds before entering the bin.
    const remaining = cp.effect && !reduced ? Math.max(0, 550 - (performance.now() - cp.started)) : 0;
    if (remaining) await new Promise(resolve => setTimeout(resolve, remaining));
    gsap.to(cp, {
      t: 1, duration: reduced ? 0 : 0.4, ease: "power2.in",
      onUpdate: () => redrawFace("wall"),
      onComplete: () => {
        cp.effect?.dispose();
        wallState.crumple = null;
        removeWallItem(cp.idx);
      }
    });
  }

  function facePdf(ctx, mirror) {
    gridBg(ctx, mirror);
    ctx.save();
    ctx.fillStyle = RED;
    ctx.font = '96px "ZCOOL KuaiLe", sans-serif';
    ctx.textBaseline = "top";
    ctx.fillText("毕业设计", 48, 56);
    ctx.fillStyle = SOFT;
    ctx.font = '21px ui-monospace, monospace';
    ctx.fillText("PORTFOLIO PDF · 点击此页翻页", 50, 128);
    if (pdfPageCanvas) {
      const pw = FW - 96, ph = pw * (pdfPageCanvas.height / pdfPageCanvas.width);
      ctx.save();
      ctx.translate(FW / 2, 240);
      ctx.rotate(-0.012);
      ctx.fillStyle = "#fff";
      ctx.shadowColor = "rgba(34,29,21,0.3)";
      ctx.shadowBlur = 14;
      ctx.shadowOffsetY = 6;
      ctx.fillRect(-pw / 2 - 8, -8, pw + 16, ph + 16);
      ctx.shadowColor = "transparent";
      ctx.drawImage(pdfPageCanvas, -pw / 2, 0, pw, ph);
      ctx.restore();
      ctx.fillStyle = SOFT;
      ctx.font = '21px ui-monospace, monospace';
      ctx.textAlign = "center";
      ctx.fillText(pdfPageNum + " / " + pdfPageCount, FW / 2, 260 + ph + 26);
      ctx.textAlign = "left";
    } else {
      ctx.fillStyle = SOFT;
      ctx.font = '20px "PingFang SC", sans-serif';
      ctx.fillText("把 portfolio.pdf 放进 assets 后这里显示内容", 48, 260);
    }
    ctx.restore();
  }

  function faceCover(ctx) {
    const g = ctx.createLinearGradient(0, 0, FW, FH);
    g.addColorStop(0, "#3A342B");
    g.addColorStop(1, "#26221C");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, FW, FH);
    ctx.strokeStyle = "rgba(246,240,228,0.6)";
    ctx.lineWidth = 3;
    ctx.setLineDash([14, 10]);
    ctx.strokeRect(26, 26, FW - 52, FH - 52);
    ctx.setLineDash([]);
    ctx.fillStyle = "#F1EAD9";
    ctx.font = '110px "ZCOOL KuaiLe", sans-serif';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("作品集", FW / 2, FH / 2 - 60);
    ctx.strokeStyle = RED;
    ctx.lineWidth = 8;
    ctx.lineJoin = "round";
    ctx.beginPath();
    ctx.moveTo(FW / 2, FH / 2 + 40);
    for (let i = 0; i < 5; i++) {
      const a1 = -Math.PI / 2 + i * (Math.PI * 4 / 5);
      const a2 = a1 + Math.PI * 2 / 5;
      ctx.lineTo(FW / 2 + Math.cos(a1) * 52, FH / 2 + 40 + Math.sin(a1) * 52);
      ctx.lineTo(FW / 2 + Math.cos(a2) * 22, FH / 2 + 40 + Math.sin(a2) * 22);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#FF7A6B";
    ctx.font = '32px "ZCOOL KuaiLe", sans-serif';
    ctx.fillText("点我打开 · 向左翻", FW / 2, FH / 2 + 170);
    ctx.fillStyle = "rgba(241,234,217,0.5)";
    ctx.font = '19px ui-monospace, monospace';
    ctx.fillText("PORTFOLIO · 2026", FW / 2, 90);
    ctx.textAlign = "left";
  }

  function faceBackCover(ctx) {
    const g = ctx.createLinearGradient(0, 0, FW, FH);
    g.addColorStop(0, "#26221C");
    g.addColorStop(1, "#3A342B");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, FW, FH);
    ctx.fillStyle = "#FF7A6B";
    ctx.font = '44px "ZCOOL KuaiLe", sans-serif';
    ctx.textAlign = "center";
    ctx.fillText("感谢翻看 ★", FW / 2, FH / 2);
    ctx.fillStyle = "rgba(241,234,217,0.45)";
    ctx.font = '19px ui-monospace, monospace';
    ctx.fillText("THE END · SEE YOU AT WORK", FW / 2, FH / 2 + 60);
    ctx.textAlign = "left";
  }

  let pdfDoc = null, pdfPageNum = 1, pdfPageCount = 0, pdfPageCanvas = null;
  let pdfBusy = false;
  async function renderPdfPage(n) {
    if (!pdfDoc) return;
    pdfBusy = true;
    const pg = await pdfDoc.getPage(n);
    const base = pg.getViewport({ scale: 1 });
    const cv = document.createElement("canvas");
    const scale = 900 / base.width;
    const vp = pg.getViewport({ scale });
    cv.width = vp.width; cv.height = vp.height;
    await pg.render({ canvasContext: cv.getContext("2d"), viewport: vp }).promise;
    pdfPageCanvas = cv;
    pdfPageNum = n;
    pdfBusy = false;
    redrawFace("s2f");
  }
  // Notebook pages now use uploaded images, so no legacy PDF worker is needed.

  const faces = {};
  function makeTex(key) {
    const cv = makeFaceCanvas();
    const tex = new THREE.CanvasTexture(cv);
    tex.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    if (key === "wall" || key === "doodle") {
      tex.generateMipmaps = false;
      tex.minFilter = THREE.LinearFilter;
    }
    if ("colorSpace" in tex && THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
    else if ("encoding" in tex && THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
    faces[key] = { cv, ctx: cv.getContext("2d"), tex };
    return faces[key];
  }
  const faceKeys = [...new Set([...uploadFaceKeys, "doodle", "wall", "blank"])];
  faceKeys.forEach(makeTex);

  function drawUploadedFace(ctx, key) {
    ctx.clearRect(0, 0, FW, FH);
    ctx.fillStyle = key === "cover" ? "#161413" : PAPER;
    ctx.fillRect(0, 0, FW, FH);
    const image = uploadImages[key];
    if (!image || !image.naturalWidth || !image.naturalHeight) return;
    // 不裁切上传素材：完整放入书页，让内容原样呈现。
    const scale = Math.min(FW / image.naturalWidth, FH / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    ctx.drawImage(image, (FW - width) / 2, (FH - height) / 2, width, height);
  }

  function drawAllFaces() {
    uploadFaceKeys.forEach(key => {
      const f = faces[key];
      drawUploadedFace(f.ctx, key);
      f.tex.needsUpdate = true;
    });

    const blank = faces.blank;
    blank.ctx.fillStyle = PAPER;
    blank.ctx.fillRect(0, 0, FW, FH);
    blank.tex.needsUpdate = true;

    doodleRedraw();

    redrawFace("wall");
  }

  function redrawFace(key) {
    if (uploadFaceKeys.includes(key)) {
      const f = faces[key];
      drawUploadedFace(f.ctx, key);
      f.tex.needsUpdate = true;
    } else if (key === "wall") {
      const f = faces.wall;
      faceWall(f.ctx, false);
      f.tex.needsUpdate = true;
    } else if (key === "doodle") {
      const f = faces.doodle;
      f.tex.needsUpdate = true;
    }
  }


  const strokes = [];
  let doodleColor = RED;
  function doodleRedraw() {
    const f = faces.doodle;
    const ctx = f.ctx;
    faceDoodlePad(ctx);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (const s of strokes) {
      for (let i = 2; i < s.points.length; i += 2) {
        crayonSeg(ctx, s.color, s.points[i - 2], s.points[i - 1], s.points[i], s.points[i + 1]);
      }
    }
    f.tex.needsUpdate = true;
  }
  function crayonSeg(ctx, col, x0, y0, x1, y1) {
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 11;
    ctx.strokeStyle = col;
    ctx.beginPath(); ctx.moveTo(x0 + 1, y0 + 0.7); ctx.lineTo(x1 + 1, y1 + 0.7); ctx.stroke();
    ctx.globalAlpha = 0.92;
    ctx.lineWidth = 7;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.globalAlpha = 1;
  }

  const BOOK_Y = 1.8, BASE_TILT = Math.PI / 2;
  const book = new THREE.Group();
  book.rotation.order = "YXZ";
  book.rotation.x = BASE_TILT;
  book.position.set(-PW / 2, BOOK_Y, 0);
  scene.add(book);

  function stripeTex() {
    const cv = document.createElement("canvas");
    cv.width = 64; cv.height = 64;
    const c = cv.getContext("2d");
    c.fillStyle = "#FFFDF6";
    c.fillRect(0, 0, 64, 64);
    c.fillStyle = "#E0D9C6";
    for (let y = 0; y < 64; y += 3) c.fillRect(0, y, 64, 1);
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  }
  function coverTex() {
    const cv = document.createElement("canvas");
    cv.width = 128; cv.height = 128;
    const c = cv.getContext("2d");
    c.fillStyle = "#2E2A24";
    c.fillRect(0, 0, 128, 128);
    c.fillStyle = "rgba(255,255,255,0.03)";
    for (let i = 0; i < 300; i++) c.fillRect(Math.random() * 128, Math.random() * 128, 2, 2);
    const t = new THREE.CanvasTexture(cv);
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    return t;
  }
  const sideStripes = stripeTex();
  const coverSkin = coverTex();

  const backCover = new THREE.Mesh(
    new THREE.BoxGeometry(PW + 0.14, 0.07, PH + 0.14),
    new THREE.MeshStandardMaterial({ map: coverSkin, roughness: 0.8, metalness: 0.05 })
  );
  backCover.position.set(PW / 2, 0.035, 0);
  backCover.castShadow = true;
  backCover.receiveShadow = true;
  book.add(backCover);

  const blockMats = [
    new THREE.MeshStandardMaterial({ map: sideStripes, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: sideStripes, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ color: 0xFFFDF6, roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ color: 0xEAE3D0, roughness: 0.95 }),
    new THREE.MeshStandardMaterial({ map: sideStripes, roughness: 0.9 }),
    new THREE.MeshStandardMaterial({ map: sideStripes, roughness: 0.9 })
  ];
  const block = new THREE.Mesh(new THREE.BoxGeometry(PW, 0.1, PH), blockMats);
  block.position.set(PW / 2, 0.07 + 0.05, 0);
  block.castShadow = true;
  block.receiveShadow = true;
  book.add(block);
  const blockTop = 0.07 + 0.1;

  const ringMat = new THREE.MeshStandardMaterial({ color: 0xC9C2B2, roughness: 0.35, metalness: 0.85 });
  const ringGeo = new THREE.TorusGeometry(0.1, 0.016, 8, 24, Math.PI);
  for (let z = -PH / 2 + 0.28; z < PH / 2; z += 0.42) {
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(0, 0.11, z);
    ring.scale.y = 1.95;
    ring.castShadow = true;
    book.add(ring);
  }

  const sheets = [];
  const SHEET_EPS = 0.008;
  function flipUvs(geo) {
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i));
  }

  const COVER_T = 0.055;
  for (let k = 0; k < faceOfSheet.length; k++) {
    const pivot = new THREE.Group();
    const [fKey, bKey] = faceOfSheet[k];
    if (k === 0) {
      const geo = new THREE.BoxGeometry(PW, COVER_T, PH, 22, 1, 2);
      geo.translate(PW / 2, 0, 0);
      const orig = geo.attributes.position.array.slice();
      const edgeMat = new THREE.MeshStandardMaterial({ color: 0x2A251E, roughness: 0.75 });
      const mesh = new THREE.Mesh(geo, [
        edgeMat, edgeMat,
        new THREE.MeshStandardMaterial({ map: faces[fKey].tex, roughness: 0.88 }),
        edgeMat, edgeMat, edgeMat
      ]);
      mesh.castShadow = true;
      pivot.add(mesh);
      const innerGeo = new THREE.PlaneGeometry(PW, PH, 26, 2);
      innerGeo.rotateX(-Math.PI / 2);
      innerGeo.translate(PW / 2, -COVER_T / 2 - 0.003, 0);
      flipUvs(innerGeo);
      const origB = innerGeo.attributes.position.array.slice();
      const innerMesh = new THREE.Mesh(innerGeo, new THREE.MeshStandardMaterial({
        map: faces[bKey].tex, roughness: 0.92, side: THREE.BackSide
      }));
      pivot.add(innerMesh);
      book.add(pivot);
      sheets.push({ pivot, geo, orig, geoB: innerGeo, origB, meshes: [mesh, innerMesh], angle: 0, flipped: false, idx: k, rigid: true });
      continue;
    }
    const geo = new THREE.PlaneGeometry(PW, PH, 26, 2);
    geo.rotateX(-Math.PI / 2);
    geo.translate(PW / 2, 0, 0);
    const orig = geo.attributes.position.array.slice();
    const backGeo = geo.clone();
    flipUvs(backGeo);
    const origB = backGeo.attributes.position.array.slice();
    const frontMesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      map: faces[fKey].tex, roughness: 0.92, side: THREE.FrontSide
    }));
    frontMesh.castShadow = true;
    const backMesh = new THREE.Mesh(backGeo, new THREE.MeshStandardMaterial({
      map: faces[bKey].tex, roughness: 0.92, side: THREE.BackSide
    }));
    pivot.add(frontMesh);
    pivot.add(backMesh);
    book.add(pivot);
    sheets.push({ pivot, geo, orig, geoB: backGeo, origB, meshes: [frontMesh, backMesh], frontMesh, backMesh, angle: 0, flipped: false, idx: k });
  }

  const tabMeshes = [];
  // Ticket-shaped paper tabs have an alpha silhouette, not a rectangular backing.
  function tabTexture(def, active, index) {
    const cv = document.createElement("canvas");
    cv.width = 384; cv.height = 216;
    const c = cv.getContext("2d");
    const shape = index % 4;
    c.clearRect(0, 0, 384, 216);
    c.beginPath();
    if (shape === 0) {
      c.moveTo(30, 12); c.lineTo(354, 12); c.quadraticCurveTo(352, 30, 372, 34);
      c.lineTo(372, 182); c.quadraticCurveTo(352, 184, 354, 204);
      c.lineTo(30, 204); c.quadraticCurveTo(32, 184, 12, 182);
      c.lineTo(12, 34); c.quadraticCurveTo(32, 30, 30, 12);
    } else if (shape === 1) {
      c.moveTo(28, 12); c.lineTo(356, 12);
      for (let y = 12; y < 204; y += 24) c.quadraticCurveTo(339, y + 12, 356, y + 24);
      c.lineTo(28, 204);
      for (let y = 204; y > 12; y -= 24) c.quadraticCurveTo(45, y - 12, 28, y - 24);
    } else if (shape === 2) {
      c.moveTo(36, 12); c.lineTo(348, 12); c.lineTo(372, 36); c.lineTo(372, 180);
      c.lineTo(348, 204); c.lineTo(36, 204); c.lineTo(12, 180); c.lineTo(12, 36);
    } else {
      c.moveTo(20, 12); c.lineTo(364, 12); c.lineTo(364, 76);
      c.bezierCurveTo(327, 78, 327, 138, 364, 140); c.lineTo(364, 204);
      c.lineTo(20, 204); c.lineTo(20, 140); c.bezierCurveTo(57, 138, 57, 78, 20, 76);
    }
    c.closePath();
    c.save(); c.clip();
    const base = new THREE.Color(def.color).lerp(new THREE.Color("#f8efd8"), active ? 0.02 : 0.24);
    c.fillStyle = base.getStyle(); c.fillRect(0, 0, 384, 216);
    let seed = 147 + index;
    const random = () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; };
    for (let k = 0; k < 1400; k++) {
      c.fillStyle = k % 2 ? "rgba(255,253,238,0.13)" : "rgba(110,82,53,0.045)";
      c.fillRect(random() * 384, random() * 216, 1 + random() * 2, 1 + random() * 2);
    }
    c.restore();
    // Tiny perforations and ink strokes echo the reference's old paper tickets.
    c.strokeStyle = "rgba(110,89,64,0.3)"; c.lineWidth = 1.3; c.setLineDash([3, 6]);
    c.beginPath(); c.moveTo(66, 32); c.lineTo(66, 184); c.stroke(); c.setLineDash([]);
    c.fillStyle = "rgba(110,89,64,0.4)";
    [0, 6, 14, 19, 25].forEach((x, i) => c.fillRect(82 + x, 164, i % 2 ? 2 : 3, 17));
    c.fillStyle = tabInk;
    const letters = Array.from(def.name);
    const fontSize = letters.length > 6 ? 48 : 66;
    const lines = letters.length > 6
      ? [letters.slice(0, Math.ceil(letters.length / 2)).join(""), letters.slice(Math.ceil(letters.length / 2)).join("")]
      : [def.name];
    c.font = '700 ' + fontSize + 'px "ZCOOL KuaiLe", sans-serif';
    c.textAlign = "center"; c.textBaseline = "middle";
    c.strokeStyle = tabInk; c.lineWidth = 0.9; c.lineJoin = "round";
    lines.forEach((line, lineIndex) => {
      const y = lines.length === 1 ? 106 : 82 + lineIndex * 60;
      c.strokeText(line, 234, y, 244);
      c.fillText(line, 234, y, 244);
    });
    cv.dataset.labelFontSize = String(fontSize);
    cv.dataset.labelWeight = "700";
    cv.dataset.labelTextColor = tabInk;
    const t = new THREE.CanvasTexture(cv);
    t.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
    if ("colorSpace" in t && THREE.SRGBColorSpace) t.colorSpace = THREE.SRGBColorSpace;
    else if ("encoding" in t && THREE.sRGBEncoding) t.encoding = THREE.sRGBEncoding;
    return t;
  }
  const tabCount = Math.max(TAB_DEFS.length, 1);
  const tabBandHeight = PH / 2 - 0.1;
  const tabHeight = Math.min(0.30, (tabBandHeight - 0.035 * (tabCount - 1)) / tabCount);
  const tabWidth = tabHeight * (384 / 216);
  const tabStep = tabCount > 1 ? (tabBandHeight - tabHeight) / (tabCount - 1) : 0;
  TAB_DEFS.forEach((def, i) => {
    const g = new THREE.Group();
    const label = new THREE.Mesh(
      new THREE.PlaneGeometry(tabWidth, tabHeight),
      new THREE.MeshBasicMaterial({ toneMapped: false, transparent: true, alphaTest: 0.06, depthWrite: false, side: THREE.DoubleSide })
    );
    label.rotation.x = -Math.PI / 2;
    label.position.y = 0.02;
    g.add(label);
    g.position.set(PW + tabWidth * 0.32, 0.128, -PH / 2 + 0.1 + tabHeight / 2 + i * tabStep);
    book.add(g);
    tabMeshes.push({ g, label, def, index: i, z: g.position.z, texN: null, texA: null });
  });
  function tabIndexAt(z) {
    let closest = -1, distance = Infinity;
    for (let i = 0; i < tabMeshes.length; i++) {
      const delta = Math.abs(z - tabMeshes[i].z);
      if (delta < distance) { closest = i; distance = delta; }
    }
    const tolerance = Math.max(tabHeight * 0.6, tabStep * 0.48);
    return distance <= tolerance ? closest : -1;
  }
  function redrawTabs() {
    tabMeshes.forEach(t => {
      if (t.texN) t.texN.dispose();
      if (t.texA) t.texA.dispose();
      t.texN = tabTexture(t.def, false, t.index);
      t.texA = tabTexture(t.def, true, t.index);
    });
    syncTabs();
  }


  let turningSheet = null;
  function setSheetLayer(sheet, order, forceTop) {
    if (!sheet || !sheet.meshes) return;
    sheet.meshes.forEach(mesh => {
      mesh.renderOrder = order;
      mesh.material.depthTest = !forceTop;
      mesh.material.depthWrite = !forceTop;
    });
  }
  function syncSheetLayers() {
    sheets.forEach((sheet, index) => setSheetLayer(sheet, index + 1, false));
    setSheetLayer(leftTopSheet(), 100, true);
    setSheetLayer(rightTopSheet(), 110, true);
    setSheetLayer(turningSheet, 120, true);
  }
  function stackYs() {
    for (let k = 0; k < faceOfSheet.length; k++) {
      const s = sheets[k];
      if (s.flipped) {
        s.pivot.position.y = k === 0 ? blockTop + 0.02 + COVER_T / 2 : blockTop + 0.02 + COVER_T + 0.003 + k * SHEET_EPS;
      } else {
        s.pivot.position.y = blockTop + 0.012 + (faceOfSheet.length - 1 - k) * SHEET_EPS + (k === 0 ? COVER_T / 2 + 0.004 : 0);
      }
    }
    syncSheetLayers();
    syncBookX();
  }
  function syncBookX(dur) {
    const target = flippedCount === 0 ? -PW / 2 : 0;
    if (typeof gsap !== "undefined") {
      gsap.to(book.position, { x: target, duration: dur || 0.7, ease: "power2.inOut", overwrite: "auto" });
    } else {
      book.position.x = target;
    }
  }

  function bendGeo(sheet, theta) {
    bendGeoOne(sheet.geo, sheet.orig, theta);
    if (sheet.geoB) bendGeoOne(sheet.geoB, sheet.origB, theta);
    syncSheetLayers();
  }
  function bendGeoOne(geo, orig, theta) {
    const pos = geo.attributes.position;
    const curl = Math.sin(Math.min(Math.max(theta, 0), Math.PI));
    const sinT = Math.sin(theta);
    for (let i = 0; i < pos.count; i++) {
      const ox = orig[i * 3], oy = orig[i * 3 + 1], oz = orig[i * 3 + 2];
      const d = ox / PW;
      const a = theta * (1 - 0.55 * d * curl);
      const lift = sinT * 0.1 * Math.sin(d * Math.PI) * PW * 0.35;
      pos.setXYZ(i, Math.cos(a) * ox - Math.sin(a) * oy, Math.sin(a) * ox + Math.cos(a) * oy + lift * d, oz);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  }

  let flippedCount = 0;
  let flipping = false;

  function rightTopSheet() { return flippedCount < sheets.length - 1 ? sheets[flippedCount] : null; }
  function leftTopSheet() { return flippedCount > 0 ? sheets[flippedCount - 1] : null; }

  function animateSheet(sheet, toAngle, dur, done) {
    flipping = true;
    turningSheet = sheet;
    const proxy = { t: sheet.angle };
    gsap.to(proxy, {
      t: toAngle,
      duration: dur,
      ease: "power2.inOut",
      onStart: () => { if (typeof sfx === "function") sfx("page"); },
      onUpdate: () => { sheet.angle = proxy.t; bendGeo(sheet, proxy.t); },
      onComplete: () => {
        sheet.angle = toAngle;
        bendGeo(sheet, toAngle);
        flipping = false;
        turningSheet = null;
        syncSheetLayers();
        camZoom(false);
        if (done) done();
      }
    });
  }

  function flipNext() {
    // 涂鸦贴纸墙是笔记本的最后一跨，不能翻进空白尾页。
    if (contextLost || flipping || wallState.crumple || flippedCount >= DOODLE_FLIP_COUNT) return;
    const s = rightTopSheet();
    if (!s) return;
    camZoom(true);
    syncBookX(1.1);
    s.flipped = true;
    flippedCount++;
    s.pivot.position.y = blockTop + (s.idx === 0 ? 0.12 : 0.08);
    animateSheet(s, Math.PI, flippedCount === 0 ? 1.25 : 0.9, () => { stackYs(flippedCount); syncTabs(); });
  }
  function flipPrev() {
    if (contextLost || flipping || wallState.crumple) return;
    const s = leftTopSheet();
    if (!s) return;
    camZoom(true);
    syncBookX(1.1);
    s.flipped = false;
    flippedCount--;
    s.pivot.position.y = blockTop + (s.idx === 0 ? 0.12 : 0.08);
    animateSheet(s, 0, 0.9, () => { stackYs(flippedCount); syncTabs(); });
  }
  function flipTo(flipCount) {
    if (flipping) return;
    const target = Math.max(0, Math.min(DOODLE_FLIP_COUNT, flipCount));
    if (target === flippedCount) return;
    const step = () => {
      if (flippedCount < target) { flipNext(); setTimeout(step, 120); }
      else if (flippedCount > target) { flipPrev(); setTimeout(step, 120); }
    };
    step();
  }

  function syncTabs() {
    const visiblePage = Math.max(0, Math.min(uploadedPages.length - 1, flippedCount * 2 - 1));
    let idx = TAB_DEFS.findIndex(tab => tab.isDoodle);
    if (flippedCount < DOODLE_FLIP_COUNT) {
      idx = 0;
      TAB_DEFS.forEach((tab, index) => { if (!tab.isDoodle && tab.start <= visiblePage) idx = index; });
    }
    tabMeshes.forEach((t, bi) => {
      const tex = (bi === idx && flippedCount >= 1) ? t.texA : t.texN;
      if (tex && t.label.material.map !== tex) { t.label.material.map = tex; t.label.material.needsUpdate = true; }
    });
    const nb = document.getElementById("notebook");
    if (nb) nb.classList.toggle("opened", flippedCount >= 1);
    window.dispatchEvent(new Event("book-layout"));
  }

  addEventListener("keydown", e => {
    if (document.body.classList.contains("cinema-open") || document.body.classList.contains("pc-open")) return;
    const r = wrap.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") flipNext();
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") flipPrev();
  });

  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const _inv = new THREE.Matrix4();
  const _pt = new THREE.Vector3();
  function pickPoint(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    let topY = blockTop;
    const rt = rightTopSheet(), lt = leftTopSheet();
    if (rt) topY = Math.max(topY, rt.pivot.position.y);
    if (lt) topY = Math.max(topY, lt.pivot.position.y);
    book.updateMatrixWorld();
    _inv.copy(book.matrixWorld).invert();
    const localRay = raycaster.ray.clone().applyMatrix4(_inv);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), -topY - 0.01);
    const hit = localRay.intersectPlane(plane, _pt);
    if (!hit) return null;
    if (_pt.x > PW + 0.76 || _pt.x < -PW - 0.06 || Math.abs(_pt.z) > PH / 2 + 0.06) return null;
    return _pt;
  }

  let dragSheet = null, dragDir = 0, dragStartX = 0, dragMoved = false, dragFlipSoundPlayed = false, drawStroke = null;

  function padXY(pt) {
    return [(pt.x + PW) / PW * FW, (pt.z + PH / 2) / PH * FH];
  }
  function wallXY(pt) {
    return [pt.x / PW * FW, (pt.z + PH / 2) / PH * FH];
  }
  function overTrash(wx, wy) {
    return wx > TRASH.x - 16 && wx < TRASH.x + TRASH.w + 16 && wy > TRASH.y - 24 && wy < TRASH.y + TRASH.h + 12;
  }

  function drawSegTo(x, y) {
    x = Math.min(PAD.x1, Math.max(PAD.x0, x));
    y = Math.min(PAD.y1, Math.max(PAD.y0, y));
    const pts = drawStroke.points;
    const f = faces.doodle;
    crayonSeg(f.ctx, doodleColor, pts[pts.length - 2], pts[pts.length - 1], x, y);
    f.tex.needsUpdate = true;
    pts.push(x, y);
  }

  canvas.addEventListener("pointerdown", e => {
    e.preventDefault();
    
    if (contextLost || flipping || wallState.crumple) return;
    const pt = pickPoint(e);

    if (!pt) return;

    if (pt.x > PW + 0.04) {
      const ti = tabIndexAt(pt.z);
      if (ti >= 0) {
        flipTo(tabMeshes[ti].def.flipCount);
        if (typeof sfx === "function") sfx("click");
      }
      return;
    }

    if (flippedCount === DOODLE_FLIP_COUNT && pt.x < 0) {
      const [px0, py0] = padXY(pt);
      for (let i = 0; i < DOODLE_COLORS.length; i++) {
        const ddx = px0 - (COLOR_X0 + i * COLOR_DX), ddy = py0 - COLOR_Y;
        if (ddx * ddx + ddy * ddy <= 28 * 28) {
          doodleColor = DOODLE_COLORS[i];
          window.__pencilColor = doodleColor;
          doodleRedraw();
          if (typeof sfx === "function") sfx("click");
          return;
        }
      }
      let btnHit = false;
      for (const b of DOODLE_BTNS) {
        if (px0 >= b.x0 && px0 <= b.x1 && py0 >= b.y0 && py0 <= b.y1) { btnHit = true; doodleAction(b.id); break; }
      }
      if (btnHit) return;
      if (px0 >= PAD.x0 && px0 <= PAD.x1 && py0 >= PAD.y0 && py0 <= PAD.y1) {
        drawStroke = { color: doodleColor, points: [] };
        window.__pencilDown = true;
        drawStroke.points.push(px0, py0);
        const c0 = faces.doodle.ctx;
        crayonSeg(c0, doodleColor, px0, py0, px0 + 0.1, py0 + 0.1);
        faces.doodle.tex.needsUpdate = true;
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
        return;
      }
    }

    if (flippedCount === DOODLE_FLIP_COUNT && pt.x > 0) {
      if (wallState.crumple) return;
      const [wx, wy] = wallXY(pt);
      for (let i = wallLayout.length - 1; i >= 0; i--) {
        const L = wallLayout[i];
        if (!L || !wallImages[i]) continue;
        if (wallOnline && !wallImages[i].mine) continue;
        if (Math.abs(wx - L.cx) <= L.w / 2 && Math.abs(wy - L.cy) <= L.h / 2) {
          wallState.dragIdx = i;
          wallState.dx = wx - L.cx;
          wallState.dy = wy - L.cy;
          wallState.px = L.cx;
          wallState.py = L.cy;
          grabWallPaper(i);
          try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
          if (typeof sfx === "function") sfx("click");
          return;
        }
      }
    }

    const rt = rightTopSheet(), lt = leftTopSheet();
    if (pt.x > 0 && rt && flippedCount < DOODLE_FLIP_COUNT) {
      dragSheet = rt; dragDir = 1;
    } else if (pt.x < 0 && lt) {
      dragSheet = lt; dragDir = -1;
    } else return;
    turningSheet = dragSheet;
    dragStartX = e.clientX;
    dragMoved = false;
    dragFlipSoundPlayed = false;
    camZoom(true);
    syncBookX(1.1);
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
  });

  canvas.addEventListener("pointermove", e => {
    if (wallState.dragIdx >= 0) {
      const pt = pickPoint(e);
      if (pt) {
        const [wx, wy] = wallXY(pt);
        wallState.px = Math.min(FW - 30, Math.max(30, wx - wallState.dx));
        wallState.py = Math.min(FH - 30, Math.max(30, wy - wallState.dy));
        if (wallState.crumple) {
          wallState.crumple.x0 = wallState.px;
          wallState.crumple.y0 = wallState.py;
        }
        const target = overTrash(wx, wy) ? 1.16 : 1;
        wallState.trashScale += (target - wallState.trashScale) * 0.35;
        redrawFace("wall");
      }
      return;
    }
    if (drawStroke) {
      window.__pencilZone = true;
      window.__pencilColor = doodleColor;
      const pt = pickPoint(e);
      if (pt && pt.x < 0.06) {
        const [x, y] = padXY(pt);
        drawSegTo(x, y);
      }
      return;
    }
    if (!dragSheet) {
      let pencil = false;
      if (flippedCount === DOODLE_FLIP_COUNT) {
        const pt = pickPoint(e);
        if (pt && pt.x < 0) {
          const [hx, hy] = padXY(pt);
          if (hx >= PAD.x0 && hx <= PAD.x1 && hy >= PAD.y0 && hy <= PAD.y1) pencil = true;
        }
      }
      window.__pencilZone = pencil;
      window.__pencilColor = doodleColor;
      return;
    }
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > 4) dragMoved = true;
    const w = wrap.getBoundingClientRect().width;
    if (dragDir === 1) {
      dragSheet.angle = Math.min(Math.PI, Math.max(0, -dx / (w * 0.32) * Math.PI));
    } else {
      dragSheet.angle = Math.max(0, Math.min(Math.PI, Math.PI - dx / (w * 0.32) * Math.PI));
    }
    bendGeo(dragSheet, dragSheet.angle);
    if (!dragFlipSoundPlayed && dragMoved) {
      dragFlipSoundPlayed = true;
      if (typeof sfx === "function") sfx("page");
    }
  });

  canvas.addEventListener("pointerleave", () => { window.__pencilZone = false; window.__pencilDown = false; });

  canvas.addEventListener("pointerup", e => {
    if (wallState.dragIdx >= 0) {
      const i = wallState.dragIdx;
      wallState.dragIdx = -1;
      const pt = pickPoint(e);
      const [wx, wy] = pt ? wallXY(pt) : [-999, -999];
      if (overTrash(wx, wy)) {
        releaseWallPaper(true);
        gsap.fromTo(wallState, { trashScale: 1.22 }, { trashScale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", onUpdate: () => redrawFace("wall") });
      } else {
        releaseWallPaper(false);
        wallState.trashScale = 1;
        redrawFace("wall");
      }
      return;
    }
    window.__pencilZone = false;
    window.__pencilDown = false;
    if (drawStroke) {
      strokes.push(drawStroke);
      drawStroke = null;
      return;
    }
    if (!dragSheet) return;
    const s = dragSheet;
    dragSheet = null;
    turningSheet = null;
    syncSheetLayers();
    camZoom(false);
    if (!dragMoved) {
      if (flippedCount === 0 && dragDir === 1) { flipNext(); return; }
      bendGeo(s, s.angle);
      return;
    }
    if (dragDir === 1) {
      if (s.angle > Math.PI * 0.4) {
        flipping = true;
        turningSheet = s;
        s.flipped = true;
        flippedCount++;
        const proxy = { t: s.angle };
        if (!dragFlipSoundPlayed && typeof sfx === "function") sfx("page");
        gsap.to(proxy, {
          t: Math.PI, duration: 0.55, ease: "power2.out",
          onUpdate: () => { s.angle = proxy.t; bendGeo(s, proxy.t); },
          onComplete: () => { s.angle = Math.PI; bendGeo(s, Math.PI); flipping = false; turningSheet = null; stackYs(flippedCount); syncTabs(); }
        });
      } else {
        const proxy = { t: s.angle };
        gsap.to(proxy, {
          t: 0, duration: 0.6, ease: "elastic.out(1, 0.55)",
          onUpdate: () => { s.angle = proxy.t; bendGeo(s, proxy.t); },
          onComplete: () => { s.angle = 0; bendGeo(s, 0); turningSheet = null; syncSheetLayers(); }
        });
      }
    } else {
      if (s.angle < Math.PI * 0.6) {
        flipping = true;
        turningSheet = s;
        s.flipped = false;
        flippedCount--;
        const proxy = { t: s.angle };
        if (!dragFlipSoundPlayed && typeof sfx === "function") sfx("page");
        gsap.to(proxy, {
          t: 0, duration: 0.55, ease: "power2.out",
          onUpdate: () => { s.angle = proxy.t; bendGeo(s, proxy.t); },
          onComplete: () => { s.angle = 0; bendGeo(s, 0); flipping = false; turningSheet = null; stackYs(flippedCount); syncTabs(); }
        });
      } else {
        const proxy = { t: s.angle };
        gsap.to(proxy, {
          t: Math.PI, duration: 0.6, ease: "elastic.out(1, 0.55)",
          onUpdate: () => { s.angle = proxy.t; bendGeo(s, proxy.t); },
          onComplete: () => { s.angle = Math.PI; bendGeo(s, Math.PI); turningSheet = null; syncSheetLayers(); }
        });
      }
    }
  });

  function cancelWallGrab() {
    if (wallState.dragIdx < 0) return;
    wallState.dragIdx = -1;
    wallState.trashScale = 1;
    releaseWallPaper(false);
  }
  canvas.addEventListener("pointercancel", cancelWallGrab);
  canvas.addEventListener("lostpointercapture", cancelWallGrab);
  window.addEventListener("blur", cancelWallGrab);

  function doodleAction(id) {
    if (id === "undo") { strokes.pop(); doodleRedraw(); if (typeof sfx === "function") sfx("click"); }
    else if (id === "clear") { strokes.length = 0; doodleRedraw(); if (typeof sfx === "function") sfx("click"); }
    else if (id === "save") { saveDoodle(); }
  }
  function saveDoodle() {
    const f = faces.doodle;
    const out = document.createElement("canvas");
    const pw = PAD.x1 - PAD.x0, ph = PAD.y1 - PAD.y0;
    const sc = Math.min(1, 360 / pw);
    out.width = Math.round(pw * sc); out.height = Math.round(ph * sc);
    const octx = out.getContext("2d");
    octx.fillStyle = PAPER;
    octx.fillRect(0, 0, out.width, out.height);
    octx.drawImage(f.cv, PAD.x0, PAD.y0, pw, ph, 0, 0, out.width, out.height);
    const item = {
      img: out.toDataURL("image/png"),
      ts: Date.now(),
      rot: +(Math.random() * 5 - 2.5).toFixed(1),
      dx: +(Math.random() * 10 - 5).toFixed(0),
      dy: +(Math.random() * 14).toFixed(0)
    };
    const arr = loadWallCache();
    arr.unshift(item);
    saveWallCache(arr);
    if (!wallOnline) setWallItems(arr);
    strokes.length = 0;
    doodleRedraw();
    redrawFace("wall");
    if (typeof sfx === "function") sfx("open");
    if (wallOnline) {
      postWall({ op: "add", img: item.img, rot: item.rot, dx: item.dx, dy: item.dy }).then(d => {
        if (!d || !Array.isArray(d.items)) return;
        if (d.id) { const mine = loadMineIds(); if (!mine.includes(d.id)) { mine.unshift(d.id); saveMineIds(mine); } }
        setWallItems(d.items);
        saveWallCache(d.items);
      });
    }
  }

  let mx = 0, my = 0, camRX = 0, camRY = 0;
  const camState = { z: 5.1, ly: 1.8 };
  function camZoom(out) {
    if (typeof gsap === "undefined") { camState.z = out ? baseZ * 1.12 : baseZ; camState.ly = out ? 1.66 : 1.8; return; }
    gsap.to(camState, { z: out ? baseZ * 1.12 : baseZ, ly: out ? 1.66 : 1.8, duration: 0.45, ease: "power2.out", overwrite: "auto" });
  }
  addEventListener("pointermove", e => {
    mx = (e.clientX / innerWidth - 0.5) * 2;
    my = (e.clientY / innerHeight - 0.5) * 2;
  });

  let baseZ = 5.1;
  function resize() {
    const w = Math.max(1, wrap.clientWidth), h = Math.max(1, wrap.clientHeight);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.25, Math.sqrt(1200000 / (w * h))));
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
    const viewHalf = Math.tan(halfFov);
    const fitHeight = (PH * 1.28) / (2 * viewHalf);
    const fitWidth = ((PW * 2 + 0.72) * 1.18) / (2 * viewHalf * camera.aspect);
    baseZ = Math.max(5.55, fitHeight, fitWidth);
    if (!flipping && !dragSheet) camState.z = baseZ;
  }
  addEventListener("resize", resize);
  new ResizeObserver(resize).observe(wrap);
  resize();

  const clock = new THREE.Clock();
  let visible = true;
  new IntersectionObserver(en => { visible = en[0].isIntersecting; }).observe(wrap);

  let lastFrame = performance.now();
  let lastRender = 0;
  // Project the visible book into page coordinates so decorations stay outside it.
  window.getPortfolioBookRect = () => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    book.updateMatrixWorld(true);
    camera.updateMatrixWorld(true);
    const minX = flippedCount > 0 ? -PW : 0;
    const points = [];
    [minX, PW + tabWidth].forEach(x => [-PH / 2, PH / 2].forEach(z => {
      const p = new THREE.Vector3(x, blockTop + .08, z).applyMatrix4(book.matrixWorld).project(camera);
      points.push({ x: rect.left + (p.x + 1) * rect.width / 2, y: rect.top + (1 - p.y) * rect.height / 2 });
    }));
    return { left: Math.min(...points.map(p => p.x)), right: Math.max(...points.map(p => p.x)), top: Math.min(...points.map(p => p.y)), bottom: Math.max(...points.map(p => p.y)) };
  };
  canvas.addEventListener("webglcontextlost", event => {
    event.preventDefault();
    contextLost = true;
    cancelWallGrab();
    showRecovery("笔记本正在恢复显示…");
    clearTimeout(recoveryTimer);
    recoveryTimer = setTimeout(() => { retry.hidden = false; recoveryText.textContent = "显示暂时中断，可以重新载入恢复。"; }, 8000);
  });
  canvas.addEventListener("webglcontextrestored", () => {
    contextLost = false;
    clearTimeout(recoveryTimer);
    retry.hidden = true;
    drawAllFaces();
    scene.traverse(object => {
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.filter(Boolean).forEach(material => {
        if (material.map) material.map.needsUpdate = true;
        material.needsUpdate = true;
      });
    });
    resize();
    lastFrame = performance.now();
    lastRender = 0;
  });
  function loop(now = performance.now()) {
    requestAnimationFrame(loop);
    if (!visible || document.hidden || contextLost) return;
    const active = flipping || dragSheet || drawStroke || wallState.crumple;
    if (now - lastRender < (active ? 16 : 33)) return;
    lastRender = now;
    const delta = Math.min(0.05, Math.max(0.001, (now - lastFrame) / 1000));
    lastFrame = now;
    const t = clock.getElapsedTime();
    // 按真实帧间隔做阻尼，避免不同电脑刷新率下拖动与视角晃动忽快忽慢。
    const damping = 1 - Math.exp(-8 * delta);
    camRY += ((mx * 0.09) - camRY) * damping;
    camRX += ((my * 0.04) - camRX) * damping;
    book.rotation.y = camRY + Math.sin(t * 0.4) * 0.012;
    book.rotation.x = BASE_TILT + camRX * 0.35;
    book.position.y = BOOK_Y + Math.sin(t * 0.8) * 0.03;
    camera.position.z = camState.z;
    camera.lookAt(0, camState.ly, 0);
    renderer.render(scene, camera);
    if (recovery.hidden === false) recovery.hidden = true;
    wrap.dataset.renderState = "ready";
  }


  redrawTabs();
  stackYs(0);
  syncTabs();
  const boot = () => {
    drawAllFaces();
    // Refresh label textures once the actual hand-drawn font has loaded.
    redrawTabs();
  
    loadWall();
    syncWall();
    redrawFace("wall");
  };
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => Promise.all([...imgLoaders, ...uploadImageLoaders]).then(boot));
  } else {
    Promise.all([...imgLoaders, ...uploadImageLoaders]).then(boot);
  }
  requestAnimationFrame(loop);
  };
  if (window.PAGE_DATA_READY) { window.PAGE_DATA_READY.then(bootBook); } else { bootBook(); }
})();
