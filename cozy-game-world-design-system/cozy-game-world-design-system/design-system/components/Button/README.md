# Button

Chunky, outlined, block-shadowed button — every action in the world is one of these.

**Use** `variant="primary"` (terracotta) for the one main action per screen, `secondary` (sage) for supporting actions, `ghost` (cream) for low-emphasis and "Skip", `danger` (berry-600) only for destructive actions like resetting progress.

**Consumer provides:** `children` (a verb: "Explore", "Inspect", "Send letter", "Open chest"), optional `icon` / `iconAfter` (an `Icon` name), `size` (`sm` | `md` | `lg`), `loading`, `disabled`, and any native button props.

**States:** hover lifts 2px and wiggles −1°; pressed collapses the block shadow and shifts 4px down-right with a squash; focus adds the honey ring (`shadow-focus`); disabled drops to `disabled-opacity` with no shadow; loading shows a spinner and sets `aria-busy`.

- Do: label with a verb in sentence case.
- Do: keep one primary per screen.
- Don't: put two danger buttons side by side, or use a button for navigation between rooms (use a link or `WorldMap`).
