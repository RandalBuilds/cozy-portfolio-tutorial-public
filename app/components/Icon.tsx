/* Ported from the Cozy design system's Icon: 24px grid, round stroke set by .cz-icon. */
const ICONS: Record<string, string> = {
  projects:
    '<path d="M3.5 10h17v8.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/><path d="M3.5 10 6 5h12l2.5 5"/><path d="M10 13.5h4"/>',
  lamp: '<path d="M8 3.5h8l3.5 7.5h-15z"/><path d="M12 11v7"/><path d="M8 20.5h8"/>',
  map: '<path d="M3.5 6.5 9 4.5l6 2 5.5-2v13l-5.5 2-6-2-5.5 2z"/><path d="M9 4.5v13"/><path d="M15 6.5v13"/>',
  moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
  arrow: '<path d="M4.5 12h14"/><path d="m13 6.5 5.5 5.5-5.5 5.5"/>',
  paw: '<circle cx="7" cy="9.5" r="1.8"/><circle cx="10.5" cy="6.5" r="1.8"/><circle cx="14.5" cy="6.5" r="1.8"/><circle cx="18" cy="9.5" r="1.8"/><path d="M12.5 11.5c-3 0-5.5 3.3-5.5 5.6 0 1.6 1.3 2.4 2.8 2.4 1.1 0 1.8-.5 2.7-.5s1.6.5 2.7.5c1.5 0 2.8-.8 2.8-2.4 0-2.3-2.5-5.6-5.5-5.6z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
  home: '<path d="M4 11.5 12 4.5l8 7V19.5a1.5 1.5 0 0 1-1.5 1.5h-4v-6h-5v6h-4A1.5 1.5 0 0 1 4 19.5z"/>',
  about: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20.5c.8-3.8 3.6-6 7-6s6.2 2.2 7 6"/>',
  sparkle:
    '<path d="m12 3.5 1.9 6.6 6.6 1.9-6.6 1.9L12 20.5l-1.9-6.6L3.5 12l6.6-1.9z"/>',
};

export default function Icon({ name, size = 24 }: { name: string; size?: number }) {
  return (
    <svg
      className="cz-icon"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: ICONS[name] ?? ICONS.projects }}
    />
  );
}
