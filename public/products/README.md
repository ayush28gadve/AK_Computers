# Hero Product Showcase Images

Drop transparent PNG product renders in this folder with these EXACT
filenames — each one automatically appears in the hero composition
(positions/animations are pre-choreographed in `src/lib/products.js`):

| Filename | Product |
|---|---|
| `monitor.png` | Desktop monitor (largest, center) |
| `laptop.png` | Laptop (front-left) |
| `cpu-tower.png` | Desktop CPU cabinet |
| `dome-camera.png` | Dome CCTV camera |
| `bullet-camera.png` | Bullet CCTV camera |
| `ptz-camera.png` | PTZ camera |
| `dvr.png` | DVR / NVR recorder |
| `network-switch.png` | Network switch |
| `router.png` | Wi-Fi router |
| `accessories.png` | Keyboard/mouse/accessories |
| `shield.png` | Security shield icon (gets a glow) |
| `cables.png` | Networking cables |

## Image requirements

- **Transparent background** (real PNG alpha, not white boxes)
- Product renders, not illustrations or watermarked stock
- 800–1200px on the longest side is ideal
- Compress before adding (e.g. tinypng.com) — aim for < 150 KB each

## Where to get legitimate images

- As an authorized dealer, request marketing/press assets from your
  distributors (Hikvision, CP Plus, Dell, HP, TP-Link partner portals) —
  dealers are typically licensed to use official product renders
- Or licensed marketplaces (Freepik Premium, Adobe Stock) with a commercial license

You don't need all 12 — the composition adapts to whatever subset exists.
Restart the dev server (or rebuild) after adding files.
