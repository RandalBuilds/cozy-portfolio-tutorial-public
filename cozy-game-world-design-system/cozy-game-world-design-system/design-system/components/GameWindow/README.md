# GameWindow

Modal or panel styled as a game window: terracotta title bar, close button, cream body.

**Consumer provides:** `title`, `children`, optional `footer` (buttons), `onClose`, and `modal` (wraps it in a `scrim`, sets `role="dialog"`, closes on Esc). Use for inspect views, settings and the pause menu. No popups the player didn't ask for.
