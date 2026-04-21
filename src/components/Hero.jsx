import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const lineRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) lineRef.current.style.width = '100%';
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { num: '30+', label: 'Years Experience' },
    { num: '1000+', label: 'Designer Frames' },
    { num: '3–5', label: 'Day Turnaround' },
    { num: '2nd Gen', label: 'Optician' },
  ];

  return (
    <section id="hero" style={{
      minHeight: '100dvh',
      background: 'var(--black)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 14vw, 140px) 24px clamp(32px, 5vw, 48px)',
      }}>
        <div style={{
          textAlign: 'center', width: '100%', maxWidth: 860,
          animation: 'fadeUp 1s ease forwards', opacity: 0,
          padding: '0 4px',
        }}>
          <p className="section-label" style={{ marginBottom: 20, fontSize: '0.6rem' }}>
            Alexander · Second Generation Optician
          </p>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 12vw, 7rem)',
            fontWeight: 300, lineHeight: 1.0,
            color: 'var(--off-white)', marginBottom: 4,
          }}>Live Life</h1>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 12vw, 7rem)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.0, color: 'var(--gold)', marginBottom: 28,
          }}>in the Clear</h1>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <div ref={lineRef} style={{
              height: 1, width: 0,
              background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
              transition: 'width 1.2s ease', maxWidth: 340,
            }} />
          </div>

          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(0.78rem, 2.5vw, 0.9rem)',
            fontWeight: 300, lineHeight: 1.85,
            color: 'var(--light-gray)',
            maxWidth: 500, margin: '0 auto 36px',
            letterSpacing: '0.03em',
          }}>
            Over three decades of expertise. Personalized fittings, high-end designer frames,
            and innovative lenses tailored to your lifestyle.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" style={{
              padding: '15px 32px',
              background: 'var(--gold)', color: 'var(--black)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
              minWidth: 160, textAlign: 'center',
            }}>Our Services</a>
            <a href="tel:7134685665" style={{
              padding: '15px 32px',
              border: '1px solid rgba(201,169,110,0.5)',
              color: 'var(--off-white)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
              minWidth: 160, textAlign: 'center',
            }}>Call Us Now</a>
          </div>

          <a href="#about" className="scroll-cue" style={{
            display: 'inline-flex', flexDirection: 'column',
            alignItems: 'center', gap: 6,
            color: 'var(--light-gray)',
            animation: 'bounce 2s infinite 1.5s',
            textDecoration: 'none',
            marginTop: 48,
          }}>
            <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
            <ChevronDown size={13} />
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        borderTop: '1px solid rgba(201,169,110,0.1)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        flexShrink: 0,
      }} className="hero-stats">
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: 'clamp(14px, 3vw, 22px) 8px',
            textAlign: 'center',
            borderLeft: i > 0 ? '1px solid rgba(201,169,110,0.1)' : 'none',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              fontWeight: 400, color: 'var(--gold)', lineHeight: 1,
            }}>{s.num}</div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.48rem, 1.4vw, 0.58rem)', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--light-gray)', marginTop: 5,
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 520px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .scroll-cue { display: none !important; }
        }
      `}</style>
    </section>
  );
}
