# DESIGN.md — "Cozy Game World" Portfolio Design System

> Brief for Claude Design: generate a complete design system (tokens, components, patterns, motion, and a sample prototype) for a personal portfolio website. The site must feel like **stepping into a cozy video game**, not browsing a normal website.

---

## 1. Vision

**One-line concept:** A warm, hand-crafted little world you *explore*, where the portfolio is the game and the visitor is the player.

**Reference feelings:** Stardew Valley, Animal Crossing, Spiritfarer, A Short Hike, Unpacking, Cozy Grove, lo-fi study rooms, Studio Ghibli interiors, a rainy evening with a cup of tea.

**Emotional goals (in priority order):**
1. **Safe & warm** — nothing sharp, nothing rushed, nothing stressful.
2. **Curious** — visitors want to click everything to see what happens.
3. **Rewarded** — small delights and surprises for exploring.
4. **Memorable** — they remember it as "that game-like portfolio."

**Anti-goals (do NOT do these):**
- No corporate SaaS look, no generic hero + three feature cards + footer template.
- No cold blues/greys, pure black, or pure white.
- No harsh drop shadows, sharp 90° corners, or thin hairline borders.
- No aggressive, flashy, or fast animation. No dark patterns, no popups.
- No stock-photo energy. Everything should look illustrated or hand-made.

---

## 2. Core Design Principles

1. **Everything is an object, not a section.** Content lives in things you'd find in a cozy room or village (a desk, a bookshelf, a mailbox, a notice board, a cassette player), not in generic page blocks.
2. **Chunky and tactile.** Thick outlines, rounded shapes, soft depth. UI should look like it could be picked up.
3. **Every interaction gives feedback.** Hover, press, and discover states all react (squish, bounce, glow, sound cue, sparkle).
4. **Progress and discovery over navigation.** Prefer exploration, collectibles, and quests to a plain menu bar, while always keeping a clear, accessible fallback navigation.
5. **Warmth through light.** Use glows, lamp light, golden-hour gradients, and soft vignettes to create atmosphere.
6. **Slow, gentle pacing.** Easing is soft and springy; nothing snaps or flashes.
7. **Playful but usable.** Game feel never overrides clarity, accessibility, or performance.

---

## 3. Visual Style

- **Overall look:** Illustrated, soft pixel-art-meets-vector. Choose ONE consistent approach and apply it everywhere:
  - **Primary direction (recommended):** *Soft chunky vector* — rounded shapes, thick warm-brown outlines (3–4px), flat colors with subtle grain/texture, gentle inner highlights.
  - **Optional accent:** Small pixel-art details (icons, cursors, sprites, badges) at a consistent pixel grid (e.g., 16×16 or 32×32) for retro-game charm.
- **Outlines:** Warm dark brown (never black), consistent weight, rounded joins and caps.
- **Texture:** Very subtle paper/fabric grain overlay (3–6% opacity) over backgrounds to feel hand-made.
- **Lighting:** Soft radial glows around lamps, candles, and fireflies; warm vignette at screen edges.
- **Depth:** Layered parallax scenes (foreground, midground, background). Soft, offset "block" shadows rather than blurry drop shadows.
- **Imagery:** Illustrated scenes, objects, and characters. Any screenshots or photos are framed like polaroids, game screenshots, or pinned notes with tape.

---

## 4. Color System

Define tokens as CSS variables. Warm, low-contrast-feeling palette, but **text must still meet WCAG AA**.

### 4.1 Core Palette

| Token | Role | Suggested HEX |
|---|---|---|
| `--cream-50` | Lightest surface (never pure white) | `#FFF8EC` |
| `--cream-100` | Page background (day) | `#FBEFD9` |
| `--cream-200` | Card / panel base | `#F5E3C3` |
| `--peach-300` | Soft accent, hover wash | `#F7C8A4` |
| `--terracotta-500` | Primary accent / buttons | `#D9825B` |
| `--terracotta-700` | Primary pressed | `#B5613E` |
| `--honey-400` | Highlight / collectibles / stars | `#F2B84B` |
| `--sage-400` | Secondary accent (nature) | `#9DB88A` |
| `--sage-600` | Secondary deep | `#6F8F63` |
| `--sky-300` | Calm cool accent (use sparingly) | `#A9CFE0` |
| `--berry-400` | Playful pop (badges, notifications) | `#C9607A` |
| `--lavender-300` | Night / dreamy accent | `#B8A7D9` |
| `--cocoa-900` | Text & outlines | `#4A3224` |
| `--cocoa-700` | Secondary text | `#6B4A38` |
| `--cocoa-500` | Muted text / disabled | `#8F6F5A` |

