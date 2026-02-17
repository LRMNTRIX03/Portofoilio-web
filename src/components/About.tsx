import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Code2, Palette, Rocket, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.2,
    freezeOnceVisible: true 
  });

  const highlights = [
  {
    icon: Code2,
    title: 'Full Stack Developer',
    description: 'Membangun aplikasi web dari sisi frontend hingga backend secara terintegrasi'
  },
  {
    icon: Cpu,
    title: 'AI Enthusiast',
    description: 'Mempelajari dan menerapkan kecerdasan buatan dalam berbagai proyek'
  },
  {
    icon: Palette,
    title: 'UI/UX Modern',
    description: 'Merancang tampilan yang bersih, responsif, dan mudah digunakan'
  },
  {
    icon: Rocket,
    title: 'Cepat & Andal',
    description: 'Menyelesaikan proyek dengan kualitas tinggi dan tepat waktu'
  },
];



  return (
    <section 
      id="about" 
      ref={elementRef}
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
   
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
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
              Who I Am?
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mt-4 mb-6">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
          
            <div 
              className={`space-y-6 transition-all duration-1000 delay-200 ${
                isIntersecting 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <p className="text-lg text-zinc-400 leading-relaxed text-justify">
              Saya adalah seorang Full Stack Developer yang memiliki pengalaman sekitar{' '}
              <span className="text-emerald-400 font-semibold">2–3 tahun</span> dalam membangun 
              aplikasi web. Saya berfokus pada pembuatan tampilan yang nyaman digunakan serta 
              sistem backend yang kuat dan andal.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed text-justify">
              Perjalanan saya di dunia teknologi dimulai dari rasa ingin tahu tentang cara kerja website. 
              Saat ini, saya membantu individu maupun bisnis dalam mewujudkan ide digital mereka melalui 
              teknologi modern dan praktik pengembangan yang baik.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed text-justify">
              Selain mengembangkan aplikasi, saya juga membuka jasa pembuatan website profesional untuk 
              kebutuhan personal, bisnis, dan UMKM, dengan komitmen memberikan solusi digital yang 
              berkualitas, efektif, dan sesuai kebutuhan klien.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed text-justify">
              Saya juga terus berkomitmen untuk belajar dan mengembangkan diri, mengikuti perkembangan 
              teknologi terbaru, serta meningkatkan kemampuan teknis maupun problem solving agar dapat 
              memberikan hasil terbaik di setiap proyek yang saya kerjakan.
            </p>
            </div>

            
            <div 
              className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-400 ${
                isIntersecting 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-10'
              }`}
            >
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <h3 className="text-zinc-100 font-semibold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
