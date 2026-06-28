import { useEffect, useRef } from 'react';

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const menuIconRef = useRef<HTMLElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const icon = menuIconRef.current;
    const nav = navbarRef.current;
    if (!icon || !nav) return;

    const toggle = () => {
      icon.classList.toggle('bx-x');
      nav.classList.toggle('active');
    };
    icon.addEventListener('click', toggle);
    return () => icon.removeEventListener('click', toggle);
  }, []);

  // Close menu on scroll (handled in App via onscroll)
  useEffect(() => {
    const handler = () => {
      menuIconRef.current?.classList.remove('bx-x');
      navbarRef.current?.classList.remove('active');
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = ['home', 'about', 'services', 'techstack', 'portfolio', 'contact'];

  return (
    <header className="header" id="header">
      <a href="#home" className="logo">Khush Patel</a>
      <i className="bx bx-menu" id="menu-icon" ref={menuIconRef as React.RefObject<HTMLElement>}></i>
      <nav className="navbar" ref={navbarRef as React.RefObject<HTMLElement>}>
        {links.map(link => (
          <a
            key={link}
            href={`#${link}`}
            className={activeSection === link ? 'active' : ''}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
