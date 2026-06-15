/* @ds-bundle: {"format":3,"namespace":"ArtDecoArabianNightsDesignSystem_be1ca3","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"ArchFrame","sourcePath":"components/deco/ArchFrame.jsx"},{"name":"ColorSwatch","sourcePath":"components/deco/ColorSwatch.jsx"},{"name":"Countdown","sourcePath":"components/deco/Countdown.jsx"},{"name":"LangToggle","sourcePath":"components/deco/LangToggle.jsx"},{"name":"Lantern","sourcePath":"components/deco/Lantern.jsx"},{"name":"StarsField","sourcePath":"components/deco/StarsField.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"a03175f745a6","components/core/Card.jsx":"627b70258ed4","components/core/Divider.jsx":"9f96ff94ad75","components/deco/ArchFrame.jsx":"4ec10f6a86a4","components/deco/ColorSwatch.jsx":"c9f3211447d3","components/deco/Countdown.jsx":"09093d17b7fc","components/deco/LangToggle.jsx":"bef45681baa1","components/deco/Lantern.jsx":"4c37a67235a7","components/deco/StarsField.jsx":"5a2509da935a","components/forms/Button.jsx":"dd6528cb4821","components/forms/Input.jsx":"e1e17047ef24","components/forms/RadioGroup.jsx":"95c0cf893ae8","components/forms/Textarea.jsx":"f6790392383b","ui_kits/invitation/App.jsx":"31f61475dfa8","ui_kits/invitation/RSVP.jsx":"57aeacbdd066","ui_kits/invitation/Sections.jsx":"46f10801f66f","ui_kits/invitation/copy.js":"496d879a39f8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArtDecoArabianNightsDesignSystem_be1ca3 = window.ArtDecoArabianNightsDesignSystem_be1ca3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Badge / Tag — small tracked Deco label. Tones: gold, emerald, ruby, outline. */
function Badge({
  tone = 'gold',
  children,
  style,
  ...rest
}) {
  const tones = {
    gold: {
      background: 'var(--grad-gold-soft)',
      color: 'var(--ink-900)',
      border: '1px solid var(--gold-200)'
    },
    emerald: {
      background: 'rgba(26,154,114,0.16)',
      color: 'var(--emerald-400)',
      border: '1px solid rgba(47,190,147,0.4)'
    },
    ruby: {
      background: 'rgba(193,50,71,0.16)',
      color: '#E8889A',
      border: '1px solid rgba(193,50,71,0.45)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--gold-200)',
      border: '1px solid var(--border-gold-soft)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      fontFamily: 'var(--font-deco)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      padding: '0.32rem 0.7rem',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a sapphire glass panel with gold hairline and engraved corners.
 * variant "glass" (default, translucent), "solid" (panel), "gold" (lit edge).
 */
function Card({
  variant = 'glass',
  corners = true,
  children,
  style,
  ...rest
}) {
  const variants = {
    glass: {
      background: 'var(--surface-card)',
      backdropFilter: 'blur(6px)',
      border: '1px solid var(--border-gold-soft)',
      boxShadow: 'var(--shadow-md)'
    },
    solid: {
      background: 'var(--surface-panel)',
      border: '1px solid var(--border-hairline)',
      boxShadow: 'var(--shadow-md)'
    },
    gold: {
      background: 'linear-gradient(180deg, rgba(22,38,92,0.7), rgba(10,15,38,0.85))',
      border: '1px solid var(--border-gold)',
      boxShadow: 'var(--glow-gold)'
    }
  };
  const Corner = ({
    pos
  }) => /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: 14,
      height: 14,
      borderColor: 'var(--gold-400)',
      borderStyle: 'solid',
      opacity: 0.8,
      top: pos.includes('t') ? 8 : undefined,
      bottom: pos.includes('b') ? 8 : undefined,
      left: pos.includes('l') ? 8 : undefined,
      right: pos.includes('r') ? 8 : undefined,
      borderWidth: pos === 'tl' ? '1px 0 0 1px' : pos === 'tr' ? '1px 1px 0 0' : pos === 'bl' ? '0 0 1px 1px' : '0 1px 1px 0'
    }
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      ...variants[variant],
      ...style
    }
  }), corners && ['tl', 'tr', 'bl', 'br'].map(p => /*#__PURE__*/React.createElement(Corner, {
    key: p,
    pos: p
  })), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Divider — ornamental Deco rule: gold hairline tapering to a central
 * motif. motif: "diamond" (lozenge), "sun" (rays), "star".
 */
