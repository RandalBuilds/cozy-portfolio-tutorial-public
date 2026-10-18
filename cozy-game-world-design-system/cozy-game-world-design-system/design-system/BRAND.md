A warm, hand-crafted little world you *explore*: the portfolio is the game and the visitor is the player. Every rule below serves four feelings, in order — **safe & warm**, **curious**, **rewarded**, **memorable** — and one test: within five seconds a first-time visitor thinks *"whoa, this feels like a game"* and can still find the work and the contact details.

## Principles

1. **Everything is an object, not a section.** Put content in things you'd find in a cozy room or village — a desk, a bookshelf (`ItemCard`), a mailbox (contact form), a notice board (`Card variant="pinned"`), a cassette player — never in generic page blocks.
2. **Chunky and tactile.** Outline everything in `outline` at `border-width` (3px; `border-width-hero` 4px for hero objects), round every corner, and lift objects with `shadow-block`. UI should look like it could be picked up.
3. **Every interaction gives feedback.** Hover lifts and wiggles, press squashes, discovery sparkles.
4. **Discovery over navigation.** `WorldMap` and the pause menu are the primary nav; a plain-link "Simple view" is always one click away.
5. **Warmth through light.** Use `glow`, `shadow-glow`, the `sky-top` → `sky-bottom` gradient and the `vignette`.
6. **Slow, gentle pacing.** Springy `ease-bounce` for pops, `ease-gentle` for scenes; nothing snaps or flashes.
7. **Playful but usable.** Game feel never overrides clarity, accessibility or speed.

**Never:** a corporate hero + three feature cards + footer; cold blues/greys, pure black or pure white; blurry drop shadows, 90° corners or hairline borders; fast or flashy motion, popups, dark patterns; stock photos.

## Voice

Write like a kind game narrator: friendly, gentle, a little playful. Short sentences, light humour, never sarcastic or pushy. Sentence case for UI; Title Case for game-style headings ("Quest Log", "The Workshop").

- Buttons are verbs: "Explore", "Inspect", "Send letter", "Open chest", "Start adventure".
- Game-flavoured microcopy: "Quest complete!", "You found a hidden star ✦", "Oops, you wandered off the map."
- Hints in the narrator's voice: "Tip: click the duck for a surprise."
- Errors say what to do next, kindly: "That address got lost in the woods — check the @ part."
- The ✦ glyph is the one decorative character; no emoji in UI.

## Colour

Three themes re-theme the whole world through a time-of-day toggle (lamp, window or sun/moon in the `HUD`): **Day** (cream and peach, honey sunlight), **Dusk** (terracotta → lavender sky, amber lamps), **Night** (deep warm plum `plum-900`/`plum-800`, cream text, glowing lamps and fireflies). Set `data-theme="day|dusk|night"` on `<html>`; also honour `prefers-color-scheme: dark` with Night on first visit.

- Build with the semantic tokens — `bg-page`, `surface-card`, `surface-raised`, `surface-sunken`, `ink`, `ink-soft`, `outline`, `primary`, `on-primary` … — so all three themes work. Reach for raw palette tokens (`honey-400`, `sage-400`) only for illustration and fixed-colour objects like sticky notes.
- Max **3 dominant colours per screen**, plus cocoa for text and outlines. Terracotta is the primary voice; sage supports; honey is light and treasure; berry, sky and lavender are small pops.
- Backgrounds are soft gradients (`sky-top` → `sky-bottom`) with 4% paper grain (`grain-opacity`) and a `vignette` — never flat hard splits.
- Status pairs colour with an icon or word, always: success `success-ink` + ✓, warning `warning-ink`, error `error-ink` + ✕, info `info-ink`. Fills: `sage-600`, `honey-400`, `berry-400`, `sky-300`.

### Contrast

