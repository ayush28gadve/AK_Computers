# Akshay Computers — Official Brand & Theme Reference

> Single source of truth for the brand identity used on the website
> (akshaycomputers.in / github.com/ayush28gadve/AK_Computers).
> Use this document to create the official logo, advertisements, social media
> creatives, business cards, signage, and any other brand material.
>
> Every value below is taken **exactly** from the live website code
> (`tailwind.config.js`, `src/app/globals.css`, components). Last synced: July 2026.
> **Identity v2 — premium maroon/red, traditional corporate.** (The previous
> orange identity is retired.)

---

## 1. Brand Essence

| | |
|---|---|
| **Brand name** | Akshay Computers |
| **Tagline** | Complete IT Solutions for Your Business |
| **Positioning line** | CCTV, Repairs, Networking & Security — One-Stop IT Service Provider |
| **Trust line** | Trusted for 35+ Years |
| **Personality** | Traditional, premium, corporate, elegant, trustworthy, established |
| **Look & feel** | Warm off-white surfaces, deep maroon accents, serif headings, restrained shadows — the identity of a well-established company, not a startup |

---

## 2. Color Palette (EXACT VALUES)

**Rule zero: red is an accent, never a flood.** Backgrounds stay off-white,
text stays dark; maroon/red appears only in buttons, links, icons, highlights
and active states.

### 2.1 Primary Brand Colors

| Name | Hex | RGB | Role |
|---|---|---|---|
| **Deep Maroon** | `#8B1E1E` | rgb(139, 30, 30) | **PRIMARY brand color.** Buttons, links, icons, active states |
| Maroon Dark | `#6B1414` | rgb(107, 20, 20) | Button hover state |
| **Dark Red** | `#A52A2A` | rgb(165, 42, 42) | Secondary accent, gradient partner |
| **Soft Crimson** | `#C0392B` | rgb(192, 57, 43) | Tertiary accent, highlights, stars |

### 2.2 Supporting Tones

| Name | Hex | RGB | Role |
|---|---|---|---|
| Blush | `#F0DEDA` | rgb(240, 222, 218) | Section background tint (used at 20% opacity) |
| Rose Light | `#E8B4AD` | rgb(232, 180, 173) | Light accent on dark surfaces (footer link hover) |
| Warm Gold | `#D4A574` | rgb(212, 165, 116) | Occasional warm neutral accent (particles) |

### 2.3 Backgrounds (never pure white)

| Name | Hex | RGB | Role |
|---|---|---|---|
| **Warm White** | `#FAF8F6` | rgb(250, 248, 246) | **Main page background** |
| Blush Mist | `#F3E4E0` | rgb(243, 228, 224) | Hero mesh gradient mid-tone |
| Card White | `rgba(255,255,255,0.85)` | white @ 85% | Card surface (over warm white) |

### 2.4 Text & Border Colors

| Name | Hex | RGB | Role |
|---|---|---|---|
| Charcoal Black | `#2C2C2C` | rgb(44, 44, 44) | Headings, primary text, dark surfaces (footer) |
| Soft Charcoal | `#4A4A4A` | rgb(74, 74, 74) | Body copy, subtitles |
| Muted Gray | `#7A7A7A` | rgb(122, 122, 122) | Placeholders, fine print |
| Light Warm Grey | `#E5E5E5` | rgb(229, 229, 229) | Card borders, dividers |
| White | `#FFFFFF` | — | Text on maroon/crimson and dark surfaces |

> **Print note:** Deep Maroon #8B1E1E ≈ C0 M78 Y78 K45 (verify in your print tool).
> Avoid bright or neon reds in any material.

---

## 3. Gradient Recipes (EXACT CSS)

Gradients are **minimal and subtle** in this identity — never rainbow, never animated flash.

### 3.1 Brand Text Gradient (major headings)
```css
background: linear-gradient(90deg, #8B1E1E, #C0392B);
/* static — no animation */
```

### 3.2 Primary CTA Gradient (white text on top)
```css
background: linear-gradient(90deg, #8B1E1E, #A52A2A);
```

### 3.3 Divider Line (thin 1px)
```css
background: linear-gradient(90deg, #8B1E1E, #C0392B, #8B1E1E);
```

### 3.4 Poster / Hero Background Mesh
```css
background: radial-gradient(at 20% 50%, #FAF8F6 0%, #F3E4E0 50%, #FAF8F6 100%);
```

### 3.5 Avatar / Badge Ring (circular frames)
```css
background: conic-gradient(from 0deg, #8B1E1E, #C0392B, #E8B4AD, #8B1E1E);
```

---

## 4. Typography

| Use | Font | Weights | Fallback |
|---|---|---|---|
| **Headings / branding** | **Playfair Display** (premium serif) | 500, 600, **700** | Georgia, serif |
| **Body text** | **Inter** (modern sans) | 400, 600, 700 | system-ui, sans-serif |

Both are free on Google Fonts. The serif/sans pairing is the core of the
premium, established feel — serif for gravitas, sans for readability.

### Type Scale

| Element | Desktop | Mobile | Weight |
|---|---|---|---|
| Hero headline (H1) | 60px | 30–36px | 700 serif |
| Page titles | 48px | 36px | 700 serif |
| Section titles (H2) | 36px | 30px | 700 serif |
| Card titles (H3) | 18–24px | 18px | 700 serif |
| Body | 16–18px | 16px | 400 sans, line-height 1.6 |
| Small / captions | 14px | 14px | 400–600 sans |

---

## 5. The Logo & Wordmark (Identity v2 — official vector assets)

