import fs from 'fs';
import path from 'path';

// The hero showcase uses ONE composite product image:
//   public/hero-products.png
// (a professionally arranged transparent PNG of CCTV cameras, DVR/NVR,
// router, monitor, laptop, CPU, networking devices, security icon, etc.)
//
// Server-side only: the hero renders the showcase only when the file exists.
export function heroImageExists() {
  return fs.existsSync(path.join(process.cwd(), 'public', 'hero-products.png'));
}
