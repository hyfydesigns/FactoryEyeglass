import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  const serviceLinks = [
    { label: "Taylor Fit™ Adjustments", href: "#services" },
    { label: "Lens Consultation", href: "#services" },
    { label: "Designer Frames", href: "#frames" },
    { label: "Sunglasses", href: "#services" },
    { label: "Contact Lenses", href: "#services" },
    { label: "Repair Services", href: "#services" },
  ];

  const brandLinks = [
    "Tom Ford", "Prada", "Gucci", "Ray-Ban",
    "Versace", "Silhouette", "Dior", "Burberry",
  ];

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(201,169,110,0.1)',
    }}>
      {/* Main footer content */}
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '72px 48px 48px',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
        gap: 48,
      }} className="footer-grid">

        {/* Brand column */}
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.3rem', fontWeight: 500,
            letterSpacing: '0.08em', color: 'var(--off-white)',
            marginBottom: 4,
          }}>FACTORY EYEGLASS OUTLET</div>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.55rem', fontWeight: 600,
            letterSpacing: '0.3em', color: 'var(--gold)',
            textTransform: 'uppercase', marginBottom: 24,
          }}>Houston, Texas · Est. 1988</div>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.75rem', fontWeight: 300,
            lineHeight: 1.9, color: 'var(--mid-gray)',
            maxWidth: 280, marginBottom: 28,
          }}>
            Houston's trusted second-generation optician. 
            Personalized service, expert fittings, and the finest eyewear — since 1988.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: <Phone size={12} />, text: '(713) 468-5665', href: 'tel:7134685665' },
              { icon: <Mail size={12} />, text: 'alex@factoryeyeglassoutlet.com', href: 'mailto:alex@factoryeyeglassoutlet.com' },
              { icon: <MapPin size={12} />, text: '7921 Katy Fwy, Houston, TX 77024', href: null },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.7rem', fontWeight: 400,
                    color: 'var(--mid-gray)', lineHeight: 1.5,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.target.style.color = 'var(--mid-gray)'}
                  >{item.text}</a>
                ) : (
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '0.7rem', fontWeight: 400,
                    color: 'var(--mid-gray)', lineHeight: 1.5,
                  }}>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <h4 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--off-white)', marginBottom: 24,
          }}>Services</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {serviceLinks.map((l, i) => (
              <a key={i} href={l.href} style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.7rem', fontWeight: 300,
                color: 'var(--mid-gray)',
                transition: 'color 0.2s',
                lineHeight: 1.4,
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--mid-gray)'}
              >{l.label}</a>
            ))}
          </div>
        </div>

        {/* Brands column */}
        <div>
          <h4 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--off-white)', marginBottom: 24,
          }}>Top Brands</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {brandLinks.map((b, i) => (
              <a key={i} href="#frames" style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.7rem', fontWeight: 300,
                color: 'var(--mid-gray)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--mid-gray)'}
              >{b}</a>
            ))}
            <a href="#frames" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: '0.8rem', fontStyle: 'italic',
              color: 'var(--gold)',
            }}>+ 50 more brands →</a>
          </div>
        </div>

        {/* CTA column */}
        <div>
          <h4 style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--off-white)', marginBottom: 24,
          }}>Book an Appointment</h4>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.72rem', fontWeight: 300,
            lineHeight: 1.8, color: 'var(--mid-gray)',
            marginBottom: 24,
          }}>Ready to experience the Factory Eyeglass difference? Schedule your personal consultation with Alexander today.</p>
          <a href="#contact" style={{
            display: 'block',
            padding: '14px 24px',
            background: 'var(--gold)',
            color: 'var(--black)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 12,
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#E8D5A3'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          >Book Consultation</a>
          <a href="tel:7134685665" style={{
            display: 'block',
            padding: '14px 24px',
            border: '1px solid rgba(201,169,110,0.3)',
            color: 'var(--mid-gray)',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            textAlign: 'center',
            transition: 'all 0.3s',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.3)'; e.currentTarget.style.color = 'var(--mid-gray)'; }}
          >Call (713) 468-5665</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(201,169,110,0.07)',
        padding: '20px 48px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: 12,
        maxWidth: 1200, margin: '0 auto',
      }}>
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.6rem', color: 'var(--mid-gray)',
          letterSpacing: '0.05em',
        }}>© {year} Factory Eyeglass Outlet. All rights reserved.</span>
        <div style={{ display: 'flex', gap: 24 }}>
          {['About', 'Services', 'Frames', 'Insurance', 'Location', 'Contact'].map((l, i) => (
            <a key={i} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.6rem', fontWeight: 500,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--mid-gray)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--mid-gray)'}
            >{l}</a>
          ))}
        </div>
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.6rem', color: 'rgba(201,169,110,0.4)',
          letterSpacing: '0.05em',
        }}>Authorized Dealer · Houston, TX</span>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; padding: 48px 24px 32px !important; }
        }
      `}</style>
    </footer>
  );
}
