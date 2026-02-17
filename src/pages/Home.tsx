import FloatingNavbar from '../components/FloatingNavbar';
import BackToTop from '../components/BackToTop';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <BackToTop />
      
      <main className="bg-zinc-950 text-zinc-100">
        <Hero />
        <About />
        <TechStack />
        <Education />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
