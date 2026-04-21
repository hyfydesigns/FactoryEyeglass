import { useState, useEffect } from 'react';
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
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return visible ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 50,
        width: 44, height: 44,
        border: '1px solid var(--gold)',
        background: 'rgba(10,10,10,0.9)',
        color: 'var(--gold)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', fontSize: '1.1rem',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.3s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--black)'; }}
      onMouseLeave={e => { e.currentTarget.style.background = 'rgba(10,10,10,0.9)'; e.currentTarget.style.color = 'var(--gold)'; }}
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
    </>
  );
}
