"use strict";

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));

const CATS = ["全部", "动效", "特效", "动画", "其他"];
const CAT_COLOR = { "动效": "red", "特效": "yellow", "动画": "blue", "其他": "green" };
const CAT_HALL = { "动效": "A", "特效": "B", "动画": "C", "其他": "D" };
const TILTS = [-1.6, 1.2, -0.8, 1.8, -1.1, 0.9, -1.9, 1.5];

const state = {
  site: null,
  works: [],
  filter: "全部",
  sound: localStorage.getItem("snd") === "1",
  grain: localStorage.getItem("grain") !== "0"
};

window.addEventListener("error", e => {
  const box = $("#errbox");
  box.textContent = "ERR: " + e.message;
  box.style.display = "block";
});

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

let audioCtx = null;
let masterGain = null;
function ac() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.5;
    masterGain.connect(audioCtx.destination);
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}
function tone(freq, dur, type = "sine", vol = 0.15, slideTo = null, delay = 0) {
  const ctx = ac();
  const t0 = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const g = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t0);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  g.gain.setValueAtTime(0, t0);
  g.gain.linearRampToValueAtTime(vol, t0 + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  osc.connect(g).connect(masterGain);
  osc.start(t0);
  osc.stop(t0 + dur + 0.05);
}
function noiseSweep(dur, f0, f1, vol = 0.2, delay = 0) {
  const ctx = ac();
  const t0 = ctx.currentTime + delay;
  const len = Math.floor(ctx.sampleRate * dur);
  const buf = ctx.createBuffer(1, len, ctx.sampleRate);
  const data = buf.getChannelData(0);
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
  const src = ctx.createBufferSource();
  src.buffer = buf;
  const bp = ctx.createBiquadFilter();
  bp.type = "bandpass";
  bp.Q.value = 1.2;
  bp.frequency.setValueAtTime(f0, t0);
  bp.frequency.exponentialRampToValueAtTime(f1, t0 + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  src.connect(bp).connect(g).connect(masterGain);
  src.start(t0);
}
function sfx(name) {
  if (!state.sound) return;
  try {
    if (name === "click") tone(340, 0.06, "square", 0.12, 190);
    else if (name === "hover") tone(560, 0.035, "sine", 0.04);
    else if (name === "open") { noiseSweep(0.32, 320, 2600, 0.22); tone(220, 0.3, "triangle", 0.08, 440); }
    else if (name === "close") noiseSweep(0.26, 2400, 300, 0.18);
    else if (name === "page") { noiseSweep(0.4, 420, 2600, 0.2); noiseSweep(0.28, 800, 3400, 0.1, 0.1); tone(160, 0.08, "sine", 0.05, null, 0.32); }
    else if (name === "page") noiseSweep(0.28, 420, 1900, 0.16);
    else if (name === "konami") [523.25, 587.33, 659.25, 783.99, 1046.5].forEach((f, i) => tone(f, 0.14, "square", 0.12, null, i * 0.11));
  } catch (err) { /* audio unavailable */ }
}

const io = new IntersectionObserver(entries => {
  for (const en of entries) {
    if (en.isIntersecting) {
      en.target.classList.add("in");
      io.unobserve(en.target);
    }
  }
}, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

function watchReveals(root = document) {
  $$(".rv:not(.in)", root).forEach(el => io.observe(el));
}

function fillSite(s) {
  document.title = s.name + " · 作品集";
  $$("[data-name]").forEach(el => el.textContent = s.name);
  $$("[data-name-en]").forEach(el => el.textContent = s.nameEn);
  $("[data-role]").textContent = s.role;
  $("[data-tagline]").textContent = s.tagline;
  $("[data-location]").textContent = s.location;
  const hn = $("[data-hero-note]"); if (hn) hn.textContent = s.heroNote;
  $("#foot-year").textContent = new Date().getFullYear();

  $("#about-text").innerHTML = s.about.map(p => `<p>${esc(p)}</p>`).join("");
  $("#skills").innerHTML = s.skills.map(sk => `
    <div class="skill">
      <div class="skill-head"><b>${esc(sk.name)}</b><span class="lv">LV.${esc(sk.level)}</span></div>
      <div class="xp"><i style="--lv:${esc(sk.level)}%"></i></div>
    </div>`).join("");
  $("#software").innerHTML = s.software.map(sw => `<span class="sw-chip">${esc(sw)}</span>`).join("");

  $("#nle-track").innerHTML = s.timeline.map(t => `
    <div class="clip">
      <span class="period">${esc(t.period)}</span>
      <h3>${esc(t.title)}</h3>
      <p class="org">${esc(t.org)}</p>
      <p class="cdesc">${esc(t.desc)}</p>
    </div>`).join("");

  const c = s.contact;
  const chips = [
    ["邮箱 EMAIL", c.email],
    ["电话 TEL", c.phone],
    ["微信 WECHAT", c.wechat]
  ];
  if (c.bilibili) chips.push(["B站 BILIBILI", c.bilibili]);
  $("#contact-chips").innerHTML = chips.map(([k, v]) => `
    <div class="c-chip"><span class="k">${esc(k)}</span><span>${esc(v)}</span></div>`).join("");

  const resumeBtn = $("#btn-resume");
  if (c.resumeUrl) {
    resumeBtn.href = c.resumeUrl;
  } else {
    resumeBtn.textContent = "简历 PDF 整理中…";
    resumeBtn.classList.add("disabled");
    resumeBtn.addEventListener("click", e => e.preventDefault());
  }

  $("#credits-roll").innerHTML = `
    <div class="cr-role">DIRECTOR · MOTION · EDIT</div>
    <div class="cr-line">${esc(s.name)}</div>
    <div class="cr-role">CAST &amp; CREW</div>
    <div class="cr-line">一位想把动效做进游戏里的新人</div>
    <div class="cr-role">CONTACT</div>
    <div class="cr-line">${esc(c.email)}</div>
    <div class="cr-line">${esc(c.phone)}</div>
    <div class="cr-line">微信 · ${esc(c.wechat)}</div>
    <div class="cr-end">感谢观看 ★</div>
    <div class="cr-role">THE END · SEE YOU AT WORK</div>
    <div class="cr-line">${esc(s.name)}</div>`;
}

function renderTabs() {
  $("#tabs").innerHTML = CATS.map(cat =>
    `<button class="tab${cat === state.filter ? " on" : ""}" data-filter="${esc(cat)}" data-cursor="link" role="tab" aria-selected="${cat === state.filter}">${esc(cat)}</button>`
  ).join("");
  $$("#tabs .tab").forEach(btn => btn.addEventListener("click", () => {
    state.filter = btn.dataset.filter;
    sfx("click");
    renderTabs();
    renderWorks();
  }));
}

function renderWorks() {
  const list = state.works.filter(w => state.filter === "全部" || w.cat === state.filter);
  const grid = $("#works-grid");
  grid.innerHTML = list.map((w, i) => `
    <article class="work ticket" data-id="${esc(w.id)}" data-cursor="play" tabindex="0" role="button" aria-label="查看作品：${esc(w.title)}" style="--tilt:${TILTS[i % TILTS.length]}deg">
      <div class="thumb">
        <img src="${esc(w.poster)}" alt="${esc(w.title)} 封面" loading="lazy">
        ${w.video ? `<video muted loop playsinline preload="none" src="${esc(w.video)}"></video>` : ""}
        <span class="stamp ${CAT_COLOR[w.cat] || "red"}">${esc(w.cat)}</span>
      </div>
      <h3>${esc(w.title)}</h3>
      <p class="wmeta">${esc(w.en)} · ${esc(w.year)} · ${esc(w.dur)}</p>
      <div class="ticket-tear" aria-hidden="true"></div>
      <div class="ticket-stub">
        <div class="barcode" aria-hidden="true"></div>
        <div class="stub-info mono"><span>HALL ${CAT_HALL[w.cat] || "A"} · ROW ${String(i + 1).padStart(2, "0")}</span><span>${esc(w.year)} · ${esc(w.dur)}</span></div>
      </div>
    </article>`).join("");

  $$(".work", grid).forEach(card => {
    const w = state.works.find(x => x.id === card.dataset.id);
    const vid = $("video", card);
    card.addEventListener("mouseenter", () => {
      sfx("hover");
      if (vid) vid.play().catch(() => {});
    });
    card.addEventListener("mouseleave", () => {
      if (vid) { vid.pause(); vid.currentTime = 0; }
    });
    card.addEventListener("click", () => openCinema(w));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openCinema(w); }
    });
  });
  watchReveals(grid);
  window.dispatchEvent(new CustomEvent("works-rendered"));
}

