/* @ds-bundle: {"format":4,"namespace":"Cozy","components":[{"name":"Button"},{"name":"IconButton"},{"name":"Icon"},{"name":"TextField"},{"name":"Select"},{"name":"Checkbox"},{"name":"Radio"},{"name":"LampToggle"},{"name":"HeartSlider"},{"name":"Card"},{"name":"Polaroid"},{"name":"GameWindow"},{"name":"HUD"},{"name":"DialogueBox"},{"name":"AchievementToast"},{"name":"ItemCard"},{"name":"QuestLog"},{"name":"WorldMap"},{"name":"Badge"},{"name":"Tooltip"},{"name":"ProgressBar"},{"name":"StatBar"},{"name":"Loader"},{"name":"Tabs"},{"name":"Breadcrumbs"},{"name":"Timeline"},{"name":"Accordion"},{"name":"EmptyState"},{"name":"Mascot"},{"name":"TitleScreen"}]} */
(function () {
  var R = window.React, h = R.createElement, useState = R.useState, useEffect = R.useEffect, useId = R.useId || function () { return 'cz' + Math.random().toString(36).slice(2, 8); };
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(' '); }
  function rest(p, omit) { var o = {}; for (var k in p) if (omit.indexOf(k) < 0) o[k] = p[k]; return o; }

  /* 24px grid, 2.5px round stroke (set in CSS) */
  var ICONS = {
    home: '<path d="M4 11.5 12 4.5l8 7V19.5a1.5 1.5 0 0 1-1.5 1.5h-4v-6h-5v6h-4A1.5 1.5 0 0 1 4 19.5z"/>',
    projects: '<path d="M3.5 10h17v8.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/><path d="M3.5 10 6 5h12l2.5 5"/><path d="M10 13.5h4"/>',
    about: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20.5c.8-3.8 3.6-6 7-6s6.2 2.2 7 6"/>',
    mail: '<rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="m4.5 7 7.5 6 7.5-6"/>',
    music: '<path d="M9 17.5V6.5l10-2.5v11"/><circle cx="6.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="15" r="2.5"/>',
    'sound-on': '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="M15.5 9a4 4 0 0 1 0 6"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11"/>',
    'sound-off': '<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z"/><path d="m16 9.5 5 5"/><path d="m21 9.5-5 5"/>',
    star: '<path d="m12 3.8 2.5 5.1 5.6.8-4.1 3.9 1 5.6-5-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8z"/>',
    heart: '<path d="M12 20s-7.5-4.6-7.5-10.2A4.2 4.2 0 0 1 12 7.4a4.2 4.2 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z"/>',
    lamp: '<path d="M8 3.5h8l3.5 7.5h-15z"/><path d="M12 11v7"/><path d="M8 20.5h8"/>',
    book: '<path d="M4 5.5c2.7-1 5.4-.8 8 1 2.6-1.8 5.3-2 8-1v13c-2.7-1-5.4-.8-8 1-2.6-1.8-5.3-2-8-1z"/><path d="M12 6.5v13"/>',
    map: '<path d="M3.5 6.5 9 4.5l6 2 5.5-2v13l-5.5 2-6-2-5.5 2z"/><path d="M9 4.5v13"/><path d="M15 6.5v13"/>',
    settings: '<circle cx="12" cy="12" r="3"/><path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"/>',
    moon: '<path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z"/>',
    trophy: '<path d="M7.5 4h9v4.5a4.5 4.5 0 0 1-9 0z"/><path d="M7.5 6H5a2.5 2.5 0 0 0 2.6 4"/><path d="M16.5 6H19a2.5 2.5 0 0 1-2.6 4"/><path d="M12 13v3.5"/><path d="M8.5 20.5h7l-.8-4h-5.4z"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><path d="M12 14.5v2.5"/>',
    arrow: '<path d="M4.5 12h14"/><path d="m13 6.5 5.5 5.5-5.5 5.5"/>',
    close: '<path d="m6.5 6.5 11 11"/><path d="m17.5 6.5-11 11"/>',
    sparkle: '<path d="m12 3.5 1.9 6.6 6.6 1.9-6.6 1.9L12 20.5l-1.9-6.6L3.5 12l6.6-1.9z"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    menu: '<path d="M4.5 7h15M4.5 12h15M4.5 17h15"/>',
    paw: '<circle cx="7" cy="9.5" r="1.8"/><circle cx="10.5" cy="6.5" r="1.8"/><circle cx="14.5" cy="6.5" r="1.8"/><circle cx="18" cy="9.5" r="1.8"/><path d="M12.5 11.5c-3 0-5.5 3.3-5.5 5.6 0 1.6 1.3 2.4 2.8 2.4 1.1 0 1.8-.5 2.7-.5s1.6.5 2.7.5c1.5 0 2.8-.8 2.8-2.4 0-2.3-2.5-5.6-5.5-5.6z"/>',
    leaf: '<path d="M5 19c0-8 5-13.5 14.5-14.5C19 14 13 19 5 19z"/><path d="M5 19c3-4 6.5-7 10-9"/>',
    mug: '<path d="M5 9h11v7.5A3.5 3.5 0 0 1 12.5 20h-4A3.5 3.5 0 0 1 5 16.5z"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M9 3.5c-1 1 1 2-0 3M12.5 3.5c-1 1 1 2 0 3"/>'
  };

  function Icon(p) {
    var size = p.size || 24, d = ICONS[p.name] || ICONS.star;
    var a = { className: cx('cz-icon', p.className), width: size, height: size, viewBox: '0 0 24 24', dangerouslySetInnerHTML: { __html: d }, style: p.style };
    if (p.label) { a.role = 'img'; a['aria-label'] = p.label; } else a['aria-hidden'] = 'true';
    return h('svg', a);
  }
  Icon.names = Object.keys(ICONS);

  function Button(p) {
    var variant = p.variant || 'primary', size = p.size || 'md';
    var o = rest(p, ['variant', 'size', 'loading', 'icon', 'iconAfter', 'className', 'children']);
    o.className = cx('cz-btn', 'cz-btn--' + variant, size !== 'md' && 'cz-btn--' + size, p.className);
    if (p.loading) { o['aria-busy'] = 'true'; o.disabled = true; }
    if (!o.type) o.type = 'button';
    return h('button', o,
      p.loading ? h('span', { className: 'cz-btn__spin', 'aria-hidden': 'true' }) : (p.icon ? h(Icon, { name: p.icon, size: size === 'sm' ? 18 : 22 }) : null),
      h('span', null, p.children),
      p.iconAfter ? h(Icon, { name: p.iconAfter, size: size === 'sm' ? 18 : 22 }) : null);
  }

  function IconButton(p) {
    var o = rest(p, ['icon', 'label', 'variant', 'className']);
    o.className = cx('cz-iconbtn', p.variant === 'primary' && 'cz-iconbtn--primary', p.className);
    o['aria-label'] = p.label; o.title = p.label; if (!o.type) o.type = 'button';
    return h('button', o, h(Icon, { name: p.icon }));
  }

  function Field(p, control) {
    return h('div', { className: cx('cz-field', p.error && 'cz-field--invalid', p.className) },
      h('label', { className: 'cz-field__label', htmlFor: p.id }, p.label),
      control,
      p.error ? h('div', { className: 'cz-field__error', id: p.id + '-msg' }, h(Icon, { name: 'close', size: 16 }), p.error)
        : p.hint ? h('div', { className: 'cz-field__hint', id: p.id + '-msg' }, p.hint) : null);
  }
  function TextField(p) {
    var gen = useId(), id = p.id || gen;
    var o = rest(p, ['label', 'hint', 'error', 'multiline', 'className', 'id']);
    o.id = id; o.className = 'cz-field__input';
    if (p.hint || p.error) o['aria-describedby'] = id + '-msg';
    if (p.error) o['aria-invalid'] = 'true';
    return Field({ id: id, label: p.label, hint: p.hint, error: p.error, className: p.className }, h(p.multiline ? 'textarea' : 'input', o));
  }
  function Select(p) {
    var gen = useId(), id = p.id || gen;
    var o = rest(p, ['label', 'hint', 'error', 'options', 'className', 'id']);
    o.id = id; o.className = 'cz-field__input';
    if (p.hint || p.error) o['aria-describedby'] = id + '-msg';
    return Field({ id: id, label: p.label, hint: p.hint, error: p.error, className: p.className },
      h('select', o, (p.options || []).map(function (op) { var v = typeof op === 'string' ? op : op.value; return h('option', { key: v, value: v }, typeof op === 'string' ? op : op.label); })));
  }

  function Checkbox(p) {
    var o = rest(p, ['label', 'className']); o.type = 'checkbox';
    return h('label', { className: cx('cz-check', p.className) }, h('input', o),
      h('span', { className: 'cz-check__box', 'aria-hidden': 'true' }, h(Icon, { name: 'check', size: 18 })), h('span', null, p.label));
  }
  function Radio(p) {
    var o = rest(p, ['label', 'className']); o.type = 'radio';
    return h('label', { className: cx('cz-check', p.className) }, h('input', o), h('span', { className: 'cz-gem', 'aria-hidden': 'true' }), h('span', null, p.label));
  }

  function LampToggle(p) {
    var st = useState(!!p.defaultChecked), on = p.checked != null ? p.checked : st[0];
    function flip() { if (p.disabled) return; if (p.checked == null) st[1](!on); if (p.onChange) p.onChange(!on); }
    return h('button', { type: 'button', role: 'switch', 'aria-checked': on ? 'true' : 'false', disabled: p.disabled, className: cx('cz-lamp', p.className), onClick: flip },
      h('span', { className: 'cz-lamp__track', 'aria-hidden': 'true' }, h('span', { className: 'cz-lamp__knob' })), h('span', null, p.label));
  }

  function HeartSlider(p) {
    var min = p.min || 0, max = p.max == null ? 10 : p.max;
    var st = useState(p.defaultValue == null ? Math.round((min + max) / 2) : p.defaultValue), v = p.value != null ? p.value : st[0];
    var gen = useId(), id = p.id || gen, pct = ((v - min) / (max - min)) * 100;
    return h('div', { className: cx('cz-slider', p.className) },
      h('div', { className: 'cz-slider__top' }, h('label', { htmlFor: id }, p.label), h('span', { className: 'cz-slider__val', 'aria-hidden': 'true' }, v + '/' + max)),
      h('input', { id: id, type: 'range', min: min, max: max, step: p.step || 1, value: v, style: { '--cz-pct': pct + '%' }, disabled: p.disabled,
        onChange: function (e) { var n = +e.target.value; if (p.value == null) st[1](n); if (p.onChange) p.onChange(n); } }));
  }

  function Card(p) {
    var o = rest(p, ['variant', 'title', 'interactive', 'as', 'className', 'children']);
    o.className = cx('cz-card', p.variant && p.variant !== 'paper' && 'cz-card--' + p.variant, p.interactive && 'cz-card--interactive', 'cz-grain', p.className);
    return h(p.as || 'article', o, p.title ? h('h3', { className: 'cz-card__title' }, p.title) : null,
      typeof p.children === 'string' ? h('p', { className: 'cz-card__body' }, p.children) : p.children);
  }

  function Polaroid(p) {
    return h('figure', { className: cx('cz-polaroid', p.className), style: { '--cz-tilt': (p.tilt == null ? -3 : p.tilt) + 'deg' } },
      p.src ? h('img', { className: 'cz-polaroid__img', src: p.src, alt: p.alt || '' }) : h('div', { className: 'cz-polaroid__img', role: 'img', 'aria-label': p.alt || 'Illustration placeholder' }),
      h('figcaption', { className: 'cz-polaroid__cap' }, p.caption));
  }

  function GameWindow(p) {
    var gen = useId();
    var win = h('section', { className: cx('cz-window', 'cz-window--enter', p.className), role: p.modal ? 'dialog' : 'region', 'aria-modal': p.modal ? 'true' : undefined, 'aria-labelledby': gen },
      h('header', { className: 'cz-window__bar' }, h('h2', { className: 'cz-window__title', id: gen }, p.title),
        p.onClose ? h(IconButton, { icon: 'close', label: 'Close', onClick: p.onClose }) : null),
      h('div', { className: 'cz-window__body' }, p.children),
      p.footer ? h('footer', { className: 'cz-window__foot' }, p.footer) : null);
    useEffect(function () {
      if (!p.modal || !p.onClose) return;
      function k(e) { if (e.key === 'Escape') p.onClose(); }
      document.addEventListener('keydown', k); return function () { document.removeEventListener('keydown', k); };
    }, [p.modal, p.onClose]);
    return p.modal ? h('div', { className: 'cz-scrim' }, win) : win;
  }

  function HUD(p) {
    var time = p.time || 'day', next = { day: 'dusk', dusk: 'night', night: 'day' }[time];
    return h('header', { className: cx('cz-hud', p.className) },
      h('div', { className: 'cz-hud__avatar', 'aria-hidden': 'true' }, (p.player || '?').charAt(0)),
      h('div', { className: 'cz-hud__who' }, h('div', { className: 'cz-hud__name' }, p.player), p.level ? h('div', { className: 'cz-hud__sub' }, p.level) : null),
      h('div', { className: 'cz-hud__count', 'aria-label': 'Discovered ' + p.found + ' of ' + p.total },
        h(Icon, { name: 'star', size: 20 }), h('span', { 'aria-hidden': 'true' }, h('span', { className: 'cz-hud__count-label' }, 'Found '), p.found + '/' + p.total)),
      h('div', { className: 'cz-hud__tools' },
        h(IconButton, { icon: p.muted === false ? 'sound-on' : 'sound-off', label: p.muted === false ? 'Mute sound' : 'Turn sound on', 'aria-pressed': p.muted === false ? 'true' : 'false', onClick: p.onToggleSound }),
        h(IconButton, { icon: time === 'night' ? 'moon' : 'sun', label: 'Time of day: ' + time + '. Switch to ' + next, onClick: p.onCycleTime }),
        h(IconButton, { icon: 'menu', label: 'Open menu', variant: 'primary', onClick: p.onMenu })));
  }

  function DialogueBox(p) {
    var text = p.text || '', st = useState(p.typewriter === false ? text.length : 0), n = st[0];
    useEffect(function () {
      if (p.typewriter === false || (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) { st[1](text.length); return; }
      st[1](0); var i = 0, t = setInterval(function () { i++; st[1](i); if (i >= text.length) clearInterval(t); }, p.speed || 32);
      return function () { clearInterval(t); };
    }, [text]);
    var done = n >= text.length;
    return h('section', { className: cx('cz-dialogue', p.className), 'aria-label': (p.speaker || 'Narrator') + ' says' },
      p.portrait ? h('div', { className: 'cz-dialogue__portrait', 'aria-hidden': 'true' }, p.portrait) : null,
      h('div', { style: { flex: 1, paddingTop: p.speaker ? 8 : 0 } },
        p.speaker ? h('div', { className: 'cz-dialogue__name' }, p.speaker) : null,
        h('p', { className: 'cz-dialogue__text', 'aria-live': 'polite' }, h('span', { 'aria-hidden': done ? undefined : 'true' }, text.slice(0, n)), done ? null : h('span', { className: 'cz-sr' }, text))),
      done && p.onNext ? h('button', { className: 'cz-dialogue__more', onClick: p.onNext, 'aria-label': 'Continue' }, '▼') : done ? h('span', { className: 'cz-dialogue__more', 'aria-hidden': 'true' }, '▼') : null);
  }

  function AchievementToast(p) {
    return h('div', { className: cx('cz-toast', p.className), role: 'status' },
      h('div', { className: 'cz-toast__badge' }, h(Icon, { name: p.icon || 'trophy', size: 26 }),
        h(Icon, { name: 'sparkle', size: 12, className: 'cz-sparkle', style: { top: -6, right: -4 } }),
        h(Icon, { name: 'sparkle', size: 10, className: 'cz-sparkle', style: { bottom: -2, left: -6, animationDelay: '.6s' } })),
      h('div', null, h('div', { className: 'cz-toast__kicker' }, p.kicker || 'Quest complete!'), h('div', { className: 'cz-toast__title' }, p.title),
        p.description ? h('div', { className: 'cz-toast__desc' }, p.description) : null));
  }

  function ItemCard(p) {
    var r = p.rarity || 'common';
    return h('button', { type: 'button', className: cx('cz-item', 'cz-item--' + r, p.className), onClick: p.onInspect, 'aria-label': 'Inspect ' + p.name + ', ' + r + ' item' },
      h('span', { className: 'cz-item__slot', 'aria-hidden': 'true' }, p.art || h(Icon, { name: p.icon || 'projects', size: 48 })),
      h('span', { className: 'cz-item__rarity' }, r),
      h('h3', { className: 'cz-item__name' }, p.name),
      p.stats ? h('dl', { className: 'cz-item__stats' }, Object.keys(p.stats).map(function (k) { return [h('dt', { key: k + 't' }, k), h('dd', { key: k + 'd' }, p.stats[k])]; })) : null,
      h('span', { className: 'cz-item__cta', 'aria-hidden': 'true' }, 'Inspect', h(Icon, { name: 'arrow', size: 16 })));
  }

  function QuestLog(p) {
    var q = p.quests || [], done = q.filter(function (x) { return x.done; }).length;
    return h('section', { className: cx('cz-quests', p.className), 'aria-label': p.title || 'Quest log' },
      h('h3', { className: 'cz-quests__title' }, p.title || 'Quest Log'),
      h('ul', null, q.map(function (x) {
        return h('li', { key: x.title, 'data-done': x.done ? 'true' : 'false' },
          h('span', { className: 'cz-quests__mark', 'aria-hidden': 'true' }, x.done ? h(Icon, { name: 'check', size: 16 }) : null),
          h('span', { className: 'cz-quests__label' }, x.title, h('span', { className: 'cz-sr' }, x.done ? ' (complete)' : ' (open)')));
      })),
      h('div', { className: 'cz-quests__meta' }, done + '/' + q.length + ' complete'));
  }

  function WorldMap(p) {
    var locs = p.locations || [];
    var d = locs.map(function (l, i) { return (i ? 'L' : 'M') + l.x + ' ' + l.y; }).join(' ');
    return h('nav', { className: cx('cz-map', p.className), 'aria-label': p.label || 'World map' },
      h('svg', { className: 'cz-map__path', viewBox: '0 0 100 100', preserveAspectRatio: 'none', 'aria-hidden': 'true' },
        h('path', { d: d, fill: 'none', stroke: 'var(--cream-50)', strokeWidth: 2.2, strokeDasharray: '3 2.5', strokeLinecap: 'round', vectorEffect: 'non-scaling-stroke', style: { strokeWidth: 6 } })),
      locs.map(function (l) {
        return h('a', { key: l.id, href: l.href || '#' + l.id, className: 'cz-map__spot', style: { left: l.x + '%', top: l.y + '%' }, 'aria-current': p.current === l.id ? 'location' : undefined,
          onClick: p.onSelect ? function (e) { e.preventDefault(); p.onSelect(l.id); } : undefined },
          h('span', { className: 'cz-map__pin' }, h(Icon, { name: l.icon || 'star', size: 22 })), h('span', { className: 'cz-map__label' }, l.label));
      }));
  }

  function Badge(p) {
    return h('span', { className: cx('cz-badge', p.tone && 'cz-badge--' + p.tone, p.pixel && 'cz-badge--pixel', p.className) }, p.icon ? h(Icon, { name: p.icon, size: 14 }) : null, p.children);
  }

  function Tooltip(p) {
    var gen = useId();
    var child = R.isValidElement(p.children) ? R.cloneElement(p.children, { 'aria-describedby': gen }) : p.children;
    return h('span', { className: cx('cz-tip', p.className), 'data-open': p.open ? 'true' : undefined }, child, h('span', { role: 'tooltip', id: gen, className: 'cz-tip__bubble' }, p.content));
  }

  function ProgressBar(p) {
    var max = p.max || 100, pct = Math.max(0, Math.min(100, (p.value / max) * 100));
    var fill = { primary: 'var(--primary)', sage: 'var(--secondary)', honey: 'var(--highlight)', berry: 'var(--berry-400)' }[p.tone || 'primary'];
    return h('div', { className: cx('cz-progress', p.className) },
      p.label ? h('div', { className: 'cz-progress__top' }, h('span', null, p.label), h('span', { className: 'cz-progress__val', 'aria-hidden': 'true' }, p.valueText || Math.round(pct) + '%')) : null,
      h('div', { className: 'cz-progress__track', role: 'progressbar', 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': p.value, 'aria-valuetext': p.valueText, 'aria-label': p.label },
        h('div', { className: 'cz-progress__fill', style: { width: pct + '%', '--cz-fill': fill } })));
  }

  function StatBar(p) {
    var max = p.max || 10, pips = [];
    for (var i = 0; i < max; i++) pips.push(h('span', { key: i, className: 'cz-stat__pip', 'data-on': i < p.value ? 'true' : 'false' }));
    return h('div', { className: cx('cz-stat', p.className), role: 'meter', 'aria-valuemin': 0, 'aria-valuemax': max, 'aria-valuenow': p.value, 'aria-label': p.label },
      h('span', null, p.label), h('span', { className: 'cz-stat__pips', 'aria-hidden': 'true', style: p.tone ? { '--cz-fill': 'var(--' + p.tone + ')' } : null }, pips), h('span', { 'aria-hidden': 'true' }, p.value));
  }

  function Loader(p) {
    var kind = p.kind || 'pinwheel', art;
    if (kind === 'pinwheel') art = h('svg', { className: 'cz-loader__wheel', width: 56, height: 56, viewBox: '0 0 56 56', 'aria-hidden': 'true' },
      ['var(--terracotta-500)', 'var(--honey-400)', 'var(--sage-400)', 'var(--sky-300)'].map(function (c, i) {
        return h('path', { key: i, d: 'M28 28 L28 6 A14 14 0 0 1 42 20 Z', fill: c, stroke: 'var(--outline)', strokeWidth: 3, strokeLinejoin: 'round', transform: 'rotate(' + i * 90 + ' 28 28)' });
      }), h('circle', { cx: 28, cy: 28, r: 4, fill: 'var(--cream-50)', stroke: 'var(--outline)', strokeWidth: 3 }));
    else if (kind === 'acorn') art = h('svg', { className: 'cz-loader__acorn', width: 48, height: 56, viewBox: '0 0 48 56', 'aria-hidden': 'true' },
      h('path', { d: 'M10 24h28v6c0 10-6 18-14 22-8-4-14-12-14-22z', fill: 'var(--peach-300)', stroke: 'var(--outline)', strokeWidth: 3, strokeLinejoin: 'round' }),
      h('path', { d: 'M6 24c0-8 8-13 18-13s18 5 18 13z', fill: 'var(--terracotta-700)', stroke: 'var(--outline)', strokeWidth: 3, strokeLinejoin: 'round' }),
      h('path', { d: 'M24 11V5', stroke: 'var(--outline)', strokeWidth: 3, strokeLinecap: 'round' }));
    else art = h('svg', { className: 'cz-loader__cup', viewBox: '0 0 64 56', 'aria-hidden': 'true' },
      h('defs', null, h('clipPath', { id: 'czcup' }, h('path', { d: 'M8 14h40v24a12 12 0 0 1-12 12H20A12 12 0 0 1 8 38z' }))),
      h('rect', { x: 8, y: 14, width: 40, height: 36, fill: 'var(--terracotta-500)', clipPath: 'url(#czcup)' }, h('animate', { attributeName: 'y', values: '50;14;50', dur: '3s', repeatCount: 'indefinite' })),
      h('path', { d: 'M8 14h40v24a12 12 0 0 1-12 12H20A12 12 0 0 1 8 38z', fill: 'none', stroke: 'var(--outline)', strokeWidth: 3, strokeLinejoin: 'round' }),
      h('path', { d: 'M48 20h4a7 7 0 0 1 0 14h-4', fill: 'none', stroke: 'var(--outline)', strokeWidth: 3, strokeLinecap: 'round' }));
    return h('div', { className: cx('cz-loader', p.className), role: 'status' }, art, h('span', null, p.label || 'Loading…'));
  }

  function Tabs(p) {
    var tabs = p.tabs || [], st = useState(p.defaultTab || (tabs[0] && tabs[0].id)), cur = st[0], base = useId();
    function key(e, i) {
      var n = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : null; if (n == null) return;
      n = (n + tabs.length) % tabs.length; st[1](tabs[n].id); var el = document.getElementById(base + tabs[n].id); if (el) el.focus();
    }
    var active = tabs.filter(function (t) { return t.id === cur; })[0];
    return h('div', { className: cx('cz-tabs', p.className) },
      h('div', { className: 'cz-tabs__list', role: 'tablist', 'aria-label': p.label }, tabs.map(function (t, i) {
        return h('button', { key: t.id, id: base + t.id, role: 'tab', type: 'button', className: 'cz-tab', 'aria-selected': t.id === cur ? 'true' : 'false', 'aria-controls': base + 'panel', tabIndex: t.id === cur ? 0 : -1,
          onClick: function () { st[1](t.id); }, onKeyDown: function (e) { key(e, i); } }, t.label);
      })),
      h('div', { className: 'cz-tabs__panel', role: 'tabpanel', id: base + 'panel', 'aria-labelledby': base + cur }, active ? active.content : null));
  }

  function Breadcrumbs(p) {
    var items = p.items || [];
    return h('nav', { className: cx('cz-crumbs', p.className), 'aria-label': 'Breadcrumb' }, h('ol', null, items.map(function (it, i) {
      var last = i === items.length - 1;
      return h('li', { key: i, style: { display: 'contents' } },
        last ? h('span', { 'aria-current': 'page' }, it.label) : h('a', { href: it.href || '#' }, it.label),
        last ? null : h('span', { className: 'cz-crumbs__steps', 'aria-hidden': 'true' }, h(Icon, { name: 'paw', size: 14 }), h(Icon, { name: 'paw', size: 14, style: { transform: 'translateY(-4px)' } })));
    })));
  }

  function Timeline(p) {
    return h('ol', { className: cx('cz-timeline', p.className) }, (p.items || []).map(function (it, i) {
      return h('li', { key: i, 'data-reached': it.reached === false ? 'false' : 'true' },
        h('span', { className: 'cz-timeline__flag', 'aria-hidden': 'true' }, h(Icon, { name: it.icon || (it.reached === false ? 'lock' : 'star'), size: 18 })),
        h('div', { className: 'cz-timeline__when' }, it.when), h('h3', { className: 'cz-timeline__title' }, it.title),
        it.text ? h('p', { className: 'cz-timeline__text' }, it.text) : null);
    }));
  }

  function Accordion(p) {
    var st = useState(p.defaultOpen != null ? [p.defaultOpen] : []), open = st[0], base = useId();
    return h('div', { className: cx('cz-drawers', p.className) }, (p.items || []).map(function (it, i) {
      var on = open.indexOf(i) >= 0;
      return h('div', { key: i, className: 'cz-drawer', 'data-open': on ? 'true' : 'false' },
        h('h3', { style: { margin: 0 } }, h('button', { type: 'button', className: 'cz-drawer__head', 'aria-expanded': on ? 'true' : 'false', 'aria-controls': base + i,
          onClick: function () { st[1](on ? open.filter(function (x) { return x !== i; }) : open.concat([i])); } }, it.title, h('span', { className: 'cz-drawer__knob', 'aria-hidden': 'true' }))),
        on ? h('div', { className: 'cz-drawer__body', id: base + i }, it.content) : null);
    }));
  }

  function Mascot(p) {
    var mood = p.mood || 'idle', size = p.size || 120, closed = mood === 'sleepy', happy = mood === 'happy' || mood === 'wave';
    var eyes = closed ? [h('path', { key: 'l', className: 'cz-mascot__line', fill: 'none', d: 'M41 45q4 4 8 0' }), h('path', { key: 'r', className: 'cz-mascot__line', fill: 'none', d: 'M63 45q4 4 8 0' })]
      : happy ? [h('path', { key: 'l', className: 'cz-mascot__line', fill: 'none', d: 'M41 47q4-6 8 0' }), h('path', { key: 'r', className: 'cz-mascot__line', fill: 'none', d: 'M63 47q4-6 8 0' })]
      : [h('ellipse', { key: 'l', className: 'cz-mascot__ink', cx: 45, cy: 45, rx: 4, ry: 5 }), h('ellipse', { key: 'r', className: 'cz-mascot__ink', cx: 67, cy: 45, rx: 4, ry: 5 }),
         h('circle', { key: 'lh', className: 'cz-mascot__belly', cx: 46.5, cy: 43, r: 1.4 }), h('circle', { key: 'rh', className: 'cz-mascot__belly', cx: 68.5, cy: 43, r: 1.4 })];
    return h('svg', { className: cx('cz-mascot', 'cz-mascot--' + mood, p.className), width: size, height: size, viewBox: '0 0 120 120', role: 'img', 'aria-label': p.label || 'Dumpling the duck, ' + mood },
      h('g', { className: 'cz-mascot__body' },
        h('ellipse', { className: 'cz-mascot__beak cz-mascot__line', cx: 46, cy: 111, rx: 9, ry: 4.5 }),
        h('ellipse', { className: 'cz-mascot__beak cz-mascot__line', cx: 72, cy: 111, rx: 9, ry: 4.5 }),
        h('path', { className: 'cz-mascot__tail cz-mascot__fur cz-mascot__line', d: 'M90 78c8-6 16-10 18-4 2 7-6 14-16 15' }),
        h('ellipse', { className: 'cz-mascot__fur cz-mascot__line', cx: 60, cy: 86, rx: 36, ry: 24 }),
        h('ellipse', { className: 'cz-mascot__belly', cx: 54, cy: 93, rx: 18, ry: 11 }),
        h('ellipse', { className: 'cz-mascot__fur cz-mascot__line', cx: 56, cy: 44, rx: 27, ry: 25 }),
        h('path', { className: 'cz-mascot__line', fill: 'none', d: 'M54 20c-1-6 3-10 8-8M58 20c2-5 7-6 9-3' }),
        eyes,
        h('ellipse', { className: 'cz-mascot__cheek', cx: 37, cy: 55, rx: 5, ry: 3.5 }), h('ellipse', { className: 'cz-mascot__cheek', cx: 75, cy: 55, rx: 5, ry: 3.5 }),
        h('path', { className: cx('cz-mascot__beak cz-mascot__line', mood === 'talking' && 'cz-mascot__mouth'), d: mood === 'talking' ? 'M45 59q11 9 22 0q-11 3-22 0z' : 'M45 57q11 10 22 0z' }),
        h('path', { className: 'cz-mascot__beak cz-mascot__line', d: 'M43 55c3-6 23-6 26 0c-6 4-20 4-26 0z' }),
        h('g', { className: 'cz-mascot__paw' }, h('path', { className: 'cz-mascot__fur cz-mascot__line', d: mood === 'wave' ? 'M78 78c6-14 18-20 22-15 3 5-6 16-18 20z' : 'M70 80c10-4 22 0 22 8s-12 12-22 6z' }))),
      closed ? h('text', { className: 'cz-mascot__zz', x: 88, y: 22 }, 'z z') : null);
  }

  function EmptyState(p) {
    return h('div', { className: cx('cz-empty', p.className) }, h(Mascot, { mood: 'sleepy', size: 110 }),
      h('h3', { className: 'cz-empty__title' }, p.title || 'Nothing here yet'), p.text ? h('p', { className: 'cz-empty__text' }, p.text) : null, p.action || null);
  }

  function TitleScreen(p) {
    var tips = p.tips || ['Tip: click the duck for a surprise.'], st = useState(0);
    useEffect(function () { if (tips.length < 2) return; var t = setInterval(function () { st[1](function (i) { return (i + 1) % tips.length; }); }, 4000); return function () { clearInterval(t); }; }, [tips.length]);
    var flies = [[12, 30], [24, 62], [78, 22], [88, 54], [60, 14]];
    return h('section', { className: cx('cz-title', 'cz-grain', p.className), 'aria-label': 'Title screen' },
      flies.map(function (f, i) { return h('span', { key: i, className: 'cz-firefly', 'aria-hidden': 'true', style: { left: f[0] + '%', top: f[1] + '%', animationDelay: i * .7 + 's' } }); }),
      h('div', { className: 'cz-title__hill', 'aria-hidden': 'true' }),
      p.onSkip ? h('div', { className: 'cz-title__skip' }, h(Button, { variant: 'ghost', size: 'sm', onClick: p.onSkip }, 'Skip intro')) : null,
      h('div', { className: 'cz-title__plate' }, h('h1', { className: 'cz-title__name' }, p.title), p.tagline ? h('p', { className: 'cz-title__tag' }, p.tagline) : null),
      h(Button, { size: 'lg', className: 'cz-title__start', icon: 'star', onClick: p.onStart }, p.startLabel || 'Start adventure'),
      h('p', { className: 'cz-title__tip', 'aria-live': 'polite' }, tips[st[0]]));
  }

  var api = { Button: Button, IconButton: IconButton, Icon: Icon, TextField: TextField, Select: Select, Checkbox: Checkbox, Radio: Radio, LampToggle: LampToggle, HeartSlider: HeartSlider,
    Card: Card, Polaroid: Polaroid, GameWindow: GameWindow, HUD: HUD, DialogueBox: DialogueBox, AchievementToast: AchievementToast, ItemCard: ItemCard, QuestLog: QuestLog, WorldMap: WorldMap,
    Badge: Badge, Tooltip: Tooltip, ProgressBar: ProgressBar, StatBar: StatBar, Loader: Loader, Tabs: Tabs, Breadcrumbs: Breadcrumbs, Timeline: Timeline, Accordion: Accordion,
    EmptyState: EmptyState, Mascot: Mascot, TitleScreen: TitleScreen, ICONS: ICONS };
  window.Cozy = Object.assign(window.Cozy || {}, api);
})();
