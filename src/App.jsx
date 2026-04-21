import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Frames from './components/Frames';
import Testimonials from './components/Testimonials';
import VisionPlans from './components/VisionPlans';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 32, left: 20, zIndex: 90,
        width: 44, height: 44,
        border: '1px solid var(--gold)',
        background: 'rgba(10,10,10,0.92)',
        color: 'var(--gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', fontSize: '1rem',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.25s',
        fontFamily: 'sans-serif',
      }}
      aria-label="Back to top"
    >↑</button>
  ) : null;
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Frames />
        <Testimonials />
        <VisionPlans />
        <Location />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      {/* Floating call button — mobile only */}
      <a href="tel:7134685665" className="mobile-call-fab" aria-label="Call us">
        <Phone size={22} />
      </a>
    </>
  );
}
