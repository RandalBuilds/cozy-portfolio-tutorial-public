# DialogueBox

RPG dialogue box: pixel-font text that types out, speaker name tag, portrait, and a bobbing ▼ to continue.

**Consumer provides:** `text`, `speaker`, optional `portrait` (usually a `Mascot`), `onNext`, `typewriter={false}` to show instantly, `speed` (ms per letter). Full text is always available to screen readers; reduced motion shows it at once.

- Do: keep lines under ~25 words; split longer ones across pages.
- Don't: put links or forms inside dialogue.
