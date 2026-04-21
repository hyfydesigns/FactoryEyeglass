import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria G.', location: 'Houston Heights', stars: 5,
    text: 'Alex has been my optician for over 15 years. The Taylor Fit adjustment is unlike anything you get at a chain store — my glasses actually fit my face perfectly. I wouldn\'t trust anyone else.',
  },
  {
    name: 'David R.', location: 'Memorial, Houston', stars: 5,
    text: 'Incredible selection of designer frames and Alex really knows his lenses. He recommended a progressive lens I\'d never heard of that\'s completely changed how I work at my computer. Real expertise.',
  },
  {
    name: 'Sandra T.', location: 'River Oaks', stars: 5,
    text: 'I needed my Tom Ford frames repaired urgently before a trip. Alex had them back to me in 2 days looking brand new. Fast, honest, and incredibly skilled.',
  },
  {
    name: 'James L.', location: 'Katy, TX', stars: 5,
    text: 'Second generation optician and it shows. He helped me find the lightest titanium frames I\'ve ever worn — I forget I have glasses on. Amazing service.',
  },
  {
    name: 'Patricia M.', location: 'Tanglewood', stars: 5,
    text: 'My whole family has been coming here for years. Alex knows each of us by name. The personalized service you simply cannot find anywhere else in the city.',
  },
  {
    name: 'Carlos V.', location: 'Energy Corridor', stars: 5,
    text: 'Alex\'s consultations are thorough and he genuinely cares about finding the right fit. Best eyewear experience I\'ve had in Houston.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    clearInterval(intervalRef.current);
    setTimeout(() => { setActive(idx); setAnimating(false); }, 280);
    intervalRef.current = setInterval(() => setActive(prev => (prev + 1) % testimonials.length), 5500);
  };

  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((active + 1) % testimonials.length);

  useEffect(() => {
    intervalRef.current = setInterval(() => setActive(prev => (prev + 1) % testimonials.length), 5500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{
      background: 'var(--black)',
      padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 48px)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '5%', left: '2%',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(8rem, 25vw, 20rem)', lineHeight: 1,
        color: 'rgba(201,169,110,0.02)',
        pointerEvents: 'none', userSelect: 'none', fontWeight: 300,
      }}>"</div>

      <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label" style={{ marginBottom: 14 }}>Client Stories</p>
        <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 auto 14px' }} />
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.8rem, 6vw, 3rem)',
          fontWeight: 300, lineHeight: 1.2,
          color: 'var(--off-white)', marginBottom: 'clamp(32px, 6vw, 56px)',
        }}>
          Trusted by Houston Families<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>for Over Three Decades</em>
        </h2>

        {/* Card */}
        <div style={{
          padding: 'clamp(32px, 6vw, 60px) clamp(24px, 6vw, 64px)',
          border: '1px solid rgba(201,169,110,0.15)',
          position: 'relative',
          background: 'rgba(201,169,110,0.02)',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 0.28s ease, transform 0.28s ease',
          marginBottom: 32,
        }}>
          {[
            { top: 0, left: 0, borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
            { top: 0, right: 0, borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
            { bottom: 0, left: 0, borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
            { bottom: 0, right: 0, borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
          ].map((s, i) => (
            <div key={i} style={{ position: 'absolute', width: 20, height: 20, ...s }} />
          ))}

          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 24 }}>
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={13} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.05rem, 3.5vw, 1.5rem)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.7, color: 'var(--off-white)', marginBottom: 28,
          }}>"{t.text}"</p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
            <div style={{ width: 1, height: 16, background: 'rgba(201,169,110,0.3)' }} />
            <span style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: '0.68rem', fontWeight: 600,
              color: 'var(--off-white)',
            }}>{t.name}</span>
            <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--gold)' }} />
            <span style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: '0.62rem',
              color: 'var(--light-gray)',
            }}>{t.location}</span>
            <div style={{ width: 1, height: 16, background: 'rgba(201,169,110,0.3)' }} />
          </div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20 }}>
          <button onClick={prev} style={{
            background: 'none', border: '1px solid rgba(201,169,110,0.3)',
            color: 'var(--gold)', width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
          onTouchStart={e => e.currentTarget.style.background = 'rgba(201,169,110,0.1)'}
          onTouchEnd={e => e.currentTarget.style.background = 'none'}
          ><ChevronLeft size={16} /></button>

          <div style={{ display: 'flex', gap: 8 }}>
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i)} style={{
                width: i === active ? 22 : 6, height: 6, padding: 0,
                border: 'none', borderRadius: 3,
                background: i === active ? 'var(--gold)' : 'rgba(201,169,110,0.25)',
                transition: 'all 0.3s ease', cursor: 'pointer',
                minWidth: 6,
              }} />
            ))}
          </div>

          <button onClick={next} style={{
            background: 'none', border: '1px solid rgba(201,169,110,0.3)',
            color: 'var(--gold)', width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
          onTouchStart={e => e.currentTarget.style.background = 'rgba(201,169,110,0.1)'}
          onTouchEnd={e => e.currentTarget.style.background = 'none'}
          ><ChevronRight size={16} /></button>
        </div>
      </div>
    </section>
  );
}
