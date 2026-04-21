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

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'var(--black)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      padding: '0 24px',
    }}>
      {/* Background decorative circles */}
      <div style={{
        position: 'absolute', top: '20%', right: '-10%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,169,110,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Vertical text - left side */}
      <div style={{
        position: 'absolute', left: 48, top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'center center',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '0.55rem', fontWeight: 600,
        letterSpacing: '0.3em', color: 'var(--mid-gray)',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>Houston, Texas · Est. 1988</div>

      {/* Main content */}
      <div style={{ textAlign: 'center', maxWidth: 900, animation: 'fadeUp 1s ease forwards', opacity: 0 }}>
        <p className="section-label" style={{ marginBottom: 24 }}>Alexander · Second Generation Optician</p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          fontWeight: 300,
          lineHeight: 1.0,
          letterSpacing: '-0.01em',
          color: 'var(--off-white)',
          marginBottom: 8,
        }}>
          Live Life
        </h1>
        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(3.5rem, 8vw, 7rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.0,
          letterSpacing: '-0.01em',
          color: 'var(--gold)',
          marginBottom: 32,
        }}>
          in the Clear
        </h1>

        {/* Animated line */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <div ref={lineRef} style={{
            height: 1, width: 0,
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            transition: 'width 1.2s ease',
            maxWidth: 400,
          }} />
        </div>

        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 'clamp(0.75rem, 1.5vw, 0.9rem)',
          fontWeight: 300,
          lineHeight: 1.9,
          color: 'var(--light-gray)',
          maxWidth: 560, margin: '0 auto 48px',
          letterSpacing: '0.05em',
        }}>
          Over three decades of expertise. Personalized fittings, high-end designer frames,
          and innovative lenses tailored to your lifestyle — by Houston's trusted second-generation optician.
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#services" style={{
            padding: '16px 40px',
            background: 'var(--gold)',
            color: 'var(--black)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            transition: 'all 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >Our Services</a>

          <a href="tel:7134685665" style={{
            padding: '16px 40px',
            border: '1px solid rgba(201,169,110,0.4)',
            color: 'var(--off-white)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            transition: 'all 0.3s',
            display: 'inline-block',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'; e.currentTarget.style.color = 'var(--off-white)'; }}
          >Book Appointment</a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        borderTop: '1px solid rgba(201,169,110,0.1)',
        display: 'flex', justifyContent: 'center', gap: 0,
      }}>
        {[
          { num: '30+', label: 'Years Experience' },
          { num: '1000+', label: 'Designer Frames' },
          { num: '3–5', label: 'Day Turnaround' },
          { num: '2nd', label: 'Generation Optician' },
        ].map((s, i) => (
          <div key={i} style={{
            flex: 1, maxWidth: 220,
            padding: '24px 16px',
            textAlign: 'center',
            borderLeft: i > 0 ? '1px solid rgba(201,169,110,0.1)' : 'none',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.8rem', fontWeight: 400,
              color: 'var(--gold)', lineHeight: 1,
            }}>{s.num}</div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.55rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--mid-gray)', marginTop: 6,
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a href="#about" style={{
        position: 'absolute', bottom: 110,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 6,
        color: 'var(--mid-gray)',
        animation: 'bounce 2s infinite',
      }}>
        <span style={{ fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
        <ChevronDown size={14} />
      </a>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 768px) {
          [style*="left: 48"] { display: none; }
        }
      `}</style>
    </section>
  );
}
