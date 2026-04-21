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
      padding: '120px 48px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Decorative line */}
      <div style={{
        position: 'absolute', left: 0, top: '50%',
        width: '100%', height: 1,
        background: 'linear-gradient(90deg, transparent, rgba(201,169,110,0.06), transparent)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header split layout */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: 80, marginBottom: 80, alignItems: 'end',
        }} className="frames-header">
          <div>
            <p className="section-label">Our Collection</p>
            <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '16px 0' }} />
            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 300, lineHeight: 1.1,
              color: 'var(--off-white)',
            }}>
              Handcrafted Frames,<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>Lightest in the Industry</em>
            </h2>
          </div>
          <div>
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.8rem', fontWeight: 300,
              lineHeight: 2, color: 'var(--light-gray)',
            }}>
              Factory Eyeglass Outlet carries over 1,000 designer and luxury frames —
              from handmade artisan craftsmanship to ultra-lightweight titanium engineering.
              Every frame in our collection is hand-selected by Alexander for quality, style, and comfort.
            </p>
            <div style={{ display: 'flex', gap: 32, marginTop: 32 }}>
              {['Designer', 'Luxury', 'Active', 'Kids', 'Big & Tall'].map((cat, i) => (
                <span key={i} style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '0.6rem', fontWeight: 600,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: i === 0 ? 'var(--gold)' : 'var(--mid-gray)',
                  cursor: 'pointer',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => { if (i !== 0) e.target.style.color = 'var(--mid-gray)'; }}
                >{cat}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Feature cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24, marginBottom: 80,
        }} className="feature-cards">
          {[
            { icon: '✦', title: 'Handmade Craftsmanship', desc: 'Artisan frames built with precision and care by the world\'s finest makers.' },
            { icon: '◈', title: 'Lightest in Industry', desc: 'Ultra-thin titanium and premium acetate — frames you\'ll forget you\'re wearing.' },
            { icon: '◇', title: 'Designer & Luxury', desc: 'From everyday designer to haute couture luxury — every tier represented.' },
            { icon: '◉', title: 'Authorized Dealer', desc: 'Every brand is authenticated. Every frame is guaranteed genuine.' },
          ].map((f, i) => (
            <div key={i} style={{
              padding: '32px 24px',
              border: '1px solid rgba(201,169,110,0.12)',
              transition: 'all 0.3s',
              cursor: 'default',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)'; e.currentTarget.style.background = 'rgba(201,169,110,0.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.12)'; e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontSize: '1.4rem', color: 'var(--gold)', display: 'block', marginBottom: 16 }}>{f.icon}</span>
              <h4 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: '1.2rem', fontWeight: 500,
                color: 'var(--off-white)', marginBottom: 10, lineHeight: 1.2,
              }}>{f.title}</h4>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '0.72rem', fontWeight: 300,
                lineHeight: 1.8, color: 'var(--light-gray)',
              }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Brand marquee */}
        <div>
          <p className="section-label" style={{ textAlign: 'center', marginBottom: 32 }}>Brands We Carry</p>
          <div style={{
            borderTop: '1px solid rgba(201,169,110,0.12)',
            borderBottom: '1px solid rgba(201,169,110,0.12)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            {/* Fade edges */}
            <div style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: 80,
              background: 'linear-gradient(90deg, var(--charcoal), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: 80,
              background: 'linear-gradient(270deg, var(--charcoal), transparent)',
              zIndex: 2, pointerEvents: 'none',
            }} />

            <div style={{
              display: 'flex', gap: 0,
              animation: 'marquee 30s linear infinite',
              whiteSpace: 'nowrap',
            }}>
              {[...designerBrands, ...designerBrands].map((brand, i) => (
                <span key={i} style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem', fontWeight: 400,
                  color: 'var(--mid-gray)',
                  padding: '18px 40px',
                  borderRight: '1px solid rgba(201,169,110,0.08)',
                  letterSpacing: '0.05em',
                  transition: 'color 0.3s',
                  cursor: 'default',
                  display: 'inline-block',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                onMouseLeave={e => e.target.style.color = 'var(--mid-gray)'}
                >{brand}</span>
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
        @media (max-width: 900px) {
          .frames-header { grid-template-columns: 1fr !important; gap: 32px !important; }
          .feature-cards { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 560px) {
          .feature-cards { grid-template-columns: 1fr !important; }
          section#frames { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