function Divider({
  motif = 'diamond',
  width = '100%',
  style
}) {
  const line = {
    flex: 1,
    height: 1,
    background: 'linear-gradient(90deg, transparent, var(--border-gold-soft) 30%, var(--gold-400))'
  };
  const lineR = {
    ...line,
    background: 'linear-gradient(90deg, var(--gold-400), var(--border-gold-soft) 70%, transparent)'
  };
  const ornament = {
    diamond: /*#__PURE__*/React.createElement("svg", {
      width: "22",
      height: "22",
      viewBox: "0 0 22 22",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M11 1 L17 11 L11 21 L5 11 Z",
      fill: "none",
      stroke: "var(--gold-400)",
      strokeWidth: "1"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M11 5.5 L14 11 L11 16.5 L8 11 Z",
      fill: "var(--gold-400)",
      opacity: "0.55"
    })),
    sun: /*#__PURE__*/React.createElement("svg", {
      width: "26",
      height: "26",
      viewBox: "0 0 26 26",
      "aria-hidden": "true"
    }, Array.from({
      length: 12
    }).map((_, i) => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: "13",
      y1: "13",
      x2: "13",
      y2: "2",
      stroke: "var(--gold-400)",
      strokeWidth: "0.9",
      transform: `rotate(${i * 30} 13 13)`,
      opacity: i % 2 ? 0.5 : 1
    })), /*#__PURE__*/React.createElement("circle", {
      cx: "13",
      cy: "13",
      r: "3",
      fill: "var(--gold-300)"
    })),
    star: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z",
      fill: "var(--gold-300)"
    }))
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "separator",
    "aria-hidden": "true",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.9rem',
      width,
      margin: '0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: line
  }), ornament[motif], /*#__PURE__*/React.createElement("span", {
    style: lineR
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/deco/ArchFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ArchFrame — Moorish keyhole arch container. A gold-edged niche with a
 * pointed/rounded horseshoe top; the signature framing device of the brand.
 */
function ArchFrame({
  glow = true,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-arch)',
      padding: '2px',
      background: 'linear-gradient(180deg, var(--gold-400), var(--gold-600) 60%, var(--gold-700))',
      boxShadow: glow ? 'var(--glow-gold)' : 'var(--shadow-md)',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      borderRadius: 'var(--radius-arch)',
      background: 'var(--grad-keyhole)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 6,
      left: '50%',
      transform: 'translateX(-50%) rotate(45deg)',
      width: 10,
      height: 10,
      background: 'var(--gold-300)',
      opacity: 0.85
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 10,
      borderRadius: 'var(--radius-arch)',
      border: '1px solid var(--border-gold-soft)',
      pointerEvents: 'none'
    }
  }), children));
}
Object.assign(__ds_scope, { ArchFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deco/ArchFrame.jsx", error: String((e && e.message) || e) }); }

// components/deco/ColorSwatch.jsx
try { (() => {
/**
 * ColorSwatch — a jewel/gold dress-code chip with its name and hex.
 * Used in the Dress Code palette row.
 */
function ColorSwatch({
  color,
  name,
  hex,
  style
}) {
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.55rem',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 'clamp(56px, 16vw, 82px)',
      height: 'clamp(56px, 16vw, 82px)',
      borderRadius: '50%',
      background: color,
      border: '2px solid var(--gold-400)',
      boxShadow: '0 0 0 4px rgba(6,10,26,0.6), var(--glow-gold)'
    }
  }), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      textAlign: 'center',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-deco)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--gold-200)'
    }
  }, name), hex && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.7rem',
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-body)'
    }
  }, hex)));
}
Object.assign(__ds_scope, { ColorSwatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deco/ColorSwatch.jsx", error: String((e && e.message) || e) }); }

// components/deco/Countdown.jsx
try { (() => {
/**
 * Countdown — live timer to the event. Four Deco cells (days/hours/min/sec)
 * with gold numerals on dark wells. Labels are localizable.
 */
function Countdown({
  target,
  labels,
  onComplete,
  style
}) {
  const L = labels || {
    days: 'дней',
    hours: 'часов',
    minutes: 'минут',
    seconds: 'секунд',
    done: 'Сегодня тот самый вечер'
  };
  const [t, setT] = React.useState(() => diff(target));
  React.useEffect(() => {
    const id = setInterval(() => {
      const d = diff(target);
      setT(d);
      if (d.total <= 0) {
        clearInterval(id);
        onComplete && onComplete();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [target]);
  if (t.total <= 0) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        color: 'var(--gold-100)',
        fontStyle: 'italic',
        fontSize: 'var(--fs-h3)',
        textAlign: 'center',
        ...style
      }
    }, L.done);
  }
  const cells = [[t.days, L.days], [t.hours, L.hours], [t.minutes, L.minutes], [t.seconds, L.seconds]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(0.5rem, 2vw, 1rem)',
      justifyContent: 'center',
      ...style
    }
  }, cells.map(([n, lab], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      minWidth: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      fontFamily: 'var(--font-deco)',
      fontSize: 'clamp(1.8rem, 6vw, 3rem)',
      lineHeight: 1,
      color: 'var(--gold-200)',
      background: 'rgba(6,10,26,0.55)',
      border: '1px solid var(--border-gold-soft)',
      borderRadius: 'var(--radius-sm)',
      boxShadow: 'var(--inset-engrave)',
      padding: '0.7rem 0.85rem',
      minWidth: '2.2ch',
      textAlign: 'center'
    }
  }, String(n).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-deco)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, lab))));
}
function diff(target) {
  const total = new Date(target).getTime() - Date.now();
  const s = Math.max(0, Math.floor(total / 1000));
  return {
    total,
    days: Math.floor(s / 86400),
    hours: Math.floor(s % 86400 / 3600),
    minutes: Math.floor(s % 3600 / 60),
    seconds: s % 60
  };
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deco/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/deco/LangToggle.jsx
try { (() => {
/**
 * LangToggle — RU / EN switch. Gold pill with a sliding lit indicator.
 * Controlled: pass `value` ("ru"|"en") and `onChange`.
 */
function LangToggle({
  value = 'ru',
  onChange,
  style
}) {
  const opts = [{
    k: 'ru',
    label: 'РУС'
  }, {
    k: 'en',
    label: 'ENG'
  }];
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Language",
    style: {
      position: 'relative',
      display: 'inline-flex',
      padding: 3,
      borderRadius: 'var(--radius-pill)',
      background: 'rgba(6,10,26,0.55)',
      border: '1px solid var(--border-gold-soft)',
      boxShadow: 'var(--inset-engrave)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 3,
      bottom: 3,
      width: 'calc(50% - 3px)',
      left: value === 'ru' ? 3 : 'calc(50%)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--grad-gold)',
      boxShadow: 'var(--glow-gold)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.k,
    type: "button",
    onClick: () => onChange && onChange(o.k),
    "aria-pressed": value === o.k,
    style: {
      position: 'relative',
      zIndex: 1,
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-deco)',
      fontSize: '0.78rem',
      letterSpacing: '0.16em',
      padding: '0.45rem 0.95rem',
      color: value === o.k ? 'var(--ink-900)' : 'var(--gold-200)',
      transition: 'color var(--dur-base) var(--ease-soft)'
    }
  }, o.label)));
}
Object.assign(__ds_scope, { LangToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deco/LangToggle.jsx", error: String((e && e.message) || e) }); }

// components/deco/Lantern.jsx
try { (() => {
/**
 * Lantern — a hanging brass lantern that sways gently. Decorative; place
 * absolutely near a corner of the hero. Honors prefers-reduced-motion.
 */
function Lantern({
  size = 64,
  sway = true,
  glow = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-block',
      transformOrigin: 'top center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: size * 0.5,
      margin: '0 auto',
      background: 'linear-gradient(var(--gold-500), var(--gold-400))',
      opacity: 0.7
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      transformOrigin: 'top center',
      animation: sway ? 'lantern-sway 5.5s var(--ease-soft) infinite' : 'none'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * 1.5,
    viewBox: "0 0 40 60",
    "aria-hidden": "true",
    style: {
      display: 'block',
      margin: '0 auto',
      overflow: 'visible'
    }
  }, glow && /*#__PURE__*/React.createElement("ellipse", {
    cx: "20",
    cy: "30",
    rx: "16",
    ry: "22",
    fill: "var(--gold-300)",
    opacity: "0.16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 8 Q20 0 26 8 Z",
    fill: "none",
    stroke: "var(--gold-400)",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "6",
    r: "1.6",
    fill: "var(--gold-300)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 12 Q20 4 28 12 L28 44 Q20 50 12 44 Z",
    fill: "rgba(216,181,103,0.10)",
    stroke: "var(--gold-400)",
    strokeWidth: "1.3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 14 Q20 9 24 14 L24 42 Q20 45 16 42 Z",
    fill: "var(--gold-300)",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("ellipse", {
    cx: "20",
    cy: "28",
    rx: "3.2",
    ry: "5",
    fill: "var(--gold-100)",
    opacity: "0.9"
  }, glow && /*#__PURE__*/React.createElement("animate", {
    attributeName: "opacity",
    values: "0.6;1;0.6",
    dur: "3s",
    repeatCount: "indefinite"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M14 44 L26 44 L24 48 L16 48 Z",
    fill: "var(--gold-500)"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "20",
    y1: "48",
    x2: "20",
    y2: "56",
    stroke: "var(--gold-400)",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "57",
    r: "2",
    fill: "var(--gold-300)"
  }))));
}
Object.assign(__ds_scope, { Lantern });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deco/Lantern.jsx", error: String((e && e.message) || e) }); }

// components/deco/StarsField.jsx
try { (() => {
/**
 * StarsField — an ambient layer of softly twinkling gold stars. Drop it as
 * an absolutely-positioned background behind hero/section content.
 */
function StarsField({
  count = 36,
  seed = 7,
  style
}) {
  const stars = React.useMemo(() => {
    let s = seed;
    const rnd = () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
    return Array.from({
      length: count
    }).map(() => ({
      top: rnd() * 100,
      left: rnd() * 100,
      size: 1 + rnd() * 2.4,
      delay: rnd() * 6,
      dur: 3.5 + rnd() * 4,
      bright: rnd() > 0.78
    }));
  }, [count, seed]);
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      pointerEvents: 'none',
      ...style
    }
  }, stars.map((st, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      top: st.top + '%',
      left: st.left + '%',
      width: st.size,
      height: st.size,
      borderRadius: '50%',
      background: st.bright ? 'var(--gold-100)' : 'var(--gold-300)',
      boxShadow: st.bright ? '0 0 6px 1px rgba(249,236,196,0.7)' : '0 0 4px rgba(232,204,133,0.5)',
      animation: `twinkle ${st.dur}s var(--ease-soft) ${st.delay}s infinite`
    }
  })));
}
Object.assign(__ds_scope, { StarsField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/deco/StarsField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary call-to-action of the invitation.
 * Variants: "gold" (filled brass, hero RSVP), "outline" (gold hairline),
 * "ghost" (text + underline), "jewel" (emerald/ruby filled).
 */
function Button({
  variant = 'gold',
  size = 'md',
  jewel = 'emerald',
  as = 'button',
  full = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '0.5rem 1.1rem',
      fontSize: '0.8125rem',
      letterSpacing: '0.18em'
    },
    md: {
      padding: '0.85rem 1.9rem',
      fontSize: '0.875rem',
      letterSpacing: '0.2em'
    },
    lg: {
      padding: '1.1rem 2.6rem',
      fontSize: '0.95rem',
      letterSpacing: '0.22em'
    }
  };
  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    fontFamily: 'var(--font-deco)',
    textTransform: 'uppercase',
    fontWeight: 400,
    borderRadius: 'var(--radius-pill)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'transform var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft), background var(--dur-base) var(--ease-soft), color var(--dur-base) var(--ease-soft)',
    ...sizes[size]
  };
  const variants = {
    gold: {
      background: 'var(--grad-gold)',
      color: 'var(--text-on-gold)',
      border: '1px solid var(--gold-200)',
      boxShadow: 'var(--glow-gold)',
      fontWeight: 500
    },
    outline: {
      background: 'rgba(216,181,103,0.04)',
      color: 'var(--gold-200)',
      border: '1px solid var(--border-gold)',
      boxShadow: 'var(--inset-engrave)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--gold-200)',
      border: '1px solid transparent',
      padding: sizes[size].padding
    },
    jewel: {
      background: jewel === 'ruby' ? 'linear-gradient(180deg, var(--ruby-500), var(--ruby-700))' : 'linear-gradient(180deg, var(--emerald-500), var(--emerald-600))',
      color: 'var(--ivory)',
      border: '1px solid rgba(249,236,196,0.35)',
      boxShadow: 'var(--shadow-md)'
    }
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    className: 'ds-btn ds-btn--' + variant,
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — gold-hairline text field on a dark sapphire well.
 * Includes optional label, required marker, hint and error.
 */
function Input({
  label,
  hint,
  error,
  required = false,
  id,
  style,
  ...rest
}) {
  const fid = id || (label ? 'in-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-deco)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ruby-500)',
      marginLeft: 4
    }
  }, "\u2217")), /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    required: required,
    className: "ds-input",
    "aria-invalid": error ? 'true' : undefined,
    style: {
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      color: 'var(--ivory)',
      background: 'rgba(6,10,26,0.5)',
      border: '1px solid ' + (error ? 'var(--ruby-500)' : 'var(--border-gold-soft)'),
      borderRadius: 'var(--radius-sm)',
      padding: '0.8rem 0.95rem',
      boxShadow: 'var(--inset-engrave)',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...style
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: error ? 'var(--ruby-500)' : 'var(--text-muted)',
      fontStyle: error ? 'normal' : 'italic'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
/**
 * RadioGroup — Deco segmented choice (e.g. Attending Yes / No).
 * Selected option fills with a jewel tone; unselected is gold hairline.
 */
function RadioGroup({
  label,
  options,
  value,
  onChange,
  name,
  required = false,
  style
}) {
  return /*#__PURE__*/React.createElement("fieldset", {
    style: {
      border: 0,
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '0.55rem',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      fontFamily: 'var(--font-deco)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)',
      padding: 0
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ruby-500)',
      marginLeft: 4
    }
  }, "\u2217")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0.6rem',
      flexWrap: 'wrap'
    }
  }, options.map(opt => {
    const selected = value === opt.value;
    const tone = opt.tone || 'emerald';
    const fill = tone === 'ruby' ? 'linear-gradient(180deg, var(--ruby-500), var(--ruby-700))' : 'linear-gradient(180deg, var(--emerald-500), var(--emerald-600))';
    return /*#__PURE__*/React.createElement("label", {
      key: opt.value,
      className: "ds-radio",
      style: {
        flex: '1 1 0',
        minWidth: 120,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        cursor: 'pointer',
        fontFamily: 'var(--font-deco)',
        textTransform: 'uppercase',
        letterSpacing: '0.16em',
        fontSize: '0.85rem',
        padding: '0.85rem 1rem',
        borderRadius: 'var(--radius-pill)',
        color: selected ? 'var(--ivory)' : 'var(--gold-200)',
        background: selected ? fill : 'rgba(6,10,26,0.4)',
        border: '1px solid ' + (selected ? 'rgba(249,236,196,0.4)' : 'var(--border-gold-soft)'),
        boxShadow: selected ? 'var(--shadow-md)' : 'var(--inset-engrave)',
        transition: 'all var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: opt.value,
      checked: selected,
      required: required,
      onChange: () => onChange && onChange(opt.value),
      style: {
        position: 'absolute',
        opacity: 0,
        width: 1,
        height: 1
      }
    }), opt.label);
  })));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line variant of the gold-hairline field. */
