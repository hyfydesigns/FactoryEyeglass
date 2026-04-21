const designerBrands = [
  'Tom Ford', 'Prada', 'Gucci', 'Versace', 'Dior', 'Fendi',
  'Burberry', 'Tiffany & Co.', 'Carolina Herrera', 'Silhouette',
  'Ray-Ban', 'Michael Kors', 'Ralph Lauren', 'Armani Exchange',
  'Emporio Armani', 'Tory Burch', 'Hugo Boss', 'John Varvatos',
  'Rodenstock', 'Lucky Brand',
];

export default function Frames() {
  return (
    <section id="frames" style={{
      background: 'var(--charcoal)',
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 48px)',
      overflow: 'hidden', position: 'relative',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div className="frames-header" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(24px, 5vw, 64px)', marginBottom: 'clamp(40px, 6vw, 64px)', alignItems: 'end',
        }}>
          <div>
            <p className="section-label">Our Collection</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '14px 0' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.9rem, 6vw, 3.5rem)',
              fontWeight: 300, lineHeight: 1.1, color: 'var(--off-white)',
            }}>
              Handcrafted Frames,<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Lightest in the Industry</em>
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.74rem, 2vw, 0.82rem)', fontWeight: 300,
              lineHeight: 1.9, color: 'var(--light-gray)', marginBottom: 24,
            }}>
              Over 1,000 designer and luxury frames — from handmade artisan craftsmanship to
              ultra-lightweight titanium. Every frame hand-selected by Alexander.
            </p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              {['Designer', 'Luxury', 'Active', 'Kids', 'Big & Tall'].map((cat, i) => (
                <span key={i} style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.6rem', fontWeight: 600,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: i === 0 ? 'var(--gold)' : 'var(--light-gray)',
                  cursor: 'default',
                }}>{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div className="feature-cards" style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'clamp(12px, 2vw, 20px)', marginBottom: 'clamp(40px, 6vw, 64px)',
        }}>
          {[
            { icon: '✦', title: 'Handmade Craftsmanship', desc: 'Artisan frames built with precision and care by the world\'s finest makers.' },
            { icon: '◈', title: 'Lightest in Industry', desc: 'Ultra-thin titanium and premium acetate — frames you\'ll forget you\'re wearing.' },
            { icon: '◇', title: 'Designer & Luxury', desc: 'From everyday designer to haute couture — every tier represented.' },
            { icon: '◉', title: 'Authorized Dealer', desc: 'Every brand authenticated. Every frame guaranteed genuine.' },
          ].map((f, i) => (
            <div key={i} style={{
              padding: 'clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 22px)',
              border: '1px solid rgba(201,169,110,0.12)',
              transition: 'all 0.3s',
            }}>
              <span style={{ fontSize: '1.2rem', color: 'var(--gold)', display: 'block', marginBottom: 14 }}>{f.icon}</span>
              <h4 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', fontWeight: 500,
                color: 'var(--off-white)', marginBottom: 8, lineHeight: 1.2,
              }}>{f.title}</h4>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(0.68rem, 1.8vw, 0.72rem)', fontWeight: 300,
                lineHeight: 1.75, color: 'var(--light-gray)',
              }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Brand marquee */}
        <div>
          <p className="section-label" style={{ textAlign: 'center', marginBottom: 24 }}>Brands We Carry</p>
          <div style={{
            borderTop: '1px solid rgba(201,169,110,0.12)',
            borderBottom: '1px solid rgba(201,169,110,0.12)',
            overflow: 'hidden', position: 'relative',
          }}>
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: 60,
              background: 'linear-gradient(90deg, var(--charcoal), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: 60,
              background: 'linear-gradient(270deg, var(--charcoal), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <div style={{
              display: 'flex', animation: 'marquee 28s linear infinite',
              whiteSpace: 'nowrap',
            }}>
              {[...designerBrands, ...designerBrands].map((brand, i) => (
                <span key={i} style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(0.85rem, 2vw, 1rem)', fontWeight: 400,
                  color: 'var(--light-gray)',
                  padding: 'clamp(12px, 2vw, 18px) clamp(20px, 4vw, 36px)',
                  borderRight: '1px solid rgba(201,169,110,0.08)',
                  letterSpacing: '0.04em',
                  display: 'inline-block',
                }}>{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (max-width: 860px) {
          .frames-header { grid-template-columns: 1fr !important; }
          .feature-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .feature-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
