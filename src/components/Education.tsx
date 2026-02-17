import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.2,
    freezeOnceVisible: true 
  });

  const educations = [
    {
      degree: 'Sarjana Teknik Informatika',
      institution: 'Universitas Budi Luhur',
      location: 'Jakarta, Indonesia',
      period: 'July 2022 - January 2026',
      description: 'Berfokus pada pengembangan Full Stack dan AI Enthusiast. Menyelesaikan skripsi tentang pengembangan chatbot menggunakan metode Multinomial Naive Bayes dan K-Nearest Neighbors.',
      achievements: [
        'GPA: 3.96 / 4.0',
        'Magna Cum Laude',
        'Publikasi Jurnal Nasional',
      ]
    },
    {
      degree: 'Studi Independen Web Developer and Platform (Specialist Education Platform) ',
      institution: 'Educourse.id',
      location: 'Jakarta, Indonesia',
      period: 'September 2024 - December 2024',
      description: 'Mengikuti program Studi Independen Web Developer dan Platform Pendidikan yang diselenggarakan oleh PT Maleo Edukasi Teknologi, dengan fokus pada pengembangan web front-end menggunakan JavaScript dan Bootstrap serta back-end menggunakan Django. Berkolaborasi dalam tim untuk mengembangkan platform pembelajaran berbasis web bernama RPLearn, sekaligus meningkatkan pemahaman tentang pemanfaatan teknologi dalam dunia pendidikan.',
      achievements: [
        'Capstone Project: RPLearn',
      ]
    },
  ];

  return (
    <section 
      id="education" 
      ref={elementRef}
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
        
          <div 
            className={`text-center mb-20 transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Education
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mt-4 mb-6">
              Academic Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          
          <div className="relative">
            
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 transform lg:-translate-x-1/2" />

            
            <div className="space-y-16">
              {educations.map((edu, index) => (
                <div
                  key={index}
                  className={`relative transition-all duration-1000 ${
                    isIntersecting 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className={`lg:grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                  }`}>
                    
                    <div className={`absolute left-0 lg:left-1/2 w-4 h-4 bg-emerald-500 rounded-full border-4 border-zinc-950 transform lg:-translate-x-1/2 ${
                      index % 2 === 0 ? 'lg:translate-x-[-50%]' : 'lg:translate-x-[-50%]'
                    }`}>
                      <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-50" />
                    </div>

                    
                    <div className={`ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:col-start-2' : 'lg:col-start-1 lg:text-right'}`}>
                      <div className="group p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-emerald-500/50 transition-all duration-300">
                      
                        <div className={`inline-flex items-center justify-center w-12 h-12 bg-emerald-500/10 rounded-xl mb-4 ${
                          index % 2 === 0 ? '' : 'lg:ml-auto'
                        }`}>
                          <GraduationCap className="w-6 h-6 text-emerald-400" />
                        </div>

                       
                        <h3 className="text-2xl font-bold text-zinc-100 mb-2">
                          {edu.degree}
                        </h3>

                        
                        <p className="text-xl text-emerald-400 font-semibold mb-4">
                          {edu.institution}
                        </p>

                        
                        <div className={`flex flex-wrap gap-4 mb-4 text-sm text-zinc-400 ${
                          index % 2 === 0 ? '' : 'lg:justify-end'
                        }`}>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>

                        
                        <p className="text-zinc-400 leading-relaxed mb-4 text-justify">
                          {edu.description}
                        </p>

                      
                        <div className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <div 
                              key={i} 
                              className={`flex items-center gap-2 text-sm text-zinc-500 ${
                                index % 2 === 0 ? '' : 'lg:justify-end'
                              }`}
                            >
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
