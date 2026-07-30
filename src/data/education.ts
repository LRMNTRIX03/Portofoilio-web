export interface EducationData {
  degree: string,
  institution: string,
  location: string,
  period: string,
  description: string,
  achievements: string[]
}

export interface EducationProps {
  educations: EducationData[]
}

export const educations: EducationData[] = [
  {
    degree: 'Bachelor of Informatics Engineering',
    institution: 'Universitas Budi Luhur',
    location: 'Jakarta, Indonesia',
    period: 'September 2022 – January 2026',
    description:
      'Focused on Software Engineering, Full-Stack Web Development, and Artificial Intelligence. Completed a final-year thesis on an intelligent university chatbot utilizing Natural Language Processing with Multinomial Naive Bayes and K-Nearest Neighbors algorithms.',
    achievements: [
      'GPA: 3.96 / 4.00',
      'Magna Cum Laude',
      'National Journal Publication'
    ]
  },
  {
    degree: 'Independent Study – Web Developer & Education Platform',
    institution: 'Educourse.id (PT Maleo Edukasi Teknologi)',
    location: 'Jakarta, Indonesia',
    period: 'September 2024 – December 2024',
    description:
      'Completed the Kampus Merdeka Independent Study Program, specializing in full-stack web development for education platforms. Developed frontend applications using JavaScript and Bootstrap and backend services using Django while collaborating in an agile team to build RPLearn, a web-based learning management platform.',
    achievements: [
      'Capstone Project: RPLearn'
    ]
  }
];