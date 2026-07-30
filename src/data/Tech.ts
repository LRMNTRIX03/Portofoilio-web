import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiOracle,
  SiSpring,
  SiFlask,
  SiLaravel,
  SiDjango,
  SiDocker,
  SiGit,
  SiJavascript,
  SiCss3
} from 'react-icons/si';
import { type IconType } from 'react-icons';

export interface TechCategory {
    category: string;
    color: string;
    technologies: { name: string; icon: IconType }[];
  }
export interface TechProps{
  tech: TechCategory[]
}
  
export const techCategories : TechCategory[] = [
    {
      category: 'Frontend',
      color: 'emerald',
      technologies: [
        { name: 'React', icon: SiReact },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'CSS', icon: SiCss3 },
      ]
    },
    {
      category: 'Backend',
      color: 'cyan',
      technologies: [
        { name: 'Express', icon: SiExpress },
        { name: 'Spring Boot', icon:SiSpring },
        { name: 'Flask', icon: SiFlask },
        { name: 'Laravel', icon: SiLaravel },
        { name: 'Django', icon: SiDjango },
      ]
    },
    {
      category: 'Database',
      color: 'emerald',
      technologies: [
        { name: 'MySQL', icon: SiMysql },
        { name: 'PostgreSQL', icon: SiPostgresql },
        {name: 'Oracle', icon: SiOracle},
      ]
    },
    {
      category: 'DevOps & Tools',
      color: 'purple',
      technologies: [
        { name: 'Docker', icon: SiDocker },
        { name: 'Git', icon: SiGit },
      ]
    },
  ];
