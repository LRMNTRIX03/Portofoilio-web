import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TechStack: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.2,
    freezeOnceVisible: true 
  });

  const techCategories = [
    {
      category: 'Frontend',
      color: 'emerald',
      technologies: [
        { name: 'React', level: 70 },
        { name: 'TypeScript', level: 60 },
        { name: 'Tailwind CSS', level: 80 },
      ]
    },
    {
      category: 'Backend',
      color: 'cyan',
      technologies: [
        { name: 'Express', level: 70 },
        { name: 'MySQL', level: 85 },
        { name: 'Flask', level: 85 },
        { name: 'Laravel', level: 87 },
        { name: 'Django', level: 80 },
      ]
    },
    {
      category: 'DevOps & Tools',
      color: 'purple',
      technologies: [
        { name: 'Docker', level: 60 },
        { name: 'Git', level: 80 },
      ]
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; progress: string }> = {
      emerald: {
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        text: 'text-emerald-400',
        progress: 'bg-emerald-500'
      },
      cyan: {
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        progress: 'bg-cyan-500'
      },
      purple: {
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        progress: 'bg-purple-500'
      }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section 
      id="tech" 
      ref={elementRef}
      className="py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 relative overflow-hidden"
    >
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
         
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Tech Stack
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mt-4 mb-6">
              Technologies I Work With
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          </div>

        
          <div className="grid lg:grid-cols-3 gap-8">
            {techCategories.map((category, categoryIndex) => {
              const colorClasses = getColorClasses(category.color);
              
              return (
                <div
                  key={categoryIndex}
                  className={`transition-all duration-1000 ${
                    isIntersecting 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 150}ms` }}
                >
                  <div className="h-full p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-all duration-300">
                    {/* Category header */}
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${colorClasses.bg} border ${colorClasses.border} rounded-full mb-8`}>
                      <span className={`w-2 h-2 ${colorClasses.progress} rounded-full`} />
                      <span className={`${colorClasses.text} font-semibold text-sm`}>
                        {category.category}
                      </span>
                    </div>

            
                    <div className="space-y-6">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={techIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-zinc-300 font-medium">
                              {tech.name}
                            </span>
                            <span className="text-zinc-500 text-sm">
                              {tech.level}%
                            </span>
                          </div>
                          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out`}
                              style={{ 
                                width: isIntersecting ? `${tech.level}%` : '0%',
                                transitionDelay: `${(categoryIndex * 150) + (techIndex * 100)}ms`
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        
          <div 
            className={`mt-16 text-center transition-all duration-1000 delay-700 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-zinc-400 text-lg">
              Saya terus belajar dan mengeksplorasi teknologi baru untuk meningkatkan kemampuan saya dalam membangun aplikasi web yang modern, efisien, dan scalable. Dengan pengalaman yang saya miliki, saya siap untuk menghadapi tantangan pengembangan web dan memberikan solusi terbaik bagi klien maupun proyek pribadi saya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
