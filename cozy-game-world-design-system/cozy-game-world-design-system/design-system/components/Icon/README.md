# Icon

The world's icon set: 25 hand-drawn-feeling line icons on a 24px grid with a 2.5px round stroke (`icon-stroke`).

**Consumer provides:** `name` (one of `Icon.names`: home, projects, about, mail, music, sound-on, sound-off, star, heart, lamp, book, map, settings, sun, moon, trophy, lock, arrow, close, sparkle, check, menu, paw, leaf, mug), optional `size` (default 24), and `label` when the icon carries meaning on its own (otherwise it is `aria-hidden`).

Icons draw in `currentColor`, so they take the text colour of their parent. The same set ships as SVG files in the **Icons** asset group for use outside React.

- Do: pair an icon with a word for any status (never colour or icon alone).
- Don't: mix in another icon library's glyphs; draw new ones on the same grid and stroke.
