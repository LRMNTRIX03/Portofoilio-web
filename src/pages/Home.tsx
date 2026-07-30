import FloatingNavbar from '../components/FloatingNavbar';
import BackToTop from '../components/BackToTop';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import hero from '../data/hero';
import { aboutData } from '../data/about';
import { techCategories } from '../data/Tech';
import {educations} from '../data/education'
import {experiences} from '../data/experiences'
import {projects} from '../data/project'
import { footerData } from '../data/footer';
export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <BackToTop />
      
      <main className="bg-zinc-950 text-zinc-100">
        <Hero hero={hero} />
        <About about={aboutData} />
        <TechStack  tech={techCategories}/>
        <Education educations={educations} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
      </main>

      <Footer footerData={footerData} />
    </>
  );
}
