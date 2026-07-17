# Akshay Computers Website

Marketing website for Akshay Computers — CCTV, computer repair, networking and IT services in Chhatrapati Sambhajinagar (Aurangabad).

Built with Next.js (App Router), Tailwind CSS, Framer Motion, Lucide React and React Hook Form.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Project structure

```
├── docs/
│   └── theme.md          # Official brand & theme reference (colors, fonts, gradients)
├── src/
│   ├── app/              # Routes & pages (Next.js App Router) + global styles, favicon
│   │   ├── layout.js     # Root layout: fonts, Header, Footer, metadata, JSON-LD
│   │   ├── page.js       # Homepage
│   │   ├── services/  team/  about/  contact/
│   │   ├── sitemap.js  robots.js  icon.svg
│   │   └── globals.css
│   ├── components/       # Reusable UI components (Header, Hero, cards, form, …)
│   └── lib/              # Shared data & logic
│       ├── data.js       # ALL site content — edit text here
│       └── animations.js # Shared Framer Motion variants
├── .env.example          # Template for environment variables
├── jsconfig.json         # `@/*` import alias → ./src/*
├── tailwind.config.js    # Design tokens (brand colors, glows, animations)
└── next.config.mjs
```

There is no separate backend — the site is fully static and the contact form
posts to Formspree. If server code is ever needed, add API route handlers
under `src/app/api/`.

## Content updates

Almost all site content (services, team, testimonials, FAQs, contact info, stats)
lives in a single file: `src/lib/data.js`. Edit that file to update text across every page.

## Contact form (Formspree)

The contact form posts to Formspree. To activate it:

1. Sign up at https://formspree.io
2. Create a form and copy its endpoint URL (looks like `https://formspree.io/f/abcdwxyz`)
3. Put it in `.env.local`:
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz`
4. Restart the dev server / redeploy

Until then the form shows a "not connected yet" notice and won't submit.

## Pending real content (placeholders in use)

- Founding year ("35+ years" used as stand-in)
- Hero product showcase images — see `public/products/README.md` for the
  exact filenames to drop in; the composition activates automatically
- Red/maroon versions of `public/logo.png` and wordmark PNGs (current files
  are the old orange identity)
- Team photos (initials avatars used) — add an `image` field per member in `src/lib/data.js` and update `src/components/TeamCard.jsx`
- Real customer testimonials
- Formspree form ID (see above)
- Domain in `src/app/layout.js`, `src/app/sitemap.js`, `src/app/robots.js` (currently `akshaycomputers.in`)

## Git / GitHub

Remote: https://github.com/ayush28gadve/AK_Computers (branch `main`).

Auto-push is enabled via a `post-commit` git hook (`.git/hooks/post-commit`):
every `git commit` automatically runs `git push origin main`. Note that git
hooks are local-only — if you clone this repo on another machine, recreate
the hook file there.

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import it at https://vercel.com/new
3. Add the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable
4. Deploy — then attach the custom domain
