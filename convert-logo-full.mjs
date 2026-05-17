import { Resvg } from '@resvg/resvg-js';
import opentype from 'opentype.js';
import fs from 'fs';

const buf = fs.readFileSync('/tmp/SpaceGrotesk.ttf');
const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));

// Try variation
try { font.variation.set({ wght: 300 }); } catch (e) { console.log('no variation:', e.message); }

function textPath(text, x, y, size, weight) {
  if (font.variation?.set) {
    try { font.variation.set({ wght: weight }); } catch {}
  }
  const p = font.getPath(text, x, y, size);
  return { d: p.toPathData(2), width: font.getAdvanceWidth(text, size) };
}

function buildSvg(textColor) {
  const fontSize = 76;
  const baseY = 100;
  const startX = 168;
  const sudo = textPath('sudo', startX, baseY, fontSize, 300);
  const labs = textPath('.labs', startX + sudo.width + 2, baseY, fontSize, 700);
  const totalW = Math.ceil(startX + sudo.width + 2 + labs.width + 20);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW} 140" width="${totalW*4}" height="560">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="140" y2="140" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="55%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
    <linearGradient id="gw" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#c084fc"/>
      <stop offset="55%" stop-color="#8b5cf6"/>
      <stop offset="100%" stop-color="#6d28d9"/>
    </linearGradient>
  </defs>
  <g transform="translate(8,8) scale(2.0)">
    <circle cx="32" cy="32" r="29" stroke="url(#g)" stroke-width="1.25" opacity="0.4" fill="none"/>
    <path d="M42 22 C 42 17, 36 15, 30 15 C 23 15, 19 18, 19 23 C 19 28, 24 30, 30 32 C 36 34, 42 36, 42 41 C 42 47, 36 49, 30 49 C 23 49, 19 46, 19 41"
          stroke="url(#g)" stroke-width="3" stroke-linecap="square" fill="none"/>
    <rect x="44" y="45" width="8" height="3" fill="url(#g)"/>
  </g>
  <path d="${sudo.d}" fill="${textColor}" opacity="0.92"/>
  <path d="${labs.d}" fill="url(#gw)"/>
</svg>`;
}

function render(svg, out) {
  const resvg = new Resvg(svg, { background: 'transparent' });
  const png = resvg.render();
  fs.writeFileSync(out, png.asPng());
  console.log('Saved', out, png.width, 'x', png.height);
}

render(buildSvg('#0a0a0f'), '/mnt/documents/sudo-labs-logo-full-dark.png');
render(buildSvg('#f5f5f7'), '/mnt/documents/sudo-labs-logo-full-light.png');
