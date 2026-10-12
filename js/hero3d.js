"use strict";
(function () {
  const holder = document.getElementById("hero-3d");
  const hero = document.getElementById("hero");
  if (!holder || !hero) return;
  document.querySelectorAll('.para-star.reference-doodle').forEach((node, index) => {
    const kind = ["cat", "strawberry", "trumpeter", "drummer", "flowers", "star", "five-star", "blue-outline-star", "yellow-outline-star", "yellow-solid-star", "blue-solid-star", "star-pair"].find(kind => node.classList.contains(kind));
    if (!kind || node.querySelector('.doodle-art')) return;
    const art = document.createElement('span');
    art.className = 'doodle-art ' + kind;
    node.appendChild(art);
    node.style.setProperty('--float-duration', (7 + index % 5) + 's');
    node.style.setProperty('--float-delay', -(index % 7) + 's');
    node.style.setProperty('--doodle-tilt', (-9 + index % 5 * 4) + 'deg');
  });
  const kinds = ["cat", "trumpeter", "strawberry", "flowers", "five-star", "five-star", "blue-solid-star"];
  const sizes = [108, 126, 74, 86, 53, 82, 42];
  const items = kinds.map((kind, index) => {
    const node = document.createElement("i");
    node.className = "hero-doodle";
    if (index === 5) node.dataset.addedDoodle = "1";
    if (index === 6) node.dataset.refinementDoodle = "4";
    node.style.setProperty("--doodle-size", sizes[index] + "px");
    node.style.setProperty("--float-duration", (7 + index * .8) + "s");
    node.style.setProperty("--float-delay", (-index * 1.3) + "s");
    node.style.setProperty("--doodle-tilt", (-8 + index * 4) + "deg");
    const art = document.createElement("span");
    art.className = "doodle-art " + kind;
    node.appendChild(art);
    holder.appendChild(node);
    return node;
  });
  function offsetWithin(element, container, axis) {
    let value = 0;
    for (let ancestor = element; ancestor && ancestor !== container; ancestor = ancestor.offsetParent) {
      value += axis === "x" ? ancestor.offsetLeft : ancestor.offsetTop;
    }
    return value;
  }
  function layoutAnchoredDoodles() {
    document.querySelectorAll('[data-doodle-anchor]').forEach(node => {
      const target = document.querySelector(node.dataset.doodleAnchor);
      node.hidden = !target;
      if (!target) return;
      const section = node.closest('section');
      const small = section.clientWidth < 640;
      const baseSize = parseFloat(node.style.getPropertyValue('--doodle-size'));
      let size = small ? Math.max(18, Math.min(65, baseSize * .55)) : baseSize;
      const targetX = offsetWithin(target, section, 'x');
      const targetY = offsetWithin(target, section, 'y');
      const side = node.dataset.doodleSide;
      let x, y;
      if (side === 'above') {
        x = section.clientWidth * .46;
        y = targetY - 28;
      } else {
        const gutter = side === 'left' ? targetX : section.clientWidth - targetX - target.offsetWidth;
        size = Math.min(size, Math.max(14, gutter - 16));
        const gutterFraction = Number(node.dataset.doodleGutter || (side === 'left' ? .5 : .67));
        x = side === 'left' ? gutter * gutterFraction : targetX + target.offsetWidth + gutter * gutterFraction;
        x = Math.max(size / 2 + 5, Math.min(section.clientWidth - size / 2 - 5, x));
        y = node.dataset.doodleAlign === 'start' ? targetY - 14 : targetY + target.offsetHeight * Number(node.dataset.doodleY || .5);
        // Narrow phone gutters cannot accommodate the tilted ticket edges.
        if (small && node.closest('#works') && node.dataset.refinementDoodle) y = targetY - 26 - size / 2;
      }
      node.style.setProperty('--anchor-size', size + 'px');
      node.style.left = (x - size / 2) + 'px';
      node.style.right = 'auto';
      node.style.top = (y - size / 2) + 'px';
    });
  }
  function layout() {
    layoutAnchoredDoodles();
    const rect = hero.getBoundingClientRect();
    const wrap = document.getElementById("book3d-wrap");
    if (!wrap) return;
    // Use stable document layout, not the moving camera/page projection.
    // Independent slots prevent two decorations falling into the same gutter.
    let bookTop = 0;
    for (let ancestor = wrap; ancestor && ancestor !== hero; ancestor = ancestor.offsetParent) {
      bookTop += ancestor.offsetTop;
    }
    const bookBottom = bookTop + wrap.offsetHeight;
    const small = rect.width < 640;
    const positions = [
      [rect.width * .86, 180],
      [rect.width * .13, bookBottom + 24],
      [rect.width * .84, bookBottom + 38],
      [rect.width * .30, bookBottom + 32],
      [rect.width * .85, 335],
      [Math.max(29, rect.width * .085 - Math.max(0, 1280 - rect.width) * .12), bookTop + wrap.offsetHeight * .30],
      document.getElementById('notebook').classList.contains('opened')
        ? [rect.width * .94, bookTop - 50]
        : [rect.width * .83, bookTop + wrap.offsetHeight * .45]
    ];
    items.forEach((node, i) => {
      node.hidden = small && (i === 2 || i === 3);
      const size = small ? sizes[i] * .55 : (i === 5 && rect.width < 1000 ? 60 : sizes[i]);
      node.style.setProperty("--doodle-size", size + "px");
      let [x, y] = positions[i];
      if (small) {
        if (i === 0) { x = rect.width - 48; y = bookTop - 48; }
        if (i === 1) { x = 54; y = bookBottom + 22; }
        if (i === 4) { x = rect.width - 40; y = bookBottom + 22; }
        if (i === 5) { x = 29; y = bookTop + wrap.offsetHeight * .30; }
        if (i === 6) { x = rect.width - 28; y = bookTop - 115; }
      }
      x = Math.max(size / 2 + 6, Math.min(rect.width - size / 2 - 6, x));
      y = Math.min(rect.height - size / 2 - 10, y);
      node.style.left = (x - size / 2) + "px";
      node.style.top = (y - size / 2) + "px";
    });
    holder.dataset.doodleCount = small ? "5" : "7";
  }
  const asset = new Image();
  asset.onload = () => { holder.dataset.doodleState = "ready"; };
  asset.onerror = () => { holder.dataset.doodleState = "unavailable"; };
  asset.src = "assets/floating-doodles.png";
  const observer = new ResizeObserver(layout);
  [hero, document.getElementById('works'), document.getElementById('gallery'), document.getElementById('about')].filter(Boolean).forEach(section => observer.observe(section));
  window.addEventListener("book-layout", layout);
  window.addEventListener("site-rendered", layout);
  window.addEventListener("works-rendered", layout);
  window.addEventListener("resize", layout);
  layout();
  setTimeout(layout, 700);
})();
