const plans = [
  'VSP Vision Care', 'EyeMed', 'Spectera', 'Davis Vision',
  'Humana Vision', 'Aetna Vision', 'Superior Vision', 'UnitedHealthcare',
  'BlueCross BlueShield', 'Cigna Vision', 'MetLife Vision', 'TRICARE',
];

export default function VisionPlans() {
  return (
    <section id="insurance" style={{
      background: 'var(--charcoal)',
      padding: 'clamp(64px, 10vw, 100px) clamp(20px, 5vw, 48px)',
      borderTop: '1px solid rgba(201,169,110,0.08)',
      borderBottom: '1px solid rgba(201,169,110,0.08)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="plans-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 80px)', alignItems: 'center',
        }}>
          <div>
            <p className="section-label" style={{ marginBottom: 14 }}>Coverage</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 0 24px' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 5.5vw, 3rem)',
              fontWeight: 300, lineHeight: 1.15,
              color: 'var(--off-white)', marginBottom: 20,
            }}>
              We Accept Most<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Vision Plans</em>
            </h2>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.74rem, 2vw, 0.82rem)', fontWeight: 300,
              lineHeight: 1.9, color: 'var(--light-gray)', marginBottom: 28,
            }}>
              We work with most major vision insurance plans. No insurance?{' '}
              <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>No problem.</strong>{' '}
              Competitive direct pricing always available.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
              {[
                '✦ No insurance? Competitive pricing always',
                '✦ We verify your benefits at no charge',
                '✦ Flexible payment options available',
              ].map((item, i) => (
                <div key={i} style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(0.7rem, 2vw, 0.76rem)', fontWeight: 400,
                  color: 'var(--light-gray)', lineHeight: 1.6,
                }}>{item}</div>
              ))}
            </div>

            <a href="tel:7134685665" style={{
              display: 'inline-block', padding: '14px 32px',
              border: '1px solid var(--gold)', color: 'var(--gold)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none',
            }}>Verify Your Benefits</a>
          </div>

          <div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1, background: 'rgba(201,169,110,0.07)',
            }} className="plans-cards">
              {plans.map((plan, i) => (
                <div key={i} style={{
                  background: 'var(--charcoal)',
                  padding: 'clamp(14px, 2.5vw, 20px) clamp(10px, 2vw, 14px)',
                  textAlign: 'center',
                }}>
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: 'clamp(0.55rem, 1.4vw, 0.62rem)', fontWeight: 600,
                    letterSpacing: '0.04em', color: 'var(--light-gray)',
                    lineHeight: 1.4, display: 'block',
                  }}>{plan}</span>
                </div>
              ))}
              <div style={{
                background: 'rgba(201,169,110,0.05)',
                padding: '16px', textAlign: 'center',
                gridColumn: 'span 3',
              }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(0.85rem, 2vw, 0.95rem)', fontStyle: 'italic',
                  color: 'var(--gold)',
                }}>+ many more — call to confirm yours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .plans-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 420px) {
          .plans-cards { grid-template-columns: repeat(2, 1fr) !important; }
          .plans-cards > div:last-child { grid-column: span 2 !important; }
        }
      `}</style>
    </section>
  );
}
