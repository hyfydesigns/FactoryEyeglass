import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" style={{
      background: 'var(--off-black)',
      padding: '100px 48px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1.5fr',
          gap: 64, alignItems: 'stretch',
        }} className="location-grid">

          {/* Left: info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p className="section-label" style={{ marginBottom: 16 }}>Find Us</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 0 32px' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 300, lineHeight: 1.15,
              color: 'var(--off-white)', marginBottom: 40,
            }}>
              Conveniently Located<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>on the Katy Freeway</em>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  border: '1px solid rgba(201,169,110,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)',
                }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.55rem', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--mid-gray)', marginBottom: 4,
                  }}>Address</div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.85rem', color: 'var(--off-white)', lineHeight: 1.6,
                  }}>7921 Katy Fwy<br />Houston, Texas 77024</div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  border: '1px solid rgba(201,169,110,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)',
                }}>
                  <Phone size={16} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.55rem', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--mid-gray)', marginBottom: 4,
                  }}>Phone</div>
                  <a href="tel:7134685665" style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.85rem', color: 'var(--off-white)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--off-white)'}
                  >(713) 468-5665</a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: 16 }}>
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  border: '1px solid rgba(201,169,110,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--gold)',
                }}>
                  <Clock size={16} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.55rem', fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--mid-gray)', marginBottom: 8,
                  }}>Hours</div>
                  {[
                    { day: 'Monday – Friday', hours: '10:00 AM – 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM – 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((h, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between',
                      fontFamily: 'Montserrat, sans-serif',
                      fontSize: '0.75rem', marginBottom: 4,
                      color: h.hours === 'Closed' ? 'var(--mid-gray)' : 'var(--off-white)',
                      maxWidth: 240,
                    }}>
                      <span style={{ fontWeight: 400 }}>{h.day}</span>
                      <span style={{ fontWeight: 300, color: h.hours === 'Closed' ? 'var(--mid-gray)' : 'var(--light-gray)' }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=7921+Katy+Fwy+Houston+TX+77024"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                marginTop: 40, padding: '14px 28px',
                background: 'var(--gold)',
                color: 'var(--black)',
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.2em', textTransform: 'uppercase',
                transition: 'background 0.3s',
                alignSelf: 'flex-start',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light, #E8D5A3)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
            >
              <Navigation size={13} /> Get Directions
            </a>
          </div>

          {/* Right: Google Map embed */}
          <div style={{
            border: '1px solid rgba(201,169,110,0.15)',
            overflow: 'hidden',
            minHeight: 400,
            position: 'relative',
          }}>
            <iframe
              title="Factory Eyeglass Outlet Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.38!2d-95.4677!3d29.7604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3c4f3d5e9e1%3A0x1!2s7921+Katy+Fwy%2C+Houston%2C+TX+77024!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 'none',
                filter: 'grayscale(100%) invert(90%) contrast(85%) sepia(20%)',
                minHeight: 420,
                display: 'block',
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Gold overlay tint */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'rgba(201,169,110,0.04)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .location-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          section#location { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
