import { Code2, Cpu,  Rocket, Server, type LucideIcon } from "lucide-react";

export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface AboutData {
  badge: string;
  title: string;
  paragraphs: string[];
  highlights: Highlight[];
}

export const aboutData: AboutData = {
  badge: "Who I Am?",
  title: "About Me",

  paragraphs: [
    "I am a Full-Stack Developer with a strong focus on backend engineering and building scalable web applications. I have experience developing enterprise Human Capital systems in the banking industry, as well as designing RESTful APIs, authentication systems, business process automation, and relational databases.",

    "My journey in software development began with a curiosity about how websites and applications work. Since then, I have continuously expanded my expertise across modern web technologies, delivering secure, maintainable, and user-focused solutions while following industry best practices.",

    "Beyond enterprise development, I also build custom web applications for individuals, startups, and small businesses, transforming ideas into reliable digital products that address real business needs.",

    "I am committed to continuous learning, staying current with emerging technologies, and continuously improving both my technical expertise and problem-solving skills to deliver high-quality software and create meaningful impact through technology.",
  ],

  highlights: [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Building modern web applications from responsive user interfaces to scalable backend services.",
    },
    {
      icon: Cpu,
      title: "Backend Engineering",
      description:
        "Designing secure RESTful APIs, authentication systems, and efficient database architectures.",
    },
    {
      icon: Server,
      title: "Mobile Development",
      description:
        "Building Mobile Apps for Efficiency and User-Friendly Experiences.",
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description:
        "Passionate about adopting new technologies and delivering reliable, maintainable software solutions.",
    },
  ],
};