# CLAUDE.md — Building Randal's portfolio with the Cozy Game World design system

You are building Randal's personal portfolio website. The site must feel like **stepping into a cozy video game**, not browsing a normal website — while staying fast, accessible and easy to navigate. Everything you need about the look and feel is in `design-system/`. Read this file fully before writing code.

## 1. Sources of truth (in priority order)

1. `design-system/tokens/tokens.json` — every colour, font, space, radius, shadow, border, duration, easing, breakpoint and size. `tokens/tokens.css` is the same values compiled to CSS custom properties.
2. `design-system/BRAND.md` — the brand book: principles, voice, colour rules and contrast table, type, motion, accessibility, game layer, illustration.
3. `design-system/components/<Name>/README.md` — what each component is for, its props, and its do's and don'ts.
4. `design-system/components/bundle.js` + `bundle.css` + `index.d.ts` — a working **reference implementation** of all 30 components (React 18, plain `createElement`, global `window.Cozy`). Copy its markup, class names and behaviour; re-author it as proper modules.
5. `design-system/brief/CozyPortfolioDesign.md` — Randal's original brief. Use it for intent and for things the design system does not cover yet.

When the brief and the design system disagree, **the design system wins** — it contains Randal's later decisions. Known differences:

- The mascot is **Dumpling the duck**, not a cat or fox (Randal explicitly rejected a cat).
- Extra colours were added so text passes WCAG AA (`cocoa-950`, `terracotta-800`, `sage-700`, `berry-600`, `honey-700`, `sky-700`), plus Night/Dusk surfaces (`plum-*`, `dusk-*`) and wood tones (`wood-400`, `wood-600`). Use them as documented.
- The focus ring is `shadow-focus` (honey band with a cocoa/cream edge), not a plain honey outline, because honey alone is invisible on cream.

## 2. Visual check first

Open `design-system/gallery.html` in a browser (it loads React from jsDelivr). It shows every component live with a Day / Dusk / Night switch. Each `components/<Name>/example.html` shows one component alone. Match what you build to these.

## 3. Recommended stack

Unless Randal asks for something else, use **Vite + React 18 + TypeScript**, with plain CSS (no Tailwind default palette, no UI kit). Static output, deployable to Vercel / Netlify / GitHub Pages. Ask Randal before choosing a different framework (e.g. Astro or Next.js) — the components port to either.

Setup:

1. Copy `design-system/tokens/tokens.css` to `src/styles/tokens.css` and `design-system/components/bundle.css` to `src/styles/components.css`. Import both once in `main.tsx` (tokens first). Keep the `cz-` class names.
2. Port each component from `bundle.js` into `src/components/<Name>.tsx`, typed with the interfaces in `index.d.ts`. Keep the same props, ARIA attributes and class names. Port only the components the pages use; add others as needed.
3. Copy `design-system/icons/*.svg` to `src/assets/icons/` for `<img>` use; for inline, themable icons port the `Icon` component (it draws in `currentColor`).
4. Fonts: Fredoka, Nunito and Pixelify Sans from Google Fonts with `display=swap` (the `@import` is at the top of `tokens.css`; move it to a `<link rel="preconnect">` + `<link>` in `index.html` for speed).
5. Theme: set `data-theme="day|dusk|night"` on `<html>`. Default to Night when `prefers-color-scheme: dark`, otherwise Day. Remember the choice in `localStorage` (wrapped in try/catch).
6. Never hard-code a colour, size or duration: always `var(--token-name)`. If you need a value that does not exist, stop and ask Randal, then add it to `tokens.json` and regenerate `tokens.css` — do not invent one in a component.

## 4. What to build (Randal's plan)

Randal wants a cozy portfolio to show his coding projects to the public, with these pages:

| Page | Randal's sections | Build it as (design-system objects) |
|---|---|---|
| **Home** | Banner, project cards, footer | **Banner** → a scene: `cz-scene` sky gradient with vignette, the site name on a title plate (`TitleScreen` styling, but not a blocking intro), Dumpling waving, a short `DialogueBox` greeting. **Project cards** → an inventory / bookshelf of `ItemCard`s (rarity, icon, 3 stats: stack, role, year). **Footer** → the ground of the world: a sage hill strip with a wooden `Card variant="sign"` holding contact links, plus the Simple view toggle. |
| **Project detail** (one per project, opened from its card) | Project info | An "item screen": `Breadcrumbs` (Home › Workshop › Project), title in `title-48`, `Badge`s for stack, screenshots in `Polaroid` frames, write-up on a `Card variant="parchment"`, links as `Button`s ("Visit site", "View code"). Real URL per project (`/projects/<slug>`). |
| **About** | Banner, paragraph, photo of Randal | A "character sheet": banner scene, Randal's photo in a `Polaroid` (tilted, captioned), his paragraph in a `DialogueBox` (typewriter) or `parchment` card, optional `StatBar`s for skills and a `Timeline` for his journey. |

Global pieces on every page:

- `HUD` at the top: Randal's name, "Found X/Y" stars, mute (off by default), time-of-day toggle, menu. On mobile it goes icon-only.
- Navigation: a pause-menu or `WorldMap` with Home, Workshop (projects) and About, **plus** a plain-link nav that is always keyboard and screen-reader accessible ("Simple view").
- A few hidden stars (collectibles) to click, counted in the HUD, with an `AchievementToast` — stored in `localStorage`, never required to reach content.
- A 404 page: `EmptyState` with sleepy Dumpling and "Oops, you wandered off the map!"

Optional later (from the brief, only if Randal asks): Title/loading screen, Videos (retro TV), Contact mailbox form, Collection page, sound effects.

Note: the brief warns against a generic "hero + three feature cards + footer" layout. Randal's Home has a banner, cards and a footer — keep those, but make them **objects in a scene** as in the table above, with varied tilt and spacing, not three equal boxes in a row.

## 5. Content

- Put project data in `src/data/projects.ts` (`slug, name, rarity, icon, summary, stack, role, year, links, screenshots, body`) and about content in `src/data/about.ts`.
- **Do not invent facts** about Randal or his projects. Use clearly marked placeholders (`TODO: Randal`) and ask him for real names, descriptions, links, screenshots and his photo.
- Copy follows BRAND.md › Voice: a kind game narrator, short sentences, verbs on buttons ("Explore", "Inspect", "Visit site"), no emoji in UI (✦ is the one decorative glyph).

## 6. Non-negotiables (check every page)

- WCAG 2.2 AA: use only the text/ground pairs in BRAND.md's contrast table; every target ≥ 44px; visible `shadow-focus` focus ring; full keyboard use; semantic HTML; alt text on real images; decorative art `aria-hidden`.
- `prefers-reduced-motion`: no parallax, bouncing or ambient loops (already handled in `components.css` — keep that block).
- Sound is off by default and never autoplays.
- No pure black, no pure white, no cold blue/grey, no blurry drop shadows, no sharp corners, no hairline borders.
- Animate only `transform` and `opacity`. Lazy-load images. Aim for a Lighthouse score of 90+ in Performance and Accessibility.
- Core content readable without the game layer (Simple view) and, where feasible, without JavaScript.

## 7. Definition of done

1. `npm run build` succeeds with no TypeScript errors.
2. Every page checked in Day, Dusk and Night, and at 375px, 768px and 1280px wide.
3. Tab through every page: focus is always visible and the order is logical.
4. Lighthouse Accessibility ≥ 90 and no contrast failures.
5. Visual match with `design-system/gallery.html` for every component used.