function Textarea({
  label,
  hint,
  required = false,
  id,
  rows = 4,
  style,
  ...rest
}) {
  const fid = id || (label ? 'ta-' + label.replace(/\s+/g, '-').toLowerCase() : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      width: '100%'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: 'var(--font-deco)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--gold-300)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ruby-500)',
      marginLeft: 4
    }
  }, "\u2217")), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    required: required,
    className: "ds-input",
    style: {
      width: '100%',
      resize: 'vertical',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ivory)',
      background: 'rgba(6,10,26,0.5)',
      border: '1px solid var(--border-gold-soft)',
      borderRadius: 'var(--radius-sm)',
      padding: '0.8rem 0.95rem',
      boxShadow: 'var(--inset-engrave)',
      transition: 'border-color var(--dur-base) var(--ease-soft)',
      ...style
    }
  }, rest)), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-caption)',
      color: 'var(--text-muted)',
      fontStyle: 'italic'
    }
  }, hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/App.jsx
try { (() => {
/* Invitation app — language state, sticky toggle, scroll-reveal, admin. */
const DS3 = window.ArtDecoArabianNightsDesignSystem_be1ca3;
const {
  LangToggle: LT
} = DS3;
const EVENT_TARGET = '2026-08-09T18:00:00+03:00'; // Nalchik, golden hour

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(e => e.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  });
}
function App() {
  const initial = (() => {
    const p = new URLSearchParams(location.search).get('lang');
    return p === 'en' || p === 'ru' ? p : localStorage.getItem('lyana_lang') || 'ru';
  })();
  const [lang, setLang] = React.useState(initial);
  const [admin, setAdmin] = React.useState(() => new URLSearchParams(location.search).get('admin') !== null);
  const c = window.INVITE_COPY[lang];
  React.useEffect(() => {
    localStorage.setItem('lyana_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);
  useReveal();
  const goRSVP = () => {
    const el = document.getElementById('rsvp');
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 20,
      behavior: 'smooth'
    });
  };
  const heroT = {
    ...c.hero,
    _cd: c.countdown
  };
  return /*#__PURE__*/React.createElement("div", {
    key: lang
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 'var(--space-4)',
      right: 'var(--space-4)',
      zIndex: 200
    }
  }, /*#__PURE__*/React.createElement(LT, {
    value: lang,
    onChange: setLang
  })), /*#__PURE__*/React.createElement(window.Hero, {
    t: heroT,
    target: EVENT_TARGET,
    onRSVP: goRSVP
  }), /*#__PURE__*/React.createElement(window.Invitation, {
    t: c.invitation
  }), /*#__PURE__*/React.createElement(window.Details, {
    t: c.details
  }), /*#__PURE__*/React.createElement(window.DressCode, {
    t: c.dress
  }), /*#__PURE__*/React.createElement(window.NightAhead, {
    t: c.night
  }), /*#__PURE__*/React.createElement(window.RSVP, {
    t: c.rsvp
  }), /*#__PURE__*/React.createElement(window.FAQ, {
    t: c.faq
  }), /*#__PURE__*/React.createElement(window.Footer, {
    t: c.footer,
    onAdmin: () => setAdmin(true)
  }), admin && /*#__PURE__*/React.createElement(window.AdminPanel, {
    t: c.admin,
    onClose: () => setAdmin(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/RSVP.jsx
try { (() => {
/* RSVP form, FAQ, Footer, and the host's Admin panel. */
const DS2 = window.ArtDecoArabianNightsDesignSystem_be1ca3;
const {
  Button: B2,
  Card: C2,
  Badge: Bg2,
  Divider: D2,
  Input: In2,
  Textarea: Ta2,
  RadioGroup: Rg2,
  Lantern: L2
} = DS2;
const RSVP_KEY = 'lyana_rsvp_2026';
function loadRSVPs() {
  try {
    return JSON.parse(localStorage.getItem(RSVP_KEY) || '[]');
  } catch (e) {
    return [];
  }
}
function saveRSVP(entry) {
  const all = loadRSVPs();
  all.push(entry);
  localStorage.setItem(RSVP_KEY, JSON.stringify(all));
  // Optional remote capture: set window.RSVP_ENDPOINT to a Formspree/Sheet URL.
  if (window.RSVP_ENDPOINT) {
    try {
      fetch(window.RSVP_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(entry)
      }).catch(() => {});
    } catch (e) {/* offline-safe */}
  }
}

/* ============ RSVP ============ */
function RSVP({
  t
}) {
  const [form, setForm] = React.useState({
    name: '',
    attending: '',
    guest: '',
    diet: '',
    contact: ''
  });
  const [done, setDone] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target ? e.target.value : e
  }));
  const submit = e => {
    e.preventDefault();
    if (!form.name.trim() || !form.attending || !form.contact.trim()) {
      setErr(true);
      return;
    }
    setErr(false);
    saveRSVP({
      ...form,
      ts: new Date().toISOString()
    });
    setDone(true);
  };
  const Wrap = window.Section;
  if (done) {
    const coming = form.attending === 'yes';
    return /*#__PURE__*/React.createElement(Wrap, {
      id: "rsvp",
      eyebrow: t.eyebrow,
      narrow: true
    }, /*#__PURE__*/React.createElement(C2, {
      variant: "gold",
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        fontSize: 34,
        color: 'var(--gold-200)',
        marginBottom: 'var(--space-3)'
      }
    }, coming ? '✦' : '☾'), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-h2)',
        color: 'var(--gold-100)',
        margin: '0 0 var(--space-4)'
      }
    }, coming ? t.successTitle : t.again), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--ivory)',
        fontSize: 'var(--fs-lead)',
        fontStyle: 'italic',
        lineHeight: 'var(--lh-body)',
        textWrap: 'pretty',
        margin: '0 auto var(--space-5)',
        maxWidth: 460
      }
    }, coming ? t.successBody : t.successDecline), /*#__PURE__*/React.createElement(B2, {
      variant: "outline",
      onClick: () => setDone(false)
    }, t.again)));
  }
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "rsvp",
    eyebrow: t.eyebrow,
    title: t.title,
    narrow: true
  }, /*#__PURE__*/React.createElement(Bg2, {
    tone: "outline",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, t.subtitle), /*#__PURE__*/React.createElement(C2, {
    variant: "glass",
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(In2, {
    label: t.name,
    required: true,
    value: form.name,
    onChange: set('name'),
    placeholder: t.name
  }), /*#__PURE__*/React.createElement(Rg2, {
    label: t.attending,
    name: "attending",
    required: true,
    value: form.attending,
    onChange: set('attending'),
    options: [{
      value: 'yes',
      label: t.yes,
      tone: 'emerald'
    }, {
      value: 'no',
      label: t.no,
      tone: 'ruby'
    }]
  }), /*#__PURE__*/React.createElement(In2, {
    label: t.guest,
    hint: t.guestHint,
    value: form.guest,
    onChange: set('guest'),
    placeholder: "\u2014"
  }), /*#__PURE__*/React.createElement(Ta2, {
    label: t.diet,
    hint: t.dietHint,
    rows: 2,
    value: form.diet,
    onChange: set('diet')
  }), /*#__PURE__*/React.createElement(In2, {
    label: t.contact,
    required: true,
    value: form.contact,
    onChange: set('contact'),
    placeholder: "+7 \u2026 / name@mail"
  }), err && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ruby-500)',
      fontSize: 'var(--fs-sm)',
      fontStyle: 'italic'
    }
  }, t.required), /*#__PURE__*/React.createElement(B2, {
    variant: "gold",
    size: "lg",
    full: true,
    type: "submit"
  }, t.submit))));
}

