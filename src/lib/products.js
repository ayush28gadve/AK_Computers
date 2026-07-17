import fs from 'fs';
import path from 'path';
import { dealProducts } from './data';

// The hero showcase uses ONE composite product image:
//   public/hero-products.png
// (a professionally arranged transparent PNG of CCTV cameras, DVR/NVR,
// router, monitor, laptop, CPU, networking devices, security icon, etc.)
//
// Server-side only: the hero renders the showcase only when the file exists.
export function heroImageExists() {
  return fs.existsSync(path.join(process.cwd(), 'public', 'hero-products.png'));
}

// Server-side only: the "Products We Deal In" list with an `hasImage` flag —
// cards render the transparent PNG from public/products/ when present,
// otherwise a styled icon chip.
export function getDealProducts() {
  const dir = path.join(process.cwd(), 'public', 'products');
  return dealProducts.map((product) => ({
    ...product,
    hasImage: fs.existsSync(path.join(dir, product.image)),
  }));
}