function openCinema(w) {
  $("#ci-title").textContent = w.title;
  const cat = $("#ci-cat");
  cat.textContent = w.cat;
  cat.className = "stamp " + (CAT_COLOR[w.cat] || "red");
  $("#ci-meta").textContent = `${w.en} · ${w.year} · ${w.dur}`;
  $("#ci-desc").textContent = w.desc;
  $("#ci-role").textContent = w.role;
  $("#ci-tools").textContent = w.tools;
  $("#ci-dur").textContent = w.dur;

  const cv = $("#cv");
  const poster = $("#cv-poster");
  const empty = $("#cv-empty");
  loadEngagement(w);
  if (w.video) {
    if (vplayer.simStop) vplayer.simStop();
    cv.classList.add("has-video");
    cv.src = w.video;
    cv.poster = w.poster;
    poster.style.display = "none";
    empty.style.display = "none";
    cv.muted = true;
    if (vplayer.syncMute) vplayer.syncMute();
    cv.play().catch(() => {});
    vplayer.controls.classList.add("on");
    vplayer.sync();
  } else {
    cv.classList.remove("has-video");
    cv.pause();
    cv.removeAttribute("src");
    cv.load();
    poster.src = w.poster;
    poster.style.display = "block";
    empty.style.display = "block";
    empty.textContent = "预览模式 · 上传视频后自动替换成片";
    vplayer.controls.classList.add("on");
    if (vplayer.simStart) vplayer.simStart(w.dur);
    vplayer.sync();
  }
  document.body.classList.add("cinema-open");
  document.body.style.overflow = "hidden";
  $("#cinema").setAttribute("aria-hidden", "false");
  sfx("open");
  window.dispatchEvent(new CustomEvent("cinema-open"));
}

function closeCinema() {
  if (vplayer.simStop) vplayer.simStop();
  const cv = $("#cv");
  cv.pause();
  document.body.classList.remove("cinema-open");
  document.body.style.overflow = "";
  $("#cinema").setAttribute("aria-hidden", "true");
  sfx("close");
  window.dispatchEvent(new CustomEvent("cinema-close"));
}

function initCursor() {
  if (!matchMedia("(pointer: fine)").matches) return;
  addEventListener("mousemove", () => document.body.classList.add("has-cursor"), { once: true });
  const dot = $("#cursor-dot");
  const ring = $("#cursor-ring");
  const label = $("#cursor-label");
  let tx = innerWidth / 2, ty = innerHeight / 2, rx = tx, ry = ty;
  let curMode = "";
  const PENCIL_SVG = '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M8 26 L9.2 20.2 L22 7.4 L26.6 12 L13.8 24.8 Z"/><path d="M20.4 9 L25 13.6"/><path d="M8 26 L11.6 22.6"/></svg>';
  addEventListener("pointermove", e => { tx = e.clientX; ty = e.clientY; });
  (function loop() {
    const dc = window.__dragCursor;
    const active = !!(dc && dc.active);
    const gx = active ? dc.x : tx;
    const gy = active ? dc.y : ty;
    dot.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
    const k = active ? 0.45 : 0.18;
    rx += (gx - rx) * k;
    ry += (gy - ry) * k;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    const pencil = !!window.__pencilZone;
    let cls = pencil ? "pencil" : curMode;
    if (pencil && window.__pencilDown) cls += " drawing";
    if (active) cls = cls ? cls + " drag" : "drag";
    if (ring.className !== cls) ring.className = cls;
    if (pencil) {
      if (!label.dataset.pencil) { label.innerHTML = PENCIL_SVG; label.dataset.pencil = "1"; }
      const pc = window.__pencilColor || "#221D15";
      if (label.style.color !== pc) label.style.color = pc;
      rx = gx; ry = gy;
    } else {
      if (label.dataset.pencil) { delete label.dataset.pencil; label.innerHTML = ""; label.style.color = ""; }
      label.textContent = curMode === "play" ? "▶" : curMode === "drag" ? "⇔" : "";
    }
    document.body.classList.toggle("pencil-on", pencil);
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", e => {
    const t = e.target.closest("[data-cursor]");
    curMode = t ? t.dataset.cursor : "";
  });
}

function initGrain() {
  const canvas = $("#grain");
  const ctx = canvas.getContext("2d");
  function resize() {
    canvas.width = Math.ceil(innerWidth / 3);
    canvas.height = Math.ceil(innerHeight / 3);
  }
  resize();
  addEventListener("resize", resize);
  if (reducedMotion) return;
  setInterval(() => {
    if (!document.body.classList.contains("grain-on")) return;
    const img = ctx.createImageData(canvas.width, canvas.height);
    const buf = new Uint32Array(img.data.buffer);
    for (let i = 0; i < buf.length; i++) {
      const v = Math.random() * 255 | 0;
      buf[i] = (26 << 24) | (v << 16) | (v << 8) | v;
    }
    ctx.putImageData(img, 0, 0);
  }, 110);
}

function initTimecode() {
  const els = $$("[data-tc]");
  const t0 = Date.now();
  const pad = n => String(n).padStart(2, "0");
  setInterval(() => {
    const ms = Date.now() - t0;
    const s = Math.floor(ms / 1000);
    const ff = Math.floor((ms % 1000) / 40);
    const str = `${pad(Math.floor(s / 3600))}:${pad(Math.floor(s / 60) % 60)}:${pad(s % 60)}:${pad(ff)}`;
    els.forEach(el => el.textContent = str);
  }, 40);
}

let bgm = null;
function initMusic(src) {
  const btn = $("#btn-music");
  if (!btn) return;
  btn.style.display = "";
  bgm = new Audio(src);
  bgm.loop = true;
  bgm.volume = 0.5;
  let on = false;
  const sync = () => { btn.textContent = on ? "音乐 ON" : "音乐 OFF"; btn.classList.toggle("on", on); btn.setAttribute("aria-pressed", String(on)); };
  sync();
  btn.addEventListener("click", () => {
    on = !on;
    if (on) bgm.play().catch(() => {}); else bgm.pause();
    sync();
    sfx("click");
  });
}

