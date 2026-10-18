# Cozy Game World — handoff package

The design system for Randal's portfolio website, packaged so Claude Code in VS Code can build the real site from it.

## How to use it

1. Create an empty folder for your website and open it in VS Code.
2. Unzip this package into that folder, so `CLAUDE.md` sits at the top level next to `design-system/`.
3. Open Claude Code in VS Code. It reads `CLAUDE.md` automatically.
4. Give it a first prompt, for example:

   > Read CLAUDE.md and design-system/BRAND.md, then open design-system/gallery.html to see the components. Set up the project with the recommended stack and build the Home page first. Use placeholder project data and list what real content you need from me.

5. Then continue page by page: "Now build the project detail page", "Now build About". Have your project details, links, screenshots and a photo of yourself ready.

## What's inside

| Path | What it is |
|---|---|
| `CLAUDE.md` | Instructions for Claude Code: sources of truth, stack, page plan, rules, definition of done |
| `design-system/BRAND.md` | The brand book: principles, voice, colour and contrast, type, motion, accessibility, game layer, illustration |
| `design-system/tokens/tokens.json` | All design tokens (colours for Day / Dusk / Night, type, spacing, radius, shadow, motion…) |
| `design-system/tokens/tokens.css` | The same tokens as CSS variables, plus text-style classes and the Google Fonts import |
| `design-system/components/` | 30 components: `bundle.js` / `bundle.css` (working reference code), `index.d.ts` (props), and per component a `README.md` + standalone `example.html` |
| `design-system/icons/` | 25 SVG icons (24px grid, 2.5px round stroke) |
| `design-system/gallery.html` | Open in a browser to see every component live, with a Day / Dusk / Night switch |
| `design-system/brief/CozyPortfolioDesign.md` | Your original brief |

The gallery and examples load React from the internet, so open them while online.
