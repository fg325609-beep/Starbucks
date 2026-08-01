# Starbucks — Coffeehouse, Reimagined

A 3-page, fully responsive Starbucks-inspired marketing site built with Next.js
(App Router) and TypeScript. Every section ships with scroll-reveal, text, and
image animation — see [Animation approach](#animation-approach) below.

> **Note on the source Figma file:** the shared Figma link could not be opened
> through the Figma API (community files require the file owner to grant
> Editor access before design data can be read). This build uses an original
> layout in the same brand language (deep green, gold, warm cream) instead of
> a pixel copy. If you duplicate the file into your own Drafts and share
> Editor access, the sections can be adjusted to match the exact frames.

## Tech stack

| Layer       | Choice                                                          |
| ----------- | ---------------------------------------------------------------- |
| Framework   | Next.js 16 (App Router), React 19, TypeScript (strict)          |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`)                             |
| Animation   | Framer Motion (text/image/interaction) + AOS (scroll reveal)    |
| Forms       | React Hook Form + Zod (newsletter signup)                       |
| Icons       | lucide-react                                                     |
| Fonts       | Fraunces (display) + Plus Jakarta Sans (body), via `next/font/google` |
| Images      | Unsplash CDN, free-to-use license, see `lib/images.ts`           |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first `npm run dev` or `npm run build` needs
internet access once, to fetch the two Google Fonts — after that they're
cached locally by Next.js.

## Project structure

```
app/
  layout.tsx          Root layout — fonts, Navbar, Footer, AOS init
  page.tsx             Home
  menu/page.tsx         Menu (category filter + product grid)
  about/page.tsx        Our Story
components/
  layout/               Navbar, Footer, NewsletterForm
  ui/                    Shared primitives: AnimatedText, RevealImage,
                         ProductCard, TiltCard, Counter, Marquee, Button…
  home/  menu/  about/   Page-specific sections
lib/
  data.ts               Menu items, testimonials, story timeline, values
  images.ts             Central Unsplash image URL registry
```

## Pages

- **Home** — full-screen hero, bestsellers grid, craft/stats section, rewards
  promo, testimonials, closing CTA with a scrolling ticker.
- **Menu** — category tabs with a shared animated pill indicator, filtered
  product grid, and a drag-to-scroll "seasonal picks" row.
- **Our Story** — centered narrative hero, a 4-chapter alternating timeline,
  a values grid, and a full-bleed closing statement.

## Animation approach

- **AOS** (`data-aos="fade-up"` etc.) handles simple scroll-reveal on
  section-level elements — see `components/AosInit.tsx` for config.
- **Framer Motion** handles anything that needs state or physics: the
  word-by-word `AnimatedText` reveal, `RevealImage`'s fade/scale-in + hover
  zoom, the 3D `TiltCard` hover effect, the animated tab pill on the Menu
  page (`layoutId`), the mobile drawer, and the count-up `Counter`.
- Everything respects `prefers-reduced-motion` (see `globals.css`).

## Customizing

- Swap copy/prices/images in `lib/data.ts` and `lib/images.ts`.
- Brand colors and fonts are CSS variables in `app/globals.css` under
  `@theme inline` — change them once, every component picks it up.
# Starbucks
