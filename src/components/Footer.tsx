import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Projects', href: '#projects' },
        { label: 'Experience', href: '#experience' },
        { label: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Social',
      links: [
        { label: 'GitHub', href: 'https://github.com/LRMNTRIX03' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/lutfi-rizaldi-mahida-65a566300/' },
        { label: 'Email', href: 'mailto:rizaldilutfi1@gmail.com' },
      ]
     
    }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 relative overflow-hidden">
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
         
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
           
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Lutfi Rizaldi Mahida
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6 max-w-md">
                Full Stack Developer yang bersemangat dalam menciptakan pengalaman digital yang berkualitas. Mari wujudkan solusi digital yang inovatif bersama.
              </p>
              
              
              <div className="flex gap-3">
                {[
                  { Icon: Github, href: 'https://github.com/LRMNTRIX03', label: 'GitHub' },
                  { Icon: Linkedin, href: 'https://linkedin.com/in/lutfi-rizaldi-mahida-65a566300/', label: 'LinkedIn' },
                  { Icon: Mail, href: 'mailto:rizaldilutfi1@gmail.com', label: 'Email' },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 rounded-xl text-zinc-400 hover:text-emerald-400 transition-all duration-300 hover:-translate-y-1"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

           
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-zinc-100 font-semibold mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      {link.href.startsWith('#') ? (
                        <button
                          onClick={() => scrollToSection(link.href)}
                          className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

         
          <div className="pt-8 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-zinc-500 text-sm">
                © {currentYear} Lutfi Rizaldi Mahida. All rights reserved.
              </p>
              
              <p className="flex items-center gap-2 text-zinc-500 text-sm">
                My Portofolio Website
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
