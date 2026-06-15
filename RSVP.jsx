/* RSVP form, FAQ, Footer, and the host's Admin panel. */
const DS2 = window.ArtDecoArabianNightsDesignSystem_be1ca3;
const { Button: B2, Card: C2, Badge: Bg2, Divider: D2, Input: In2, Textarea: Ta2, RadioGroup: Rg2, Lantern: L2 } = DS2;

const RSVP_KEY = 'lyana_rsvp_2026';

function loadRSVPs() {
  try { return JSON.parse(localStorage.getItem(RSVP_KEY) || '[]'); } catch (e) { return []; }
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
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(entry),
      }).catch(() => {});
    } catch (e) { /* offline-safe */ }
  }
}

/* ============ RSVP ============ */
function RSVP({ t }) {
  const [form, setForm] = React.useState({ name: '', attending: '', guest: '', diet: '', contact: '' });
  const [done, setDone] = React.useState(false);
  const [err, setErr] = React.useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target ? e.target.value : e }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.attending || !form.contact.trim()) { setErr(true); return; }
    setErr(false);
    saveRSVP({ ...form, ts: new Date().toISOString() });
    setDone(true);
  };

  const Wrap = window.Section;

  if (done) {
    const coming = form.attending === 'yes';
    return (
      <Wrap id="rsvp" eyebrow={t.eyebrow} narrow>
        <C2 variant="gold" style={{ textAlign: 'center' }}>
          <div aria-hidden="true" style={{ fontSize: 34, color: 'var(--gold-200)', marginBottom: 'var(--space-3)' }}>{coming ? '✦' : '☾'}</div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h2)', color: 'var(--gold-100)', margin: '0 0 var(--space-4)' }}>
            {coming ? t.successTitle : t.again}
          </h3>
          <p style={{ color: 'var(--ivory)', fontSize: 'var(--fs-lead)', fontStyle: 'italic', lineHeight: 'var(--lh-body)', textWrap: 'pretty', margin: '0 auto var(--space-5)', maxWidth: 460 }}>
            {coming ? t.successBody : t.successDecline}
          </p>
          <B2 variant="outline" onClick={() => setDone(false)}>{t.again}</B2>
        </C2>
      </Wrap>
    );
  }

  return (
    <Wrap id="rsvp" eyebrow={t.eyebrow} title={t.title} narrow>
      <Bg2 tone="outline" style={{ marginBottom: 'var(--space-6)' }}>{t.subtitle}</Bg2>
      <C2 variant="glass" style={{ textAlign: 'left' }}>
        <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <In2 label={t.name} required value={form.name} onChange={set('name')} placeholder={t.name} />
          <Rg2
            label={t.attending} name="attending" required value={form.attending} onChange={set('attending')}
            options={[{ value: 'yes', label: t.yes, tone: 'emerald' }, { value: 'no', label: t.no, tone: 'ruby' }]}
          />
          <In2 label={t.guest} hint={t.guestHint} value={form.guest} onChange={set('guest')} placeholder="—" />
          <Ta2 label={t.diet} hint={t.dietHint} rows={2} value={form.diet} onChange={set('diet')} />
          <In2 label={t.contact} required value={form.contact} onChange={set('contact')} placeholder="+7 … / name@mail" />
          {err && <span style={{ color: 'var(--ruby-500)', fontSize: 'var(--fs-sm)', fontStyle: 'italic' }}>{t.required}</span>}
          <B2 variant="gold" size="lg" full type="submit">{t.submit}</B2>
        </form>
      </C2>
    </Wrap>
  );
}

/* ============ FAQ ============ */
function FAQ({ t }) {
  const [open, setOpen] = React.useState(0);
  const Wrap = window.Section;
  return (
    <Wrap id="faq" eyebrow={t.eyebrow} title={t.title} narrow tone="raised">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', textAlign: 'left' }}>
        {t.items.map((it, i) => {
          const isOpen = open === i;
          return (
            <C2 key={i} variant="solid" corners={false} style={{ padding: 0, overflow: 'hidden' }}>
              <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} style={{
                width: '100%', textAlign: 'left', cursor: 'pointer', background: 'transparent', border: 0,
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)',
                padding: 'var(--space-5)', color: 'var(--gold-100)', fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h3)',
              }}>
                <span>{it.q}</span>
                <span aria-hidden="true" style={{ color: 'var(--gold-400)', fontSize: 20, transition: 'transform var(--dur-base) var(--ease-soft)', transform: isOpen ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              <div style={{ maxHeight: isOpen ? 240 : 0, opacity: isOpen ? 1 : 0, overflow: 'hidden', transition: 'max-height var(--dur-slow) var(--ease-soft), opacity var(--dur-base) var(--ease-soft)' }}>
                <p style={{ margin: 0, padding: '0 var(--space-5) var(--space-5)', color: 'var(--ivory-dim)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', textWrap: 'pretty' }}>{it.a}</p>
              </div>
            </C2>
          );
        })}
      </div>
    </Wrap>
  );
}