**The mark:** a maroon "A" — full left stroke, detached right stroke — cut by
a rising swoosh. Gradient runs bottom-left `#8B1E1E` → `#A52A2A` → top-right
`#C0392B`. All masters live in **`public/brand/`** (see its README for the
full file list): icon (gradient / mono / white), horizontal lockup, full
lockup with tagline, and a 6%-opacity watermark for documents.

**The wordmark:** typeset, not an image — "Akshay" in Charcoal + "Computers"
in Deep Maroon, Playfair Display Bold (Georgia fallback). On dark surfaces:
"Akshay" white + "Computers" in Rose Light `#E8B4AD`.

**Tagline lockup:** COMPLETE IT & SECURITY SOLUTIONS — letter-spaced caps,
Soft Charcoal `#4A4A4A`.

Placement: gradient/mono icon on light backgrounds; white icon on dark.
Favicon (`src/app/icon.svg`) uses the same geometry.

---

## 6. Surfaces, Shadows & Effects

### 6.1 Shadows (maroon-tinted, restrained — never neon glows)

| Name | CSS box-shadow | Use |
|---|---|---|
| Soft | `0 2px 8px rgba(139,30,30,0.06)` | Resting cards |
| Medium | `0 4px 16px rgba(139,30,30,0.10)` | Buttons, header on scroll |
| Premium | `0 12px 40px rgba(139,30,30,0.12)` | Featured elements, hover |
| Accent maroon | `0 6px 20px rgba(139,30,30,0.18)` | Card hover |
| Accent crimson | `0 6px 18px rgba(192,57,43,0.16)` | Secondary hover |

### 6.2 Standard Card
```css
background: rgba(255, 255, 255, 0.85);
border: 1px solid #E5E5E5;              /* light warm grey */
border-radius: 16px;
box-shadow: 0 2px 8px rgba(139, 30, 30, 0.06);
```

### 6.3 Icon Chips
Lucide icons (2px rounded strokes) in soft tinted containers:
```css
background: rgba(139, 30, 30, 0.10);     /* maroon @ 10% */
border: 1px solid rgba(139, 30, 30, 0.30);
border-radius: 12px (square) or 9999px (circle);
color: #8B1E1E;
```

### 6.4 Buttons

| Variant | Style |
|---|---|
| **Primary** | Deep Maroon `#8B1E1E` bg, white bold text, 12px radius; hover → `#6B1414` + slight lift |
| **Secondary** | White bg, 1px maroon border, maroon text; hover → maroon bg, white text |
| **Outline** | Transparent bg, maroon border/text; hover → 5% maroon tint |

### 6.5 Corner Radii
8px (small) · 12px (buttons/inputs) · 16px (cards) · 24px (large panels) · full (pills/avatars)

---

## 7. Motion Language

Restrained and smooth — motion supports elegance, it never shouts.

| Property | Value |
|---|---|
| Standard duration | 300ms |
| Entrance/reveal | 600ms, fade + rise 24px |
| Standard easing | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Shadow pulse (CTAs) | 3s loop, subtle maroon shadow breathing |
| Float drift (icons) | 4s loop, rise 6px |
| Background mesh shift | 12s slow loop |
| Particles | sparse maroon/crimson/rose dots, small, low opacity, slow drift |

---

## 8. Color Usage Rules

**Approved text/background pairs:**

| Background | Text |
|---|---|
| Warm White `#FAF8F6` / white | Charcoal `#2C2C2C` (body: `#4A4A4A`) |
| Deep Maroon `#8B1E1E` | White, bold |
| Soft Crimson `#C0392B` | White, bold |
| Charcoal `#2C2C2C` (footer/dark) | White; links in Rose Light `#E8B4AD` |
| Warm White | Maroon `#8B1E1E` for links/accents |

**Do:**
- Keep backgrounds off-white; use red strictly as accent
- Maroon-tinted (not black) shadows
- Serif for headings, sans for body — always
- Generous whitespace; restrained, minimal gradients

**Don't:**
- Don't saturate large areas in red — no red section backgrounds
- Don't use bright/neon reds anywhere
- Don't use the retired orange palette or animated rainbow gradients
- Don't use pure black `#000000` or pure white `#FFFFFF` page backgrounds

---

## 9. Business Details (for ad copy)

| | |
|---|---|
| **Phone / WhatsApp** | +91 9371619080 |
| **WhatsApp link** | https://wa.me/919371619080 |
| **Email** | akshaycomputers@gmail.com |
| **Address** | 5/5/67/1, Anugrah, New Osmanpura, Osmanpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra – 431005 |
| **Hours** | Mon–Sat, 10:00 AM – 8:00 PM (Sunday closed) |
| **Services (short list)** | CCTV Systems · Laptop Repair · Desktop Repair · Networking · Office IT Setup · AMC · Intercom · Accessories · Monitors · Tech Support |
| **Trust stats** | 1000+ Installations · 35+ Years · 24/7 Support · 100% Satisfaction |

> Team contacts: Prasad Nilangekar +91 9595996295 · Kailash Gadve
> +91 9326201923, gadve1234@gmail.com

---

## 10. Quick-Start Recipes

**Poster/banner background:** hero mesh (§3.4) + 2–3 large blurred maroon/crimson
blobs at 15–25% opacity. Keep it airy — mostly warm white.

**CTA button for ads:** solid Deep Maroon, white bold text (Inter or Playfair),
12px radius, shadow `0 4px 16px rgba(139,30,30,0.10)`.

**Headline treatment:** Playfair Display Bold in Charcoal, with one key phrase
in the maroon→crimson text gradient (§3.1), thin divider line (§3.3) beneath.

**Social post frame:** standard card (§6.2) over the mesh background, maroon
divider under the heading, maroon icon chips (§6.3) for feature bullets.