### 4.2 Atmosphere Palettes (Day / Dusk / Night)
Provide a **time-of-day theme switcher** (a lamp, window, or sun/moon toggle) that re-themes the whole world:
- **Day:** cream and peach backgrounds, honey sunlight.
- **Dusk:** terracotta-to-lavender gradient sky, amber lamp glows.
- **Night:** deep warm plum/indigo (`#2E2440` to `#3B2F52`), cream text, glowing lamps and fireflies. Never pure black.

### 4.3 Semantic Colors
- Success: `--sage-600` · Warning: `--honey-400` · Error: `--berry-400` · Info: `--sky-300`
- Always pair color with an icon or label; never color alone.

### 4.4 Rules
- Max 3 dominant colors per screen, plus cocoa for text/outlines.
- Backgrounds use soft gradients, never flat hard splits.
- Document contrast ratios for every text/background pair.

---

## 5. Typography

Two or three families maximum. Playful for display, calm for reading.

| Role | Style | Suggested fonts (Google Fonts) |
|---|---|---|
| **Display / Titles** | Chunky, rounded, friendly, "game title screen" feel | `Fredoka`, `Baloo 2`, or `Chewy` |
| **UI / Labels / Buttons** | Rounded sans, bold | `Nunito` (700–800) |
| **Body / Reading** | Warm, highly legible | `Nunito` or `Quicksand` (400–600) |
| **Accent / Dialogue / Stats** | Pixel font for game-like details (HUD, dialogue boxes, badges) | `Pixelify Sans`, `Press Start 2P` (sparingly), or `VT323` |

**Type scale (fluid with clamp):** 12 / 14 / 16 (base) / 18 / 22 / 28 / 36 / 48 / 64 / 80 px.
**Line height:** 1.6 body, 1.1–1.2 display. **Letter spacing:** slightly open on pixel text.
**Rules:** Body text never smaller than 16px. Pixel font only for short strings (under ~6 words) or dialogue. Sentence case for most UI; Title Case for game-style headings.

---

## 6. Layout, Spacing & Shape

- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Border radius:** Generous and soft. `--radius-sm: 8px`, `--radius-md: 16px`, `--radius-lg: 24px`, `--radius-xl: 32px`, `--radius-pill: 999px`. No sharp corners anywhere (exception: pixel-art elements).
- **Borders:** 3px solid `--cocoa-900` (or 4px for hero elements).
- **Shadows (block style):** `4px 4px 0 var(--cocoa-900)` for raised objects; soft glow `0 0 24px rgba(242,184,75,.45)` for lights. Pressed state removes the offset and translates the element.
- **Layout model:** World-style scenes, not rigid grids. Use full-viewport "rooms" or scrollable "maps" with absolutely positioned interactive objects, plus a responsive fallback to a clean stacked layout on mobile.
- **Max content width:** 1200px for reading sections; scenes may be full-bleed.
- **Breakpoints:** 480 / 768 / 1024 / 1280 / 1536.
- **Touch targets:** minimum 44×44px.

---

## 7. Game-Like Experience Layer (Signature Feature)

This is what makes the site feel like a game. Design components and patterns for each.

### 7.1 Title / Loading Screen
- "Press Start" or "Start Adventure" title screen with the site logo, a gently animated scene, and a bobbing prompt.
- Cozy loading bar (e.g., a tea cup filling, a pixel plant growing) with rotating tips ("Tip: click the cat for a surprise").
- Optional "Skip intro" always visible.

### 7.2 HUD (Heads-Up Display)
- Persistent, minimal, rounded top bar styled as a game HUD: player name/avatar, a "Discovered X/Y" collectible counter, a mute toggle, a time-of-day toggle, and a menu button.
- Collapses neatly on mobile.