| Text | Ground | Day | Dusk | Night |
|---|---|---|---|---|
| `ink` | `bg-page` / `surface-card` / `surface-raised` | 10.4 / 9.4 / 11.2 | 8.8 / 10.0 / 10.8 | 12.8 / 10.8 / 8.8 |
| `ink-soft` | same | 6.9 / 6.3 / 7.5 | 5.9 / 6.6 / 7.2 | 8.9 / 7.5 / 6.1 |
| `link` | `surface-card` / `surface-raised` | 4.7 / 5.6 | 5.0 / 5.4 | 8.0 / 6.5 |
| `on-primary` (`cocoa-950`) | `primary` | 5.6 | 5.6 | 5.6 |
| `on-secondary` | `secondary` | 5.5 | 5.5 | 5.5 |
| `on-danger` | `danger` (`berry-600`) | 5.9 | 5.9 | 5.9 |
| `cream-50` | `wood-600` (signs) | 5.8 | 5.8 | 5.8 |
| `cocoa-900` | `honey-400` (sticky, badges) | 6.6 | 6.6 | 6.6 |

Flagged pairs from the brief's palette, kept exact: `cocoa-500` (`ink-muted`) is 4.0:1 on cream-100 — disabled and placeholder only; `cocoa-900` on `terracotta-500` is 4.1:1, so primary labels use `cocoa-950`; the pressed state (`terracotta-700`, cream label 4.2:1) is transient and the label is 19px/800 large text; `sage-600` and `berry-400` are fills, never text — use the added `sage-700` / `berry-600`. `honey-400` is never text on cream (1.6:1).

## Type

Three families, all Google Fonts with `display=swap`: **Fredoka** for display (`--font-display`), **Nunito** for UI and reading (`--font-sans`), **Pixelify Sans** for game details (`--font-pixel`).

- Titles: `title-80` (title screen only) down to `title-22` (card titles); leading 1.05–1.2. Use `clamp()` on the big three, e.g. `clamp(36px, 5vw, 48px)` for `title-48`.
- Reading: `body` 16px / 1.6 — **never smaller for paragraphs**; `body-lg` for intros. `caption` (14) and `micro` (12) are for metadata and stickers only.
- UI: `label-lg` 19px/800 for buttons, `label` for form labels and tabs, `label-sm` for chips.
- Pixel: `pixel-dialogue`, `pixel-hud`, `pixel-badge` — only for dialogue and strings under ~6 words, letter-spacing slightly open.

## Shape, space and depth

- Spacing on a 4px base: `space-1` (4) … `space-10` (128). Pad cards with `space-5`; separate scenes with `space-9`.
- Radii: `radius-md` buttons and inputs, `radius-lg` cards and dialogue, `radius-xl` windows and scene frames, `radius-pill` badges and bars. No sharp corners anywhere except pixel-art sprites.
- Depth is block shadows: `shadow-block` (4px offset) for raised objects, `shadow-block-sm` for small controls, `shadow-block-lg` for hero objects. **Pressed** removes the offset and translates the element by the same amount. Light is `shadow-glow`.
- Layout is world-style: full-viewport rooms or scrollable maps with positioned objects, stacking into vertical "chapters" on mobile. Reading sections cap at `content-max` (1200px). Breakpoints `bp-sm` 480 · `bp-md` 768 · `bp-lg` 1024 · `bp-xl` 1280 · `bp-2xl` 1536. Every target is at least `touch-target` (44px).

## Motion

Soft, bouncy, alive — like a world breathing.

- Easing: `ease-soft` for fades, `ease-bounce` for pops and lifts, `ease-gentle` for scenes and drawers. Durations: `duration-micro` 120ms (press), `duration-ui` 240ms (hover, toggles), `duration-transition` 400ms (windows, toasts), `duration-scene` 800ms+ (room changes, page turns).
- Signature motions: squash on press, gentle bob for idle objects, parallax on scroll/mouse, typewriter dialogue, sparkle burst on collect, door/page-turn transitions.
- Ambient loops (fireflies, dust, swaying plants, candle flicker, steam) run 2.4s+ and stay subtle.
- Animate only `transform` and `opacity`; target 60fps; lazy-load heavy scenes.
- `prefers-reduced-motion`: disable parallax, bouncing and ambient loops; keep simple fades. `bundle.css` does this already.