/* ============ FAQ ============ */
function FAQ({
  t
}) {
  const [open, setOpen] = React.useState(0);
  const Wrap = window.Section;
  return /*#__PURE__*/React.createElement(Wrap, {
    id: "faq",
    eyebrow: t.eyebrow,
    title: t.title,
    narrow: true,
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      textAlign: 'left'
    }
  }, t.items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement(C2, {
      key: i,
      variant: "solid",
      corners: false,
      style: {
        padding: 0,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      "aria-expanded": isOpen,
      style: {
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        background: 'transparent',
        border: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'var(--space-4)',
        padding: 'var(--space-5)',
        color: 'var(--gold-100)',
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--fs-h3)'
      }
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: 'var(--gold-400)',
        fontSize: 20,
        transition: 'transform var(--dur-base) var(--ease-soft)',
        transform: isOpen ? 'rotate(45deg)' : 'none'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 240 : 0,
        opacity: isOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'max-height var(--dur-slow) var(--ease-soft), opacity var(--dur-base) var(--ease-soft)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 var(--space-5) var(--space-5)',
        color: 'var(--ivory-dim)',
        fontSize: 'var(--fs-body)',
        lineHeight: 'var(--lh-body)',
        textWrap: 'pretty'
      }
    }, it.a)));
  })));
}

