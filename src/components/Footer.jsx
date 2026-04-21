export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(201,169,110,0.1)',
      padding: '48px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', flexWrap: 'wrap', gap: 24,
      }}>
        <div>
          <div style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.1rem', fontWeight: 500,
            letterSpacing: '0.08em', color: 'var(--off-white)',
          }}>FACTORY EYEGLASS OUTLET</div>
          <div style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.55rem', fontWeight: 600,
            letterSpacing: '0.25em', color: 'var(--gold)',
            textTransform: 'uppercase', marginTop: 4,
          }}>Houston, Texas · Est. 1988</div>
        </div>

        <div style={{ display: 'flex', gap: 32 }}>
          {['About', 'Services', 'Frames', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.6rem', fontWeight: 600,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--mid-gray)', transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'var(--mid-gray)'}
            >{l}</a>
          ))}
        </div>

        <div style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '0.6rem', color: 'var(--mid-gray)',
          letterSpacing: '0.05em',
        }}>
          © {new Date().getFullYear()} Factory Eyeglass Outlet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
