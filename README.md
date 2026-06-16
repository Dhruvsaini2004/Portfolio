# Dhruv Saini — Portfolio

A personal portfolio built with **React + TypeScript + Vite**, styled with **Tailwind CSS** and **shadcn/ui** conventions, animated with **Framer Motion**, with a **Swiper** tech-stack marquee.

> Status: Hero section + scaffolding complete. Projects / About / Contact sections coming next.

## Tech stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (HSL design tokens, light theme)
- **shadcn/ui** style primitives (`Button`, `Badge`) via `class-variance-authority`
- **Framer Motion** — staggered entrance + scroll-linked hero animation
- **Swiper** — auto-scrolling tech marquee
- **lucide-react** icons

## Getting started

```bash
# 1. Install dependencies (needs internet)
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build && npm run preview
```

Then open the printed local URL (usually http://localhost:5173).

## Design

- **Theme:** warm paper background, ink text, **vermilion + amber** accents (light only — no dark mode).
- **Aesthetic:** subtle pixel/retro touches (Press Start 2P for accents, pixel grid backdrop, pixel drop-shadows) with generous whitespace.
- **Motion:**
  - Entrance: staggered blur-up reveal of hero elements.
  - Scroll-linked: the hero gently scales, fades, and lifts as you scroll; the grid and glow tints parallax at different speeds.
  - Respects `prefers-reduced-motion` (decorative motion disabled).

## Project structure

```
src/
  components/
    ui/            # shadcn-style primitives (button, badge)
    Navbar.tsx     # sticky nav, solidifies on scroll
    Hero.tsx       # hero w/ scroll-linked + entrance animation
    TechMarquee.tsx# Swiper auto-scroll tech ticker
  data/
    profile.ts     # all copy & data — edit here to update content
  lib/
    utils.ts       # cn() class helper
  index.css        # Tailwind layers + theme tokens
  App.tsx
  main.tsx
```

## Editing content

All text, stats, links, and the tech list live in [`src/data/profile.ts`](src/data/profile.ts). Update that one file to change content across the site.

## Customizing the theme

Colors are defined as HSL CSS variables in [`src/index.css`](src/index.css) under `:root`. Adjust `--primary` (vermilion) and `--accent` (amber) to retheme instantly.
