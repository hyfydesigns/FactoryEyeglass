import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" style={{
      background: 'var(--off-black)',
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 48px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', right: -20, bottom: -40,
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(6rem, 20vw, 18rem)', fontWeight: 300,
        color: 'rgba(201,169,110,0.02)',
        lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
      }}>1988</div>

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="contact-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 80px)', alignItems: 'start',
        }}>
          {/* Left */}
          <div>
            <p className="section-label" style={{ marginBottom: 14 }}>Visit Us</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 0 24px' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 5.5vw, 3.5rem)',
              fontWeight: 300, lineHeight: 1.1,
              color: 'var(--off-white)', marginBottom: 24,
            }}>
              Come See Us<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>In Houston</em>
            </h2>

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.74rem, 2vw, 0.82rem)', fontWeight: 300,
              lineHeight: 1.9, color: 'var(--light-gray)', marginBottom: 36,
            }}>
              Walk in or book an appointment. Alexander is ready to consult on your vision needs.
              No insurance required.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 36 }}>
              {[
                { icon: <MapPin size={15} />, label: 'Address', value: '7921 Katy Fwy, Houston, TX 77024', href: null },
                { icon: <Phone size={15} />, label: 'Phone', value: '(713) 468-5665', href: 'tel:7134685665' },
                { icon: <Mail size={15} />, label: 'Email', value: 'alex@factoryeyeglassoutlet.com', href: 'mailto:alex@factoryeyeglassoutlet.com' },
                { icon: <Clock size={15} />, label: 'Turnaround', value: '3–5 Business Days', href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--gold)', flexShrink: 0,
                    width: 36, height: 36,
                    border: '1px solid rgba(201,169,110,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>{item.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.52rem', fontWeight: 700,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--mid-gray)', marginBottom: 3,
                    }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(0.72rem, 2vw, 0.82rem)', fontWeight: 400,
                        color: 'var(--off-white)', textDecoration: 'none',
                      }}>{item.value}</a>
                    ) : (
                      <span style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(0.72rem, 2vw, 0.82rem)', fontWeight: 400,
                        color: 'var(--off-white)',
                      }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              padding: '18px 20px',
              border: '1px solid rgba(201,169,110,0.2)',
              borderLeft: '3px solid var(--gold)',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(0.68rem, 2vw, 0.72rem)', fontWeight: 400,
                color: 'var(--light-gray)', lineHeight: 1.7,
              }}>
                <strong style={{ color: 'var(--gold)' }}>No Insurance? No Problem.</strong><br />
                We accept most vision plans and work directly with uninsured patients. Competitive pricing always.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            border: '1px solid rgba(201,169,110,0.15)',
            padding: 'clamp(28px, 5vw, 48px)',
            position: 'relative',
          }}>
            {[
              { top: 0, left: 0, borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
              { top: 0, right: 0, borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
              { bottom: 0, left: 0, borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
              { bottom: 0, right: 0, borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
            ].map((s, i) => (
              <div key={i} style={{ position: 'absolute', width: 16, height: 16, ...s }} />
            ))}

            <h3 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: 400,
              color: 'var(--off-white)', marginBottom: 6,
            }}>Book a Consultation</h3>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.72rem', fontWeight: 300,
              color: 'var(--light-gray)', marginBottom: 28, lineHeight: 1.7,
            }}>Let Alexander personally guide you to your perfect pair.</p>

            {[
              { label: 'Full Name', type: 'text', placeholder: 'Your full name' },
              { label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              { label: 'Phone Number', type: 'tel', placeholder: '(713) 000-0000' },
            ].map((field, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <label style={{
                  display: 'block',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.57rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--mid-gray)', marginBottom: 6,
                }}>{field.label}</label>
                <input type={field.type} placeholder={field.placeholder} style={{
                  width: '100%', padding: '13px 14px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(201,169,110,0.2)',
                  color: 'var(--off-white)',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.82rem', outline: 'none',
                  WebkitAppearance: 'none', borderRadius: 0,
                  boxSizing: 'border-box',
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(201,169,110,0.6)'}
                onBlur={e => e.target.style.borderColor = 'rgba(201,169,110,0.2)'}
                />
              </div>
            ))}

            <div style={{ marginBottom: 24 }}>
              <label style={{
                display: 'block',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.57rem', fontWeight: 700,
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--mid-gray)', marginBottom: 6,
              }}>Service Needed</label>
              <select style={{
                width: '100%', padding: '13px 14px',
                background: 'var(--off-black)',
                border: '1px solid rgba(201,169,110,0.2)',
                color: 'var(--light-gray)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.82rem', outline: 'none',
                cursor: 'pointer', borderRadius: 0,
                WebkitAppearance: 'none',
                boxSizing: 'border-box',
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

            <a
              href="tel:7134685665"
              style={{
                display: 'block', width: '100%', padding: '17px',
                background: 'var(--gold)', border: 'none',
                color: 'var(--black)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                textAlign: 'center', textDecoration: 'none',
                boxSizing: 'border-box',
              }}
            >Request Appointment</a>

            <p style={{
              textAlign: 'center',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.62rem', color: 'var(--mid-gray)',
              marginTop: 14,
            }}>Or call: <a href="tel:7134685665" style={{ color: 'var(--gold)', textDecoration: 'none' }}>(713) 468-5665</a></p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