/* ============ FOOTER ============ */
function Footer({ t, onAdmin }) {
  return (
    <footer data-screen-label="footer" style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: 'var(--section-y) var(--gutter) var(--space-7)', background: 'var(--grad-night)' }}>
      <L2 size={40} style={{ display: 'inline-block', marginBottom: 'var(--space-4)' }} />
      <D2 motif="star" width="120px" style={{ margin: '0 auto var(--space-6)' }} />
      <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--ivory-dim)', fontSize: 'var(--fs-lead)', margin: '0 0 var(--space-5)' }}>{t.closing}</p>
      <div className="gold-leaf" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--fs-h2)', marginBottom: 'var(--space-2)' }}>{t.host}</div>
      <a href={t.phoneHref} style={{ display: 'inline-block', fontFamily: 'var(--font-deco)', letterSpacing: '0.16em', color: 'var(--gold-200)', textDecoration: 'none', fontSize: 'var(--fs-body)', marginBottom: 'var(--space-6)' }}>{t.phone}</a>
      <div>
        <div style={{ fontFamily: 'var(--font-deco)', fontSize: 'var(--fs-caption)', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>{t.hashtagLabel}</div>
        <div style={{ fontFamily: 'var(--font-deco)', letterSpacing: '0.1em', color: 'var(--gold-300)', fontSize: 'var(--fs-h3)' }}>{t.hashtag}</div>
      </div>
      <button onClick={onAdmin} aria-label="host" style={{ marginTop: 'var(--space-6)', background: 'transparent', border: 0, color: 'var(--ivory-muted)', opacity: 0.5, cursor: 'pointer', fontSize: 12, fontFamily: 'var(--font-deco)', letterSpacing: '0.16em' }}>✦ host ✦</button>
    </footer>
  );
}

/* ============ ADMIN (host's RSVP viewer) ============ */
function AdminPanel({ t, onClose }) {
  const [rows, setRows] = React.useState(loadRSVPs);
  const coming = rows.filter((r) => r.attending === 'yes').length;

  const exportCSV = () => {
    const head = ['Имя', 'Придёт', '+1', 'Питание', 'Контакт', 'Когда'];
    const esc = (s) => '"' + String(s || '').replace(/"/g, '""') + '"';
    const body = rows.map((r) => [r.name, r.attending === 'yes' ? 'Да' : 'Нет', r.guest, r.diet, r.contact, r.ts].map(esc).join(','));
    const csv = '\uFEFF' + [head.join(','), ...body].join('\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
    const a = document.createElement('a'); a.href = url; a.download = 'rsvp-lyana-2026.csv'; a.click();
    URL.revokeObjectURL(url);
  };
  const clear = () => { if (confirm('Очистить все ответы на этом устройстве?')) { localStorage.removeItem(RSVP_KEY); setRows([]); } };

  return (
    <div role="dialog" aria-modal="true" style={{ position: 'fixed', inset: 0, zIndex: 1000, background: 'rgba(6,10,26,0.82)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: 'var(--gutter)', overflow: 'auto' }} onClick={onClose}>
      <C2 variant="gold" style={{ maxWidth: 760, width: '100%', margin: 'var(--space-6) 0', textAlign: 'left' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-4)', flexWrap: 'wrap' }}>
          <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', color: 'var(--gold-100)', fontSize: 'var(--fs-h2)' }}>{t.title}</h3>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Bg2 tone="emerald">{rows.length} {t.count} · {coming} {t.coming}</Bg2>
          </div>
        </div>
        {rows.length === 0 ? (
          <p style={{ color: 'var(--ivory-dim)', fontStyle: 'italic' }}>{t.empty}</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'var(--fs-sm)' }}>
              <thead>
                <tr style={{ color: 'var(--gold-300)', fontFamily: 'var(--font-deco)', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: 'var(--fs-caption)' }}>
                  {['Имя', '+1', 'Питание', 'Контакт'].map((h) => <th key={h} style={{ textAlign: 'left', padding: '8px 10px', borderBottom: '1px solid var(--border-gold-soft)' }}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} style={{ color: 'var(--ivory)', borderBottom: '1px solid var(--border-hairline)', background: r.attending === 'yes' ? 'rgba(26,154,114,0.08)' : 'rgba(193,50,71,0.08)' }}>
                    <td style={{ padding: '8px 10px' }}><strong style={{ color: 'var(--gold-100)' }}>{r.name}</strong></td>
                    <td style={{ padding: '8px 10px' }}>{r.guest || '—'}</td>
                    <td style={{ padding: '8px 10px', maxWidth: 180 }}>{r.diet || '—'}</td>
                    <td style={{ padding: '8px 10px' }}>{r.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
          <B2 variant="gold" size="sm" onClick={exportCSV}>{t.export}</B2>
          <B2 variant="ghost" size="sm" onClick={clear}>{t.clear}</B2>
          <B2 variant="outline" size="sm" onClick={onClose} style={{ marginLeft: 'auto' }}>{t.close}</B2>
        </div>
      </C2>
    </div>
  );
}

Object.assign(window, { RSVP, FAQ, Footer, AdminPanel });
