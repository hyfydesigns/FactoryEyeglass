export default function About() {
  const credentials = [
    { label: 'Experience', value: '30+ Years' },
    { label: 'Generation', value: '2nd Gen Optician' },
    { label: 'Founded', value: '1988' },
    { label: 'Location', value: 'Houston, TX' },
  ];

  return (
    <section id="about" style={{
      background: 'var(--off-black)',
      padding: '120px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative vertical line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        width: 1, height: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.08), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'center',
      }} className="about-grid">

        {/* Left: decorative panel */}
        <div style={{ position: 'relative' }}>
          <div style={{
            border: '1px solid rgba(201,169,110,0.2)',
            padding: '64px 48px',
            position: 'relative',
          }}>
            {/* Corner accents */}
            {['top:0;left:0', 'top:0;right:0', 'bottom:0;left:0', 'bottom:0;right:0'].map((pos, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...Object.fromEntries(pos.split(';').map(p => p.split(':'))),
                width: 20, height: 20,
                borderTop: i < 2 ? '2px solid var(--gold)' : 'none',
                borderBottom: i >= 2 ? '2px solid var(--gold)' : 'none',
                borderLeft: i % 2 === 0 ? '2px solid var(--gold)' : 'none',
                borderRight: i % 2 === 1 ? '2px solid var(--gold)' : 'none',
              }} />
            ))}

            <p className="section-label" style={{ marginBottom: 32 }}>About Alexander</p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
              fontWeight: 300, lineHeight: 1.1,
              marginBottom: 24, color: 'var(--off-white)',
            }}>
              A Legacy of<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Clear Vision</em>
            </h2>

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.8rem', fontWeight: 300,
              lineHeight: 2, color: 'var(--light-gray)',
              marginBottom: 24,
            }}>
              As a second-generation optician with over 30 years of dedicated service in the greater Houston area,
              Alexander brings unmatched expertise and a personal touch to every fitting.
            </p>

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.8rem', fontWeight: 300,
              lineHeight: 2, color: 'var(--light-gray)',
              marginBottom: 40,
            }}>
              From innovative lens technology to handcrafted frames, Alex consults on solutions
              tailored to your lifestyle — not just your prescription. Every pair is a Taylor Fit,
              precision-adjusted to your unique face.
            </p>

            {/* Credentials grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
              borderTop: '1px solid rgba(201,169,110,0.15)',
              marginTop: 8,
            }}>
              {credentials.map((c, i) => (
                <div key={i} style={{
                  padding: '20px 0',
                  borderRight: i % 2 === 0 ? '1px solid rgba(201,169,110,0.15)' : 'none',
                  paddingRight: i % 2 === 0 ? 20 : 0,
                  paddingLeft: i % 2 === 1 ? 20 : 0,
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.4rem', color: 'var(--gold)', fontWeight: 500,
                  }}>{c.value}</div>
                  <div style={{
                    fontSize: '0.6rem', letterSpacing: '0.15em',
                    textTransform: 'uppercase', color: 'var(--mid-gray)',
                    marginTop: 4, fontWeight: 600,
                  }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: pull quote + philosophy */}
        <div>
          <div style={{
            borderLeft: '2px solid var(--gold)',
            paddingLeft: 32, marginBottom: 48,
          }}>
            <p style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
              fontWeight: 300, fontStyle: 'italic',
              lineHeight: 1.5, color: 'var(--off-white)',
            }}>
              "I don't just fit glasses — I consult on the most innovative lenses to match
              your vision and your life."
            </p>
            <p style={{
              marginTop: 16,
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.6rem', fontWeight: 600,
              letterSpacing: '0.2em', color: 'var(--gold)',
              textTransform: 'uppercase',
            }}>— Alexander, Founder</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {[
              { icon: '◈', title: 'Taylor Fit Technology', desc: 'Precision frame adjustments custom-fitted to the unique contours of your face.' },
              { icon: '◇', title: 'Lifestyle Lens Consultation', desc: 'Alex personally recommends the latest lens innovations based on your daily activities and visual needs.' },
              { icon: '◉', title: 'Authorized Dealer', desc: 'Authorized dealer for the world\'s most prestigious eyewear and sunglass brands.' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                padding: '24px',
                border: '1px solid rgba(201,169,110,0.1)',
                transition: 'border-color 0.3s, background 0.3s',
                cursor: 'default',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'; e.currentTarget.style.background = 'rgba(201,169,110,0.03)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.1)'; e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ color: 'var(--gold)', fontSize: '1.2rem', lineHeight: 1.4, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h4 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: '1.1rem', fontWeight: 500,
                    color: 'var(--off-white)', marginBottom: 6,
                  }}>{item.title}</h4>
                  <p style={{
                    fontSize: '0.75rem', fontWeight: 300,
                    lineHeight: 1.8, color: 'var(--light-gray)',
                  }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          section#about { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
