# React Bits PaperCrumple

Source: https://reactbits.dev/r/PaperCrumple-JS-CSS.json
Documentation: https://reactbits.dev/micro/paper-crumple

Fetched on 2026-10-11. The JS-CSS component and stylesheet are from the official registry.
The component has three small integration props: `autoCrumple` starts crumpling when a sticker is grabbed;
`onFrame` copies the freshly rendered frame into the existing notebook wall texture;
`onControls` exposes a release method so dropping outside the bin restores the paper.
The bridge mounts a temporary React root and disposes it after deletion or restoration.
The supplied crumple/fold/material settings are retained. `imageFit="contain"` keeps drawings complete.

Rebuild from the website directory: `pnpm run build:paper-crumple`.
The generated JS and CSS are checked into `assets/vendor`, so the static site needs no runtime build or CDN.