/* ============ FOOTER ============ */
function Footer({
  t,
  onAdmin
}) {
  return /*#__PURE__*/React.createElement("footer", {
    "data-screen-label": "footer",
    style: {
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      padding: 'var(--section-y) var(--gutter) var(--space-7)',
      background: 'var(--grad-night)'
    }
  }, /*#__PURE__*/React.createElement(L2, {
    size: 40,
    style: {
      display: 'inline-block',
      marginBottom: 'var(--space-4)'
    }
  }), /*#__PURE__*/React.createElement(D2, {
    motif: "star",
    width: "120px",
    style: {
      margin: '0 auto var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--ivory-dim)',
      fontSize: 'var(--fs-lead)',
      margin: '0 0 var(--space-5)'
    }
  }, t.closing), /*#__PURE__*/React.createElement("div", {
    className: "gold-leaf",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h2)',
      marginBottom: 'var(--space-2)'
    }
  }, t.host), /*#__PURE__*/React.createElement("a", {
    href: t.phoneHref,
    style: {
      display: 'inline-block',
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.16em',
      color: 'var(--gold-200)',
      textDecoration: 'none',
      fontSize: 'var(--fs-body)',
      marginBottom: 'var(--space-6)'
    }
  }, t.phone), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-deco)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, t.hashtagLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.1em',
      color: 'var(--gold-300)',
      fontSize: 'var(--fs-h3)'
    }
  }, t.hashtag)), /*#__PURE__*/React.createElement("button", {
    onClick: onAdmin,
    "aria-label": "host",
    style: {
      marginTop: 'var(--space-6)',
      background: 'transparent',
      border: 0,
      color: 'var(--ivory-muted)',
      opacity: 0.5,
      cursor: 'pointer',
      fontSize: 12,
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.16em'
    }
  }, "\u2726 host \u2726"));
}