## Accessibility (non-negotiable)

- WCAG 2.2 AA for contrast, focus and target size.
- **Focus ring:** `shadow-focus` — a 3px honey band edged in cocoa (Day/Dusk) or cream (Night), so it holds ≥3:1 on every ground; combine it with the object's block shadow: `box-shadow: var(--shadow-block), var(--shadow-focus)`.
- Semantic HTML and ARIA for every game control (`HUD` buttons are labelled, `LampToggle` is a `switch`, `WorldMap` is a `nav` of real links, `DialogueBox` exposes its full text).
- Alt text on illustrations; decorative items `aria-hidden`.
- A **"Simple view"** toggle removes the game layer and shows plain, scannable content and links. Core content works without JavaScript where feasible.
- No flashing (max 3/sec). Sound is **off by default**, never autoplays, and the choice is remembered.
- Progress, quests and collectibles are stored locally and never gate content.

## The game layer

- **Title screen** (`TitleScreen`): logo plate, gently animated scene, bobbing "Start adventure", rotating tips, always-visible "Skip intro".
- **HUD** (`HUD`): avatar and name, "Found X/Y" counter, mute, time of day, menu. Icon-only on mobile.
- **Navigation**: `WorldMap` with labelled locations (Home, Workshop, Library, Mailbox) or a pause menu of chunky `Button`s, plus the Simple-view link list. `Breadcrumbs` are a trail of paw prints.
- **Quests & collectibles**: `QuestLog`, `AchievementToast` (with sparkle and optional chime), hidden stars/acorns counted in the HUD and shown on a collection page.
- **Dialogue & guide**: `DialogueBox` with Dumpling the duck (`Mascot`: idle, wave, happy, sleepy, talking).
- **Projects**: `ItemCard` inventory with rarity and stats; "Inspect" opens a `GameWindow`.
- **Locations to design** (rename to fit): Title Screen · Hub Room · About (character sheet with `StatBar`s and backstory in dialogue) · Projects (bookshelf/inventory) · Videos (cinema nook / retro TV) · Journey (`Timeline` adventure map) · Contact (mailbox postcard form with a paper-plane send) · Collection · 404 ("You wandered off the map!", `EmptyState`).
- **Sound** (optional, off by default): click "pop", hover "tick", page "whoosh", achievement "chime", lo-fi/rain/fireplace loop.

## Illustration and iconography

- One style everywhere: **soft chunky vector** — rounded shapes, warm-brown 3–4px outlines (`outline`, never black) with round joins and caps, flat token colours, a whisper of grain, gentle inner highlights.
- Optional accent: small pixel-art sprites (cursors, badges) on the `pixel-grid` (16 or 32px), rendered with `image-rendering: pixelated`.
- Layer scenes in foreground / midground / background for parallax; glow around lamps, candles and fireflies; warm vignette at the edges.
- Photos and screenshots are always framed — `Polaroid`, pinned notes with tape, or a game-screenshot frame.
- Icons: the 25-icon set in `Icon` (React, `currentColor`) and the **Icons** asset group (SVG, ink `cocoa-900`): 24px grid, `icon-stroke` 2.5px, round caps and joins. Draw any new icon on the same grid and stroke.
- Custom cursor (paw / star / hand) on desktop, changing over interactive objects; default cursor on touch.
- Starter decorative assets to draw: plants, mugs, books, candles, fairy lights, clouds, stars, fireflies, leaves, ducks and ducklings, steam wisps, rain, sparkles — as themeable SVG using token colours.
- There is no logo yet: set the site name in `title-80` Fredoka on a `surface-raised` plate with `shadow-block-lg`, as `TitleScreen` does.

## Using the components

Load `tokens.css`, the Google Fonts, `components/bundle.css`, React 18 and `components/bundle.js`; components are on `window.Cozy`. Class names are prefixed `cz-`; utility helpers `cz-scene` (sky gradient + vignette) and `cz-grain` (paper grain) dress any container.
