/* Invitation app — language state, sticky toggle, scroll-reveal, admin. */
const DS3 = window.ArtDecoArabianNightsDesignSystem_be1ca3;
const { LangToggle: LT } = DS3;

const EVENT_TARGET = '2026-08-09T18:00:00+03:00'; // Nalchik, golden hour

function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  });
}

function App() {
  const initial = (() => {
    const p = new URLSearchParams(location.search).get('lang');
    return p === 'en' || p === 'ru' ? p : (localStorage.getItem('lyana_lang') || 'ru');
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
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 20, behavior: 'smooth' });
  };

  const heroT = { ...c.hero, _cd: c.countdown };

  return (
    <div key={lang}>
      <div style={{ position: 'fixed', top: 'var(--space-4)', right: 'var(--space-4)', zIndex: 200 }}>
        <LT value={lang} onChange={setLang} />
      </div>

      <window.Hero t={heroT} target={EVENT_TARGET} onRSVP={goRSVP} />
      <window.Invitation t={c.invitation} />
      <window.Details t={c.details} />
      <window.DressCode t={c.dress} />
      <window.NightAhead t={c.night} />
      <window.RSVP t={c.rsvp} />
      <window.FAQ t={c.faq} />
      <window.Footer t={c.footer} onAdmin={() => setAdmin(true)} />

      {admin && <window.AdminPanel t={c.admin} onClose={() => setAdmin(false)} />}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
