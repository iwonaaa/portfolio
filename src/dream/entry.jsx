import React from 'react';
import { createRoot } from 'react-dom/client';
import rough from 'roughjs';
import { Button } from '../components/ui/button';

// One shared palette for DOM, drawings and the notebook's canvas textures.
window.DREAM_PALETTE = { rose: '#95677d', blue: '#8296b8', lavender: '#b5a8cd', green: '#91a182', yellow: '#d3bd85', ink: '#473e49', paper: '#fff9ef', soft: '#776c79' };
window.rough = rough;
const SVG = 'http://www.w3.org/2000/svg';
function drawHeading(element, index) {
  if (element.dataset.dreamDrawn) return;
  element.dataset.dreamDrawn = 'true';
  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('viewBox', '0 0 320 22');
  svg.setAttribute('aria-hidden', 'true');
  const rc = rough.svg(svg);
  svg.appendChild(rc.curve([[4, 13], [60, 7], [113, 15], [168, 8], [218, 13], [280, 7], [313, 11]], { seed: 43 + index, roughness: 1.4, strokeWidth: 2.6, stroke: window.DREAM_PALETTE.rose, bowing: 1.4 }));
  element.replaceChildren(svg);
}
function drawTicket(element, index) {
  if (element.dataset.dreamDrawn) return;
  element.dataset.dreamDrawn = 'true';
  const svg = document.createElementNS(SVG, 'svg');
  svg.setAttribute('viewBox', '0 0 320 440');
  svg.setAttribute('preserveAspectRatio', 'none');
  svg.setAttribute('aria-hidden', 'true');
  svg.classList.add('dream-ticket-lines');
  const rc = rough.svg(svg);
  svg.appendChild(rc.rectangle(5, 5, 310, 430, { seed: 30 + index, roughness: 1.2, strokeWidth: 1.2, stroke: '#aa91a3', bowing: .8 }));
  element.appendChild(svg);
}
function HeroActions() {
  const copy = window.PAGE_DATA?.site?.copy || {};
  return <div className="dream-actions">
    <Button className="dream-button" onClick={() => document.querySelector('#top nav a[href="#works"]')?.click()}>
      {copy.heroWorksButton || '看看我的作品'} <span aria-hidden="true">↗</span>
    </Button>
    <Button variant="ghost" className="dream-button dream-button-light" onClick={() => document.querySelector('#top nav a[href="#contact"]')?.click()}>
      {copy.heroContactButton || '与我联系'}
    </Button>
  </div>;
}
const actionRoots = new WeakMap();
function mountDream() {
  document.querySelectorAll('.u-squiggle').forEach(drawHeading);
  document.querySelectorAll('.ticket').forEach(drawTicket);
  const root = document.getElementById('dream-actions-root');
  if (root) {
    if (!actionRoots.has(root)) actionRoots.set(root, createRoot(root));
    actionRoots.get(root).render(<HeroActions />);
  }
}
window.addEventListener('site-rendered', mountDream);
window.addEventListener('works-rendered', mountDream);
window.addEventListener('DOMContentLoaded', mountDream);
if (document.readyState !== 'loading') mountDream();