function initToggles() {
  const soundBtn = $("#btn-sound");
  const grainBtn = $("#btn-grain");
  function syncSound() {
    soundBtn.textContent = state.sound ? "音效 ON" : "音效 OFF";
    soundBtn.classList.toggle("on", state.sound);
    soundBtn.setAttribute("aria-pressed", String(state.sound));
  }
  function syncGrain() {
    grainBtn.textContent = state.grain ? "颗粒 ON" : "颗粒 OFF";
    grainBtn.classList.toggle("on", state.grain);
    document.body.classList.toggle("grain-on", state.grain);
  }
  syncSound();
  syncGrain();
  soundBtn.addEventListener("click", () => {
    state.sound = !state.sound;
    localStorage.setItem("snd", state.sound ? "1" : "0");
    syncSound();
    sfx("click");
  });
  grainBtn.addEventListener("click", () => {
    state.grain = !state.grain;
    localStorage.setItem("grain", state.grain ? "1" : "0");
    syncGrain();
  });
}

function initKonami() {
  const seq = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
  let pos = 0;
  addEventListener("keydown", e => {
    const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    pos = (k === seq[pos]) ? pos + 1 : (k === seq[0] ? 1 : 0);
    if (pos === seq.length) {
      pos = 0;
      const on = document.body.classList.toggle("player2");
      if (on) {
        sfx("konami");
        const banner = document.createElement("div");
        banner.className = "konami-banner";
        banner.innerHTML = "玩家 2 已加入！<small>PLAYER 2 HAS JOINED — 再按一次作弊码恢复</small>";
        document.body.appendChild(banner);
        setTimeout(() => banner.remove(), 3600);
      }
    }
  });
}

function initCinema() {
  $$("#cinema [data-close]").forEach(el => el.addEventListener("click", closeCinema));
  addEventListener("keydown", e => {
    if (e.key === "Escape" && document.body.classList.contains("cinema-open")) closeCinema();
  });
  const creditsIO = new IntersectionObserver(entries => {
    for (const en of entries) {
      if (en.isIntersecting) {
        en.target.classList.add("go");
        creditsIO.unobserve(en.target);
      }
    }
  }, { threshold: 0.35 });
  creditsIO.observe($(".credits-mask"));
}


const vplayer = {};
const NB_TABS = ["ae", "ip", "thesis", "doodle"];
const NB_TITLES = { ae: "AE 动画", ip: "角色 IP", thesis: "毕业设计", doodle: "涂鸦板" };
let nbIdx = 0;
let nbBusy = false;
let nbOpened = false;

function nbRings() {
  const coil = $(".nb-coil");
  if (!coil) return;
  const w = coil.getBoundingClientRect().width || 700;
  const count = Math.max(6, Math.floor(w / 42));
  coil.innerHTML = "";
  for (let i = 0; i < count; i++) {
    const r = document.createElement("i");
    r.className = "nb-ring";
    coil.appendChild(r);
  }
}

function nbShow(i) {
  nbIdx = i;
  const pool = $("#nb-flipbook");
  const top = $("#nb-page-top");
  const bottom = $("#nb-page-bottom");
  $$(".nb-page > .nb-sheet").forEach(s => pool.appendChild(s));
  const l = $(`#nb-flipbook [data-sec="${NB_TABS[i]}-l"]`);
  const r = $(`#nb-flipbook [data-sec="${NB_TABS[i]}-r"]`);
  if (l) top.appendChild(l);
  if (r) bottom.appendChild(r);
  $$("#nb-tabs button").forEach((b, bi) => b.classList.toggle("on", bi === i));
  const st = $("#nb-stack-top"), sb = $("#nb-stack-bottom");
  if (st) st.style.height = (6 + i * 3) + "px";
  if (sb) sb.style.height = (6 + (NB_TABS.length - 1 - i) * 3) + "px";
}

function nbSetupFlip(side, fromI, toI) {
  const flip = $("#nb-flip");
  $("#nb-flip-front").textContent = NB_TITLES[NB_TABS[fromI]];
  $("#nb-flip-back").textContent = NB_TITLES[NB_TABS[toI]];
  if (side === "bottom") {
    flip.style.top = "50%"; flip.style.bottom = "0";
    flip.style.transformOrigin = "center top";
    flip.style.borderRadius = "0 0 10px 10px";
  } else {
    flip.style.top = "0"; flip.style.bottom = "50%";
    flip.style.transformOrigin = "center bottom";
    flip.style.borderRadius = "10px 10px 0 0";
  }
  flip.style.display = "block";
  return flip;
}

function nbFlipTo(i, dir) {
  if (!nbOpened) { nbOpen(i); return; }
  if (nbBusy || i === nbIdx || i < 0 || i >= NB_TABS.length) return;
  dir = dir || (i > nbIdx ? 1 : -1);
  if (typeof gsap === "undefined") { nbShow(i); return; }
  nbBusy = true;
  const flip = nbSetupFlip(dir > 0 ? "bottom" : "top", nbIdx, i);
  flip.dataset.swapped = "";
  const target = dir > 0 ? 180 : -180;
  gsap.to(flip, {
    rotationX: target, duration: 0.72, ease: "power1.inOut",
    onUpdate: function () {
      if (this.progress() > 0.5 && flip.dataset.swapped !== "1") {
        flip.dataset.swapped = "1";
        nbShow(i);
      }
    },
    onComplete: () => {
      gsap.set(flip, { rotationX: 0 });
      flip.style.display = "none";
      nbBusy = false;
    }
  });
  sfx("page");
}

function nbOpen(thenIdx) {
  if (nbOpened) return;
  nbOpened = true;
  const nb = $("#notebook");
  const overlay = $("#nb-coverlay");
  const cover = overlay ? overlay.querySelector(".nb-cover-page") : null;
  nb.classList.add("opened");
  nbShow(thenIdx || 0);
  if (cover && typeof gsap !== "undefined") {
    sfx("page");
    gsap.to(cover, {
      rotationX: 178, duration: 0.85, ease: "power2.inOut", transformOrigin: "center top",
      onComplete: () => { overlay.style.display = "none"; }
    });
  } else if (overlay) overlay.style.display = "none";
}

