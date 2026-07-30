
 export interface EducationData{
    degree: string,
    institution: string,
    location: string,
    period: string,
    description: string,
    achievements: string[]
 }

 export interface EducationProps{
    educations: EducationData[]
 }
 
 export const educations : EducationData[] = [
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