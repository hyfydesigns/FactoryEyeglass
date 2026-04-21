export default function About() {
  const credentials = [
    { label: 'Experience', value: '30+ Years' },
    { label: 'Generation', value: '2nd Gen' },
    { label: 'Founded', value: '1988' },
    { label: 'Location', value: 'Houston, TX' },
  ];

  return (
    <section id="about" style={{
      background: 'var(--off-black)',
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 48px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="about-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center',
        }}>

          {/* Left panel */}
          <div style={{
            border: '1px solid rgba(201,169,110,0.2)',
            padding: 'clamp(28px, 5vw, 56px)',
            position: 'relative',
          }}>
            {[
              { top: 0, left: 0, borderTop: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
              { top: 0, right: 0, borderTop: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
              { bottom: 0, left: 0, borderBottom: '2px solid var(--gold)', borderLeft: '2px solid var(--gold)' },
              { bottom: 0, right: 0, borderBottom: '2px solid var(--gold)', borderRight: '2px solid var(--gold)' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: 18, height: 18, ...s }} />
            ))}

            <p className="section-label" style={{ marginBottom: 20 }}>About Alexander</p>
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 5vw, 3.2rem)',
              fontWeight: 300, lineHeight: 1.1,
              marginBottom: 20, color: 'var(--off-white)',
            }}>
              A Legacy of<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Clear Vision</em>
            </h2>

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.75rem, 2vw, 0.82rem)', fontWeight: 300,
              lineHeight: 1.9, color: 'var(--light-gray)', marginBottom: 20,
            }}>
              As a second-generation optician with over 30 years of dedicated service in the greater Houston area,
              Alexander brings unmatched expertise and a personal touch to every fitting.
            </p>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.75rem, 2vw, 0.82rem)', fontWeight: 300,
              lineHeight: 1.9, color: 'var(--light-gray)', marginBottom: 32,
            }}>
              From innovative lens technology to handcrafted frames, Alex consults on solutions
              tailored to your lifestyle — not just your prescription.
            </p>

            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1,
              borderTop: '1px solid rgba(201,169,110,0.15)',
            }}>
              {credentials.map((c, i) => (
                <div key={i} style={{
                  padding: '16px 0',
                  borderRight: i % 2 === 0 ? '1px solid rgba(201,169,110,0.15)' : 'none',
                  paddingRight: i % 2 === 0 ? 16 : 0,
                  paddingLeft: i % 2 === 1 ? 16 : 0,
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
                    color: 'var(--gold)', fontWeight: 500,
                  }}>{c.value}</div>
                  <div style={{
                    fontSize: '0.58rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--light-gray)',
                    marginTop: 3, fontWeight: 600,
                  }}>{c.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right panel */}
          <div>
            <div style={{
              borderLeft: '2px solid var(--gold)',
              paddingLeft: 'clamp(16px, 3vw, 28px)', marginBottom: 36,
            }}>
              <p style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1.1rem, 3vw, 1.7rem)',
                fontWeight: 300, fontStyle: 'italic',
                lineHeight: 1.5, color: 'var(--off-white)',
              }}>
                "I don't just fit glasses — I consult on the most innovative lenses
                to match your vision and your life."
              </p>
              <p style={{
                marginTop: 12,
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.58rem', fontWeight: 600,
                letterSpacing: '0.18em', color: 'var(--gold)',
                textTransform: 'uppercase',
              }}>— Alexander, Founder</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '◈', title: 'Taylor Fit™ Technology', desc: 'Precision frame adjustments custom-fitted to the unique contours of your face.' },
                { icon: '◇', title: 'Lifestyle Lens Consultation', desc: 'Alex personally recommends the latest lens innovations based on your daily needs.' },
                { icon: '◉', title: 'Authorized Dealer', desc: 'Authorized dealer for the world\'s most prestigious eyewear brands.' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  padding: 'clamp(16px, 3vw, 22px)',
                  border: '1px solid rgba(201,169,110,0.1)',
                }}>
                  <span style={{ color: 'var(--gold)', fontSize: '1.1rem', lineHeight: 1.5, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <h4 style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: 500,
                      color: 'var(--off-white)', marginBottom: 5,
                    }}>{item.title}</h4>
                    <p style={{
                      fontSize: 'clamp(0.7rem, 2vw, 0.76rem)', fontWeight: 300,
                      lineHeight: 1.75, color: 'var(--light-gray)',
                    }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