function initNotebook() {
  const nb = $("#notebook");
  const frame = $("#nb-bookframe");
  const flip = $("#nb-flip");
  if (!nb || !frame || !flip) return;
  nbRings();
  addEventListener("resize", nbRings);
  nbShow(0);
  nb.classList.remove("opened");
  nbOpened = false;

  const overlay = $("#nb-coverlay");
  if (overlay) {
    overlay.addEventListener("click", () => nbOpen());
    let downY = null;
    overlay.addEventListener("pointerdown", e => { downY = e.clientY; });
    overlay.addEventListener("pointerup", e => {
      if (downY !== null && downY - e.clientY > 50) nbOpen();
      downY = null;
    });
  }

  $$("#nb-tabs button").forEach((b, i) => b.addEventListener("click", () => {
    if (!nbOpened) { nbOpen(i); return; }
    nbFlipTo(i);
  }));

  let dragging = false, side = null, startY = 0, dy = 0, shown = false;
  frame.addEventListener("pointerdown", e => {
    if (nbBusy || !nbOpened) return;
    if (e.target.closest("#book") || e.target.closest("#doodle-canvas") || e.target.closest("button") || e.target.closest("a") || e.target.closest(".nb-work") || e.target.closest(".nb-mini")) return;
    const r = frame.getBoundingClientRect();
    side = e.clientY < r.top + r.height / 2 ? "top" : "bottom";
    dragging = true; dy = 0; shown = false; startY = e.clientY;
    try { frame.setPointerCapture(e.pointerId); } catch (err) {}
  });
  frame.addEventListener("pointermove", e => {
    if (!dragging || typeof gsap === "undefined") return;
    dy = e.clientY - startY;
    if (!shown && Math.abs(dy) > 5) {
      const toI = side === "bottom" ? Math.min(nbIdx + 1, NB_TABS.length - 1) : Math.max(nbIdx - 1, 0);
      nbSetupFlip(side, nbIdx, toI);
      shown = true;
    }
    if (!shown) return;
    const rot = side === "bottom" ? Math.max(0, Math.min(42, -dy * 0.25)) : Math.max(-42, Math.min(0, -dy * 0.25));
    gsap.set(flip, { rotationX: rot });
  });
  frame.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    if (side === "bottom" && dy < -70 && nbIdx < NB_TABS.length - 1) { nbFlipTo(nbIdx + 1, 1); return; }
    if (side === "top" && dy > 70 && nbIdx > 0) { nbFlipTo(nbIdx - 1, -1); return; }
    if (shown && typeof gsap !== "undefined") {
      gsap.to(flip, { rotationX: 0, duration: 0.45, ease: "elastic.out(1, 0.55)", onComplete: () => { flip.style.display = "none"; } });
    } else flip.style.display = "none";
  });

  addEventListener("keydown", e => {
    if (document.body.classList.contains("cinema-open") || document.body.classList.contains("pc-open")) return;
    const r = frame.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    if (!nbOpened) { if (e.key === "ArrowRight" || e.key === "ArrowDown") nbOpen(); return; }
    if (e.key === "ArrowRight" || e.key === "ArrowDown") nbFlipTo(nbIdx + 1, 1);
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") nbFlipTo(nbIdx - 1, -1);
  });
}
function fillNotebook(s) {
  const notes = s.notebook || {};
  const setText = (sel, v) => { const el = $(sel); if (el) el.textContent = v || ""; };
  setText("#nb-ae-note", notes.ae);
  setText("#nb-ip-note", notes.ip);
  setText("#nb-thesis-note", notes.thesis);
  const fillList = (sel, list) => {
    const el = $(sel);
    if (!el) return;
    el.innerHTML = list.length
      ? list.map(w => `<div class="nb-work" data-id="${esc(w.id)}" data-cursor="link"><span>${esc(w.title)}</span><span class="mono">${esc(w.year)} · ${esc(w.dur)}</span></div>`).join("")
      : '<p class="nb-note">作品整理中…</p>';
    $$(".nb-work", el).forEach(row => {
      const w = state.works.find(x => x.id === row.dataset.id);
      if (w) row.addEventListener("click", () => openCinema(w));
    });
  };
  const fillMini = (sel, list) => {
    const el = $(sel);
    if (!el) return;
    el.innerHTML = list.slice(0, 3).map(w => `<div class="nb-mini" data-id="${esc(w.id)}" data-cursor="play"><img src="${esc(w.poster)}" alt="${esc(w.title)}"></div>`).join("");
    $$(".nb-mini", el).forEach(m => {
      const w = state.works.find(x => x.id === m.dataset.id);
      if (w) m.addEventListener("click", () => openCinema(w));
    });
  };
  const ae = state.works.filter(w => w.cat === "动效");
  const ip = state.works.filter(w => w.cat === "动画");
  fillList("#nb-works-ae", ae);
  fillMini("#nb-mini-ae", ae);
  fillList("#nb-works-ip", ip);
  fillMini("#nb-mini-ip", ip);
}
function initDoodle() {
  const cvStop = $("#doodle-canvas");
  if (cvStop) ["pointerdown", "mousedown", "touchstart"].forEach(ev => cvStop.addEventListener(ev, e => e.stopPropagation(), { passive: true }));
  const cv = $("#doodle-canvas");
  if (!cv) return;
  const ctx = cv.getContext("2d");
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  const COLORS = ["#221D15", "#E6392B", "#2B4FD8", "#E8A800", "#3E9B4F"];
  let color = COLORS[1], drawing = false, lx = 0, ly = 0;
  let strokes = [], current = null;
  const box = $("#doodle-colors");
  COLORS.forEach((c, i) => {
    const b = document.createElement("button");
    b.style.background = c;
    b.setAttribute("aria-label", "画笔颜色 " + (i + 1));
    b.dataset.cursor = "link";
    if (i === 1) b.classList.add("on");
    b.addEventListener("click", () => { color = c; $$("#doodle-colors button").forEach(x => x.classList.toggle("on", x === b)); sfx("click"); });
    box.appendChild(b);
  });
  function pos(e) {
    const r = cv.getBoundingClientRect();
    return [(e.clientX - r.left) * cv.width / r.width, (e.clientY - r.top) * cv.height / r.height];
  }
  function strokeSeg(col, x0, y0, x1, y1) {
    ctx.globalAlpha = 0.3; ctx.lineWidth = 9; ctx.strokeStyle = col;
    ctx.beginPath(); ctx.moveTo(x0 + 0.7, y0 + 0.5); ctx.lineTo(x1 + 0.7, y1 + 0.5); ctx.stroke();
    ctx.globalAlpha = 0.92; ctx.lineWidth = 5.5;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
    ctx.globalAlpha = 1;
  }
  function redraw() {
    ctx.clearRect(0, 0, cv.width, cv.height);
    for (const s of strokes) {
      for (let i = 2; i < s.points.length; i += 2) {
        strokeSeg(s.color, s.points[i - 2], s.points[i - 1], s.points[i], s.points[i + 1]);
      }
    }
  }
  cv.addEventListener("pointerdown", e => {
    drawing = true;
    [lx, ly] = pos(e);
    current = { color, points: [lx, ly] };
    strokeSeg(color, lx, ly, lx + 0.1, ly + 0.1);
    try { cv.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  cv.addEventListener("pointermove", e => {
    if (!drawing || !current) return;
    const [x, y] = pos(e);
    current.points.push(x, y);
    strokeSeg(color, lx, ly, x, y);
    lx = x; ly = y;
  });
  addEventListener("pointerup", () => {
    if (current) { strokes.push(current); current = null; }
    drawing = false;
  });
  $("#doodle-undo").addEventListener("click", () => { strokes.pop(); redraw(); sfx("click"); });
  $("#doodle-clear").addEventListener("click", () => { strokes = []; redraw(); sfx("click"); });

  const KEY = "pf_doodles";
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch (e) { return []; } };
  const save = arr => localStorage.setItem(KEY, JSON.stringify(arr.slice(0, 12)));
  function renderWall() {
    const wall = $("#doodle-wall");
    const arr = load();
    wall.innerHTML = arr.map((d, i) => {
      const rot = d.rot ?? (((i * 37) % 17) - 8);
      const ddx = d.dx ?? (((i * 23) % 11) - 5);
      const ddy = d.dy ?? ((i * 29) % 15);
      const mx = 6 + (i % 4) * 4;
      const my = 4 + (i % 3) * 4;
      return `<div class="pin" style="transform: translate(${ddx}px, ${ddy}px) rotate(${rot}deg); margin: ${my}px ${mx}px"><img src="${d.img}" alt="涂鸦存档 ${i + 1}"><button class="del" data-i="${i}" data-cursor="link" aria-label="删除这张">✕</button></div>`;
    }).join("");
    $$(".pin .del", wall).forEach(b => b.addEventListener("click", () => {
      const a = load();
      a.splice(Number(b.dataset.i), 1);
      save(a);
      renderWall();
      sfx("close");
    }));
  }
  $("#doodle-save").addEventListener("click", () => {
    const arr = load();
    arr.unshift({
      img: cv.toDataURL("image/png"),
      ts: Date.now(),
      rot: +(Math.random() * 16 - 8).toFixed(1),
      dx: +(Math.random() * 10 - 5).toFixed(0),
      dy: +(Math.random() * 14).toFixed(0)
    });
    save(arr);
    strokes = [];
    redraw();
    renderWall();
    sfx("open");
  });
  renderWall();
}
function initBook() {
  const bookStop = $("#book");
  if (bookStop) ["pointerdown", "mousedown", "touchstart"].forEach(ev => bookStop.addEventListener(ev, e => e.stopPropagation(), { passive: true }));
  const book = $("#book");
  const page = $("#book-page");
  const canvas = $("#book-canvas");
  const placeholder = $("#book-placeholder");
  const numEl = $("#book-page-num");
  if (!book || !page || !canvas) return;
  let pdfDoc = null, pageNum = 1, pageCount = 0, busy = false;

  async function renderPage(n) {
    const pg = await pdfDoc.getPage(n);
    const base = pg.getViewport({ scale: 1 });
    const targetW = page.clientWidth || 560;
    const scale = (targetW * 2) / base.width;
    const vp = pg.getViewport({ scale });
    canvas.width = vp.width;
    canvas.height = vp.height;
    page.style.aspectRatio = base.width + " / " + base.height;
    await pg.render({ canvasContext: canvas.getContext("2d"), viewport: vp }).promise;
    pageNum = n;
    numEl.textContent = n + " / " + pageCount;
  }

  function flip(dir) {
    if (!pdfDoc || busy) return;
    const next = pageNum + dir;
    if (next < 1 || next > pageCount) return;
    busy = true;
    const origin = dir > 0 ? "left center" : "right center";
    const out = dir > 0 ? -88 : 88;
    if (typeof gsap === "undefined") { renderPage(next).then(() => busy = false); return; }
    gsap.to(page, {
      rotationY: out, transformOrigin: origin, duration: 0.26, ease: "power2.in",
      onComplete: async () => {
        await renderPage(next);
        gsap.fromTo(page, { rotationY: -out, transformOrigin: origin }, { rotationY: 0, duration: 0.34, ease: "power2.out", onComplete: () => { busy = false; } });
      }
    });
    sfx("click");
  }

  let dragging = false, startX = 0, dx = 0;
  book.addEventListener("pointerdown", e => {
    dragging = true; dx = 0; startX = e.clientX;
    try { book.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  book.addEventListener("pointermove", e => {
    if (!dragging || !pdfDoc || typeof gsap === "undefined") return;
    dx = e.clientX - startX;
    const peek = Math.max(-38, Math.min(38, -dx * 0.16));
    gsap.set(page, { rotationY: peek, transformOrigin: dx < 0 ? "left center" : "right center" });
  });
  book.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    if (Math.abs(dx) > 70) { flip(dx < 0 ? 1 : -1); }
    else if (typeof gsap !== "undefined") gsap.to(page, { rotationY: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
  });

  if (typeof pdfjsLib !== "undefined") {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "assets/vendor/pdf.worker.min.js";
    pdfjsLib.getDocument("assets/portfolio.pdf").promise.then(doc => {
      pdfDoc = doc;
      pageCount = doc.numPages;
      placeholder.style.display = "none";
      renderPage(1);
    }).catch(() => {});
  }
}
function initPlayer() {
  const cv = $("#cv");
  const controls = $("#vcontrols");
  const playBtn = $("#v-play");
  const bar = $("#v-bar");
  const fill = $("#v-fill");
  const thumb = $("#v-thumb");
  const timeEl = $("#v-time");
  const fmt = t => {
    if (!isFinite(t)) t = 0;
    return String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(Math.floor(t % 60)).padStart(2, "0");
  };
  function sync() {
    const d = sim.active ? sim.dur : (cv.duration || 0);
    const cur = sim.active ? sim.t : cv.currentTime;
    const p = d ? cur / d : 0;
    fill.style.width = (p * 100) + "%";
    thumb.style.left = (p * 100) + "%";
    timeEl.textContent = fmt(cur) + " / " + fmt(d);
  }
  const sim = { active: false, t: 0, dur: 0, playing: false, raf: 0, last: 0 };
  function simTick(ts) {
    if (!sim.active || !sim.playing) return;
    if (!sim.last) sim.last = ts;
    sim.t += (ts - sim.last) / 1000;
    sim.last = ts;
    if (sim.t >= sim.dur) sim.t = 0;
    sync();
    sim.raf = requestAnimationFrame(simTick);
  }
  function simToggle() {
    sim.playing = !sim.playing;
    sim.last = 0;
    if (sim.playing) sim.raf = requestAnimationFrame(simTick);
    controls.classList.toggle("paused", !sim.playing);
    playBtn.textContent = sim.playing ? "❚❚" : "▶";
    sfx("click");
  }
  function syncState() {
    if (sim.active) return;
    controls.classList.toggle("paused", cv.paused);
    playBtn.textContent = cv.paused ? "▶" : "❚❚";
  }
  cv.addEventListener("timeupdate", sync);
  cv.addEventListener("loadedmetadata", sync);
  cv.addEventListener("play", syncState);
  cv.addEventListener("pause", syncState);
  const muteBtn = $("#v-mute");
  function syncMute() { muteBtn.textContent = cv.muted ? "🔇" : "🔊"; }
  syncMute();
  muteBtn.addEventListener("click", () => { cv.muted = !cv.muted; syncMute(); sfx("click"); });
  playBtn.addEventListener("click", () => {
    if (sim.active) { simToggle(); return; }
    if (cv.paused) { cv.muted = false; syncMute(); cv.play().catch(() => {}); } else cv.pause();
  });
  const posterEl = $("#cv-poster");
  if (posterEl) posterEl.addEventListener("click", () => { if (sim.active) simToggle(); });
  cv.addEventListener("click", () => {
    cv.muted = false;
    syncMute();
    if (cv.paused) cv.play().catch(() => {}); else cv.pause();
  });
  let dragging = false;
  function seek(e) {
    const r = bar.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
    if (sim.active) {
      sim.t = p * sim.dur;
      fill.style.width = (p * 100) + "%";
      thumb.style.left = (p * 100) + "%";
      timeEl.textContent = fmt(sim.t) + " / " + fmt(sim.dur);
      return;
    }
    const d = cv.duration || 0;
    if (d) {
      cv.currentTime = p * d;
      fill.style.width = (p * 100) + "%";
      thumb.style.left = (p * 100) + "%";
      timeEl.textContent = fmt(p * d) + " / " + fmt(d);
    }
  }
  bar.addEventListener("pointerdown", e => {
    dragging = true;
    controls.classList.add("dragging");
    try { bar.setPointerCapture(e.pointerId); } catch (err) {}
    seek(e);
    e.preventDefault();
  });
  bar.addEventListener("pointermove", e => { if (dragging) seek(e); });
  addEventListener("pointerup", () => {
    if (dragging) { dragging = false; controls.classList.remove("dragging"); }
  });
  vplayer.controls = controls;
  vplayer.syncMute = syncMute;
  vplayer.sync = sync;
  vplayer.syncState = syncState;
  vplayer.simStart = durStr => {
    const m = /(\d+):(\d+)/.exec(durStr || "");
    sim.dur = m ? (+m[1]) * 60 + (+m[2]) : 30;
    if (sim.dur < 2) sim.dur = 30;
    sim.t = 0; sim.playing = true; sim.active = true; sim.last = 0;
    cancelAnimationFrame(sim.raf);
    sim.raf = requestAnimationFrame(simTick);
    controls.classList.remove("paused");
    playBtn.textContent = "❚❚";
    const scr = document.querySelector(".cinema-screen");
    if (scr) scr.classList.add("sim-on");
    sync();
  };
  vplayer.simStop = () => {
    sim.active = false; sim.playing = false;
    cancelAnimationFrame(sim.raf);
    const scr = document.querySelector(".cinema-screen");
    if (scr) scr.classList.remove("sim-on");
  };
}

const BURST_COLORS = [["#9EC9F5","#9ED8C6"],["#91D3F7","#9AE4CF"],["#DC93CF","#E3D36B"],["#CF8EEF","#CBEB98"],["#87E9C6","#1FCC93"],["#A7ECD0","#9AE4CF"],["#87E9C6","#A635D9"],["#D58EB3","#E0B6F5"],["#F48BA2","#CF8EEF"],["#91D3F7","#A635D9"],["#CF8EEF","#CBEB98"],["#87E9C6","#A635D9"],["#9EC9F5","#9ED8C6"],["#91D3F7","#9AE4CF"]];
let engWorkId = null;
let engBase = 0;

function loadEngagement(w) {
  engWorkId = w.id;
  engBase = w.likes || 0;
  const liked = localStorage.getItem("pf_like_" + w.id) === "1";
  updateLikeUI(liked, false);
  renderComments();
}

function updateLikeUI(liked, animate) {
  const btn = $("#like-btn");
  const num = $("#like-num");
  btn.classList.toggle("liked", liked);
  btn.setAttribute("aria-pressed", String(liked));
  const total = engBase + (liked ? 1 : 0);
  if (animate && typeof gsap !== "undefined") {
    gsap.to(num, { yPercent: -60, autoAlpha: 0, duration: 0.15, ease: "power2.in", onComplete: () => {
      num.textContent = total;
      gsap.fromTo(num, { yPercent: 60, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 0.3, ease: "power2.out" });
    }});
  } else {
    num.textContent = total;
  }
}

function likeBurst() {
  if (typeof gsap === "undefined") return;
  const wrap = $("#like-heart");
  const heart = wrap.querySelector("svg");
  gsap.fromTo(heart, { scale: 0 }, { scale: 1, duration: 0.55, delay: 0.25, ease: "elastic.out(1, 0.45)", transformOrigin: "50% 50%" });
  const ring = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  ring.setAttribute("class", "burst-ring");
  ring.setAttribute("viewBox", "0 0 40 40");
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "20");
  circle.setAttribute("cy", "20");
  circle.setAttribute("r", "18");
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "#E5214A");
  circle.setAttribute("stroke-width", "40");
  ring.appendChild(circle);
  wrap.appendChild(ring);
  gsap.fromTo(ring, { scale: 0 }, { scale: 1, duration: 0.4, ease: "power2.out" });
  gsap.to(circle, { attr: { "stroke-width": 0 }, stroke: "#CC8EF5", duration: 0.4, ease: "power2.out", onComplete: () => ring.remove() });
  const shift = 13 * Math.PI / 180;
  BURST_COLORS.forEach((pair, i) => {
    const p = document.createElement("i");
    p.className = "burst-p";
    p.style.background = pair[0];
    wrap.appendChild(p);
    const angle = (i / BURST_COLORS.length) * Math.PI * 2 + Math.PI / 4;
    const dist = 32 * (0.85 + Math.random() * 0.3) * 0.8;
    gsap.to(p, { backgroundColor: pair[1], duration: 0.5, delay: 0.25 });
    gsap.fromTo(p,
      { x: Math.cos(angle) * 3.2, y: Math.sin(angle) * 3.2, opacity: 1, scale: 1 },
      { x: Math.cos(angle + shift) * dist, y: Math.sin(angle + shift) * dist, scale: 0, duration: 0.5 + Math.random() * 0.2, delay: 0.25, ease: "expo.out", onComplete: () => p.remove() });
    gsap.to(p, { opacity: 0, duration: 0.12, delay: 0.6, ease: "power1.in" });
  });
}

function initLike() {
  $("#like-btn").addEventListener("click", () => {
    if (!engWorkId) return;
    const key = "pf_like_" + engWorkId;
    const liked = localStorage.getItem(key) === "1";
    if (liked) {
      localStorage.removeItem(key);
      updateLikeUI(false, false);
      sfx("click");
    } else {
      localStorage.setItem(key, "1");
      updateLikeUI(true, true);
      likeBurst();
      sfx("open");
    }
  });
}

function getComments() {
  try { return JSON.parse(localStorage.getItem("pf_comments_" + engWorkId) || "[]"); } catch (e) { return []; }
}

function renderComments() {
  const list = $("#comment-list");
  const items = engWorkId ? getComments() : [];
  $("#comment-count").textContent = items.length;
  if (!items.length) {
    list.innerHTML = '<p class="comment-empty">还没有评价，来抢沙发～</p>';
    return;
  }
  list.innerHTML = items.map(c => {
    const d = new Date(c.ts);
    const stamp = (d.getMonth() + 1) + "月" + d.getDate() + "日 " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
    return '<li class="comment-item"><div class="c-head"><span class="c-name">' + esc(c.name) + '</span><span>' + stamp + '</span></div><div>' + esc(c.text) + '</div></li>';
  }).join("");
}

function initComments() {
  const send = () => {
    if (!engWorkId) return;
    const textEl = $("#comment-text");
    const text = textEl.value.trim();
    if (!text) return;
    const name = $("#comment-name").value.trim() || "匿名观众";
    const items = getComments();
    items.unshift({ name, text, ts: Date.now() });
    localStorage.setItem("pf_comments_" + engWorkId, JSON.stringify(items.slice(0, 50)));
    textEl.value = "";
    renderComments();
    sfx("click");
  };
  $("#comment-send").addEventListener("click", send);
  $("#comment-text").addEventListener("keydown", e => { if (e.key === "Enter") send(); });
}
function renderStacks() {
  const grid = $("#stacks-grid");
  const stacks = state.postcards || [];
  grid.innerHTML = stacks.map(s => {
    const imgs = s.cards.slice(0, 3).map(c => `<img src="${esc(c.img)}" alt="${esc(s.title)}" loading="lazy">`).join("");
    return `<div class="pstack" data-id="${esc(s.id)}" data-cursor="play" tabindex="0" role="button" aria-label="翻看明信片堆：${esc(s.title)}">
      <div class="pstack-pile">${imgs}</div>
      <p class="pstack-title">${esc(s.title)}</p>
      <p class="pstack-count mono">${esc(s.en)} · ${s.cards.length} 张</p>
    </div>`;
  }).join("");
  $$(".pstack", grid).forEach(el => {
    const s = stacks.find(x => x.id === el.dataset.id);
    el.addEventListener("click", () => openPcViewer(s));
    el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openPcViewer(s); } });
  });
  watchReveals(grid);
}

