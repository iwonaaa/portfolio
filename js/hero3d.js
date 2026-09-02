"use strict";
(function () {
  const holder = document.getElementById("hero-3d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!holder || reduce || typeof THREE === "undefined") return;
  try { init(holder); } catch (err) { holder.style.display = "none"; }

  function init(holder) {
    let w = holder.clientWidth || innerWidth;
    let h = holder.clientHeight || innerHeight;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-w / 2, w / 2, h / 2, -h / 2, 0.1, 100);
    camera.position.z = 10;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setSize(w, h);
    if ("outputColorSpace" in renderer && THREE.SRGBColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace;
    else if ("outputEncoding" in renderer && THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;
    holder.appendChild(renderer.domElement);

    const DOODLES = [
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTUwIDggTDU5IDM4IEw5MSAzOCBMNjUgNTcgTDc0IDg5IEw1MCA2OSBMMjYgODkgTDM1IDU3IEw5IDM4IEw0MSAzOCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNFNjM5MkIiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTUwIDIyIEw1NSA0MSBMNzUgNDEgTDU5IDUzIEw2NSA3MyBMNTAgNjEgTDM1IDczIEw0MSA1MyBMMjUgNDEgTDQ1IDQxIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGN0E2QiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTEyIDc4IEMgMzAgNjAsIDU1IDU1LCA4MiA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMkI0RkQ4IiBzdHJva2Utd2lkdGg9IjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik02NCAzMCBMIDg2IDM2IEwgNzIgNTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzJCNEZEOCIgc3Ryb2tlLXdpZHRoPSI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTggNTAgUSAyMSAyNiAzNCA1MCBUIDYwIDUwIFQgODYgNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U4QTgwMCIgc3Ryb2tlLXdpZHRoPSI3IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTQgNjYgUSAyNyA0OCA0MCA2NiBUIDkyIDY2IiBmaWxsPSJub25lIiBzdHJva2U9IiNGMkM5NEMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9zdmc+",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTU2IDggTCAzMCA1NCBMIDQ4IDU0IEwgNDAgOTIgTCA3MCA0MiBMIDUxIDQyIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U2MzkyQiIgc3Ryb2tlLXdpZHRoPSI2IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTUwIDEwIEMgMjQgMTIsIDEwIDMyLCAxMiA1MiBDIDE0IDc2LCAzNiA5MiwgNTggODggQyA4MCA4NCwgOTIgNjIsIDg4IDQwIEMgODQgMjAsIDY2IDgsIDQ0IDEyIiBmaWxsPSJub25lIiBzdHJva2U9IiMyQjRGRDgiIHN0cm9rZS13aWR0aD0iNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTUwIDE4IEMgMzAgMjAsIDE4IDM2LCAyMCA1NCBDIDIyIDcyLCA0MCA4NCwgNTggODAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhEQTZGRiIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvc3ZnPg==",
      "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZD0iTTI2IDI2IEwgNzQgNzQgTSA3NCAyNiBMIDI2IDc0IiBmaWxsPSJub25lIiBzdHJva2U9IiMzRTlCNEYiIHN0cm9rZS13aWR0aD0iOCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTMyIDIyIEwgNzggNjggTSA3MCAyMiBMIDIyIDcwIiBmaWxsPSJub25lIiBzdHJva2U9IiM4NkRDOTYiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4="
    ];
    const loader = new THREE.TextureLoader();
    const items = [];
    const perKind = innerWidth < 760 ? 1 : 2;
    DOODLES.forEach((uri, di) => {
      const tex = loader.load(uri);
      if ("colorSpace" in tex && THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
      else if ("encoding" in tex && THREE.sRGBEncoding) tex.encoding = THREE.sRGBEncoding;
      for (let k = 0; k < perKind; k++) {
        const size = 56 + Math.random() * 72;
        const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, opacity: 0.85 });
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
        let px = 0, py = 0, tries = 0;
        do {
          px = (Math.random() - 0.5) * w * 0.92;
          py = (Math.random() - 0.5) * h * 0.85;
          tries++;
        } while (tries < 14 && px < -w * 0.02 && py > -h * 0.34 && py < h * 0.34);
        mesh.position.set(px, py, 0);
        mesh.rotation.z = (Math.random() - 0.5) * 0.8;
        mesh.userData = {
          baseX: mesh.position.x,
          baseY: mesh.position.y,
          speed: 0.25 + Math.random() * 0.5,
          amp: 12 + Math.random() * 24,
          phase: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.12,
          depth: 0.4 + (di % 3) * 0.3
        };
        scene.add(mesh);
        items.push(mesh);
      }
    });

    const clock = new THREE.Clock();
    let mx = 0, my = 0, cx = 0, cy = 0;
    addEventListener("mousemove", e => {
      mx = e.clientX / innerWidth - 0.5;
      my = e.clientY / innerHeight - 0.5;
    });
    let visible = true;
    new IntersectionObserver(en => { visible = en[0].isIntersecting; }).observe(holder);

    renderer.setAnimationLoop(() => {
      if (!visible || document.hidden) return;
      const t = clock.getElapsedTime();
      cx += (mx * 36 - cx) * 0.045;
      cy += (-my * 24 - cy) * 0.045;
      for (const m of items) {
        const u = m.userData;
        m.position.y = u.baseY + Math.sin(t * u.speed + u.phase) * u.amp;
        m.position.x = u.baseX + cx * u.depth;
        m.rotation.z += u.rotSpeed * 0.016;
      }
      camera.position.y = cy * 0.5;
      renderer.render(scene, camera);
    });

    addEventListener("resize", () => {
      w = holder.clientWidth || innerWidth;
      h = holder.clientHeight || innerHeight;
      camera.left = -w / 2; camera.right = w / 2;
      camera.top = h / 2; camera.bottom = -h / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    });
  }
})();