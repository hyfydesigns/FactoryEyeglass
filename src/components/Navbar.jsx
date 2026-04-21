import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About Alex', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Frames', href: '#frames' },
    { label: 'Brands', href: '#brands' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: scrolled ? '14px 48px' : '24px 48px',
      background: scrolled ? 'rgba(10,10,10,0.97)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'all 0.4s ease',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
    }}>
      {/* Logo */}
      <a href="#hero" style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: '1.4rem', fontWeight: 500,
          letterSpacing: '0.08em', color: 'var(--off-white)',
        }}>FACTORY EYEGLASS</span>
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.55rem', fontWeight: 600,
          letterSpacing: '0.3em', color: 'var(--gold)',
          textTransform: 'uppercase',
        }}>OUTLET · EST. 1988</span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <a key={l.label} href={l.href} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--light-gray)',
            transition: 'color 0.3s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--gold)'}
          onMouseLeave={e => e.target.style.color = 'var(--light-gray)'}
          >{l.label}</a>
        ))}
        <a href="tel:7134685665" style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 20px',
          border: '1px solid var(--gold)',
          color: 'var(--gold)',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.65rem', fontWeight: 600,
          letterSpacing: '0.15em',
          transition: 'all 0.3s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
        >
          <Phone size={12} /> (713) 468-5665
        </a>
      </div>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{
        background: 'none', border: 'none', color: 'var(--off-white)',
        display: 'none',
      }} className="mobile-menu-btn">
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--black)', zIndex: 200,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 32,
        }}>
          <button onClick={() => setMenuOpen(false)} style={{
            position: 'absolute', top: 24, right: 24,
            background: 'none', border: 'none', color: 'var(--off-white)',
          }}>
            <X size={28} />
          </button>
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '2rem', fontWeight: 300,
              color: 'var(--off-white)',
              letterSpacing: '0.1em',
            }}>{l.label}</a>
          ))}
          <a href="tel:7134685665" style={{
            marginTop: 16, color: 'var(--gold)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.8rem', letterSpacing: '0.15em',
          }}>(713) 468-5665</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
