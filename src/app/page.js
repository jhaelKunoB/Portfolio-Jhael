import HeroSeccion from "./module/HeroSeccion";
import Navbar from "./module/Navbar";
import AboutSection from "./module/AboutSection";
import { BackgroundBeams } from "../components/background-beams";
import ProyectSection from "./module/Proyects/ProyectsSeccion";
import CourseSection from "./module/Course/CourseSection";
import FooterSection from "./module/Footer/FooterSection";
import ContactSection from './module/Contact/ContactSection'
import SkillSection from "./module/Skills/SkillsSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 md:px-20 lg:px-32 py-4 mt-24">
        <HeroSeccion />
        <AboutSection />
        <SkillSection />
        <ProyectSection />
        <CourseSection />
        <ContactSection />
      </div>
      <BackgroundBeams className="z-[-1]" />
      <FooterSection />
    </main>
  );
}
