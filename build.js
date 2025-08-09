// build.js
import esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// Loader para que los .svg se importen como string
const svgLoader = { '.svg': 'text' };

// Asegurar carpeta dist
fs.mkdirSync('dist', { recursive: true });

// Build de code.js
await esbuild.build({
  entryPoints: ['src/code.js'],
  bundle: true,
  platform: 'node',
  format: 'iife',
  outfile: 'dist/code.js',
  loader: svgLoader,
  sourcemap: true
});

// Copiar manifest.json e index.html
fs.copyFileSync('manifest.json', path.join('dist', 'manifest.json'));
fs.copyFileSync('src/index.html', path.join('dist', 'index.html'));

console.log('Build completado. Archivos generados en /dist');
