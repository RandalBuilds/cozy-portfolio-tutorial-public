# Card

Paper-like container — the object content lives in. Five variants: `paper` (default), `sticky` (honey note, tilted), `sign` (wooden sign, cream text), `parchment` (scroll for long reads), `pinned` (taped to a notice board).

**Consumer provides:** `title`, `children` (a string becomes a paragraph), `variant`, `interactive` (adds the hover lift when the whole card is clickable — then render it `as="a"` or `as="button"`).

- Do: think "what object is this?" before picking a variant.
- Don't: build hero + three equal feature cards; vary the objects and tilt.
