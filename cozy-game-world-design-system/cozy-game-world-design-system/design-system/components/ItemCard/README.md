# ItemCard

A project as a collectible inventory item: rarity border, icon slot, stats, and an "Inspect" action.

**Consumer provides:** `name`, `rarity` (`common` | `rare` sky | `epic` lavender | `legendary` honey + glow), `icon` or custom `art`, `stats` (label → value; keep to 3: stack, role, year), `onInspect` (open a `GameWindow`). Rarity is also spelled out in text, never colour alone. Reserve legendary for one item.
