import { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria G.',
    location: 'Houston Heights',
    stars: 5,
    text: 'Alex has been my optician for over 15 years. The Taylor Fit adjustment is unlike anything you get at a chain store — my glasses actually fit my face perfectly. I wouldn\'t trust anyone else.',
  },
  {
    name: 'David R.',
    location: 'Memorial, Houston',
    stars: 5,
    text: 'Incredible selection of designer frames and Alex really knows his lenses. He recommended a progressive lens I\'d never heard of that\'s completely changed how I work at my computer. Real expertise.',
  },
  {
    name: 'Sandra T.',
    location: 'River Oaks',
    stars: 5,
    text: 'I needed my Tom Ford frames repaired urgently before a trip. Alex had them back to me in 2 days looking brand new. Fast, honest, and incredibly skilled. Factory Eyeglass is the best in Houston.',
  },
  {
    name: 'James L.',
    location: 'Katy, TX',
    stars: 5,
    text: 'Second generation optician and it shows. The knowledge Alex brings is on another level. He helped me find the lightest titanium frames I\'ve ever worn — I forget I have glasses on. Amazing service.',
  },
  {
    name: 'Patricia M.',
    location: 'Tanglewood',
    stars: 5,
    text: 'My whole family has been coming here for years. Alex knows each of us by name and always remembers what we need. The personalized service you simply cannot find anywhere else in the city.',
  },
  {
    name: 'Carlos V.',
    location: 'Energy Corridor',
    stars: 5,
    text: 'Needed an authorized dealer for my Prada frames and Factory Eyeglass was the only place that had exactly what I wanted. Alex\'s consultations are thorough and he genuinely cares about finding the right fit.',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef(null);

  const goTo = (idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(idx);
      setAnimating(false);
    }, 300);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const t = testimonials[active];

  return (
    <section id="testimonials" style={{
      background: 'var(--black)',
      padding: '120px 48px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background quote mark */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: '24rem', lineHeight: 1,
        color: 'rgba(201,169,110,0.025)',
        pointerEvents: 'none', userSelect: 'none',
        fontWeight: 300,
      }}>"</div>

      <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
        <p className="section-label" style={{ marginBottom: 16 }}>Client Stories</p>
        <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 auto 16px' }} />
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 300, lineHeight: 1.2,
          color: 'var(--off-white)', marginBottom: 64,
        }}>
          Trusted by Houston Families<br />
          <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>for Over Three Decades</em>
        </h2>

        {/* Testimonial card */}
        <div style={{
          padding: '64px 72px',
          border: '1px solid rgba(201,169,110,0.15)',
          position: 'relative',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(10px)' : 'translateY(0)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
          background: 'rgba(201,169,110,0.02)',
          marginBottom: 48,
        }} className="testimonial-card">
          {/* Corner accents */}
          {[
            { top: 0, left: 0, borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)', width: 24, height: 24 },
            { top: 0, right: 0, borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)', width: 24, height: 24 },
            { bottom: 0, left: 0, borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)', width: 24, height: 24 },
            { bottom: 0, right: 0, borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)', width: 24, height: 24 },
          ].map((s, i) => (
            <div key={i} style={{ position: 'absolute', ...s }} />
          ))}

          {/* Stars */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 32 }}>
            {Array.from({ length: t.stars }).map((_, i) => (
              <Star key={i} size={14} fill="var(--gold)" color="var(--gold)" />
            ))}
          </div>

          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.7, color: 'var(--off-white)',
            marginBottom: 40,
          }}>"{t.text}"</p>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
          }}>
            <div style={{
              width: 1, height: 20, background: 'rgba(201,169,110,0.3)',
            }} />
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.7rem', fontWeight: 600,
              letterSpacing: '0.1em', color: 'var(--off-white)',
            }}>{t.name}</span>
            <div style={{
              width: 4, height: 4, borderRadius: '50%',
              background: 'var(--gold)',
            }} />
            <span style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', fontWeight: 400,
              color: 'var(--mid-gray)',
            }}>{t.location}</span>
            <div style={{
              width: 1, height: 20, background: 'rgba(201,169,110,0.3)',
            }} />
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? 24 : 6,
                height: 6,
                border: 'none',
                background: i === active ? 'var(--gold)' : 'rgba(201,169,110,0.25)',
                transition: 'all 0.3s ease',
                borderRadius: 3,
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .testimonial-card { padding: 40px 28px !important; }
          section#testimonials { padding: 80px 24px !important; }
        }
      `}</style>
    </section>
  );
}
