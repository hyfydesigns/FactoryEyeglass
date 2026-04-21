const plans = [
  'VSP Vision Care', 'EyeMed', 'Spectera', 'Davis Vision',
  'Humana Vision', 'Aetna Vision', 'Superior Vision', 'UnitedHealthcare Vision',
  'BlueCross BlueShield', 'Cigna Vision', 'MetLife Vision', 'TRICARE',
];

export default function VisionPlans() {
  return (
    <section id="insurance" style={{
      background: 'var(--charcoal)',
      padding: '100px 48px',
      borderTop: '1px solid rgba(201,169,110,0.08)',
      borderBottom: '1px solid rgba(201,169,110,0.08)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'center',
        }} className="plans-grid">

          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: 16 }}>Coverage</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 0 24px' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300, lineHeight: 1.15,
              color: 'var(--off-white)', marginBottom: 24,
            }}>
              We Accept Most<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Vision Plans</em>
            </h2>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.8rem', fontWeight: 300,
              lineHeight: 2, color: 'var(--light-gray)',
              marginBottom: 36,
            }}>
              Factory Eyeglass Outlet works with most major vision insurance plans.
              Please confirm your coverage when booking your appointment.
              Don't have insurance? We offer competitive direct pricing — <strong style={{ color: 'var(--gold)', fontWeight: 500 }}>no insurance needed.</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                '✦ No insurance? No problem — competitive pricing always',
                '✦ We verify your benefits at no charge',
                '✦ Flexible payment options available',
                '✦ Contact us to confirm your specific plan',
              ].map((item, i) => (
                <div key={i} style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.75rem', fontWeight: 400,
                  color: 'var(--light-gray)', lineHeight: 1.6,
                }}>{item}</div>
              ))}
            </div>

            <a href="tel:7134685665" style={{
              display: 'inline-block', marginTop: 36,
              padding: '14px 36px',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.2em', textTransform: 'uppercase',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
            >Verify Your Benefits</a>
          </div>

          {/* Right: plans grid */}
          <div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              background: 'rgba(201,169,110,0.07)',
            }}>
              {plans.map((plan, i) => (
                <div key={i} style={{
                  background: 'var(--charcoal)',
                  padding: '20px 16px',
                  textAlign: 'center',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(201,169,110,0.06)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--charcoal)'}
                >
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.62rem', fontWeight: 600,
                    letterSpacing: '0.05em',
                    color: 'var(--light-gray)',
                    lineHeight: 1.4,
                    display: 'block',
                  }}>{plan}</span>
                </div>
              ))}
              {/* "And More" tile */}
              <div style={{
                background: 'rgba(201,169,110,0.05)',
                padding: '20px 16px',
                textAlign: 'center',
                gridColumn: 'span 3',
              }}>
                <span style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '0.95rem', fontStyle: 'italic',
                  color: 'var(--gold)',
                }}>+ many more — call to confirm yours</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .plans-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          section#insurance { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
