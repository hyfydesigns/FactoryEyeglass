import { useState, useEffect } from 'react';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'About Alex', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Frames', href: '#frames' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: scrolled ? '12px 24px' : '20px 24px',
        background: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}>
        <a href="#hero" style={{ display: 'flex', flexDirection: 'column', gap: 2, textDecoration: 'none' }}>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 4vw, 1.4rem)', fontWeight: 500,
            letterSpacing: '0.06em', color: 'var(--off-white)',
          }}>FACTORY EYEGLASS</span>
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.5rem', fontWeight: 600,
            letterSpacing: '0.25em', color: 'var(--gold)',
            textTransform: 'uppercase',
          }}>OUTLET · EST. 1988</span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }} className="nav-desktop">
          {links.map(l => (
            <a key={l.label} href={l.href} style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.62rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'var(--light-gray)', transition: 'color 0.3s',
              textDecoration: 'none',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--light-gray)'}
            >{l.label}</a>
          ))}
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{
            background: 'none', border: '1px solid rgba(201,169,110,0.3)',
            color: 'var(--gold)', width: 36, height: 36,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'border-color 0.3s',
            flexShrink: 0,
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'}
          >{theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}</button>
          <a href="tel:7134685665" style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '10px 18px',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.12em', textDecoration: 'none',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
          ><Phone size={11} /> (713) 468-5665</a>
        </div>

        {/* Mobile: theme toggle + call + hamburger */}
        <div style={{ display: 'none', alignItems: 'center', gap: 10 }} className="nav-mobile-btns">
          <button onClick={toggleTheme} aria-label="Toggle theme" style={{
            background: 'none', border: '1px solid rgba(201,169,110,0.4)',
            color: 'var(--gold)', width: 38, height: 38,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
          }}>{theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}</button>
          <a href="tel:7134685665" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 38, height: 38,
            border: '1px solid rgba(201,169,110,0.4)',
            color: 'var(--gold)', borderRadius: 0,
          }}><Phone size={15} /></a>
          <button onClick={() => setMenuOpen(true)} style={{
            background: 'none', border: 'none', color: 'var(--off-white)',
            padding: 4, cursor: 'pointer', display: 'flex', alignItems: 'center',
          }}><Menu size={24} /></button>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'var(--black)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 0,
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <button onClick={() => setMenuOpen(false)} style={{
          position: 'absolute', top: 20, right: 20,
          background: 'none', border: '1px solid rgba(201,169,110,0.3)',
          color: 'var(--off-white)', width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer',
        }}><X size={20} /></button>

        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', color: 'var(--off-white)', letterSpacing: '0.08em' }}>FACTORY EYEGLASS</div>
          <div style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.5rem', color: 'var(--gold)', letterSpacing: '0.25em', textTransform: 'uppercase' }}>OUTLET · EST. 1988</div>
        </div>

        {links.map((l, i) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.2rem', fontWeight: 300,
            color: 'var(--off-white)',
            letterSpacing: '0.08em',
            padding: '12px 0',
            textDecoration: 'none',
            borderBottom: i < links.length - 1 ? '1px solid rgba(201,169,110,0.08)' : 'none',
            width: '70%', textAlign: 'center',
            transition: 'color 0.2s',
          }}
          onTouchStart={e => e.currentTarget.style.color = 'var(--gold)'}
          onTouchEnd={e => e.currentTarget.style.color = 'var(--off-white)'}
          >{l.label}</a>
        ))}

        <a href="tel:7134685665" onClick={() => setMenuOpen(false)} style={{
          marginTop: 40,
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '16px 32px',
          background: 'var(--gold)',
          color: 'var(--black)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          textDecoration: 'none',
        }}><Phone size={14} /> (713) 468-5665</a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btns { display: flex !important; }
        }
      `}</style>
    </>
  );
}
