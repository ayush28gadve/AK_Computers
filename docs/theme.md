# Akshay Computers — Official Brand & Theme Reference

> Single source of truth for the brand identity used on the website
> (akshaycomputers.in / github.com/ayush28gadve/AK_Computers).
> Use this document to create the official logo, advertisements, social media
> creatives, business cards, signage, and any other brand material.
>
> Every value below is taken **exactly** from the live website code
> (`tailwind.config.js`, `app/globals.css`, components). Last synced: July 2026.

---

## 1. Brand Essence

| | |
|---|---|
| **Brand name** | Akshay Computers |
| **Tagline** | Complete IT Solutions for Your Business |
| **Positioning line** | CCTV, Repairs, Networking & Security — One-Stop IT Service Provider |
| **Trust line** | Trusted for 35+ Years |
| **Personality** | Warm, premium, energetic, trustworthy, modern |
| **Look & feel** | Warm luxury light theme — coral orange + cream + gold, soft glows, glassmorphism, flowing gradients |

---

## 2. Color Palette (EXACT VALUES)

### 2.1 Primary Brand Colors

| Name | Hex | RGB | Role |
|---|---|---|---|
| **Coral Orange** | `#FF6B35` | rgb(255, 107, 53) | **PRIMARY brand color.** Logo, main CTAs, links, icons, accents |
| **Golden Orange** | `#FFA500` | rgb(255, 165, 0) | Secondary orange, gradient partner, secondary icons |
| **Bright Gold** | `#FFD700` | rgb(255, 215, 0) | Gradient endpoint, stars, premium highlights |
| **Deep Charcoal** | `#2B2B2B` | rgb(43, 43, 43) | Primary text, dark surfaces (footer), text on gold |

### 2.2 Supporting Warm Tones

| Name | Hex | RGB | Role |
|---|---|---|---|
| Burnt Orange | `#E85D3F` | rgb(232, 93, 63) | Darker orange accent, required-field marks, email CTA |
| Soft Peach | `#FFB366` | rgb(255, 179, 102) | Light accent, links on dark surfaces (footer hover) |
| Apricot | `#FFCC99` | rgb(255, 204, 153) | Section background tints (used at 20% opacity) |
| Warm Gold | `#D4A574` | rgb(212, 165, 116) | Muted gold accent, testimonial hover |
| Soft Tan | `#E8D5C4` | rgb(232, 213, 196) | Subtle warm neutral |

### 2.3 Backgrounds (never pure white)

| Name | Hex | RGB | Role |
|---|---|---|---|
| **Warm Cream** | `#FFFEF7` | rgb(255, 254, 247) | **Main page background** (use instead of white) |
| Peach Mist | `#FFE5CC` | rgb(255, 229, 204) | Hero mesh gradient mid-tone |
| Off-White | `#FAFAFA` | rgb(250, 250, 250) | Alternate light surface |
| Cloud White | `#F5F5F5` | rgb(245, 245, 245) | Alternate light surface |
| Card White | `rgba(255,255,255,0.70)` | white @ 70% | Glassmorphic card surface (over cream) |

### 2.4 Text Colors

| Name | Hex | RGB | Role |
|---|---|---|---|
| Deep Charcoal | `#2B2B2B` | rgb(43, 43, 43) | Headings, primary text |
| Soft Charcoal | `#4A4A4A` | rgb(74, 74, 74) | Body copy, subtitles |
| Muted Gray | `#7A7A7A` | rgb(122, 122, 122) | Placeholders, fine print |
| White | `#FFFFFF` | rgb(255, 255, 255) | Text on orange gradients & dark surfaces |

### 2.5 "Gemini" Rainbow Accents (sparingly — divider lines only)

| Name | Hex | RGB |
|---|---|---|
| Gemini Cyan | `#00D4FF` | rgb(0, 212, 255) |
| Gemini Purple | `#A855F7` | rgb(168, 85, 247) |
| Gemini Pink | `#F5A98D` | rgb(245, 169, 141) |

> **Print note:** Convert RGB→CMYK in your design tool at export time.
> Approximate CMYK for the primary: Coral Orange #FF6B35 ≈ C0 M58 Y79 K0.

---

## 3. Gradient Recipes (EXACT CSS)

These gradients ARE the brand. Use them exactly.

