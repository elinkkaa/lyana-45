/* Invitation sections — Hero, Invitation, Details, DressCode, NightAhead.
   Pulls primitives from the compiled design-system bundle. */
const DS = window.ArtDecoArabianNightsDesignSystem_be1ca3;
const { Button, Card, Badge, Divider, ArchFrame, Countdown, Lantern, StarsField, ColorSwatch } = DS;

/* ---- shared section shell ---- */
function Section({ id, eyebrow, title, children, tone, narrow }) {
  return (
    <section id={id} data-screen-label={id} style={{
      position: 'relative',
      padding: 'var(--section-y) var(--gutter)',
      background: tone === 'raised' ? 'linear-gradient(180deg, rgba(22,38,92,0.32), transparent)' : 'transparent',
    }}>
      <div style={{ maxWidth: narrow ? 680 : 'var(--content-max)', margin: '0 auto', textAlign: 'center' }}>
        {eyebrow && <div className="reveal" style={ivEyebrow}>{eyebrow}</div>}
        {title && <h2 className="reveal" style={ivTitle}>{title}</h2>}
        {title && <Divider motif="sun" width="120px" style={{ margin: '0 auto var(--space-6)' }} />}
        {children}
      </div>
    </section>
  );
}

const ivEyebrow = {
  fontFamily: 'var(--font-deco)', fontSize: 'var(--fs-eyebrow)', letterSpacing: 'var(--ls-eyebrow)',
  textTransform: 'uppercase', color: 'var(--gold-300)', marginBottom: 'var(--space-4)',
};
const ivTitle = {
  fontFamily: 'var(--font-display)', fontSize: 'var(--fs-h1)', color: 'var(--gold-100)',
  margin: '0 0 var(--space-4)', fontWeight: 800,
};

/* ============ HERO ============ */
function Hero({ t, target, onRSVP }) {
  return (
    <header data-screen-label="hero" style={{
      position: 'relative', overflow: 'hidden',
      minHeight: '100svh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', textAlign: 'center',
      padding: 'calc(var(--space-9)) var(--gutter) var(--space-8)',
      background: 'var(--grad-night)',
    }}>
      <StarsField count={44} />
      {/* sunburst halo behind the arch */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '6%', left: '50%', transform: 'translateX(-50%)',
        width: 'min(92vw, 760px)', height: 'min(92vw, 760px)',
        background: 'radial-gradient(circle, rgba(216,181,103,0.16), transparent 62%)',
        pointerEvents: 'none',
      }} />
      <Lantern size={48} style={{ position: 'absolute', top: 0, left: 'max(6vw, 24px)' }} />
      <Lantern size={48} style={{ position: 'absolute', top: 0, right: 'max(6vw, 24px)' }} />

      <div className="reveal" style={{ position: 'relative', zIndex: 1, marginTop: 'var(--space-6)' }}>
        <ArchFrame style={{ width: 'min(78vw, 320px)', height: 'min(96vw, 400px)', margin: '0 auto' }}>
          <div style={{ marginTop: 'auto', marginBottom: '12%', padding: '0 8%' }}>
            <div style={{ fontFamily: 'var(--font-deco)', letterSpacing: '0.3em', fontSize: 'var(--fs-eyebrow)', color: 'var(--gold-300)', marginBottom: 8 }}>45</div>
            <div className="gold-leaf" style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2.6rem, 12vw, 4.2rem)', lineHeight: 1 }}>{t.name}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', color: 'var(--ivory-dim)', fontSize: 'var(--fs-h3)', marginTop: 4 }}>{t.surname}</div>
          </div>
        </ArchFrame>
      </div>

      <div className="reveal" style={{ position: 'relative', zIndex: 1, marginTop: 'var(--space-6)' }}>
        <div style={ivEyebrow}>{t.occasion}</div>
        <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'var(--fs-lead)', color: 'var(--ivory)', margin: '0 0 var(--space-5)', maxWidth: 520 }}>
          «{t.tagline}»
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', color: 'var(--gold-200)', fontFamily: 'var(--font-deco)', letterSpacing: '0.14em', fontSize: 'var(--fs-sm)', marginBottom: 'var(--space-6)' }}>
          <span>{t.date}</span>
          <span aria-hidden="true" style={{ color: 'var(--gold-500)' }}>✦</span>
          <span>{t.venue}</span>
        </div>
      </div>

      <div className="reveal" style={{ position: 'relative', zIndex: 1, marginBottom: 'var(--space-6)' }}>
        <div style={{ ...ivEyebrow, marginBottom: 'var(--space-3)' }}>{t.countdownTo}</div>
        <Countdown target={target} labels={t._cd} />
      </div>

      <div className="reveal" style={{ position: 'relative', zIndex: 1 }}>
        <Button variant="gold" size="lg" onClick={onRSVP}>{t.rsvp}</Button>
      </div>
    </header>
  );
}

