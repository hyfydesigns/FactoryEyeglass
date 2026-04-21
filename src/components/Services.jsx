import { useState } from 'react';

const services = [
  {
    id: 'fitting', number: '01', icon: '◈', tag: 'Signature Service',
    title: 'Taylor Fit™ Adjustments', subtitle: 'Personalized to Your Face',
    desc: 'Every frame is precision-adjusted to the unique geometry of your face. Your glasses should feel like they were born on your face.',
    details: ['Custom nose pad adjustment', 'Temple arm contouring', 'Pupillary distance optimization', 'Weight balance calibration'],
  },
  {
    id: 'lenses', number: '02', icon: '◎', tag: 'Expert Consultation',
    title: 'High-End Lens Consultation', subtitle: 'Innovative & Lifestyle-Matched',
    desc: 'Alex personally consults on the latest lens technologies to fit your lifestyle. From progressives to anti-fatigue and blue-light solutions.',
    details: ['Progressive & bifocal lenses', 'Blue light & anti-fatigue', 'Photochromic & transitions', 'High-index ultra-thin lenses'],
  },
  {
    id: 'frames', number: '03', icon: '◇', tag: 'Luxury Collection',
    title: 'Designer & Luxury Frames', subtitle: '1000+ Frames In-Store',
    desc: 'Hand-selected from the world\'s finest frame makers. The lightest materials in the industry — titanium and acetate from Silhouette, Tom Ford, Prada, and beyond.',
    details: ['Handcrafted frames', 'Industry\'s lightest materials', 'Titanium & premium acetate', 'Over 1,000 styles in stock'],
  },
  {
    id: 'sunglasses', number: '04', icon: '◉', tag: 'Authorized Dealer',
    title: 'Designer Sunglass Store', subtitle: 'Authorized Dealer',
    desc: 'As an authorized dealer, we carry the full range of designer sunglasses from the most prestigious houses. Authenticity guaranteed.',
    details: ['Ray-Ban, Prada, Gucci & more', 'Authentic authorized stock', 'Prescription sunglass lenses', 'UV & polarized options'],
  },
  {
    id: 'contacts', number: '05', icon: '○', tag: 'Full Service',
    title: 'Contact Lenses', subtitle: 'All Types & Prescriptions',
    desc: 'Complete contact lens service including fitting, ordering, and follow-up care. Daily, monthly, toric, multifocal — all with personalized attention.',
    details: ['Daily & monthly disposables', 'Toric lenses for astigmatism', 'Multifocal contacts', 'Professional fitting included'],
  },
  {
    id: 'repair', number: '06', icon: '◫', tag: 'Fast Turnaround',
    title: 'Repair & Courier Center', subtitle: '3–5 Business Day Turnaround',
    desc: 'Fast, expert repair services with a 3–5 business day turnaround. Frame soldering, lens replacement, and courier services for brands.',
    details: ['Frame soldering & welding', 'Lens replacement service', '3–5 business day turnaround', 'Courier center for brands'],
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" style={{
      background: 'var(--black)',
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 48px)',
      position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }}>
          <p className="section-label">What We Offer</p>
          <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '14px 0' }} />
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2rem, 7vw, 3.8rem)',
            fontWeight: 300, lineHeight: 1.1, color: 'var(--off-white)',
          }}>
            Expert Services,<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Personalized for You</em>
          </h2>
        </div>

        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1, background: 'rgba(201,169,110,0.08)',
        }}>
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                background: active === s.id ? 'rgba(201,169,110,0.06)' : 'var(--black)',
                padding: 'clamp(24px, 4vw, 44px) clamp(20px, 3vw, 36px)',
                cursor: 'pointer', transition: 'background 0.3s',
                position: 'relative', overflow: 'hidden',
              }}
              onClick={() => setActive(active === s.id ? null : s.id)}
              onMouseEnter={() => window.innerWidth > 768 && setActive(s.id)}
              onMouseLeave={() => window.innerWidth > 768 && setActive(null)}
            >
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                background: 'var(--gold)',
                transform: active === s.id ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.35s ease', transformOrigin: 'left',
              }} />

              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.85rem', color: 'rgba(201,169,110,0.3)',
                letterSpacing: '0.1em', marginBottom: 16,
              }}>{s.number}</div>

              <span style={{
                display: 'inline-block',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.48rem', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                color: active === s.id ? 'var(--black)' : 'var(--gold)',
                background: active === s.id ? 'var(--gold)' : 'transparent',
                border: '1px solid rgba(201,169,110,0.4)',
                padding: '3px 8px', marginBottom: 16,
                transition: 'all 0.3s',
              }}>{s.tag}</span>

              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                <span style={{ color: 'var(--gold)', fontSize: '1.1rem', lineHeight: 1.4, flexShrink: 0 }}>{s.icon}</span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', fontWeight: 500,
                  color: 'var(--off-white)', lineHeight: 1.2,
                }}>{s.title}</h3>
              </div>

              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.6rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: 12,
              }}>{s.subtitle}</p>

              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(0.7rem, 1.8vw, 0.76rem)', fontWeight: 300,
                lineHeight: 1.85, color: 'var(--light-gray)', marginBottom: 16,
              }}>{s.desc}</p>

              {/* Mobile tap indicator */}
              <div className="tap-hint" style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.55rem', color: 'var(--mid-gray)',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                display: active === s.id ? 'none' : 'block',
              }}>Tap for details ↓</div>

              <div style={{
                maxHeight: active === s.id ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}>
                <div style={{ borderTop: '1px solid rgba(201,169,110,0.15)', paddingTop: 14 }}>
                  {s.details.map((d, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 8, marginBottom: 7,
                    }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>▸</span>
                      <span style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.68rem', fontWeight: 400, color: 'var(--light-gray)',
                      }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(40px, 6vw, 64px)', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontStyle: 'italic',
            color: 'var(--light-gray)', marginBottom: 28,
            padding: '0 16px',
          }}>All services available by appointment or walk-in · No insurance? No problem.</p>
          <a href="#contact" style={{
            padding: '15px 40px', background: 'transparent',
            border: '1px solid var(--gold)', color: 'var(--gold)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            display: 'inline-block', textDecoration: 'none',
          }}>Book a Consultation</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .tap-hint { display: none !important; }
        }
        @media (hover: hover) {
          .tap-hint { display: none !important; }
        }
      `}</style>
    </section>
  );
}
