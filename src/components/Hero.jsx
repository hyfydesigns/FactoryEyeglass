import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useSanity } from '../hooks/useSanity';
import { urlFor } from '../sanity/client';

const FALLBACK_IMAGES = [
  { url: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1920&q=80', alt: 'Eyeglasses' },
  { url: 'https://images.unsplash.com/photo-1556306510-31ca015374b0?auto=format&fit=crop&w=1920&q=80', alt: 'Black frames' },
  { url: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1920&q=80', alt: 'Eyewear' },
  { url: 'https://images.unsplash.com/photo-1517948430535-1e2469d314fe?auto=format&fit=crop&w=1920&q=80', alt: 'Gold frames' },
];

const HERO_QUERY = `{
  "slides": *[_type == "heroSlide"] | order(order asc) { _id, image, alt },
  "info": *[_type == "businessInfo"][0] { heroHeadline, heroSubheadline, heroTagline }
}`;

export default function Hero() {
  const lineRef = useRef(null);
  const [slide, setSlide] = useState(0);
  const { data } = useSanity(HERO_QUERY);

  const sanitySlides = data?.slides?.length
    ? data.slides.map(s => ({ url: urlFor(s.image).width(1920).quality(80).url(), alt: s.alt || '' }))
    : null;
  const images = sanitySlides || FALLBACK_IMAGES;

  const headline = data?.info?.heroHeadline || 'Live Life';
  const subheadline = data?.info?.heroSubheadline || 'in the Clear';
  const tagline = data?.info?.heroTagline || 'Over three decades of expertise. Personalized fittings, high-end designer frames, and innovative lenses tailored to your lifestyle.';

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) lineRef.current.style.width = '100%';
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setSlide(s => (s + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  const stats = [
    { num: '30+', label: 'Years Experience' },
    { num: '1000+', label: 'Designer Frames' },
    { num: '3–5', label: 'Day Turnaround' },
    { num: '2nd Gen', label: 'Optician' },
  ];

  return (
    <section id="hero" style={{
      minHeight: '100dvh',
      background: 'var(--black)',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background slideshow */}
      {images.map((img, i) => (
        <div key={img.url} style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${img.url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: slide === i ? 1 : 0,
          transition: 'opacity 1.4s ease',
          transform: slide === i ? 'scale(1.04)' : 'scale(1)',
          transitionProperty: 'opacity, transform',
          transitionDuration: slide === i ? '1.4s, 8s' : '1.4s, 0s',
          transitionTimingFunction: 'ease, ease-out',
          pointerEvents: 'none',
          willChange: 'opacity, transform',
        }} />
      ))}

      {/* Dark overlay — keeps text readable over any photo */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.72) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Slide dots */}
      <div style={{
        position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 8, zIndex: 3,
      }} className="slide-dots">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: slide === i ? 24 : 6,
              height: 6,
              border: 'none',
              background: slide === i ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
              cursor: 'pointer', padding: 0,
              transition: 'all 0.4s ease',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(100px, 14vw, 140px) 24px clamp(32px, 5vw, 48px)',
        position: 'relative', zIndex: 2,
      }}>
        <div style={{
          textAlign: 'center', width: '100%', maxWidth: 860,
          animation: 'fadeUp 1s ease forwards', opacity: 0,
          padding: '0 4px',
        }}>
          <p className="section-label" style={{ marginBottom: 20, fontSize: '0.6rem' }}>
            Alexander · Second Generation Optician
          </p>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 12vw, 7rem)',
            fontWeight: 300, lineHeight: 1.0,
            color: '#F8F5F0', marginBottom: 4,
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}>{headline}</h1>

          <h1 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(3rem, 12vw, 7rem)',
            fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.0, color: 'var(--gold)', marginBottom: 28,
            textShadow: '0 2px 20px rgba(0,0,0,0.4)',
          }}>{subheadline}</h1>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            <div ref={lineRef} style={{
              height: 1, width: 0,
              background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
              transition: 'width 1.2s ease', maxWidth: 340,
            }} />
          </div>

          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(0.78rem, 2.5vw, 0.9rem)',
            fontWeight: 300, lineHeight: 1.85,
            color: 'rgba(248,245,240,0.88)',
            maxWidth: 500, margin: '0 auto 36px',
            letterSpacing: '0.03em',
            textShadow: '0 1px 8px rgba(0,0,0,0.5)',
          }}>
            {tagline}
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#services" style={{
              padding: '15px 32px',
              background: 'var(--gold)', color: '#0A0A0A',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
              minWidth: 160, textAlign: 'center',
            }}>Our Services</a>
            <a href="tel:7134685665" style={{
              padding: '15px 32px',
              border: '1px solid rgba(201,169,110,0.6)',
              color: '#F8F5F0',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.18em', textTransform: 'uppercase',
              textDecoration: 'none', display: 'inline-block',
              minWidth: 160, textAlign: 'center',
              backdropFilter: 'blur(4px)',
            }}>Call Us Now</a>
          </div>

          <a href="#about" className="scroll-cue" style={{
            display: 'inline-flex', flexDirection: 'column',
            alignItems: 'center', gap: 6,
            color: 'rgba(248,245,240,0.7)',
            animation: 'bounce 2s infinite 1.5s',
            textDecoration: 'none',
            marginTop: 48,
          }}>
            <span style={{ fontSize: '0.5rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
            <ChevronDown size={13} />
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{
        borderTop: '1px solid rgba(201,169,110,0.2)',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        flexShrink: 0,
        position: 'relative', zIndex: 2,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }} className="hero-stats">
        {stats.map((s, i) => (
          <div key={i} style={{
            padding: 'clamp(14px, 3vw, 22px) 8px',
            textAlign: 'center',
            borderLeft: i > 0 ? '1px solid rgba(201,169,110,0.15)' : 'none',
          }}>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.2rem, 4vw, 1.8rem)',
              fontWeight: 400, color: 'var(--gold)', lineHeight: 1,
            }}>{s.num}</div>
            <div style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(0.48rem, 1.4vw, 0.58rem)', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(248,245,240,0.65)', marginTop: 5,
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
        @media (max-width: 520px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
          .scroll-cue { display: none !important; }
          .slide-dots { bottom: 64px !important; }
        }
      `}</style>
    </section>
  );
}
