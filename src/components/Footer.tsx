
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { type FooterProps } from "../data/footer";

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    "GitHub": Github,
    "LinkedIn": Linkedin,
    "Email": Mail,
  };

  const scrollToSection = (href: string) => {
    if (!href.startsWith("#")) return;

    const element = document.getElementById(href.substring(1));

    if (!element) return;

    const offset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: elementPosition,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-zinc-800 bg-zinc-950">
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="container mx-auto px-6 py-16">
        <div className="mx-auto max-w-7xl">

          
          <div className="mb-12 grid gap-12 md:grid-cols-2 lg:grid-cols-4">


            <div className="lg:col-span-2">
              <h3 className="mb-4 bg-gradient-to-r from-green-200 via-green-400 to-green-600 bg-clip-text text-2xl font-bold text-transparent">
                Lutfi Rizaldi Mahida
              </h3>

              <p className="mb-6 max-w-md leading-relaxed text-zinc-400">
                {footerData.deskripsi}
              </p>

              <div className="flex gap-3">
                {footerData.footerLink
                  .find((section) => section.title === "Social")
                  ?.links.map((link) => {
                    const Icon =
                      socialIcons[link.label as keyof typeof socialIcons];

                    if (!Icon) return null;

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="rounded-xl border border-zinc-800 bg-zinc-900 p-3 text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:text-emerald-400"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
              </div>
            </div>

            
            {footerData.footerLink.map((section) => (
              <div key={section.title}>
                <h4 className="mb-4 font-semibold text-zinc-100">
                  {section.title}
                </h4>

                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("#") ? (
                        <button
                          type="button"
                          onClick={() => scrollToSection(link.href)}
                          className="text-sm text-zinc-400 transition-colors duration-300 hover:text-emerald-400"
                        >
                          {link.label}
                        </button>
                      ) : (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-zinc-400 transition-colors duration-300 hover:text-emerald-400"
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


          <div className="border-t border-zinc-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-zinc-500">
                © {currentYear} Lutfi Rizaldi Mahida. All rights reserved.
              </p>

              <p className="text-sm text-zinc-500">
                My Portfolio Website
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