### 7.3 Navigation as World Map / Menu
- Primary nav is a **game menu** (pause-menu style, with chunky buttons and a hand-pointer cursor) and/or **clickable world map** with labelled locations (e.g., Home, Workshop, Library, Mailbox).
- **Always include** an accessible plain-link fallback nav (keyboard-accessible, screen-reader friendly, visible via a "Simple view" toggle).

### 7.4 Quests, Achievements & Collectibles
- Quest log component ("Meet the maker," "Visit 3 projects," "Say hello").
- Achievement toast: slides in with a little jingle, sparkle, and badge.
- Hidden collectibles (stars, acorns, tiny creatures) scattered across the world; counter in HUD; a collection gallery page.
- Progress is stored locally; never required to access content.

### 7.5 Dialogue Boxes & NPC Characters
- RPG-style dialogue box with a pixel font, character portrait, typewriter text, and "▼" continue indicator.
- A friendly mascot/guide character (e.g., a small cat, fox, or companion) who greets visitors, gives hints, and reacts to hovering and clicking. Provide idle, wave, happy, sleepy, and talking states.

### 7.6 Inventory / Item Cards
- Portfolio projects displayed as **collectible item cards** or **inventory slots** with rarity-style borders, "stats" (tech stack, role, year), and an "Inspect" action that opens a detail view like an item screen.

### 7.7 Custom Cursor & Micro-Interactions
- Custom cursor (hand/paw/star) that changes on interactive objects. Fall back to default on touch devices.
- Interactive objects: lamps that toggle light, a kettle that steams, a plant that sways, windows showing weather, cats that purr, a radio that plays lo-fi.

### 7.8 Sound Design (Optional, Off by Default)
- Soft UI sounds: click "pop," hover "tick," page "whoosh," achievement "chime," ambient lo-fi/rain/fireplace loop.
- Sound is **muted by default**, with a clear toggle that remembers the preference. Never autoplay audio.

---

## 8. Component Library

Design every component with **default, hover, focus, active/pressed, disabled, and loading** states. Use thick outlines, block shadows, and soft radii.

**Buttons**
- Primary (terracotta), Secondary (sage), Ghost/Outline (cream), Icon button (round), Danger (berry).
- Pressed state: shadow collapses and button shifts down-right 3px. Hover: slight lift + wiggle.

**Inputs & Forms**
- Text field, textarea, select, checkbox (a tick in a rounded box), radio (a little gem), toggle (a lamp switch), slider (a pixel-heart/progress bar).
- Contact form styled as **writing a letter / sending a postcard** with a "send" animation (paper plane or envelope flying away).

**Cards & Containers**
- Content card (paper), Polaroid (for images), Sticky note, Wooden sign, Scroll/parchment, Notice-board pin with tape.
- Modal / Dialog (looks like a game window with a title bar and close button).

**Navigation**
- Menu bar, pause menu, tab bar (folder tabs), breadcrumbs (a trail of footsteps), pagination (page-turn), back button (arrow sign).

**Feedback**
- Toast / achievement popup, tooltip (speech bubble), badge/chip, progress bar (health-bar style), loader/spinner (spinning pinwheel, bouncing acorn), empty state (sleeping mascot), 404 page ("You wandered off the map!").

**Data & Content**
- Skill/stat bars styled as RPG stats, timeline (a winding path with milestones), tag cloud (labels on string), accordion (drawers that open), carousel (flipping photo album).

**Iconography**
- Custom icon set at consistent size/weight (24px grid, 2.5–3px rounded stroke, or pixel icons at 16/32px). Include: home, projects, about, contact, music, sound on/off, star, heart, lamp, mail, book, map, settings, sun, moon, trophy, lock, arrow, close.

**Decorative Elements**
- Plants, mugs, books, candles, fairy lights, clouds, stars, fireflies, leaves, cats, steam wisps, rain, sparkles. Provide as reusable, themeable illustration assets.

---

## 9. Motion & Animation

**Philosophy:** soft, bouncy, alive — like a world breathing.