const pcv = { stack: null, order: [] };

function pcSlotStyle(slot, n) {
  return {
    x: slot * 12,
    y: slot * 9,
    rotation: (slot % 2 === 0 ? -1 : 1) * (1.6 + slot * 1.1),
    scale: 1 - slot * 0.025,
    zIndex: n - slot
  };
}

function applyPcLayout(animate) {
  const cards = $$(".pc-card", $("#pc-stage"));
  const n = cards.length;
  cards.forEach(el => {
    const slot = pcv.order.indexOf(Number(el.dataset.idx));
    const st = pcSlotStyle(slot, n);
    el.style.zIndex = st.zIndex;
    if (typeof gsap !== "undefined") {
      if (animate) gsap.to(el, { x: st.x, y: st.y, rotation: st.rotation, scale: st.scale, duration: 0.45, ease: "power3.out" });
      else gsap.set(el, { x: st.x, y: st.y, rotation: st.rotation, scale: st.scale });
    } else {
      el.style.transform = `translate(${st.x}px, ${st.y}px) rotate(${st.rotation}deg) scale(${st.scale})`;
    }
  });
  $("#pc-counter").textContent = (pcv.order[0] + 1) + " / " + n;
}

function openPcViewer(s) {
  pcv.stack = s;
  pcv.order = s.cards.map((_, i) => i);
  $("#pc-stage").innerHTML = s.cards.map((c, i) => `
    <div class="pc-card" data-idx="${i}">
      <img src="${esc(c.img)}" alt="${esc(c.note)}">
      <div class="pc-note">${esc(c.note)}</div>
    </div>`).join("");
  applyPcLayout(false);
  if (typeof gsap !== "undefined") {
    gsap.from(".pc-card", { y: "+=70", autoAlpha: 0, stagger: 0.06, duration: 0.5, ease: "power3.out" });
  }
  document.body.classList.add("pc-open");
  document.body.style.overflow = "hidden";
  $("#pc-viewer").setAttribute("aria-hidden", "false");
  window.dispatchEvent(new CustomEvent("pc-open"));
  sfx("open");
}

