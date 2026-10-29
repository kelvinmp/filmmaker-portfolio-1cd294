# Giovanni Neuman — Filmmaker & UGC Portfolio

A dark, vertical-first video portfolio built to prove one thing fast: that the creator can hold attention in the first 3 seconds. It opens with a 3‑2‑1 slate, drops straight into a self-playing phone reel, and every piece of work opens in a fullscreen, TikTok-style player that auto-advances so visitors keep watching.

## What's on the page

- **Hero** — "Stop the scroll." headline next to a phone mock that cycles through reels on its own.
- **The feed** — 9:16 reel cards, filterable by UGC / Commercial / Travel / Food / Lifestyle, each showing its on-screen hook, views and brand.
- **Fullscreen player** — story-style progress bars, auto-advance, swipe / scroll / arrow keys to move, hold or Space to pause.
- **Stats** — views, 3-second hold rate, videos delivered, brands served.
- **Sobre mí** — a short bio written in Spanish.
- **Services** and a **booking form** (Netlify Forms) for brand briefs.

## Editing content

Everything lives in `src/data/portfolio.ts`: name, handle, email, socials, the Spanish bio, stats, brands, services and the reel list. To use real footage, give a reel a `video` URL (MP4/WebM); cards and the player will play it instead of animating the poster. Posters go in `public/img/` and are served through the Netlify Image CDN.

## Tech

TanStack Start (React 19), Tailwind CSS 4, lucide-react icons, Netlify Forms, Netlify Image CDN. Fonts: Anton, Bricolage Grotesque, JetBrains Mono.

## Run locally

```bash
pnpm install
netlify dev   # or: pnpm dev
```

Form submissions only work on a deployed Netlify site (or under `netlify dev`).
