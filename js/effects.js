"use strict";
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const shot = new URLSearchParams(location.search).has("shot");
  const fine = matchMedia("(pointer: fine)").matches;
  const hasGsap = typeof gsap !== "undefined";
  const hasST = hasGsap && typeof ScrollTrigger !== "undefined";
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  let lenis = null;
  if (typeof Lenis !== "undefined" && !reduce && !shot) {
    lenis = new Lenis({ lerp: 0.1, smoothWheel: true, autoRaf: false });
    document.documentElement.classList.add("lenis", "lenis-smooth");
    if (hasGsap) {
      gsap.ticker.add(t => lenis.raf(t * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
    if (hasST) lenis.on("scroll", ScrollTrigger.update);

  }

  document.querySelectorAll("a[href^='#']").forEach(a => {
    a.addEventListener("click", e => {
      const href = a.getAttribute("href");
      if (!href || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, { offset: -70, duration: 1.2 });
      else el.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
    });
  });

  addEventListener("cinema-open", () => {
    if (lenis) lenis.stop();
    if (hasGsap && !reduce && !shot) {
      gsap.fromTo(".cinema-screen", { scale: 0.94, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.45, ease: "power3.out", delay: 0.1, clearProps: "scale" });
      gsap.fromTo(".cinema-info > *", { x: 26, autoAlpha: 0 }, { x: 0, autoAlpha: 1, stagger: 0.05, duration: 0.45, ease: "power3.out", delay: 0.18 });
    }
  });
  addEventListener("cinema-close", () => { if (lenis) lenis.start(); });
  addEventListener("pc-open", () => { if (lenis) lenis.stop(); });
  addEventListener("pc-close", () => { if (lenis) lenis.start(); });

  if (!hasGsap) return;

  const SPARK_COLORS = ["#E6392B", "#2B4FD8", "#F2B705", "#3E9B4F", "#221D15"];
  if (!reduce && !shot) {
    addEventListener("pointerdown", e => {
      const box = document.getElementById("sparks");
      if (!box) return;
      const n = 8;
      for (let i = 0; i < n; i++) {
        const d = document.createElement("i");
        d.className = "spark";
        d.style.background = SPARK_COLORS[i % SPARK_COLORS.length];
        d.style.left = e.clientX + "px";
        d.style.top = e.clientY + "px";
        box.appendChild(d);
        const ang = (i / n) * Math.PI * 2 + Math.random() * 0.5;
        const dist = 26 + Math.random() * 36;
        gsap.fromTo(d,
          { x: 0, y: 0, rotation: Math.random() * 180, autoAlpha: 1 },
          { x: Math.cos(ang) * dist, y: Math.sin(ang) * dist - 8, rotation: "+=" + (90 + Math.random() * 180), autoAlpha: 0, duration: 0.5 + Math.random() * 0.25, ease: "power2.out", onComplete: () => d.remove() });
      }
    });
  }

  function setupMagnet(root) {
    if (!fine || reduce) return;
    root.querySelectorAll(".tab, .chip-btn, .btn-wobble, #cinema-close").forEach(el => {
      if (el._magnet) return;
      el._magnet = true;
      const xTo = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });
      el.addEventListener("mousemove", e => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.3);
        yTo((e.clientY - r.top - r.height / 2) * 0.35);
      });
      el.addEventListener("mouseleave", () => gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" }));
    });
  }

  function setupTilt(root) {
    if (!fine || reduce || typeof gsap === "undefined") return;
    root.querySelectorAll(".work.ticket").forEach(card => {
      if (card._tilt) return;
      card._tilt = true;
      const rX = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power3" });
      const rY = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power3" });
      const sc = gsap.quickTo(card, "scale", { duration: 0.4, ease: "power3" });

      const SHADOW_IDLE = "0 2px 0 rgba(34, 29, 21, .05), 0px 20px 32px -10px rgba(34, 29, 21, .48)";
      const shadowFor = (px, py) => `0 2px 0 rgba(34, 29, 21, .05), ${(-px * 22).toFixed(1)}px ${(34 - py * 9).toFixed(1)}px 50px -10px rgba(34, 29, 21, .55)`;
      card.addEventListener("mouseenter", () => {
        gsap.set(card, { transformPerspective: 900 });
        sc(1.04);
        gsap.to(card, { y: -5, duration: 0.3 });
        gsap.to(card, { boxShadow: shadowFor(0, 0), duration: 0.35 });
      });
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        rY(px * 10);
        rX(-py * 10);
        gsap.set(card, { boxShadow: shadowFor(px, py) });
      });
      card.addEventListener("mouseleave", () => {
        const tilt = parseFloat(card.style.getPropertyValue("--tilt")) || 0;
        gsap.to(card, { rotationX: 0, rotationY: 0, scale: 1, y: 0, rotation: tilt, duration: 0.6, ease: "elastic.out(1, 0.6)" });
        gsap.to(card, { boxShadow: SHADOW_IDLE, duration: 0.5, ease: "power2.out" });
      });
    });
  }

  if (shot || reduce) {
    const magnetNow = () => setupMagnet(document);
    addEventListener("site-rendered", magnetNow, { once: true });
    addEventListener("works-rendered", magnetNow);
    if (document.querySelector("#works-grid .work")) magnetNow();
    return;
  }

  function splitFirstText(el) {
    const node = Array.from(el.childNodes).find(n => n.nodeType === 3 && n.textContent.trim());
    if (!node) return [];
    const frag = document.createDocumentFragment();
    const chars = [];
    for (const ch of node.textContent) {
      if (!ch.trim()) { frag.appendChild(document.createTextNode(ch)); continue; }
      const s = document.createElement("span");
      s.className = "ch";
      s.textContent = ch;
      frag.appendChild(s);
      chars.push(s);
    }
    el.replaceChild(frag, node);
    return chars;
  }

  function neutralizeRv(scope) {
    scope.querySelectorAll(".rv").forEach(el => { el.classList.remove("rv"); el.classList.add("in"); });
  }

  function setupHero() {
    const hero = document.getElementById("hero");
    neutralizeRv(hero);
    const chars = splitFirstText(hero.querySelector(".hero-name"));
    const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });
    tl.from("#hero .kicker", { autoAlpha: 0, y: 18, duration: 0.5 })
      .from(chars, { yPercent: 110, rotation: 8, transformOrigin: "0 100%", stagger: 0.07, duration: 0.8, ease: "back.out(1.6)" }, "-=0.2")
      .from(".hero-name-en", { autoAlpha: 0, x: -24, duration: 0.5 }, "-=0.35")
      .from(".hero-role", { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.25")
      .from(".hero-tag", { autoAlpha: 0, y: 20, duration: 0.5 }, "-=0.35")
      .from(".hero-meta .chip", { autoAlpha: 0, y: 14, stagger: 0.08, duration: 0.4 }, "-=0.3")
      .from(".showreel", { autoAlpha: 0, y: 80, rotation: -5, duration: 1 }, "-=0.2")
      .from(".scroll-hint", { autoAlpha: 0, y: 16, duration: 0.5 }, "-=0.5");
    if (hasST) {
      gsap.to(".showreel", { yPercent: -10, ease: "none", scrollTrigger: { trigger: "#hero", start: "top top", end: "bottom top", scrub: true } });
    }
  }

  let firstWorks = true;
  function setupWorks() {
    if (firstWorks) { firstWorks = false; return; }
    const cards = document.querySelectorAll("#works-grid .work");
    gsap.from(cards, {
      scale: 0.92, autoAlpha: 0, y: 26, rotation: () => gsap.utils.random(-4, 4),
      stagger: 0.05, duration: 0.45, ease: "back.out(1.4)", clearProps: "scale"
    });
  }

  function setupNle() {
    const nle = document.querySelector(".nle");
    if (!nle || !hasST) return;
    ScrollTrigger.create({
      trigger: "#exp", start: "top 75%", end: "bottom 35%", scrub: 0.6,
      onUpdate: self => { if (window.__nleSync) window.__nleSync(self.progress); }
    });
  }
  let heroDone = false;
  function boot() {
    if (!heroDone && document.querySelector(".hero-name")) {
      heroDone = true;
      setupHero();
      setupWorks();
      setupNle();
      setupMagnet(document);
      setupTilt(document);
      if (hasST) setTimeout(() => ScrollTrigger.refresh(), 400);
    }
  }

  addEventListener("site-rendered", boot, { once: true });
  if (document.querySelector("#works-grid .work")) boot();
  addEventListener("works-rendered", () => { if (heroDone) { setupWorks(); setupMagnet(document); if (hasST) ScrollTrigger.refresh(); } });
  addEventListener("load", () => { if (hasST) ScrollTrigger.refresh(); });
})();