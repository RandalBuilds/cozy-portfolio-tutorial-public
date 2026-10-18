# TextField

Labelled text input or lined-paper textarea, outlined in `outline-control` on `surface-raised`.

**Consumer provides:** `label` (required, visible), optional `hint` or `error` (error wins, shows an icon + `error-ink`, sets `aria-invalid`), `multiline` for a textarea with ruled lines, and native input props.

- Do: write hints in the narrator's voice, short and kind.
- Do: phrase errors as what to do next.
- Don't: use placeholder text as the label.