/* ============ ADMIN (host's RSVP viewer) ============ */
function AdminPanel({
  t,
  onClose
}) {
  const [rows, setRows] = React.useState(loadRSVPs);
  const coming = rows.filter(r => r.attending === 'yes').length;
  const exportCSV = () => {
    const head = ['Имя', 'Придёт', '+1', 'Питание', 'Контакт', 'Когда'];
    const esc = s => '"' + String(s || '').replace(/"/g, '""') + '"';
    const body = rows.map(r => [r.name, r.attending === 'yes' ? 'Да' : 'Нет', r.guest, r.diet, r.contact, r.ts].map(esc).join(','));
    const csv = '\uFEFF' + [head.join(','), ...body].join('\n');
    const url = URL.createObjectURL(new Blob([csv], {
      type: 'text/csv'
    }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'rsvp-lyana-2026.csv';
    a.click();
    URL.revokeObjectURL(url);
  };
  const clear = () => {
    if (confirm('Очистить все ответы на этом устройстве?')) {
      localStorage.removeItem(RSVP_KEY);
      setRows([]);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      background: 'rgba(6,10,26,0.82)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      padding: 'var(--gutter)',
      overflow: 'auto'
    },
    onClick: onClose
  }, /*#__PURE__*/React.createElement(C2, {
    variant: "gold",
    style: {
      maxWidth: 760,
      width: '100%',
      margin: 'var(--space-6) 0',
      textAlign: 'left'
    },
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      color: 'var(--gold-100)',
      fontSize: 'var(--fs-h2)'
    }
  }, t.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Bg2, {
    tone: "emerald"
  }, rows.length, " ", t.count, " \xB7 ", coming, " ", t.coming))), rows.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ivory-dim)',
      fontStyle: 'italic'
    }
  }, t.empty) : /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontSize: 'var(--fs-sm)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      color: 'var(--gold-300)',
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-caption)'
    }
  }, ['Имя', '+1', 'Питание', 'Контакт'].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: 'left',
      padding: '8px 10px',
      borderBottom: '1px solid var(--border-gold-soft)'
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      color: 'var(--ivory)',
      borderBottom: '1px solid var(--border-hairline)',
      background: r.attending === 'yes' ? 'rgba(26,154,114,0.08)' : 'rgba(193,50,71,0.08)'
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '8px 10px'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--gold-100)'
    }
  }, r.name)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '8px 10px'
    }
  }, r.guest || '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '8px 10px',
      maxWidth: 180
    }
  }, r.diet || '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: '8px 10px'
    }
  }, r.contact)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(B2, {
    variant: "gold",
    size: "sm",
    onClick: exportCSV
  }, t.export), /*#__PURE__*/React.createElement(B2, {
    variant: "ghost",
    size: "sm",
    onClick: clear
  }, t.clear), /*#__PURE__*/React.createElement(B2, {
    variant: "outline",
    size: "sm",
    onClick: onClose,
    style: {
      marginLeft: 'auto'
    }
  }, t.close))));
}
Object.assign(window, {
  RSVP,
  FAQ,
  Footer,
  AdminPanel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/RSVP.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/Sections.jsx
try { (() => {
/* Invitation sections — Hero, Invitation, Details, DressCode, NightAhead.
   Pulls primitives from the compiled design-system bundle. */
const DS = window.ArtDecoArabianNightsDesignSystem_be1ca3;
const {
  Button,
  Card,
  Badge,
  Divider,
  ArchFrame,
  Countdown,
  Lantern,
  StarsField,
  ColorSwatch
} = DS;

/* ---- shared section shell ---- */
function Section({
  id,
  eyebrow,
  title,
  children,
  tone,
  narrow
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    "data-screen-label": id,
    style: {
      position: 'relative',
      padding: 'var(--section-y) var(--gutter)',
      background: tone === 'raised' ? 'linear-gradient(180deg, rgba(22,38,92,0.32), transparent)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: narrow ? 680 : 'var(--content-max)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: ivEyebrow
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    className: "reveal",
    style: ivTitle
  }, title), title && /*#__PURE__*/React.createElement(Divider, {
    motif: "sun",
    width: "120px",
    style: {
      margin: '0 auto var(--space-6)'
    }
  }), children));
}
const ivEyebrow = {
  fontFamily: 'var(--font-deco)',
  fontSize: 'var(--fs-eyebrow)',
  letterSpacing: 'var(--ls-eyebrow)',
  textTransform: 'uppercase',
  color: 'var(--gold-300)',
  marginBottom: 'var(--space-4)'
};
const ivTitle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'var(--fs-h1)',
  color: 'var(--gold-100)',
  margin: '0 0 var(--space-4)',
  fontWeight: 800
};

/* ============ HERO ============ */
function Hero({
  t,
  target,
  onRSVP
}) {
  return /*#__PURE__*/React.createElement("header", {
    "data-screen-label": "hero",
    style: {
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100svh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 'calc(var(--space-9)) var(--gutter) var(--space-8)',
      background: 'var(--grad-night)'
    }
  }, /*#__PURE__*/React.createElement(StarsField, {
    count: 44
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '6%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'min(92vw, 760px)',
      height: 'min(92vw, 760px)',
      background: 'radial-gradient(circle, rgba(216,181,103,0.16), transparent 62%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement(Lantern, {
    size: 48,
    style: {
      position: 'absolute',
      top: 0,
      left: 'max(6vw, 24px)'
    }
  }), /*#__PURE__*/React.createElement(Lantern, {
    size: 48,
    style: {
      position: 'absolute',
      top: 0,
      right: 'max(6vw, 24px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      zIndex: 1,
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(ArchFrame, {
    style: {
      width: 'min(78vw, 320px)',
      height: 'min(96vw, 400px)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      marginBottom: '12%',
      padding: '0 8%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.3em',
      fontSize: 'var(--fs-eyebrow)',
      color: 'var(--gold-300)',
      marginBottom: 8
    }
  }, "45"), /*#__PURE__*/React.createElement("div", {
    className: "gold-leaf",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(2.6rem, 12vw, 4.2rem)',
      lineHeight: 1
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: 'var(--ivory-dim)',
      fontSize: 'var(--fs-h3)',
      marginTop: 4
    }
  }, t.surname)))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      zIndex: 1,
      marginTop: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: ivEyebrow
  }, t.occasion), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 'var(--fs-lead)',
      color: 'var(--ivory)',
      margin: '0 0 var(--space-5)',
      maxWidth: 520
    }
  }, "\xAB", t.tagline, "\xBB"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      color: 'var(--gold-200)',
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.14em',
      fontSize: 'var(--fs-sm)',
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("span", null, t.date), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--gold-500)'
    }
  }, "\u2726"), /*#__PURE__*/React.createElement("span", null, t.venue))), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      zIndex: 1,
      marginBottom: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...ivEyebrow,
      marginBottom: 'var(--space-3)'
    }
  }, t.countdownTo), /*#__PURE__*/React.createElement(Countdown, {
    target: target,
    labels: t._cd
  })), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "gold",
    size: "lg",
    onClick: onRSVP
  }, t.rsvp)));
}

/* ============ INVITATION ============ */
function Invitation({
  t
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "invitation",
    eyebrow: t.eyebrow,
    title: t.title,
    narrow: true,
    tone: "raised"
  }, /*#__PURE__*/React.createElement("p", {
    className: "reveal",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--fs-lead)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--ivory)',
      textWrap: 'pretty',
      fontStyle: 'italic',
      margin: '0 auto',
      maxWidth: 620
    }
  }, t.body), /*#__PURE__*/React.createElement(Divider, {
    motif: "diamond",
    width: "80px",
    style: {
      margin: 'var(--space-6) auto 0'
    }
  }));
}

/* ============ DETAILS ============ */
function Details({
  t
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "details",
    eyebrow: t.eyebrow,
    title: t.title,
    narrow: true
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "glass",
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("dl", {
    className: "reveal",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: 0,
      margin: 0
    }
  }, t.items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      padding: 'var(--space-4) 0',
      borderBottom: i < t.items.length - 1 ? '1px solid var(--border-hairline)' : 'none',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      fontSize: 'var(--fs-caption)',
      color: 'var(--gold-300)'
    }
  }, it.k), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      color: 'var(--ivory)',
      fontSize: 'var(--fs-body)',
      textAlign: 'right'
    }
  }, it.v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginTop: 'var(--space-5)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    as: "a",
    href: t.mapsHref,
    target: "_blank",
    rel: "noopener"
  }, t.maps), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-sm)',
      color: 'var(--text-muted)',
      fontStyle: 'italic',
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--gold-200)',
      fontStyle: 'normal',
      fontFamily: 'var(--font-deco)',
      letterSpacing: '0.12em',
      fontSize: 'var(--fs-caption)',
      textTransform: 'uppercase',
      marginRight: 8
    }
  }, t.parkingLabel), t.parking))));
}

