import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{
      background: 'var(--off-black)',
      padding: '120px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Large decorative number */}
      <div style={{
        position: 'absolute', right: -20, bottom: -40,
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '20rem', fontWeight: 300,
        color: 'rgba(201,169,110,0.02)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>1988</div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, alignItems: 'start',
        }} className="contact-grid">
          {/* Left */}
          <div>
            <p className="section-label">Visit Us</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '16px 0' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 300, lineHeight: 1.1,
              color: 'var(--off-white)', marginBottom: 32,
            }}>
              Come See Us<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>In Houston</em>
            </h2>

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.8rem', fontWeight: 300,
              lineHeight: 2, color: 'var(--light-gray)',
              marginBottom: 48,
            }}>
              Walk in or book an appointment. Alexander is ready to consult on your vision needs —
              from a new frame to the most advanced lens technology. No insurance required.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 48 }}>
              {[
                { icon: <MapPin size={16} />, label: 'Address', value: '7921 Katy Fwy, Houston, TX 77024' },
                { icon: <Phone size={16} />, label: 'Phone', value: '(713) 468-5665', href: 'tel:7134685665' },
                { icon: <Mail size={16} />, label: 'Email', value: 'alex@factoryeyeglassoutlet.com', href: 'mailto:alex@factoryeyeglassoutlet.com' },
                { icon: <Clock size={16} />, label: 'Turnaround', value: '3–5 Business Days' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--gold)', marginTop: 2, flexShrink: 0,
                    width: 36, height: 36,
                    border: '1px solid rgba(201,169,110,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{item.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.55rem', fontWeight: 700,
                      letterSpacing: '0.2em', textTransform: 'uppercase',
                      color: 'var(--mid-gray)', marginBottom: 4,
                    }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.82rem', fontWeight: 400,
                        color: 'var(--off-white)',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'var(--off-white)'}
                      >{item.value}</a>
                    ) : (
                      <span style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: '0.82rem', fontWeight: 400,
                        color: 'var(--off-white)',
                      }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Insurance note */}
            <div style={{
              padding: '20px 24px',
              border: '1px solid rgba(201,169,110,0.2)',
              borderLeft: '3px solid var(--gold)',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.72rem', fontWeight: 400,
                color: 'var(--light-gray)', lineHeight: 1.7,
              }}>
                <strong style={{ color: 'var(--gold)' }}>No Insurance? No Problem.</strong><br />
                We accept most vision plans and also work directly with patients without insurance.
                Competitive pricing always.
              </p>
            </div>
          </div>

          {/* Right: appointment form */}
          <div style={{
            border: '1px solid rgba(201,169,110,0.15)',
            padding: '48px',
            position: 'relative',
          }}>
            {/* Corner accents */}
            {['top:0;left:0', 'top:0;right:0', 'bottom:0;left:0', 'bottom:0;right:0'].map((pos, i) => (
              <div key={i} style={{
                position: 'absolute',
                ...Object.fromEntries(pos.split(';').map(p => p.split(':'))),
                width: 16, height: 16,
                borderTop: i < 2 ? '2px solid var(--gold)' : 'none',
                borderBottom: i >= 2 ? '2px solid var(--gold)' : 'none',
                borderLeft: i % 2 === 0 ? '2px solid var(--gold)' : 'none',
                borderRight: i % 2 === 1 ? '2px solid var(--gold)' : 'none',
              }} />
            ))}

            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '1.8rem', fontWeight: 400,
              color: 'var(--off-white)', marginBottom: 8,
            }}>Book a Consultation</h3>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.72rem', fontWeight: 300,
              color: 'var(--light-gray)', marginBottom: 36, lineHeight: 1.7,
            }}>
              Let Alexander personally guide you to your perfect pair.
            </p>

            {[
              { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { label: 'Phone Number', type: 'tel', placeholder: '(713) 000-0000' },
            ].map((field, i) => (
              <div key={i} style={{ marginBottom: 20 }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.6rem', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--mid-gray)', marginBottom: 8,
                }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} style={{
                  width: '100%', padding: '14px 16px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,169,110,0.2)',
                  color: 'var(--off-white)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.8rem', outline: 'none',
                  transition: 'border-color 0.3s',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,169,110,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,169,110,0.2)'}
                />
              </div>
            ))}

            <div style={{ marginBottom: 28 }}>
              <label style={{
                display: 'block',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.6rem', fontWeight: 700,
                letterSpacing: '0.15em', textTransform: 'uppercase',
                color: 'var(--mid-gray)', marginBottom: 8,
              }}>Service Needed</label>
              <select style={{
                width: '100%', padding: '14px 16px',
                background: 'var(--off-black)',
                border: '1px solid rgba(201,169,110,0.2)',
                color: 'var(--light-gray)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.8rem', outline: 'none',
                cursor: 'pointer',
              }}>
                <option value="">Select a service...</option>
                <option>Taylor Fit™ Adjustment</option>
                <option>Lens Consultation</option>
                <option>Designer Frames Fitting</option>
                <option>Sunglasses</option>
                <option>Contact Lens Fitting</option>
                <option>Repair Service</option>
                <option>Lens Replacement</option>
              </select>
            </div>

            <button
              onClick={() => window.location.href = 'tel:7134685665'}
              style={{
                width: '100%', padding: '18px',
                background: 'var(--gold)',
                border: 'none',
                color: 'var(--black)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                transition: 'background 0.3s',
              }}
              onMouseEnter={e => e.target.style.background = 'var(--gold-light)'}
              onMouseLeave={e => e.target.style.background = 'var(--gold)'}
            >
              Request Appointment
            </button>

            <p style={{
              textAlign: 'center',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', color: 'var(--mid-gray)',
              marginTop: 16,
            }}>Or call us directly: <a href="tel:7134685665" style={{ color: 'var(--gold)' }}>(713) 468-5665</a></p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 600px) {
          section#contact { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
