import React, { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const FloatingNavbar: React.FC = () => {
  const { isScrolled } = useScrollPosition();
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sections = ['hero', 'about', 'tech', 'education', 'experience', 'projects'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Tech' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-[-100px] opacity-0'
      }`}
    >
      <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/50 rounded-full px-6 py-3 shadow-2xl shadow-emerald-500/5">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  activeSection === item.id
                    ? 'text-emerald-400'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 bg-emerald-500/10 rounded-full border border-emerald-500/20" />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default FloatingNavbar;