### 3.1 Brand Text Gradient (logo wordmark, headings)
```css
background: linear-gradient(90deg, #FF6B35, #FFA500, #FFD700);
/* website version is animated: background-size: 200% auto, shifting 8s */
```

### 3.2 Primary Button / CTA Gradient (white text on top)
```css
background: linear-gradient(90deg, #FF6B35, #FFA500);
```

### 3.3 Gold Button Gradient (charcoal #2B2B2B text on top)
```css
background: linear-gradient(90deg, #FFA500, #FFD700);
```

### 3.4 Rainbow Divider Line (thin 1px lines only)
```css
background: linear-gradient(90deg, #FF6B35, #FFD700, #F5A98D, #FF6B35);
```

### 3.5 Hero / Poster Background Mesh
```css
background: radial-gradient(at 20% 50%, #FFFEF7 0%, #FFE5CC 50%, #FFFEF7 100%);
```

### 3.6 Avatar / Badge Ring (circular logos, profile frames)
```css
background: conic-gradient(from 0deg, #FF6B35, #FFD700, #FFB366, #FF6B35);
```

### 3.7 Full Gemini Gradient (rare, decorative only)
```css
background: linear-gradient(135deg, #FF6B35, #FFD700, #00D4FF, #A855F7, #F5A98D);
```

---

## 4. Typography

| Use | Font | Weights used | Fallback |
|---|---|---|---|
| **Headings / logo wordmark** | **Space Grotesk** | 500, 600, **700 (headings use Bold)** | Inter, sans-serif |
| **Body text** | **Inter** | 400 (regular), 600 (semibold), 700 (bold) | system-ui, sans-serif |

Both fonts are free on Google Fonts — usable in any design tool.

### Type Scale (from the website)

| Element | Size (desktop) | Size (mobile) | Weight | Tracking |
|---|---|---|---|---|
| Hero headline (H1) | 60px | 30–36px | 700 | tight (-0.02em) |
| Page titles (H1 inner) | 48px | 36px | 700 | tight |
| Section titles (H2) | 36px | 30px | 700 | tight |
| Card titles (H3) | 18–24px | 18px | 700 | normal |
| Body | 16–18px | 16px | 400 | normal, line-height 1.6 |
| Small / captions | 14px | 14px | 400–600 | normal |

---

## 5. The Wordmark (current logo treatment)

The site renders the brand name as a two-part wordmark, Space Grotesk Bold:

```
Akshay Computers
──────  ─────────
charcoal  gradient
#2B2B2B   #FF6B35 → #FFA500 → #FFD700 (left to right)
```

- "Akshay" — solid Deep Charcoal `#2B2B2B` (or white `#FFFFFF` on dark/orange backgrounds)
- "Computers" — the brand text gradient (§3.1)
- Single space between words, no other separator, both words capitalized.

**Official logo mark:** the file `public/logo.png` (624×400, transparent
background) — a bold gradient **"A"** (deep red-orange → coral → golden) cut
by a rising orange-gold **swoosh** that sweeps through both legs. This exact
file is the single source of truth for the mark: the website renders it via
`src/components/Logo.jsx` (small, next to the wordmark) and the favicon
`src/app/icon.png` is generated from it. Use `public/logo.png` for all
external brand material.

---

## 6. Signature Effects (what makes it feel premium)

### 6.1 Glow Shadows (exact values)

| Name | CSS box-shadow | Use |
|---|---|---|
| Orange glow | `0 0 20px rgba(255,107,53,0.4)` | Buttons, active elements |
| Orange glow large | `0 0 40px rgba(255,107,53,0.25)` | Card hover auras |
| Gold glow | `0 0 18px rgba(212,165,116,0.4)` | Gold buttons/highlights |
| Peach glow | `0 0 15px rgba(255,179,102,0.3)` | Soft accents, input focus |
| Soft shadow | `0 2px 8px rgba(255,107,53,0.08)` | Resting cards |
| Medium shadow | `0 4px 16px rgba(255,107,53,0.15)` | Header on scroll |
| Premium shadow | `0 12px 40px rgba(255,107,53,0.2)` | Featured elements |

Note: shadows are **orange-tinted**, never plain black — this is a brand signature.

### 6.2 Glassmorphic Card (the standard surface)
```css
background: rgba(255, 255, 255, 0.70);
border: 1px solid rgba(255, 107, 53, 0.15);   /* coral @ 15% */
border-radius: 16px;
backdrop-filter: blur(12px);
box-shadow: 0 2px 8px rgba(255, 107, 53, 0.08);
```

