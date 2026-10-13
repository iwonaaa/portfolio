import React from 'react';
import { createRoot } from 'react-dom/client';
import PaperCrumple from './PaperCrumple';

// The site stays a static site. React is confined to this temporary effect.
window.portfolioPaperCrumple = (image, onFrame) => {
  const host = document.createElement('div');
  host.setAttribute('aria-hidden', 'true');
  Object.assign(host.style, {
    position: 'fixed', left: '0', top: '0', width: '368px',
    height: '560px', opacity: '0', pointerEvents: 'none', zIndex: '-1'
  });
  document.body.appendChild(host);
  const root = createRoot(host);
  let disposed = false;
  const dispose = () => {
    if (disposed) return;
    disposed = true;
    root.unmount();
    host.remove();
  };
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => { dispose(); reject(new Error('Paper loading timed out')); }, 8000);
    let ready = false;
    let controls;
    root.render(<PaperCrumple
      src={image.src} alt="涂鸦纸张" width={320} height={400}
      sceneHeight={560} releaseBehavior="restore" crumpleAmount={0.85}
      crumpleDuration={0.55} releaseDuration={0.4} foldCount={6}
      foldSharpness={0.6} wrinkleDepth={0.65} creaseStrength={0.18}
      paperColor="#f4f0e8" paperTexture={0.08} draggable returnToOrigin
      imageFit="contain" autoCrumple
      onControls={value => { controls = value; }}
      onFrame={canvas => {
        if (disposed) return;
        if (!ready) { ready = true; clearTimeout(timeout); resolve({ canvas, dispose, release: () => controls?.release() }); }
        onFrame(canvas);
      }}
      onError={error => { clearTimeout(timeout); dispose(); reject(error); }}
    />);
  });
};