/* ============ INVITATION ============ */
function Invitation({ t }) {
  return (
    <Section id="invitation" eyebrow={t.eyebrow} title={t.title} narrow tone="raised">
      <p className="reveal" style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--fs-lead)', lineHeight: 'var(--lh-body)',
        color: 'var(--ivory)', textWrap: 'pretty', fontStyle: 'italic', margin: '0 auto', maxWidth: 620,
      }}>{t.body}</p>
      <Divider motif="diamond" width="80px" style={{ margin: 'var(--space-6) auto 0' }} />
    </Section>
  );
}

/* ============ DETAILS ============ */
function Details({ t }) {
  return (
    <Section id="details" eyebrow={t.eyebrow} title={t.title} narrow>
      <Card variant="glass" style={{ textAlign: 'left' }}>
        <dl className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 0, margin: 0 }}>
          {t.items.map((it, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', gap: 'var(--space-4)',
              padding: 'var(--space-4) 0',
              borderBottom: i < t.items.length - 1 ? '1px solid var(--border-hairline)' : 'none',
              alignItems: 'baseline',
            }}>
              <dt style={{ fontFamily: 'var(--font-deco)', letterSpacing: '0.16em', textTransform: 'uppercase', fontSize: 'var(--fs-caption)', color: 'var(--gold-300)' }}>{it.k}</dt>
              <dd style={{ margin: 0, fontFamily: 'var(--font-body)', color: 'var(--ivory)', fontSize: 'var(--fs-body)', textAlign: 'right' }}>{it.v}</dd>
            </div>
          ))}
        </dl>
        <div style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'center', marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
          <Button variant="outline" as="a" href={t.mapsHref} target="_blank" rel="noopener">{t.maps}</Button>
          <span style={{ fontSize: 'var(--fs-sm)', color: 'var(--text-muted)', fontStyle: 'italic', flex: 1, minWidth: 200 }}>
            <strong style={{ color: 'var(--gold-200)', fontStyle: 'normal', fontFamily: 'var(--font-deco)', letterSpacing: '0.12em', fontSize: 'var(--fs-caption)', textTransform: 'uppercase', marginRight: 8 }}>{t.parkingLabel}</strong>
            {t.parking}
          </span>
        </div>
      </Card>
    </Section>
  );
}

/* ============ DRESS CODE ============ */
function DressCode({ t }) {
  return (
    <Section id="dress" eyebrow={t.eyebrow} title={t.title} tone="raised">
      <Badge tone="gold" style={{ marginBottom: 'var(--space-6)' }}>{t.subtitle}</Badge>
      <div className="reveal" style={{ display: 'flex', gap: 'clamp(0.75rem, 4vw, 2rem)', justifyContent: 'center', flexWrap: 'wrap', marginBottom: 'var(--space-7)' }}>
        {t.palette.map((p, i) => <ColorSwatch key={i} color={p.c} name={p.n} />)}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 'var(--space-4)', textAlign: 'left' }}>
        {[t.women, t.men].map((g, i) => (
          <Card key={i} variant="solid" corners={false}>
            <h3 style={{ fontSize: 'var(--fs-h3)', margin: '0 0 var(--space-2)', color: 'var(--gold-100)' }}>{g.h}</h3>
            <p style={{ margin: 0, color: 'var(--ivory-dim)', fontSize: 'var(--fs-body)', lineHeight: 'var(--lh-body)', textWrap: 'pretty' }}>{g.t}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ============ THE NIGHT AHEAD ============ */
function NightAhead({ t }) {
  const icons = ['☾', '✦', '♪', '❧'];
  return (
    <Section id="night" eyebrow={t.eyebrow} title={t.title}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-4)', textAlign: 'left' }}>
        {t.teasers.map((te, i) => (
          <Card key={i} variant="glass" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
            <span aria-hidden="true" style={{ fontSize: 26, color: 'var(--gold-300)', lineHeight: 1 }}>{icons[i % icons.length]}</span>
            <h3 style={{ fontSize: 'var(--fs-h3)', margin: 0, color: 'var(--gold-100)' }}>{te.h}</h3>
            <p style={{ margin: 0, color: 'var(--ivory-dim)', fontSize: 'var(--fs-sm)', lineHeight: 'var(--lh-body)', textWrap: 'pretty' }}>{te.t}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

Object.assign(window, { Section, Hero, Invitation, Details, DressCode, NightAhead, ivEyebrow, ivTitle });
