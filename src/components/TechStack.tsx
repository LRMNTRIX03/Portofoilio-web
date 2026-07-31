import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import type { TechProps } from '../data/Tech';

const TechStack: React.FC<TechProps> = ({tech}) => {


  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.2,
    freezeOnceVisible: true
  });

  

  const getColorClasses = (color: string) => {
    const colors: Record<string, { badge: string; hover: string }> = {
      emerald: {
        badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
        hover: 'group-hover:text-emerald-400'
      },
      cyan: {
        badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
        hover: 'group-hover:text-cyan-400'
      },
      purple: {
        badge: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
        hover: 'group-hover:text-purple-400'
      },
      blue : {
        badge: 'bg-blue-500/10 border-blue-500/30 text-blue-400',
        hover: 'group-hover:text-blue-400'
      }
    };
    return colors[color];
  };

  return (
    <section
      id="tech"
      ref={elementRef}
      className="py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          <div className={`text-center mb-20 transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Tech Stack
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mt-4 mb-6">
              Technologies I Work With
            </h2>

            <div className="w-20 h-1 bg-white mx-auto rounded-full" />
          </div>

       
          <div className="grid lg:grid-cols-3 gap-8">
            {tech.map((category, categoryIndex) => {
              const color = getColorClasses(category.color);

              return (
                <div
                  key={categoryIndex}
                  className={`transition-all duration-1000 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition">

                   
                    <div className={`inline-flex px-4 py-2 border rounded-full mb-8 ${color.badge}`}>
                      {category.category}
                    </div>

                 
                    <div className="grid grid-cols-3 gap-6">
                      {category.technologies.map((tech, techIndex) => {
                        const Icon = tech.icon;

                        return (
                          <div
                            key={techIndex}
                            className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-zinc-800/50 hover:bg-zinc-800 transition"
                          >
                            <Icon className={`text-4xl text-zinc-400 transition ${color.hover}`} />
                            <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition">
                              {tech.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          
          <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <p className="text-zinc-400 text-lg">
             Passionate about continuous learning, I constantly explore new technologies to build modern, scalable, and high-quality software.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechStack;
