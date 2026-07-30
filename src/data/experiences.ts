

  export interface ExperienceData {
    position: string;
    company: string;
    location: string;
    period: string;
    type: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
  }
  export interface ExperienceProps{
    experiences: ExperienceData[]
  }
  export const experiences : ExperienceData[] = [
    {
      position: 'Part-time Teacher Coding and Robotics',
      company: 'Codero Education',
      location: 'Bintaro, Indonesia',
      period: '2025 - Present',
      type: 'Part-time',
     description: 'Mengajar coding dan robotik kepada siswa tingkat SD, SMP, dan SMA dengan metode pembelajaran interaktif dan berbasis proyek.',
      responsibilities: [
        'Mengajar konsep dasar hingga menengah pemrograman kepada siswa SD, SMP, dan SMA',
        'Mengenalkan computational thinking melalui pemrograman visual menggunakan Scratch dan PictoBlox',
        'Membimbing siswa dalam pengembangan game dan simulasi menggunakan Roblox Studio',
        'Mengajarkan dasar elektronika dan pemrograman mikrokontroler menggunakan Arduino',
        'Melatih robotika menggunakan platform Ukit dan Astrobot, termasuk perakitan dan troubleshooting',
        'Mengajarkan dasar web development menggunakan HTML, CSS, dan JavaScript',
        'Mengajarkan dasar pemrograman Python untuk siswa SMP dan SMA',
        'Membimbing siswa dalam pembuatan mini project berbasis coding dan robotik',
        'Menyusun materi pembelajaran dan modul praktikum sesuai kurikulum internal',
        'Mengembangkan kemampuan problem solving, logika berpikir, dan kreativitas siswa melalui project-based learning',
      ],
      technologies: ['Python', 'MySQL', 'Scratch', 'HTML/CSS', 'Arduino', 'Roblox Studio', 'PictoBlox']
    },
        {
      position: 'Freelance Web Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2024 - Sekarang',
      type: 'Freelance',
      description: 'Menyediakan jasa pembuatan website dan pengembangan sistem berbasis web untuk individu, UMKM, dan mahasiswa.',
      responsibilities: [
        'Mengerjakan pembuatan website sesuai kebutuhan klien, mulai dari company profile hingga sistem berbasis web',
        'Membantu pengembangan dan penyempurnaan project mahasiswa, termasuk tugas akhir dan skripsi',
        'Mengembangkan fitur backend dan frontend menggunakan framework modern',
        'Melakukan integrasi database dan pengelolaan data menggunakan MySQL dan PostgreSQL',
        'Melakukan testing, debugging, dan optimasi performa aplikasi',
        'Memberikan dokumentasi serta panduan penggunaan sistem kepada klien',
        'Menyesuaikan desain dan fitur website berdasarkan feedback pengguna',
      ],
      technologies: ['Laravel', 'Flask', 'Django', 'React', 'Express', 'MySQL', 'PostgreSQL', 'Docker', 'Git']
    },
    {
  position: 'Web Developer (Studi Independen)',
  company: 'Educourse.id',
  location: 'Remote',
  period: '2024',
  type: 'Program Studi Independen',
  description: 'Mengikuti program pengembangan web dan platform pendidikan melalui pembelajaran intensif dan project berbasis tim.',
  responsibilities: [
    'Mengembangkan platform pembelajaran berbasis web menggunakan JavaScript, Bootstrap, dan Django',
    'Membangun fitur frontend dan backend sesuai kebutuhan sistem',
    'Berkolaborasi dalam tim untuk mengembangkan project “RPLearn”',
    'Melakukan testing, debugging, dan perbaikan sistem secara berkala',
    'Menerapkan konsep software development lifecycle dalam project',
    'Mendokumentasikan proses dan hasil pengembangan aplikasi',
  ],
  technologies: ['JavaScript', 'Bootstrap', 'Django', 'HTML', 'CSS', 'MySQL', 'Git']
},
{
  position: 'Software Engineer (Human Capital Technology & Information)',
  company: 'Bank Syariah Indonesia (BSI)',
  location: 'Jakarta, Indonesia',
  period: 'Apr 2026 – Present',
  type: 'Contract',
  description:
    'Developing and maintaining enterprise Human Capital applications that support HR operations and digital transformation initiatives within Bank Syariah Indonesia.',
  responsibilities: [
    'Developed and maintained enterprise Human Capital applications, including SIKAD and SIPP.',
    'Built frontend features using Next.js and React while developing backend services with Spring Boot and Laravel.',
    'Designed and optimized Oracle Database schemas, SQL queries, and stored procedures.',
    'Developed RESTful APIs and implemented authentication and authorization mechanisms.',
    'Built Microsoft Teams automation to streamline HR workflows and internal notifications.',
    'Collaborated with business users, QA engineers, and cross-functional teams to deliver scalable enterprise solutions.',
    'Performed debugging, testing, deployment support, and technical documentation.'
  ],
  technologies: [
    'Next.js',
    'React',
    'Spring Boot',
    'Java',
    'Laravel',
    'PHP',
    'Oracle Database',
    'SQL',
    'TypeScript',
    'JavaScript',
    'Docker',
    'Git'
  ]
}

  ];