function closePcViewer() {
  document.body.classList.remove("pc-open");
  document.body.style.overflow = "";
  $("#pc-viewer").setAttribute("aria-hidden", "true");
  window.dispatchEvent(new CustomEvent("pc-close"));
  sfx("close");
}

function pcFling(dx, dy) {
  if (!pcv.stack) return;
  const n = pcv.order.length;
  if (n < 2) return;
  const stage = $("#pc-stage");
  const topEl = stage.querySelector(`.pc-card[data-idx="${pcv.order[0]}"]`);
  pcv.order.push(pcv.order.shift());
  $("#pc-counter").textContent = (pcv.order[0] + 1) + " / " + n;
  if (typeof gsap === "undefined" || !topEl) { applyPcLayout(false); return; }
  const dirX = dx < 0 ? -1 : 1;
  const flyX = dirX * Math.max(innerWidth * 0.6, 520);
  const flyY = (dy || 0) * 1.2 - 40;
  topEl.style.zIndex = n + 5;
  gsap.timeline()
    .to(topEl, { x: flyX, y: flyY, rotation: dirX * 22, autoAlpha: 0, duration: 0.42, ease: "power2.out" })
    .add(() => { applyPcLayout(true); sfx("click"); })
    .fromTo(topEl,
      { x: 60 * dirX, y: 70, rotation: dirX * 14, autoAlpha: 0 },
      { x: (n - 1) * 12, y: (n - 1) * 9, rotation: ((n - 1) % 2 === 0 ? -1 : 1) * (1.6 + (n - 1) * 1.1), scale: 1 - (n - 1) * 0.025, autoAlpha: 1, duration: 0.45, ease: "power3.out" });
}

