# HUD

Persistent heads-up bar: avatar, player name, "Found X/Y" collectible counter, mute, time-of-day and menu.

**Consumer provides:** `player`, optional `level`, `found`/`total`, `muted`, `time` (`day`|`dusk`|`night`) and handlers `onToggleSound`, `onCycleTime`, `onMenu`. Below 560px it condenses to icons + count. Sound is muted by default.
