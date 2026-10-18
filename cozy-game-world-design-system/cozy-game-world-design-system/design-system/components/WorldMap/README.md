# WorldMap

Clickable world map — the primary navigation — with labelled pins joined by a dotted trail.

**Consumer provides:** `locations` (`{id, label, icon, x, y, href?}` with x/y in %), `current` (id; gets `aria-current` and the lamp glow), `onSelect(id)` or real `href`s. Renders a `nav` of real links, so it is keyboard and screen-reader navigable. Always ship the plain-link "Simple view" nav as well.
