import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import {type ExperienceProps} from '../data/experiences'
const Experience: React.FC<ExperienceProps> = ({experiences}) => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.1,
    freezeOnceVisible: true 
  });

 const sortedExperiences = [...experiences].sort((a, b) => {
  const getYear = (period: string) => parseInt(period.match(/\d{4}/)?.[0] || "0");

  return getYear(b.period) - getYear(a.period);
});

  return (
    <section 
      id="experience" 
      ref={elementRef}
      className="py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden"
    >
      
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Experience
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mt-4 mb-6">
              Professional Journey
            </h2>
            <div className="w-20 h-1 bg-white mx-auto rounded-full" />
          </div>

         
          <div className="space-y-8">
            {sortedExperiences.map((exp, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isIntersecting 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all duration-300">
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                          <Briefcase className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-zinc-100 mb-1">
                            {exp.position}
                          </h3>
                          <p className="text-xl text-emerald-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-zinc-400 ml-16">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-medium">
                          {exp.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  <p className="text-zinc-400 leading-relaxed mb-6 ml-16">
                    {exp.description}
                  </p>

                  
                  <div className="ml-16 mb-6">
                    <h4 className="text-zinc-300 font-semibold mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400">
                          <div className="flex-shrink-0 w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />
                          <span className="flex-1">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  
                  <div className="ml-16">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-lg text-xs font-medium text-zinc-300 hover:border-emerald-500/50 hover:text-emerald-400 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500/50 to-cyan-500/50 rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