### 6.3 Icon Chips
Icons (Lucide icon set, 2px rounded strokes) sit in soft tinted containers:
```css
background: rgba(255, 107, 53, 0.10);          /* brand color @ 10% */
border: 1px solid rgba(255, 107, 53, 0.30);    /* brand color @ 30% */
border-radius: 12px (square) or 9999px (circle);
color: #FF6B35;                                 /* icon stroke */
```

### 6.4 Corner Radii

| Token | Value |
|---|---|
| Small | 8px |
| Standard (buttons, inputs) | 12px |
| Cards | 16px |
| Large panels | 24px |
| Pills/avatars | fully rounded |

---

## 7. Motion Language (for video ads / animated banners)

| Property | Value |
|---|---|
| Standard duration | 300ms |
| Entrance/reveal | 600ms, fade + rise 24px |
| Standard easing | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Playful easing (buttons) | `cubic-bezier(0.34, 1.56, 0.64, 1)` (slight overshoot) |
| Breathing glow | 2.5s loop, glow 15px → 30px → 15px |
| Float drift | 4s loop, rise 8px and back |
| Gradient shift | 8s loop, background position 0% → 100% → 0% |
| Blob morph | 8s loop, organic border-radius morphing |
| Particles | warm dots (coral/gold/peach/tan), 2–6px, soft glow, slow drift |

Feel: **slow, smooth, luxurious.** Nothing snaps; everything breathes.

---

## 8. Color Usage Rules (contrast-safe combinations)

**Approved text/background pairs:**

| Background | Text |
|---|---|
| Cream `#FFFEF7` / white | Charcoal `#2B2B2B` (body: `#4A4A4A`) |
| Coral→Golden gradient (§3.2) | White `#FFFFFF`, bold |
| Golden→Gold gradient (§3.3) | Charcoal `#2B2B2B`, bold |
| Charcoal `#2B2B2B` (dark surface) | White; links in Soft Peach `#FFB366` |
| Cream | Coral `#FF6B35` for links/accents (bold, 16px+) |

**Do:**
- Use cream `#FFFEF7` as the base — never stark pure-white pages
- Keep orange-tinted (not black) shadows
- Use the gradient direction left→right (90°) for text and buttons
- Give the wordmark generous whitespace

**Don't:**
- Don't put white text on Bright Gold `#FFD700` (fails contrast — use charcoal)
- Don't use small/thin coral text on cream (bold and 16px+ only)
- Don't use the Gemini cyan/purple as fills — thin decorative lines only
- Don't mix in the old themes (navy/neon cyan from previous versions are retired)
- Don't use pure black `#000000` anywhere

---

## 9. Business Details (for ad copy)

| | |
|---|---|
| **Phone / WhatsApp** | +91 7972082364 |
| **WhatsApp link** | https://wa.me/917972082364 |
| **Email** | akggadve@gmail.com |
| **Address** | 5/5/67/1, Anugrah, New Osmanpura, Osmanpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra – 431005 |
| **Hours** | Mon–Sat, 10:00 AM – 8:00 PM (Sunday closed) |
| **Services (short list)** | CCTV Systems · Laptop Repair · Desktop Repair · Networking · Office IT Setup · AMC · Intercom · Accessories · Monitors · Tech Support |
| **Trust stats** | 1000+ Installations · 35+ Years · 24/7 Support · 100% Satisfaction |

> ⚠️ Phone and email are currently marked as *testing* values — confirm before
> printing anything physical.

---

## 10. Quick-Start Recipes

**Logo on light:** wordmark per §5 on cream `#FFFEF7`, optional conic-ring AC monogram.

**Logo on dark:** "Akshay" in white + "Computers" in gradient §3.1, on charcoal `#2B2B2B`.

**Poster/banner background:** hero mesh (§3.5) + 2–3 large blurred blobs of
coral/gold at 15–25% opacity + a few small glowing warm particles.

**CTA button for ads:** gradient §3.2, white bold Space Grotesk text,
12px radius, orange glow `0 0 20px rgba(255,107,53,0.4)`.

**Social post frame:** glassmorphic card (§6.2) over the mesh background, rainbow
divider line (§3.4) under the heading, icon chips (§6.3) for feature bullets.