- **Easing tokens:** `--ease-soft: cubic-bezier(.4,0,.2,1)`, `--ease-bounce: cubic-bezier(.34,1.56,.64,1)`, `--ease-gentle: cubic-bezier(.25,.8,.25,1)`.
- **Durations:** 120ms (micro) / 240ms (UI) / 400ms (transitions) / 800ms+ (scene or ambient).
- **Signature motions:** squash-and-stretch on press, gentle bobbing for idle objects, parallax on scroll/mouse, typewriter dialogue, sparkle burst on collect, page transitions that feel like walking through a door or turning a page.
- **Ambient loops:** floating dust motes/fireflies, swaying plants, flickering candle glow, drifting clouds, steam from mugs. Keep subtle and low-CPU.
- **Reduced motion:** Respect `prefers-reduced-motion` — disable parallax, bouncing, and ambient loops; keep simple fades.
- **Performance:** Animate `transform` and `opacity` only; target 60fps; lazy-load heavy scenes.

---

## 10. Accessibility & Usability (Non-Negotiable)

- WCAG 2.2 AA minimum for contrast, focus, and target size.
- Full keyboard navigation, visible and stylish focus rings (3px honey outline with offset).
- Semantic HTML and ARIA for all custom game-like controls; logical heading order.
- Alt text on all illustrations; decorative items marked `aria-hidden`.
- "Simple view" toggle that removes the game layer and shows plain, scannable content.
- No flashing content (max 3 flashes/sec). Sound optional and off by default.
- Works without JavaScript for core content where feasible.

---

## 11. Responsive Behavior

- **Desktop:** full interactive scene/world with parallax and hover effects.
- **Tablet:** simplified scene, larger tap targets.
- **Mobile:** vertical "level" scrolling, with scenes stacked as chapters; HUD condenses to icon-only; hover effects become tap effects.
- Illustrations scale gracefully; critical objects never get cut off or overlap text.

---

## 12. Page / Section Patterns to Include in the Prototype

Design these as **locations in the world** (rename freely to fit the owner's content):

1. **Title Screen** — "Press Start", mascot, ambient scene.
2. **Home / Hub Room** — cozy room with clickable objects that lead to each section.
3. **About Me (Character Sheet)** — avatar, "class," stats/skills, backstory in a dialogue box.
4. **Projects (Inventory / Bookshelf)** — collectible item cards, with an inspect modal.
5. **Videos / Content (Cinema Nook or TV)** — framed video thumbnails like cassettes or a retro TV.
6. **Journey / Timeline (Adventure Map)** — winding path with milestones and checkpoints.
7. **Contact (Mailbox / Postcard)** — letter-style form with a send animation.
8. **Collection / Achievements** — gallery of discovered collectibles and badges.
9. **404 / Easter Eggs** — playful, on-brand.

---

## 13. Deliverables Requested From Claude Design

1. **Design tokens** — color, typography, spacing, radius, shadow, border, motion (as CSS variables and a tokens JSON).
2. **Day / Dusk / Night theme definitions.**
3. **Full component library** with all states (Section 8).
4. **Game-layer components** (Section 7): title screen, HUD, dialogue box, quest/achievement toast, inventory card, world-map nav.
5. **Illustration & icon guidelines**, including the style rules, stroke weights, palettes, and a starter asset list.
6. **Motion guidelines** with easing, duration, and signature animations.
7. **Accessibility guidelines** and the "Simple view" fallback.
8. **A clickable prototype** of the hub room + at least two inner pages, demonstrating the game feel.
9. **Usage do's and don'ts** with short examples.

---

## 14. Tone of Voice (Copy Style)

- Friendly, gentle, a little playful, like a kind game narrator.
- Short sentences. Light humor. Never sarcastic or pushy.
- Game-flavored microcopy: "Start adventure," "Quest complete!", "You found a hidden star ✦", "Oops, you wandered off the map."
- Buttons are verbs: "Explore," "Inspect," "Send letter," "Open chest."

---

## 15. Technical Notes

- Build with semantic HTML, CSS variables, and modern CSS (`clamp()`, container queries, `prefers-reduced-motion`, `prefers-color-scheme`).
- SVG for illustrations and icons wherever possible (themeable via CSS variables); sprite sheets for pixel art with `image-rendering: pixelated`.
- Lightweight animation (CSS first; JS or Lottie only where needed).
- Fonts loaded with `font-display: swap`; assets lazy-loaded; target a fast first paint.
- Keep components modular and documented so the system scales as new "rooms" are added.

---

## 16. Success Criteria

A first-time visitor should, within five seconds, think: *"Whoa, this feels like a game,"* and want to keep exploring, while still being able to find the owner's work and contact details easily.
