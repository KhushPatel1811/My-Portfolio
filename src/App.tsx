import { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import TechStack from './Components/TechStack';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const header = document.querySelector('header') as HTMLElement;
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    const onScroll = () => {
      // Sticky header
      header.classList.toggle('sticky', window.scrollY > 100);

      // Active nav link
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = (sec as HTMLElement).offsetTop - 150;
        const height = (sec as HTMLElement).offsetHeight;
        const id = sec.getAttribute('id') ?? '';
        if (top >= offset && top < offset + height) {
          setActiveSection(id);
          navLinks.forEach(l => l.classList.remove('active'));
          document.querySelector(`header nav a[href="#${id}"]`)?.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({ distance: '80px', duration: 2000, delay: 200 });
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <Home />
      <About />
      <Services />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
