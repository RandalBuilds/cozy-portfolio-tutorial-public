# IconButton

Round 44px button carrying a single icon — HUD tools, window close, mute.

**Consumer provides:** `icon` (an `Icon` name) and `label` (required; becomes `aria-label` and the tooltip title). Optional `variant="primary"` and `aria-pressed` for toggles (pressed shows honey).

- Do: always pass a `label` that says what happens ("Turn sound on").
- Don't: shrink below the 44px `touch-target`.
