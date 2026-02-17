import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import dashboard from '../assets/img/projects/dashboard.png';
import api from '../assets/img/projects/api.png';
import code from '../assets/img/projects/code.png';
import layanan from '../assets/img/projects/layanan.png';

const Projects: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({ 
    threshold: 0.2,
    freezeOnceVisible: true 
  });

  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: 'Analisis Sentimen Metode Logistic Regression Pada Aplikasi BCA Mobile',
      category: 'Full Stack',
      description: 'Website ini adalah sistem analisis sentimen berbasis teks yang dibangun dengan Django, yang memproses data ulasan aplikasi BCA Mobile untuk mengklasifikasi sentimen secara otomatis. Proyek ini mendukung pengolahan data secara massal melalui file CSV, serta pengujian sentimen berdasarkan input kalimat manual.',
      image: dashboard,
      technologies: ['Python', 'Django', 'Scikit-learn', 'Bootstrap', 'MySQL'],
      github: 'https://github.com/LRMNTRIX03/Website-Analisis-Sentimen-Dengan-Metode-Logistic-Regression-Pada-Aplikasi-BCA-Mobile',
      demo: '',
      featured: true
    },
     {
      title: 'Book Rest API with Laravel',
      category: 'Backend',
      description: 'Proyek ini adalah RESTful API sederhana berbasis Laravel untuk mengelola data buku.API ini menyediakan fitur untuk menampilkan daftar buku, detail buku, menambahkan buku baru, memperbarui, serta menghapus buku.',
      image: api,
      technologies: ['PHP', 'Laravel', 'MySQL', 'Postman'],
      github: 'https://github.com/LRMNTRIX03/Simple-Library-Books-Laravel',
      demo: '',
      featured: true
    },
        {
      title: 'Backend Gemini API Integration',
      category: 'Backend',
      description: 'Integration-Gemini-AI-API adalah program backend yang dirancang untuk mengintegrasikan teknologi Gemini AI dalam pengolahan berbagai jenis data, seperti teks, gambar, audio, dan dokumen.',
      image: code,
      technologies: ['Node.js', 'Express', 'OpenAI Gemini API'],
      github: 'https://github.com/LRMNTRIX03/Integration-Gemini-AI-API',
      demo: '',
      featured: false
    },
    {
      title: 'Chatbot dengan Metode Multinomial Naive Bayes dan KNN dengan Ekstraksi Fitur TF-IDF Intent Klasifikasi',
      category: 'Full Stack',
      description: 'Project ini merupakan implementasi chatbot layanan kampus berbasis intent classification yang dikembangkan untuk membantu menjawab pertanyaan seputar informasi akademik dan layanan mahasiswa di Universitas Budi Luhur. Project ini menggunakan metode Multinomial Naive Bayes dan KNN untuk klasifikasi intent, dengan ekstraksi fitur TF-IDF untuk meningkatkan akurasi dalam memahami pertanyaan pengguna yang dibuat dari awal tanpa library.',
      image: layanan,
      technologies: ['React', 'Flask', 'MySQL', 'Tailwind', 'Sastrawi', 'Pandas', 'Numpy'],
      github: 'https://github.com/LRMNTRIX03/Chatbot-Layanan-Kampus-Budi-Luhur-Dengan-Metode-Multinomial-Naive-Bayes-dan-K-Nearest-Neighbors',
      demo: '',
      featured: true
    }
  ];
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section 
      id="projects" 
      ref={elementRef}
      className="py-32 bg-zinc-950 relative overflow-hidden"
    >
     
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
      
          <div 
            className={`text-center mb-12 transition-all duration-1000 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-zinc-100 mt-4 mb-6">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          </div>

         
          <div 
            className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-200 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  isIntersecting 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index % 6) * 100}ms` }}
              >
                <div className="relative h-full bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
                 
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-full flex items-center gap-1.5 shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      Featured
                    </div>
                  )}

              
                  <div className="relative h-48 overflow-hidden bg-zinc-800">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
                  </div>

                 
                  <div className="p-6">
                    {/* Category */}
                    <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-semibold mb-3">
                      {project.category}
                    </span>

               
                    <h3 className="text-xl font-bold text-zinc-100 mb-2 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>

                 
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 text-justify">
                      {project.description}
                    </p>

                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-xs text-zinc-400">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

               
                    <div className="flex gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 rounded-xl text-zinc-300 text-sm font-medium transition-all duration-300 group/btn"
                      >
                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                     <a
                  href={project.demo || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-medium transition-all duration-300 shadow-lg
                    ${
                      project.demo
                        ? "bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20 hover:shadow-emerald-500/40"
                        : "bg-gray-400 cursor-not-allowed"
                    }
                  `}
                  onClick={(e) => !project.demo && e.preventDefault()}
                >
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='flex items-center justify-center w-full'>
              <p className='text-2xl font-semibold mt-2'>Still Explore More!</p>
          </div>

        
          <div 
            className={`text-center mt-16 transition-all duration-1000 delay-700 ${
              isIntersecting 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            <a
              href="https://github.com/LRMNTRIX03/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-emerald-500/50 rounded-xl text-zinc-100 font-medium transition-all duration-300 hover:-translate-y-1"
            >
              <Github className="w-5 h-5" />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
