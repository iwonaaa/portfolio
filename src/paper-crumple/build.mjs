import { build } from 'esbuild';
await build({
  entryPoints: ['src/paper-crumple/bridge.jsx'], bundle: true,
  minify: true, format: 'iife', jsx: 'automatic',
  outfile: 'assets/vendor/paper-crumple.js'
});