function pcFlip(dir) {
  if (!pcv.stack) return;
  const n = pcv.order.length;
  if (n < 2) return;
  const stage = $("#pc-stage");
  if (dir === 1) {
    pcFling(-1, 0);
  } else {
    const lastEl = stage.querySelector(`.pc-card[data-idx="${pcv.order[pcv.order.length - 1]}"]`);
    pcv.order.unshift(pcv.order.pop());
    $("#pc-counter").textContent = (pcv.order[0] + 1) + " / " + n;
    if (typeof gsap !== "undefined" && lastEl) {
      lastEl.style.zIndex = n + 1;
      applyPcLayout(true);
      lastEl.style.zIndex = n + 1;
      gsap.fromTo(lastEl,
        { x: 430, y: -36, rotation: 16, autoAlpha: 0 },
        { x: 0, y: 0, rotation: -1.6, scale: 1, autoAlpha: 1, duration: 0.45, ease: "power3.out", onComplete: () => applyPcLayout(false) });
      sfx("click");
    } else applyPcLayout(false);
  }
}

function initPcViewer() {
  $$("#pc-viewer [data-pc-close]").forEach(el => {
    if (el.classList.contains("pc-backdrop")) el.addEventListener("pointerdown", closePcViewer);
    else el.addEventListener("click", closePcViewer);
  });
  addEventListener("keydown", e => {
    if (!document.body.classList.contains("pc-open")) return;
    if (e.key === "Escape") closePcViewer();
    if (e.key === "ArrowLeft") pcFlip(1);
    if (e.key === "ArrowRight") pcFlip(-1);
  });
  const stage = $("#pc-stage");
  let dragging = false, startX = 0, startY = 0, dragX = 0, dragY = 0, moved = false;
  stage.addEventListener("pointerdown", e => {
    const card = e.target.closest(".pc-card");
    if (!card) return;
    dragging = true; moved = false; dragX = 0; dragY = 0; startX = e.clientX; startY = e.clientY;
    try { stage.setPointerCapture(e.pointerId); } catch (err) {}
  });
  stage.addEventListener("pointermove", e => {
    if (!dragging) return;
    dragX = e.clientX - startX;
    dragY = e.clientY - startY;
    if (Math.abs(dragX) > 4 || Math.abs(dragY) > 4) moved = true;
    const topEl = stage.querySelector(`.pc-card[data-idx="${pcv.order[0]}"]`);
    if (topEl && typeof gsap !== "undefined") {
      gsap.set(topEl, { x: dragX, y: dragY * 0.55, rotation: -1.6 + dragX * 0.045, autoAlpha: 1 });
    }
  });
  stage.addEventListener("pointerup", () => {
    if (!dragging) return;
    dragging = false;
    if (!moved) { pcFlip(1); return; }
    if (Math.abs(dragX) > 90 || Math.abs(dragY) > 130) {
      pcFling(dragX, dragY);
    } else {
      const topEl = stage.querySelector(`.pc-card[data-idx="${pcv.order[0]}"]`);
      if (topEl && typeof gsap !== "undefined") gsap.to(topEl, { x: 0, y: 0, rotation: -1.6, autoAlpha: 1, duration: 0.55, ease: "elastic.out(1, 0.55)" });
      else applyPcLayout(true);
    }
  });
}
let nleUserScrubbed = false;
function setPlayhead(x) {
  const nle = $(".nle");
  const ph = $(".playhead");
  if (!nle || !ph) return;
  const max = Math.max(0, nle.scrollWidth - 30);
  x = Math.max(0, Math.min(max, x));
  ph.style.transform = `translateX(${x}px)`;
  $$(".clip").forEach(cl => cl.classList.toggle("active", x + 20 >= cl.offsetLeft));
}
window.__nleSync = p => {
  if (nleUserScrubbed) return;
  const nle = $(".nle");
  if (!nle) return;
  const x = p * (nle.scrollWidth - 30);
  setPlayhead(x);
  const target = Math.max(0, x - nle.clientWidth * 0.55);
  nle.scrollLeft += (target - nle.scrollLeft) * 0.25;
};

