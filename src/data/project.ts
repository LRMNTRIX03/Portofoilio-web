

  import dashboard from '../assets/img/projects/dashboard.png';
  import api from '../assets/img/projects/api.png';
  import code from '../assets/img/projects/code.png';
  import layanan from '../assets/img/projects/layanan.png';
  import mawar from '../assets/img/projects/mawar.png';
  import bookshelf from '../assets/img/projects/bookshelf-api.png';
  import todolist from "../assets/img/projects/todolist.png";

  export interface ProjectData{
    title : string
    category : string
    description : string
    image : string
    technologies : string[]
    github : string
    demo : string
    featured : boolean
  }
  export interface ProjectsProps{
    projects : ProjectData[]
  }

  export const projects : ProjectData[] = [
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
      description: 'Proyek ini adalah RESTful API sederhana berbasis Laravel untuk mengelola data buku. API ini menyediakan fitur untuk menampilkan daftar buku, detail buku, menambahkan buku baru, memperbarui, serta menghapus buku.',
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
      technologies: ['Laravel', 'Blade', 'Bootstrap', 'Tailwind CSS', 'PHP', 'MySQL'],
      github: 'https://github.com/LRMNTRIX03/Web-Sistem-Penunjang-Keputusan-Metode-SMART-Untuk-Menu-Makanan-Terbaik',
      demo: '',
      featured: true
    },
       {
      title: 'Website Sistem Penunjang Keputusan Menu Makanan Terbaik dengan Metode SMART',
      category: 'Full Stack',
      description: 'Proyek ini merupakan aplikasi Sistem Pendukung Keputusan (SPK) untuk membantu menentukan menu makanan terbaik menggunakan metode SMART (Simple Multi Attribute Rating Technique). ',
      image: mawar,
      technologies: ['React', 'Flask', 'MySQL', 'Tailwind', 'Sastrawi', 'Pandas', 'Numpy'],
      github: 'https://github.com/LRMNTRIX03/Chatbot-Layanan-Kampus-Budi-Luhur-Dengan-Metode-Multinomial-Naive-Bayes-dan-K-Nearest-Neighbors',
      demo: '',
      featured: true
    },
       {
      title: 'Rest Api Bookshelf dengan Express',
      category: 'Backend',
      description: 'RESTful API untuk proses manajemen buku menggunakan Express.js dengan arsitektur modular (Service Layer Pattern). API ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) terhadap data buku.',
      image: bookshelf,
      technologies: ['Node.js', 'Express', 'Postman', 'JavaScript'],
      github: 'https://github.com/LRMNTRIX03/Backend-Bookshelf-Api',

      demo: '',
      featured: true
    },
    {
      title: 'To Do List App dengan React TS',
      category: 'Frontend',
      description: 'Aplikasi To Do List dengan React dan TypeScript yang dapat membantu mengatur tugas dan kegiatan sehari-hari.',
      image: todolist,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'lucide-react', 'vite', 'framer-motion'],
      github: 'https://github.com/LRMNTRIX03/To-Do-List-App-',

      demo: 'https://to-do-list-app-iota-blond.vercel.app/',
      featured: true
    }
  ];