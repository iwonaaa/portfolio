"use strict";
(function () {
  const bootBook = () => {
  if (typeof THREE === "undefined") return;
  const wrap = document.getElementById("book3d-wrap");
  const canvas = document.getElementById("book3d");
  if (!wrap || !canvas) return;

  const DATA = window.PAGE_DATA || { site: {}, works: [], postcards: [] };
  const RED = "#E6392B", INK = "#221D15", SOFT = "#5C5343", PAPER = "#FFFDF6";

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
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
  sun.shadow.mapSize.set(2048, 2048);
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
  const loadWallCache = () => { try { return JSON.parse(localStorage.getItem("pf_doodles") || "[]"); } catch (e) { return []; } };
  const saveWallCache = arr => { try { localStorage.setItem("pf_doodles", JSON.stringify(arr.slice(0, 12))); } catch (e) {} };
  const loadMineIds = () => { try { return JSON.parse(localStorage.getItem("pf_doodle_mine") || "[]"); } catch (e) { return []; } };
  const saveMineIds = ids => { try { localStorage.setItem("pf_doodle_mine", JSON.stringify(ids.slice(0, 30))); } catch (e) {} };
  function setWallItems(arr) {
    const mineIds = wallOnline ? loadMineIds() : null;
    wallImages.length = 0;
    arr.slice(0, 12).forEach(d => {
      const img = new Image();
      img.onload = () => redrawFace("s3r");
      img.src = d.img;
      wallImages.push({ img, rot: d.rot ?? 0, id: d.id || null, mine: wallOnline ? !!(d.id && mineIds.includes(d.id)) : true });
    });
    redrawFace("s3r");
  }
  function loadWall() { setWallItems(loadWallCache()); }
  async function syncWall() {
    try {
      const r = await fetch(WALL_API);
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
      const r = await fetch(WALL_API, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
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
    if (wallState.dragIdx >= 0) {
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
      ctx.rotate(t * 5.2);
      ctx.globalAlpha = Math.max(0, 1 - Math.max(0, t - 0.68) / 0.32);
      if (t < 0.45 && cp.img) {
        const sc = 1 - t;
        ctx.scale(sc, sc);
        ctx.fillStyle = "#fff";
        ctx.fillRect(-85, -56, 170, 112);
        ctx.drawImage(cp.img, -85, -56, 170, 112);
      } else {
        const rr = Math.max(8, 36 * (1 - t * 0.6));
        ctx.fillStyle = "#F3ECDA";
        ctx.strokeStyle = "rgba(34,29,21,0.55)";
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(0, 0, rr, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
        ctx.lineWidth = 2;
        for (let k = 0; k < 5; k++) {
          ctx.beginPath();
          ctx.arc(Math.cos(k * 2.2) * rr * 0.28, Math.sin(k * 1.8) * rr * 0.28, rr * (0.35 + 0.09 * k), k, k + 3.4);
          ctx.stroke();
        }
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
      redrawFace("s3r");
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
  if (typeof pdfjsLib !== "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdf.worker.min.js";
    pdfjsLib.getDocument("assets/portfolio.pdf").promise.then(doc => {
      pdfDoc = doc;
      pdfPageCount = doc.numPages;
      renderPdfPage(1);
    }).catch(() => {});
  }

  const faces = {};
  function makeTex(key) {
    const cv = makeFaceCanvas();
    const tex = new THREE.CanvasTexture(cv);
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    if ("colorSpace" in tex && THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
    else if ("encoding" in tex && THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
    faces[key] = { cv, ctx: cv.getContext("2d"), tex };
    return faces[key];
  }
  const faceKeys = ["cover", "s0l", "s0r", "s1l", "s1r", "s2l", "s2f", "s3l", "s3r", "s3b", "end", "endb"];
  faceKeys.forEach(makeTex);

  const works = DATA.works || [];
  const aeWorks = works.filter(w => w.cat === "动效");
  const ipWorks = works.filter(w => w.cat === "动画");

  function drawAllFaces() {
    let f = faces.cover; faceCover(f.ctx); f.tex.needsUpdate = true;

    f = faces.s0l;
    gridBg(f.ctx, true);
    faceTitle(f.ctx, "AE 动画", "MOTION WORKS");
    faceWorksList(f.ctx, aeWorks);
    f.tex.needsUpdate = true;

    f = faces.s0r;
    gridBg(f.ctx, false);
    faceTitle(f.ctx, "代表作品", "SELECTED · MOTION");
    faceMinis(f.ctx, aeWorks);
    f.tex.needsUpdate = true;

    f = faces.s1l;
    gridBg(f.ctx, true);
    faceTitle(f.ctx, "角色 IP", "CHARACTER");
    faceWorksList(f.ctx, ipWorks);
    f.tex.needsUpdate = true;

    f = faces.s1r;
    gridBg(f.ctx, false);
    faceTitle(f.ctx, "代表作品", "SELECTED · CHARACTER");
    faceMinis(f.ctx, ipWorks);
    f.tex.needsUpdate = true;

    f = faces.s2l;
    gridBg(f.ctx, true);
    faceTitle(f.ctx, "毕业设计", "THESIS");
    faceNote(f.ctx, ["整册作品集 PDF 装订在右页。", "点击右页即可翻页。", "往下滑到作品放映厅还能", "看单支作品的详情和评论。"], 260);
    f.tex.needsUpdate = true;

    redrawFace("s2f");

    f = faces.s3l;
    doodleRedraw();
    f.tex.needsUpdate = true;

    redrawFace("s3r");

    f = faces.s3b;
    gridBg(f.ctx, true);
    faceTitle(f.ctx, "写在最后", "ONE LAST THING");
    faceNote(f.ctx, ["贴纸墙可以先玩起来，", "画一张贴在墙上送给我。", "联系方式在网页最底部，", "欢迎来聊创意、聊工作。"], 300);
    f.tex.needsUpdate = true;

    f = faces.end;
    faceBackCover(f.ctx);
    f.tex.needsUpdate = true;

    f = faces.endb;
    faceBackCover(f.ctx);
    f.tex.needsUpdate = true;
  }

  function redrawFace(key) {
    if (key === "s2f") {
      const f = faces.s2f;
      facePdf(f.ctx, false);
      f.tex.needsUpdate = true;
    } else if (key === "s3r") {
      const f = faces.s3r;
      faceWall(f.ctx, false);
      f.tex.needsUpdate = true;
    } else if (key === "s3l") {
      const f = faces.s3l;
      f.tex.needsUpdate = true;
    }
  }


  const strokes = [];
  let doodleColor = RED;
  function doodleRedraw() {
    const f = faces.s3l;
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
  const faceOfSheet = [
    ["cover", "s0l"],
    ["s0r", "s1l"],
    ["s1r", "s2l"],
    ["s2f", "s3l"],
    ["s3r", "s3b"],
    ["end", "endb"]
  ];
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

  const TAB_DEFS = [
    { name: "AE动画", en: "MOTION" },
    { name: "角色IP", en: "CHARACTER" },
    { name: "毕业设计", en: "THESIS" },
    { name: "涂鸦", en: "DOODLE" }
  ];
  const tabMeshes = [];
  function tabTexture(def, active) {
    const cv = document.createElement("canvas");
    cv.width = 176; cv.height = 232;
    const c = cv.getContext("2d");
    c.fillStyle = active ? RED : "#F3ECDA";
    c.fillRect(0, 0, 176, 232);
    c.strokeStyle = active ? "rgba(255,253,246,0.85)" : "rgba(34,29,21,0.5)";
    c.lineWidth = 4;
    c.setLineDash([11, 8]);
    c.strokeRect(11, 11, 154, 210);
    c.setLineDash([]);
    c.fillStyle = active ? "#FFFDF6" : INK;
    c.font = (def.name.length >= 4 ? 34 : 40) + 'px "ZCOOL KuaiLe", sans-serif';
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.fillText(def.name, 88, 100);
    c.fillStyle = active ? "rgba(255,253,246,0.8)" : SOFT;
    c.font = '17px ui-monospace, monospace';
    c.fillText(def.en, 88, 152);
    const t = new THREE.CanvasTexture(cv);
    if ("colorSpace" in t && THREE.SRGBColorSpace) t.colorSpace = THREE.SRGBColorSpace;
    return t;
  }
  TAB_DEFS.forEach((def, i) => {
    const g = new THREE.Group();
    const box = new THREE.Mesh(
      new THREE.BoxGeometry(0.44, 0.05, 0.62),
      new THREE.MeshStandardMaterial({ color: 0xE7DFC9, roughness: 0.9 })
    );
    box.castShadow = true;
    g.add(box);
    const label = new THREE.Mesh(
      new THREE.PlaneGeometry(0.4, 0.56),
      new THREE.MeshBasicMaterial({ toneMapped: false })
    );
    label.rotation.x = -Math.PI / 2;
    label.position.y = 0.027;
    g.add(label);
    g.position.set(PW + 0.19, 0.128, -PH / 2 + 0.62 + i * 0.72);
    book.add(g);
    tabMeshes.push({ g, label, def, texN: null, texA: null });
  });
  function tabIndexAt(z) {
    for (let i = 0; i < 4; i++) {
      if (Math.abs(z - (-PH / 2 + 0.62 + i * 0.72)) < 0.36) return i;
    }
    return -1;
  }
  function redrawTabs() {
    tabMeshes.forEach(t => {
      t.texN = tabTexture(t.def, false);
      t.texA = tabTexture(t.def, true);
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
    if (typeof sfx === "function") sfx("page");
  }

  function flipNext() {
    if (flipping) return;
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
    if (flipping) return;
    const s = leftTopSheet();
    if (!s) return;
    camZoom(true);
    syncBookX(1.1);
    s.flipped = false;
    flippedCount--;
    s.pivot.position.y = blockTop + (s.idx === 0 ? 0.12 : 0.08);
    animateSheet(s, 0, 0.9, () => { stackYs(flippedCount); syncTabs(); });
  }
  function flipTo(i) {
    if (flipping) return;
    const target = i + 1;
    if (target === flippedCount) return;
    const step = () => {
      if (flippedCount < target) { flipNext(); setTimeout(step, 120); }
      else if (flippedCount > target) { flipPrev(); setTimeout(step, 120); }
    };
    step();
  }

  function syncTabs() {
    const idx = Math.max(0, flippedCount - 1);
    tabMeshes.forEach((t, bi) => {
      const tex = (bi === idx && flippedCount >= 1) ? t.texA : t.texN;
      if (tex && t.label.material.map !== tex) { t.label.material.map = tex; t.label.material.needsUpdate = true; }
    });
    const nb = document.getElementById("notebook");
    if (nb) nb.classList.toggle("opened", flippedCount >= 1);
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
    if (_pt.x > PW + 0.55 || _pt.x < -PW - 0.06 || Math.abs(_pt.z) > PH / 2 + 0.06) return null;
    return _pt;
  }

  let dragSheet = null, dragDir = 0, dragStartX = 0, dragMoved = false, drawStroke = null;

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
    const f = faces.s3l;
    crayonSeg(f.ctx, doodleColor, pts[pts.length - 2], pts[pts.length - 1], x, y);
    f.tex.needsUpdate = true;
    pts.push(x, y);
  }

  canvas.addEventListener("pointerdown", e => {
    e.preventDefault();
    
    if (flipping) return;
    const pt = pickPoint(e);

    if (!pt) return;

    if (pt.x > PW + 0.04) {
      const ti = tabIndexAt(pt.z);
      if (ti >= 0) {
        flipTo(ti);
        if (typeof sfx === "function") sfx("click");
      }
      return;
    }

    if (flippedCount === 4 && pt.x < 0) {
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
        const c0 = faces.s3l.ctx;
        crayonSeg(c0, doodleColor, px0, py0, px0 + 0.1, py0 + 0.1);
        faces.s3l.tex.needsUpdate = true;
        try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
        return;
      }
    }

    if (flippedCount === 4 && pt.x > 0) {
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
          try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
          if (typeof sfx === "function") sfx("click");
          return;
        }
      }
    }

    const rt = rightTopSheet(), lt = leftTopSheet();
    if (pt.x > 0 && rt) {
      dragSheet = rt; dragDir = 1;
    } else if (pt.x < 0 && lt) {
      dragSheet = lt; dragDir = -1;
    } else return;
    turningSheet = dragSheet;
    dragStartX = e.clientX;
    dragMoved = false;
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
        const target = overTrash(wx, wy) ? 1.16 : 1;
        wallState.trashScale += (target - wallState.trashScale) * 0.35;
        redrawFace("s3r");
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
      if (flippedCount === 4) {
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
  });

  canvas.addEventListener("pointerleave", () => { window.__pencilZone = false; window.__pencilDown = false; });

  canvas.addEventListener("pointerup", e => {
    if (wallState.dragIdx >= 0) {
      const i = wallState.dragIdx;
      wallState.dragIdx = -1;
      const pt = pickPoint(e);
      const [wx, wy] = pt ? wallXY(pt) : [-999, -999];
      if (overTrash(wx, wy)) {
        const d = wallImages[i];
        wallState.crumple = { idx: i, img: d ? d.img : null, x0: wallState.px, y0: wallState.py, t: 0 };
        if (typeof sfx === "function") sfx("page");
        gsap.to(wallState.crumple, {
          t: 1, duration: 0.55, ease: "power2.in",
          onUpdate: () => redrawFace("s3r"),
          onComplete: () => {
            wallState.crumple = null;
            removeWallItem(i);
          }
        });
        gsap.fromTo(wallState, { trashScale: 1.22 }, { trashScale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)", onUpdate: () => redrawFace("s3r") });
      } else {
        wallState.trashScale = 1;
        redrawFace("s3r");
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
      if (flippedCount === 3 && dragDir === 1 && pdfDoc) {
        renderPdfPage(pdfPageNum % pdfPageCount + 1);
        return;
      }
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
        gsap.to(proxy, {
          t: Math.PI, duration: 0.55, ease: "power2.out",
          onUpdate: () => { s.angle = proxy.t; bendGeo(s, proxy.t); },
          onComplete: () => { s.angle = Math.PI; bendGeo(s, Math.PI); flipping = false; turningSheet = null; stackYs(flippedCount); syncTabs(); }
        });
        if (typeof sfx === "function") sfx("page");
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
        gsap.to(proxy, {
          t: 0, duration: 0.55, ease: "power2.out",
          onUpdate: () => { s.angle = proxy.t; bendGeo(s, proxy.t); },
          onComplete: () => { s.angle = 0; bendGeo(s, 0); flipping = false; turningSheet = null; stackYs(flippedCount); syncTabs(); }
        });
        if (typeof sfx === "function") sfx("page");
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

  function doodleAction(id) {
    if (id === "undo") { strokes.pop(); doodleRedraw(); if (typeof sfx === "function") sfx("click"); }
    else if (id === "clear") { strokes.length = 0; doodleRedraw(); if (typeof sfx === "function") sfx("click"); }
    else if (id === "save") { saveDoodle(); }
  }
  function saveDoodle() {
    const f = faces.s3l;
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
    redrawFace("s3r");
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
    const w = wrap.clientWidth, h = wrap.clientHeight;
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
  resize();

  const clock = new THREE.Clock();
  let visible = true;
  new IntersectionObserver(en => { visible = en[0].isIntersecting; }).observe(wrap);

  function loop() {
    requestAnimationFrame(loop);
    if (!visible || document.hidden) return;
    const t = clock.getElapsedTime();
    camRY += ((mx * 0.09) - camRY) * 0.05;
    camRX += ((my * 0.04) - camRX) * 0.05;
    book.rotation.y = camRY + Math.sin(t * 0.4) * 0.012;
    book.rotation.x = BASE_TILT + camRX * 0.35;
    book.position.y = BOOK_Y + Math.sin(t * 0.8) * 0.03;
    camera.position.z = camState.z;
    camera.lookAt(0, camState.ly, 0);
    renderer.render(scene, camera);
  }


  redrawTabs();
  stackYs(0);
  syncTabs();
  const boot = () => {
    drawAllFaces();
  
    loadWall();
    syncWall();
    redrawFace("s3r");
  };
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => Promise.all(imgLoaders).then(boot));
  } else {
    Promise.all(imgLoaders).then(boot);
  }
  loop();
  };
  if (window.PAGE_DATA_READY) { window.PAGE_DATA_READY.then(bootBook); } else { bootBook(); }
})();