function initTimeline() {
  const nle = $(".nle");
  const ph = $(".playhead");
  let draggingPh = false;
  const fromEvent = e => {
    const r = nle.getBoundingClientRect();
    return e.clientX - r.left + nle.scrollLeft - 13;
  };
  ph.addEventListener("pointerdown", e => {
    draggingPh = true;
    nleUserScrubbed = true;
    window.__dragCursor = { active: true, x: e.clientX, y: e.clientY };
    try { ph.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
    sfx("click");
  });
  addEventListener("pointermove", e => {
    if (!draggingPh) return;
    setPlayhead(fromEvent(e));
    const r = nle.getBoundingClientRect();
    if (e.clientX > r.right - 60) nle.scrollLeft += 14;
    else if (e.clientX < r.left + 60) nle.scrollLeft -= 14;
    const pr = ph.getBoundingClientRect();
    if (window.__dragCursor) { window.__dragCursor.x = pr.x + pr.width / 2; window.__dragCursor.y = pr.y + pr.height / 2; }
  });
  addEventListener("pointerup", () => {
    if (draggingPh && window.__dragCursor) window.__dragCursor.active = false;
    draggingPh = false;
  });
  $(".nle-ruler").addEventListener("pointerdown", e => {
    nleUserScrubbed = true;
    setPlayhead(fromEvent(e));
    sfx("click");
  });
}
function observeSections() {
  $$("[data-delay]").forEach(el => el.style.setProperty("--d", el.dataset.delay + "s"));
  const hero = $("#hero");
  if (hero) hero.classList.add("in-view");
  const ioSections = new IntersectionObserver(entries => {
    for (const en of entries) {
      en.target.classList.toggle("in-view", en.isIntersecting);
    }
  }, { threshold: 0.12 });
  $$("main section").forEach(s => ioSections.observe(s));
}
function initStars() {
  const cv = document.getElementById("star-canvas");
  const sec = document.getElementById("contact");
  if (!cv || !sec) return;
  const ctx = cv.getContext("2d");
  let W = 0, H = 0, stars = [];
  const mouse = { x: -9999, y: -9999 };
  function resize() {
    const r = cv.getBoundingClientRect();
    W = cv.width = Math.max(1, Math.round(r.width));
    H = cv.height = Math.max(1, Math.round(r.height));
    stars = [];
    const n = Math.max(14, Math.round(W / 46));
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random(), y: Math.pow(Math.random(), 1.35),
        r: 5 + Math.random() * 9,
        ph: Math.random() * Math.PI * 2,
        sp: 0.5 + Math.random() * 0.9,
        glow: 0
      });
    }
  }
  function drawStar(x, y, r, alpha) {
    ctx.save();
    ctx.translate(x, y);
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
      const a = i * Math.PI / 4 - Math.PI / 2;
      const rr = i % 2 === 0 ? r : r * 0.26;
      const px = Math.cos(a) * rr, py = Math.sin(a) * rr;
      if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#FFE98A";
    ctx.shadowColor = "rgba(255, 233, 138, 0.9)";
    ctx.shadowBlur = 18 * alpha;
    ctx.fill();
    ctx.restore();
  }
  let inView = false;
  new IntersectionObserver(en => { inView = en[0].isIntersecting; }, { threshold: 0.05 }).observe(sec);
  sec.addEventListener("pointermove", e => {
    const r = cv.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  sec.addEventListener("pointerleave", () => { mouse.x = -9999; mouse.y = -9999; });
  resize();
  addEventListener("resize", resize);
  const loop = t => {
    requestAnimationFrame(loop);
    if (!inView || document.hidden) return;
    const time = t / 1000;
    ctx.clearRect(0, 0, W, H);
    for (const s of stars) {
      const sx = s.x * W, sy = s.y * H;
      const dx = sx - mouse.x, dy = sy - mouse.y;
      const dist = Math.hypot(dx, dy);
      const near = Math.max(0, 1 - dist / 150);
      s.glow += ((near > 0 ? near : 0) - s.glow) * (near > s.glow ? 0.22 : 0.045);
      const twinkle = 0.5 + 0.5 * Math.sin(time * s.sp + s.ph);
      const alpha = Math.min(1, 0.1 + twinkle * 0.16 + s.glow * 1.05);
      drawStar(sx, sy, s.r * (1 + s.glow * 0.5), alpha);
    }
  };
  requestAnimationFrame(loop);
}
function initParallax() {
  if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined" || reducedMotion) return;
  gsap.registerPlugin(ScrollTrigger);
  $$("[data-speed]").forEach(el => {
    const sp = parseFloat(el.dataset.speed || "0.1");
    gsap.fromTo(el, { y: -sp * 1000 }, {
      y: sp * 1000, ease: "none",
      scrollTrigger: { trigger: el.closest("section") || el, start: "top bottom", end: "bottom top", scrub: 0.5 }
    });
  });
}
async function init() {
  try {
    if (window.PAGE_DATA_READY) await window.PAGE_DATA_READY;
    const pd = window.PAGE_DATA || { site: {}, works: [], postcards: [] };
    let site = pd.site, works = pd.works;
    state.site = site;
    state.works = works;
    if (site && site.soundOn && localStorage.getItem("snd") === null) {
      state.sound = true;
      const sb = $("#btn-sound");
      if (sb) { sb.textContent = "音效 ON"; sb.classList.add("on"); sb.setAttribute("aria-pressed", "true"); }
    }
    if (site && site.music) initMusic(site.music);
    state.postcards = (window.PAGE_DATA && window.PAGE_DATA.postcards) || [];
    fillSite(site);
    fillNotebook(site);
    renderTabs();
    renderWorks();
    renderStacks();
    setPlayhead(0);
    observeSections();
    watchReveals();
    initStars();
    initParallax();
    window.dispatchEvent(new CustomEvent("site-rendered"));

    const shot = new URLSearchParams(location.search).get("shot");
    if (shot) {
      document.body.classList.add("shot-all");
      $$("main section").forEach(s => s.classList.add("in-view"));
      document.documentElement.style.scrollBehavior = "auto";
      if (shot === "modal") openCinema(works[0]);
      else {
        const el = document.getElementById(shot);
        if (el) setTimeout(() => el.scrollIntoView(), 100);
      }
    }
  } catch (err) {
    const box = $("#errbox");
    box.textContent = "内容加载失败：请通过本地服务器或线上地址打开（直接双击 html 文件无法读取数据）。" + err.message;
    box.style.display = "block";
  }
}

initCursor();
initGrain();
initTimecode();
initToggles();
initKonami();
initCinema();
initPlayer();
initTimeline();
initPcViewer();
initBook();
initNotebook();
initDoodle();
initLike();
initComments();
init();