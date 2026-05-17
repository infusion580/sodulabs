import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';

const svg = fs.readFileSync('/tmp/logo-clean.svg');
const resvg = new Resvg(svg, {
  fitTo: {
    mode: 'width',
    value: 1024,
  },
  background: 'transparent',
});
const pngData = resvg.render();
fs.writeFileSync('/mnt/documents/sudo-labs-logo.png', pngData.asPng());
console.log('PNG saved to /mnt/documents/sudo-labs-logo.png');
