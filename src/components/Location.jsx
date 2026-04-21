import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" style={{
      background: 'var(--off-black)',
      padding: 'clamp(64px, 10vw, 100px) clamp(20px, 5vw, 48px)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="location-grid" style={{
          display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: 'clamp(32px, 5vw, 60px)', alignItems: 'stretch',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="section-label" style={{ marginBottom: 14 }}>Find Us</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 0 28px' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 5.5vw, 3rem)',
              fontWeight: 300, lineHeight: 1.15,
              color: 'var(--off-white)', marginBottom: 36,
            }}>
              Conveniently Located<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>on the Katy Freeway</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {[
                { icon: <MapPin size={15} />, label: 'Address', content: <span>7921 Katy Fwy<br />Houston, Texas 77024</span>, href: null },
                { icon: <Phone size={15} />, label: 'Phone', content: '(713) 468-5665', href: 'tel:7134685665' },
                { icon: <Clock size={15} />, label: 'Hours', content: null, hours: true },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14 }}>
                  <div style={{
                    width: 38, height: 38, flexShrink: 0,
                    border: '1px solid rgba(201,169,110,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--gold)',
                  }}>{item.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.52rem', fontWeight: 700,
                      letterSpacing: '0.18em', textTransform: 'uppercase',
                      color: 'var(--light-gray)', marginBottom: 5,
                    }}>{item.label}</div>
                    {item.hours ? (
                      <div>
                        {[
                          { day: 'Mon – Fri', hours: '10:00 AM – 6:00 PM' },
                          { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                          { day: 'Sunday', hours: 'Closed' },
                        ].map((h, j) => (
                          <div key={j} style={{
                            display: 'flex', gap: 16,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: 'clamp(0.68rem, 2vw, 0.76rem)',
                            marginBottom: 3,
                            color: h.hours === 'Closed' ? 'var(--light-gray)' : 'var(--off-white)',
                          }}>
                            <span style={{ fontWeight: 500, minWidth: 70 }}>{h.day}</span>
                            <span style={{ fontWeight: 300, color: 'var(--light-gray)' }}>{h.hours}</span>
                          </div>
                        ))}
                      </div>
                    ) : item.href ? (
                      <a href={item.href} style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(0.78rem, 2.2vw, 0.86rem)', color: 'var(--off-white)',
                        textDecoration: 'none',
                      }}>{item.content}</a>
                    ) : (
                      <div style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: 'clamp(0.78rem, 2.2vw, 0.86rem)', color: 'var(--off-white)',
                        lineHeight: 1.6,
                      }}>{item.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=7921+Katy+Fwy+Houston+TX+77024"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                marginTop: 32, padding: '14px 28px',
                background: 'var(--gold)', color: 'var(--black)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.18em', textTransform: 'uppercase',
                textDecoration: 'none', alignSelf: 'flex-start',
              }}
            ><Navigation size={13} /> Get Directions</a>
          </div>

          {/* Map */}
          <div style={{
            border: '1px solid rgba(201,169,110,0.15)',
            overflow: 'hidden', minHeight: 320, position: 'relative',
          }}>
            <iframe
              title="Factory Eyeglass Outlet Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.38!2d-95.4677!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3c4f3d5e9e1%3A0x1!2s7921+Katy+Fwy%2C+Houston%2C+TX+77024!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%" height="100%"
              style={{
                border: 'none', minHeight: 320, display: 'block',
                filter: 'grayscale(100%) invert(90%) contrast(85%) sepia(20%)',
              }}
              allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(201,169,110,0.04)', pointerEvents: 'none',
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .location-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
