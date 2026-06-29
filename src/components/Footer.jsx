import { Phone, Mail, MapPin } from 'lucide-react';
import { useSanity } from '../hooks/useSanity';

const BIZ_QUERY = `*[_type == "businessInfo"][0] { phone, phoneDisplay, email, address, city }`;

export default function Footer() {
  const year = new Date().getFullYear();
  const { data: biz } = useSanity(BIZ_QUERY);
  const phone = biz?.phone || '7134685665';
  const phoneDisplay = biz?.phoneDisplay || '(713) 468-5665';
  const email = biz?.email || 'alex@factoryeyeglassoutlet.com';
  const address = biz?.address || '7921 Katy Fwy, Houston, TX';

  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(201,169,110,0.1)',
    }}>
      <div className="footer-grid" style={{
        maxWidth: 1200, margin: '0 auto',
        padding: 'clamp(48px, 7vw, 72px) clamp(20px, 5vw, 48px) clamp(32px, 5vw, 48px)',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
        gap: 'clamp(32px, 4vw, 48px)',
      }}>
        {/* Brand */}
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 500,
            letterSpacing: '0.07em', color: 'var(--off-white)', marginBottom: 4,
          }}>FACTORY EYEGLASS OUTLET</div>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.52rem', fontWeight: 600,
            letterSpacing: '0.25em', color: 'var(--gold)',
            textTransform: 'uppercase', marginBottom: 20,
          }}>Houston, Texas · Est. 1988</div>
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.72rem', fontWeight: 300,
            lineHeight: 1.85, color: 'var(--light-gray)',
            maxWidth: 260, marginBottom: 24,
          }}>Houston's trusted second-generation optician. Personalized service and the finest eyewear since 1988.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { icon: <Phone size={11} />, text: phoneDisplay, href: `tel:${phone}` },
              { icon: <Mail size={11} />, text: email, href: `mailto:${email}` },
              { icon: <MapPin size={11} />, text: address, href: null },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--gold)', marginTop: 2, flexShrink: 0 }}>{item.icon}</span>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem',
                    color: 'var(--light-gray)', textDecoration: 'none',
                  }}>{item.text}</a>
                ) : (
                  <span style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', color: 'var(--light-gray)' }}>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.58rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--off-white)', marginBottom: 20,
          }}>Services</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Taylor Fit™ Adjustments', 'Lens Consultation', 'Designer Frames', 'Sunglasses', 'Contact Lenses', 'Repair Services'].map((l, i) => (
              <a key={i} href="#services" style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', fontWeight: 300,
                color: 'var(--light-gray)', textDecoration: 'none', lineHeight: 1.4,
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--light-gray)'}
              >{l}</a>
            ))}
          </div>
        </div>

        {/* Brands */}
        <div>
          <h4 style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.58rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--off-white)', marginBottom: 20,
          }}>Top Brands</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['Tom Ford', 'Prada', 'Gucci', 'Ray-Ban', 'Versace', 'Silhouette', 'Dior', 'Burberry'].map((b, i) => (
              <a key={i} href="#frames" style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', fontWeight: 300,
                color: 'var(--light-gray)', textDecoration: 'none',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--light-gray)'}
              >{b}</a>
            ))}
            <a href="#frames" style={{
              fontFamily: 'Cormorant Garamond, serif', fontSize: '0.82rem',
              fontStyle: 'italic', color: 'var(--gold)', textDecoration: 'none',
            }}>+ 50 more →</a>
          </div>
        </div>

        {/* CTA */}
        <div>
          <h4 style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.58rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--off-white)', marginBottom: 20,
          }}>Book Appointment</h4>
          <p style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.7rem', fontWeight: 300,
            lineHeight: 1.8, color: 'var(--light-gray)', marginBottom: 20,
          }}>Schedule your personal consultation with Alexander today.</p>
          <a href="#contact" style={{
            display: 'block', padding: '13px 20px',
            background: 'var(--gold)', color: 'var(--black)',
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', fontWeight: 700,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            textAlign: 'center', textDecoration: 'none', marginBottom: 10,
          }}>Book Consultation</a>
          <a href="tel:7134685665" style={{
            display: 'block', padding: '13px 20px',
            border: '1px solid rgba(201,169,110,0.3)', color: 'var(--light-gray)',
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem', fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            textAlign: 'center', textDecoration: 'none',
          }}>Call (713) 468-5665</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(201,169,110,0.07)',
        padding: 'clamp(14px, 3vw, 20px) clamp(20px, 5vw, 48px)',
      }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <span style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.58rem',
            color: 'var(--light-gray)',
          }}>© {year} Factory Eyeglass Outlet. All rights reserved.</span>
          <div className="footer-nav" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['About', 'Services', 'Frames', 'Insurance', 'Location', 'Contact'].map((l, i) => (
              <a key={i} href={`#${l.toLowerCase()}`} style={{
                fontFamily: 'Montserrat, sans-serif', fontSize: '0.56rem', fontWeight: 500,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--light-gray)', textDecoration: 'none',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--light-gray)'}
              >{l}</a>
            ))}
          </div>
          <span style={{
            fontFamily: 'Montserrat, sans-serif', fontSize: '0.56rem',
            color: 'rgba(201,169,110,0.35)',
          }}>Authorized Dealer · Houston, TX</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-nav { display: none !important; }
        }
      `}</style>
    </footer>
  );
}
