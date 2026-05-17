import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';

function buildSvg(textColor) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 140" width="2240" height="560">
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

  <text x="160" y="94" font-family="Space Grotesk" font-size="72" font-weight="300" fill="${textColor}">sudo</text>
  <text x="318" y="94" font-family="Space Grotesk" font-size="72" font-weight="700" fill="url(#gw)">.labs</text>
</svg>`;
}

function render(svg, out) {
  const resvg = new Resvg(svg, {
    background: 'transparent',
    font: {
      fontFiles: ['/tmp/SpaceGrotesk-Light.ttf', '/tmp/SpaceGrotesk-Bold.ttf'],
      loadSystemFonts: false,
      defaultFontFamily: 'Space Grotesk',
    },
  });
  const png = resvg.render();
  fs.writeFileSync(out, png.asPng());
  console.log('Saved', out, png.width, 'x', png.height);
}

render(buildSvg('#0a0a0f'), '/mnt/documents/sudo-labs-logo-full-dark.png');
render(buildSvg('#f5f5f7'), '/mnt/documents/sudo-labs-logo-full-light.png');
