

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
  position: 'Coding & Robotics Teacher (Part-time)',
  company: 'Codero Education',
  location: 'Bintaro, Indonesia',
  period: 'December 2025 – July 2026',
  type: 'Part-time',
  description:
    'Deliver interactive coding and robotics education to elementary, junior high, and senior high school students through project-based learning.',
  responsibilities: [
    'Delivered programming courses covering Python, HTML, CSS, JavaScript, Scratch, PictoBlox, and Roblox Studio.',
    'Introduced computational thinking and programming fundamentals through visual programming platforms.',
    'Taught robotics and embedded systems using Arduino, Ukit, and Astrobot, including hardware assembly and troubleshooting.',
    'Guided students in developing coding and robotics projects while strengthening problem-solving and logical thinking skills.',
    'Designed learning materials, practical exercises, and assessments aligned with the internal curriculum.',
    'Mentored students throughout project development and presentation using project-based learning methodologies.'
  ],
  technologies: [
    'Python',
    'JavaScript',
    'HTML',
    'CSS',
    'Scratch',
    'PictoBlox',
    'Arduino',
    'Roblox Studio',
    'Ukit',
    'Astrobot'
  ]
},
{
  position: 'Freelance Full-Stack Web Developer',
  company: 'Self-Employed',
  location: 'Remote',
  period: '2024 – Present',
  type: 'Freelance',
  description:
    'Develop web applications and custom software solutions for individuals, small businesses, and academic projects.',
  responsibilities: [
    'Designed and developed responsive websites ranging from company profiles to custom web-based information systems.',
    'Built full-stack applications using modern frameworks, including Laravel, Django, Flask, React, and Express.js.',
    'Designed and integrated relational databases using MySQL and PostgreSQL.',
    'Performed application testing, debugging, performance optimization, and deployment support.',
    'Collaborated with clients to gather requirements and deliver solutions tailored to business needs.',
    'Provided technical documentation and user guides to ensure smooth system adoption.'
  ],
  technologies: [
    'Laravel',
    'Flask',
    'Django',
    'React',
    'Express.js',
    'MySQL',
    'PostgreSQL',
    'Docker',
    'Git'
  ]
},
{
  position: 'Web Developer (Independent Study Program)',
  company: 'Educourse.id',
  location: 'Remote',
  period: 'September 2024 – December 2024',
  type: 'Independent Study',
  description:
    'Completed an intensive full-stack web development program focused on building education technology platforms through collaborative team projects.',
  responsibilities: [
    'Designed and developed the RPLearn learning management platform using JavaScript, Bootstrap, and Django.',
    'Implemented frontend interfaces and backend functionalities based on system requirements.',
    'Collaborated within an agile development team throughout planning, implementation, testing, and deployment.',
    'Performed application testing, debugging, and continuous feature improvements.',
    'Applied Software Development Life Cycle (SDLC) principles throughout the development process.',
    'Produced technical documentation to support system maintenance and future enhancements.'
  ],
  technologies: [
    'JavaScript',
    'Bootstrap',
    'Django',
    'HTML',
    'CSS',
    'MySQL',
    'Git'
  ]
},
{
  position: 'Human Capital Technology & Information Intern',
  company: 'Bank Syariah Indonesia (BIBIT Internship Program)',
  location: 'Jakarta, Indonesia',
  period: 'Apr 2026 – Present',
  type: 'Internship',
  description:
    'Contributing to the development and maintenance of enterprise Human Capital Information Systems supporting more than 30,690 users across Bank Syariah Indonesia through application development, database optimization, and business process automation.',
  responsibilities: [
    'Contributed to the development and maintenance of SIKAD (Sistem Informasi Kriya & Alih Daya), an enterprise Human Capital Information System serving 30,690+ users.',
    'Developed and enhanced HR modules using PHP Native, JavaScript, jQuery, HTML, CSS, and MySQL, supporting Business Trip, Payroll, Attendance, Leave, Overtime, Registration, Dashboards, and Reporting.',
    'Built HR operational features for over 11,500 outsourced employees (TAD, BIBIT, and Kriya), including Manpower Planning, Overtime Extra, employee management, and reporting.',
    'Designed and optimized MySQL database objects, including tables, indexes, stored procedures, scheduled events, and SQL queries to improve system performance and data integrity.',
    'Developed a Python-based Microsoft Teams Automation Bot for HC Connect, automating personalized HR notifications and reducing manual communication efforts.',
    'Contributed to the development of SIPP (Sistem Informasi Pendaftaran dan Penghargaan) using Spring Boot, Next.js, and Oracle Database by developing backend APIs, frontend modules, and database integration.',
    'Built internal productivity tools, including a Python-based PDF Compressor and Python + Pandas utilities for HR data processing, validation, cleansing, and migration.'
  ],
  technologies: [
    'PHP',
    'Java',
    'Spring Boot',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'jQuery',
    'Python',
    'Pandas',
    'MySQL',
    'Oracle Database',
    'HTML',
    'CSS'
  ]
}

  ];