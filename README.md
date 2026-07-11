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

## Content updates

Almost all site content (services, team, testimonials, FAQs, contact info, stats)
lives in a single file: `lib/data.js`. Edit that file to update text across every page.

## Contact form (Formspree)

The contact form posts to Formspree. To activate it:

1. Sign up at https://formspree.io
2. Create a form and copy its endpoint URL (looks like `https://formspree.io/f/abcdwxyz`)
3. Put it in `.env.local`:
   `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/abcdwxyz`
4. Restart the dev server / redeploy

Until then the form shows a "not connected yet" notice and won't submit.

## Pending real content (placeholders in use)

- Founding year ("15+ years" used as stand-in)
- Team photos (initials avatars used) — add an `image` field per member in `lib/data.js` and update `components/TeamCard.jsx`
- Real customer testimonials
- Formspree form ID (see above)
- Domain in `app/layout.js`, `app/sitemap.js`, `app/robots.js` (currently `akshaycomputers.in`)

## Deployment (Vercel)

1. Push this repo to GitHub
2. Import it at https://vercel.com/new
3. Add the `NEXT_PUBLIC_FORMSPREE_ENDPOINT` environment variable
4. Deploy — then attach the custom domain
