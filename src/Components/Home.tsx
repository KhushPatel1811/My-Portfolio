import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import khushImg from '../assets/Image/Khush.jpeg';

export default function Home() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedRef.current) return;
    const typed = new Typed(typedRef.current, {
      strings: ['Full Stack Developer', 'Problem Solver', 'Web Enthusiast'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Khush Patel</h1>
        <h3>And I'm a <span ref={typedRef} className="multiple-text"></span></h3>
        <p>Passionate Full Stack Developer dedicated to transforming business ideas into scalable, high-performance web applications with exceptional user experiences.</p>
        <a href="/Khush_Resume.pdf" download="Khush_Resume.pdf" className="btn">Download CV</a>
      </div>
      <div className="home-img">
        <div className="glowing-circle">
          <img src={khushImg} alt="Khush Patel" style={{height: '380px'}}/>
        </div>
      </div>
    </section>
  );
}
