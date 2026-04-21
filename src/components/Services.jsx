import { useState } from 'react';

const services = [
  {
    id: 'fitting',
    number: '01',
    title: 'Taylor Fit™ Adjustments',
    subtitle: 'Personalized to Your Face',
    icon: '◈',
    desc: 'Alexander\'s signature fitting process. Every frame is precision-adjusted to the unique geometry of your face — no generic fitting here. Your glasses should feel like they were born on your face.',
    details: ['Custom nose pad adjustment', 'Temple arm contouring', 'Pupillary distance optimization', 'Weight balance calibration'],
    tag: 'Signature Service',
  },
  {
    id: 'lenses',
    number: '02',
    title: 'High-End Lens Consultation',
    subtitle: 'Innovative & Lifestyle-Matched',
    icon: '◎',
    desc: 'Alex personally consults on the latest lens technologies to fit your specific lifestyle profile. From progressive lenses to anti-fatigue and blue-light solutions, every recommendation is bespoke.',
    details: ['Progressive & bifocal lenses', 'Blue light & anti-fatigue', 'Photochromic & transitions', 'High-index ultra-thin lenses'],
    tag: 'Expert Consultation',
  },
  {
    id: 'frames',
    number: '03',
    title: 'Designer & Luxury Frames',
    subtitle: '1000+ Frames In-Store',
    icon: '◇',
    desc: 'Hand-selected from the world\'s finest frame makers. Featuring handmade craftsmanship and the lightest materials in the industry — including ultra-thin titanium and acetate from Silhouette, Tom Ford, Prada, and beyond.',
    details: ['Handcrafted frames', 'Industry\'s lightest materials', 'Titanium & premium acetate', 'Over 1,000 styles in stock'],
    tag: 'Luxury Collection',
  },
  {
    id: 'sunglasses',
    number: '04',
    title: 'Designer Sunglass Store',
    subtitle: 'Authorized Dealer',
    icon: '◉',
    desc: 'As an authorized dealer, we carry the full range of designer sunglasses from the most prestigious houses. Authenticity guaranteed. From Ray-Ban to Gucci, your style is covered.',
    details: ['Ray-Ban, Prada, Gucci & more', 'Authentic authorized stock', 'Prescription sunglass lenses', 'UV & polarized options'],
    tag: 'Authorized Dealer',
  },
  {
    id: 'contacts',
    number: '05',
    title: 'Contact Lenses',
    subtitle: 'All Types & Prescriptions',
    icon: '○',
    desc: 'Complete contact lens service including fitting, ordering, and follow-up care. Daily, monthly, toric, multifocal — we carry and fit them all with the same personalized attention Alex brings to every service.',
    details: ['Daily & monthly disposables', 'Toric lenses for astigmatism', 'Multifocal contacts', 'Professional fitting included'],
    tag: 'Full Service',
  },
  {
    id: 'repair',
    number: '06',
    title: 'Repair & Courier Center',
    subtitle: '3–5 Business Day Turnaround',
    icon: '◫',
    desc: 'Fast, expert repair services with an industry-leading 3–5 business day turnaround. From frame soldering to lens replacement, we also serve as a courier center for specialty repairs and manufacturer services.',
    details: ['Frame soldering & welding', 'Lens replacement service', '3–5 business day turnaround', 'Courier center for brands'],
    tag: 'Fast Turnaround',
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section id="services" style={{
      background: 'var(--black)',
      padding: '120px 48px',
      position: 'relative',
    }}>
      {/* Background text */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(6rem, 15vw, 14rem)',
        fontWeight: 300, color: 'rgba(201,169,110,0.02)',
        whiteSpace: 'nowrap', pointerEvents: 'none',
        letterSpacing: '-0.02em', userSelect: 'none',
      }}>SERVICES</div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 80 }}>
          <p className="section-label">What We Offer</p>
          <div style={{
            width: 40, height: 1, background: 'var(--gold)',
            margin: '16px 0',
          }} />
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300, lineHeight: 1.1,
            color: 'var(--off-white)',
          }}>
            Expert Services,<br />
            <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Personalized for You</em>
          </h2>
        </div>

        {/* Services grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: 'rgba(201,169,110,0.08)',
        }} className="services-grid">
          {services.map((s) => (
            <div
              key={s.id}
              style={{
                background: active === s.id ? 'rgba(201,169,110,0.06)' : 'var(--black)',
                padding: '48px 36px',
                cursor: 'pointer',
                transition: 'background 0.3s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={() => setActive(s.id)}
              onMouseLeave={() => setActive(null)}
            >
              {/* Top line on hover */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 2, background: 'var(--gold)',
                transform: active === s.id ? 'scaleX(1)' : 'scaleX(0)',
                transition: 'transform 0.4s ease',
                transformOrigin: 'left',
              }} />

              {/* Number */}
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '0.9rem', color: 'rgba(201,169,110,0.3)',
                letterSpacing: '0.1em', marginBottom: 24,
                fontWeight: 400,
              }}>{s.number}</div>

              {/* Tag */}
              <span style={{
                display: 'inline-block',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.5rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                color: active === s.id ? 'var(--black)' : 'var(--gold)',
                background: active === s.id ? 'var(--gold)' : 'transparent',
                border: '1px solid rgba(201,169,110,0.4)',
                padding: '4px 10px',
                marginBottom: 20,
                transition: 'all 0.3s',
              }}>{s.tag}</span>

              {/* Icon + Title */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
                <span style={{ color: 'var(--gold)', fontSize: '1.3rem', lineHeight: 1.3, flexShrink: 0 }}>{s.icon}</span>
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1.5rem', fontWeight: 500,
                  color: 'var(--off-white)', lineHeight: 1.2,
                }}>{s.title}</h3>
              </div>

              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--gold)', marginBottom: 16,
              }}>{s.subtitle}</p>

              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.75rem', fontWeight: 300,
                lineHeight: 1.9, color: 'var(--light-gray)',
                marginBottom: 24,
              }}>{s.desc}</p>

              {/* Details list — reveals on hover */}
              <div style={{
                maxHeight: active === s.id ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.4s ease',
              }}>
                <div style={{
                  borderTop: '1px solid rgba(201,169,110,0.15)',
                  paddingTop: 16,
                }}>
                  {s.details.map((d, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      marginBottom: 8,
                    }}>
                      <span style={{ color: 'var(--gold)', fontSize: '0.5rem' }}>▸</span>
                      <span style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.7rem', fontWeight: 400,
                        color: 'var(--light-gray)',
                      }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: 64, textAlign: 'center' }}>
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.3rem', fontStyle: 'italic',
            color: 'var(--light-gray)', marginBottom: 32,
          }}>All services available by appointment or walk-in · No insurance? No problem.</p>
          <a href="#contact" style={{
            padding: '16px 48px',
            background: 'transparent',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            display: 'inline-block',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
          >Book a Consultation</a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr !important; }
          section#services { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