/* ============ DRESS CODE ============ */
function DressCode({
  t
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "dress",
    eyebrow: t.eyebrow,
    title: t.title,
    tone: "raised"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, t.subtitle), /*#__PURE__*/React.createElement("div", {
    className: "reveal",
    style: {
      display: 'flex',
      gap: 'clamp(0.75rem, 4vw, 2rem)',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-7)'
    }
  }, t.palette.map((p, i) => /*#__PURE__*/React.createElement(ColorSwatch, {
    key: i,
    color: p.c,
    name: p.n
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: 'var(--space-4)',
      textAlign: 'left'
    }
  }, [t.women, t.men].map((g, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "solid",
    corners: false
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)',
      margin: '0 0 var(--space-2)',
      color: 'var(--gold-100)'
    }
  }, g.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ivory-dim)',
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      textWrap: 'pretty'
    }
  }, g.t)))));
}

/* ============ THE NIGHT AHEAD ============ */
function NightAhead({
  t
}) {
  const icons = ['☾', '✦', '♪', '❧'];
  return /*#__PURE__*/React.createElement(Section, {
    id: "night",
    eyebrow: t.eyebrow,
    title: t.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 'var(--space-4)',
      textAlign: 'left'
    }
  }, t.teasers.map((te, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "glass",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontSize: 26,
      color: 'var(--gold-300)',
      lineHeight: 1
    }
  }, icons[i % icons.length]), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--fs-h3)',
      margin: 0,
      color: 'var(--gold-100)'
    }
  }, te.h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ivory-dim)',
      fontSize: 'var(--fs-sm)',
      lineHeight: 'var(--lh-body)',
      textWrap: 'pretty'
    }
  }, te.t)))));
}
Object.assign(window, {
  Section,
  Hero,
  Invitation,
  Details,
  DressCode,
  NightAhead,
  ivEyebrow,
  ivTitle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/invitation/copy.js
try { (() => {
/* Bilingual copy for the invitation — default Russian, English toggle.
   window.INVITE_COPY[lang].<section>  */
window.INVITE_COPY = {
  ru: {
    nav: {
      rsvp: 'Ответить'
    },
    hero: {
      eyebrow: 'Приглашение · 45-летие',
      name: 'Ляна',
      surname: 'Хабибуллина',
      occasion: 'Юбилейный вечер · 45 лет',
      tagline: 'Вечер из тысячи и одной истории',
      date: '9 августа 2026',
      venue: 'Baya Harahora · Нальчик',
      rsvp: 'Подтвердить участие',
      countdownTo: 'До начала вечера'
    },
    countdown: {
      days: 'дней',
      hours: 'часов',
      minutes: 'минут',
      seconds: 'секунд',
      done: 'Сегодня тот самый вечер'
    },
    invitation: {
      eyebrow: 'Приглашение',
      title: 'Тысяча и одна ночь',
      body: 'Когда на Кавказ опускается тёплая ночь, двери дворца отворяются для самых дорогих гостей. Нас ждёт вечер восточного великолепия и деко-роскоши — мерцание золота, аромат специй и музыка, что льётся до рассвета. Приходите разделить одну из тысячи и одной истории — нашу.'
    },
    details: {
      eyebrow: 'Детали',
      title: 'Вечер',
      items: [{
        k: 'Дата',
        v: '9 августа 2026, суббота'
      }, {
        k: 'Прибытие',
        v: 'Золотой час · 18:00'
      }, {
        k: 'Место',
        v: 'Baya Harahora'
      }, {
        k: 'Адрес',
        v: 'Нальчик, Кабардино-Балкария'
      }],
      parkingLabel: 'Парковка',
      parking: 'Бесплатная парковка для гостей у входа в ресторан.',
      maps: 'Открыть в картах',
      mapsHref: 'https://maps.google.com/?q=Baya+Harahora+Нальчик'
    },
    dress: {
      eyebrow: 'Дресс-код',
      title: 'Восточный блеск и деко-золото',
      subtitle: 'Самоцветные тона и золото',
      palette: [{
        c: '#16265C',
        n: 'Сапфир'
      }, {
        c: '#1A9A72',
        n: 'Изумруд'
      }, {
        c: '#9A2233',
        n: 'Рубин'
      }, {
        c: '#6E4A9E',
        n: 'Аметист'
      }, {
        c: 'var(--grad-gold)',
        n: 'Золото'
      }],
      women: {
        h: 'Дамам',
        t: 'Длинные платья глубоких самоцветных тонов, шёлк и бархат, золотые украшения, изящная вышивка. Приветствуются восточные мотивы.'
      },
      men: {
        h: 'Господам',
        t: 'Тёмный костюм — сапфир, изумруд или чёрный, — золотые или бордовые акценты: галстук, платок, запонки.'
      }
    },
    night: {
      eyebrow: 'Что вас ждёт',
      title: 'Вечер впереди',
      teasers: [{
        h: 'Золотой час',
        t: 'Встреча на террасе с видом на горы, бокал игристого и тёплый кавказский закат.'
      }, {
        h: 'Пир',
        t: 'Столы, что ломятся от восточных яств, специй и сладостей до глубокой ночи.'
      }, {
        h: 'Музыка и танцы',
        t: 'Живая музыка, лезгинка и восточный танец — и танцпол, что не остынет до рассвета.'
      }, {
        h: 'Интрига',
        t: 'Немного тайны, страсти и историй, которые рождаются лишь в такие ночи.'
      }]
    },
    rsvp: {
      eyebrow: 'RSVP',
      title: 'Ваш ответ',
      subtitle: 'Пожалуйста, ответьте до 1 августа',
      name: 'Имя и фамилия',
      attending: 'Придёте?',
      yes: 'Да, буду',
      no: 'К сожалению, нет',
      guest: 'Имя сопровождающего (+1)',
      guestHint: 'Если придёте вдвоём',
      diet: 'Аллергии и предпочтения в еде',
      dietHint: 'Например: вегетарианское меню, без орехов',
      contact: 'Телефон или e-mail',
      contactHint: 'Чтобы мы могли с вами связаться',
      submit: 'Отправить ответ',
      required: 'Пожалуйста, заполните обязательные поля',
      successTitle: 'Ваше место за пиром забронировано',
      successBody: 'Благодарим за ответ. Мы бережно сохраним для вас место под золотыми сводами. До встречи на вечере из тысячи и одной истории.',
      successDecline: 'Спасибо, что дали знать. Нам будет вас не хватать — но мы поднимем бокал за вас.',
      again: 'Изменить ответ'
    },
    faq: {
      eyebrow: 'Вопросы',
      title: 'Часто спрашивают',
      items: [{
        q: 'Можно ли прийти с детьми?',
        a: 'Это вечер для взрослых — мы будем праздновать до глубокой ночи. Пожалуйста, оставьте малышей дома и отдохните вместе с нами.'
      }, {
        q: 'Когда состоится вечер?',
        a: '9 августа 2026 года, суббота. Сбор гостей в золотой час, к 18:00.'
      }, {
        q: 'Что подарить?',
        a: 'Ваше присутствие — лучший подарок. Если захотите большего, тёплое слово или цветы будут приняты с радостью.'
      }, {
        q: 'К кому обратиться с вопросами?',
        a: 'Звоните или пишите хозяйке вечера: +7 916 827 35 59.'
      }]
    },
    footer: {
      host: 'Ляна Хабибуллина',
      phone: '+7 916 827 35 59',
      phoneHref: 'tel:+79168273559',
      hashtagLabel: 'Делитесь снимками вечера',
      hashtag: '#1001НочьЛяны',
      closing: 'С любовью ждём вас'
    },
    admin: {
      title: 'Ответы гостей',
      empty: 'Пока нет ответов на этом устройстве.',
      export: 'Скачать CSV',
      clear: 'Очистить',
      close: 'Закрыть',
      count: 'ответов',
      coming: 'придут'
    }
  },
  en: {
    nav: {
      rsvp: 'RSVP'
    },
    hero: {
      eyebrow: 'Invitation · 45th Birthday',
      name: 'Lyana',
      surname: 'Khabibullina',
      occasion: 'A Milestone Evening · Turning 45',
      tagline: 'A night of a thousand and one tales',
      date: '9 August 2026',
      venue: 'Baya Harahora · Nalchik',
      rsvp: 'Reserve your place',
      countdownTo: 'Until the evening begins'
    },
    countdown: {
      days: 'days',
      hours: 'hours',
      minutes: 'minutes',
      seconds: 'seconds',
      done: 'Tonight is the night'
    },
    invitation: {
      eyebrow: 'The Invitation',
      title: 'A Thousand & One Nights',
      body: 'When a warm night settles over the Caucasus, the palace doors open for the dearest of guests. An evening of Eastern splendour and Deco glamour awaits — shimmering gold, the scent of spice, and music that pours on until dawn. Come share one of a thousand and one tales — ours.'
    },
    details: {
      eyebrow: 'Details',
      title: 'The Evening',
      items: [{
        k: 'Date',
        v: 'Saturday, 9 August 2026'
      }, {
        k: 'Arrival',
        v: 'Golden hour · 6:00 pm'
      }, {
        k: 'Venue',
        v: 'Baya Harahora'
      }, {
        k: 'Address',
        v: 'Nalchik, Kabardino-Balkaria'
      }],
      parkingLabel: 'Parking',
      parking: 'Complimentary guest parking at the restaurant entrance.',
      maps: 'Open in Maps',
      mapsHref: 'https://maps.google.com/?q=Baya+Harahora+Nalchik'
    },
    dress: {
      eyebrow: 'Dress Code',
      title: 'Eastern Glamour meets Deco Gold',
      subtitle: 'Jewel tones & gold',
      palette: [{
        c: '#16265C',
        n: 'Sapphire'
      }, {
        c: '#1A9A72',
        n: 'Emerald'
      }, {
        c: '#9A2233',
        n: 'Ruby'
      }, {
        c: '#6E4A9E',
        n: 'Amethyst'
      }, {
        c: 'var(--grad-gold)',
        n: 'Gold'
      }],
      women: {
        h: 'For Her',
        t: 'Floor-length gowns in deep jewel tones, silk and velvet, gold jewellery and fine embroidery. Eastern motifs are warmly welcome.'
      },
      men: {
        h: 'For Him',
        t: 'A dark suit — sapphire, emerald or black — with gold or burgundy accents: a tie, a pocket square, cufflinks.'
      }
    },
    night: {
      eyebrow: 'What awaits',
      title: 'The Night Ahead',
      teasers: [{
        h: 'Golden Hour',
        t: 'A welcome on the terrace beneath the mountains, sparkling in hand and a warm Caucasus sunset.'
      }, {
        h: 'The Feast',
        t: 'Tables laden with Eastern delicacies, spice and sweetness, late into the night.'
      }, {
        h: 'Music & Dance',
        t: 'Live music, lezginka and belly dance — and a dance floor that won’t cool until dawn.'
      }, {
        h: 'Intrigue',
        t: 'A little mystery, a little passion, and the kind of stories born only on nights like this.'
      }]
    },
    rsvp: {
      eyebrow: 'RSVP',
      title: 'Your Reply',
      subtitle: 'Kindly respond by 1 August',
      name: 'Full name',
      attending: 'Will you attend?',
      yes: 'Yes, I’ll be there',
      no: 'Sadly, I can’t',
      guest: 'Name of your guest (+1)',
      guestHint: 'If you’re bringing someone',
      diet: 'Allergies & dietary needs',
      dietHint: 'e.g. vegetarian, no nuts',
      contact: 'Phone or e-mail',
      contactHint: 'So we can reach you',
      submit: 'Send reply',
      required: 'Please fill in the required fields',
      successTitle: 'Your seat at the feast is reserved',
      successBody: 'Thank you for your reply. We’ll keep a place for you beneath the golden arches. Until the night of a thousand and one tales.',
      successDecline: 'Thank you for letting us know. You’ll be missed — we’ll raise a glass to you.',
      again: 'Edit my reply'
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Frequently Asked',
      items: [{
        q: 'Can I bring children?',
        a: 'This is a grown-ups’ evening — we’ll celebrate late into the night. Please leave the little ones at home and enjoy a night off with us.'
      }, {
        q: 'When does it take place?',
        a: 'Saturday, 9 August 2026. Guests gather at golden hour, around 6:00 pm.'
      }, {
        q: 'What about gifts?',
        a: 'Your presence is the finest gift. Should you wish for more, a warm word or flowers will be received with joy.'
      }, {
        q: 'Who do I contact with questions?',
        a: 'Call or message the host: +7 916 827 35 59.'
      }]
    },
    footer: {
      host: 'Lyana Khabibullina',
      phone: '+7 916 827 35 59',
      phoneHref: 'tel:+79168273559',
      hashtagLabel: 'Share your photos of the night',
      hashtag: '#1001NightsOfLyana',
      closing: 'With love, we await you'
    },
    admin: {
      title: 'Guest replies',
      empty: 'No replies on this device yet.',
      export: 'Download CSV',
      clear: 'Clear',
      close: 'Close',
      count: 'replies',
      coming: 'attending'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/invitation/copy.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.ArchFrame = __ds_scope.ArchFrame;

__ds_ns.ColorSwatch = __ds_scope.ColorSwatch;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.LangToggle = __ds_scope.LangToggle;

__ds_ns.Lantern = __ds_scope.Lantern;

__ds_ns.StarsField = __ds_scope.StarsField;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Textarea = __ds_scope.Textarea;

})();
