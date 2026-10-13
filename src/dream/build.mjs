import { build } from 'esbuild';
await build({ entryPoints: ['src/dream/entry.jsx'], bundle: true, minify: true, format: 'iife', jsx: 'automatic', tsconfig: 'jsconfig.json', outfile: 'assets/vendor/dream-ui.js' });
await build({ entryPoints: ['src/dream/colors.css'], bundle: true, minify: true, outfile: 'assets/vendor/radix-colors.css' });
