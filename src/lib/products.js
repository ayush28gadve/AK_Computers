import fs from 'fs';
import path from 'path';

// Hero product-showcase manifest. Each slot renders only when its PNG exists
// in public/products/ — drop in transparent product renders with these exact
// filenames and they appear automatically in the composition.
//
// pos: absolute-position classes inside the square showcase canvas
// z:   stacking depth (higher = closer to viewer)
// depth: parallax factor (0 = static background, 1 = strongest scroll drift)
// delay: fade-in + float stagger in seconds
// rotate: idle rotation amplitude in degrees
// glow: adds a soft maroon halo behind the item (use sparingly)
export const productSlots = [
  {
    file: 'monitor.png',
    alt: 'Desktop monitor',
    pos: 'left-[21%] top-[16%] w-[58%]',
    z: 10,
    depth: 0.25,
    delay: 0.1,
    rotate: 0,
  },
  {
    file: 'laptop.png',
    alt: 'Laptop',
    pos: 'left-[-2%] bottom-[4%] w-[46%]',
    z: 30,
    depth: 0.6,
    delay: 0.25,
    rotate: 1.5,
  },
  {
    file: 'cpu-tower.png',
    alt: 'Desktop CPU cabinet',
    pos: 'right-[2%] bottom-[6%] w-[24%]',
    z: 20,
    depth: 0.45,
    delay: 0.35,
    rotate: 0,
  },
  {
    file: 'dome-camera.png',
    alt: 'Dome CCTV camera',
    pos: 'left-[4%] top-[2%] w-[20%]',
    z: 30,
    depth: 0.8,
    delay: 0.45,
    rotate: 2.5,
  },
  {
    file: 'bullet-camera.png',
    alt: 'Bullet CCTV camera',
    pos: 'right-[0%] top-[5%] w-[26%]',
    z: 30,
    depth: 0.7,
    delay: 0.55,
    rotate: 2,
  },
  {
    file: 'ptz-camera.png',
    alt: 'PTZ security camera',
    pos: 'right-[26%] top-[-4%] w-[18%]',
    z: 5,
    depth: 0.5,
    delay: 0.65,
    rotate: 2,
  },
  {
    file: 'dvr.png',
    alt: 'DVR / NVR recorder',
    pos: 'left-[0%] top-[40%] w-[30%]',
    z: 20,
    depth: 0.4,
    delay: 0.5,
    rotate: 0,
  },
  {
    file: 'network-switch.png',
    alt: 'Network switch',
    pos: 'left-[32%] bottom-[-2%] w-[34%]',
    z: 40,
    depth: 0.55,
    delay: 0.6,
    rotate: 0,
  },
  {
    file: 'router.png',
    alt: 'Wi-Fi router',
    pos: 'right-[18%] bottom-[24%] w-[24%]',
    z: 35,
    depth: 0.65,
    delay: 0.7,
    rotate: 1.5,
  },
  {
    file: 'accessories.png',
    alt: 'Computer accessories',
    pos: 'left-[38%] top-[52%] w-[20%]',
    z: 25,
    depth: 0.5,
    delay: 0.8,
    rotate: 1,
  },
  {
    file: 'shield.png',
    alt: 'Security shield',
    pos: 'left-[42%] top-[-2%] w-[16%]',
    z: 45,
    depth: 0.9,
    delay: 0.9,
    rotate: 3,
    glow: true,
  },
  {
    file: 'cables.png',
    alt: 'Networking cables',
    pos: 'right-[4%] top-[44%] w-[18%]',
    z: 15,
    depth: 0.35,
    delay: 0.75,
    rotate: 1,
  },
];

// Server-side only: filter the manifest to slots whose PNG actually exists.
export function getAvailableProducts() {
  const dir = path.join(process.cwd(), 'public', 'products');
  if (!fs.existsSync(dir)) return [];
  return productSlots.filter((slot) => fs.existsSync(path.join(dir, slot.file)));
}
