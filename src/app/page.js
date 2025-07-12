'use client';
import HeroSeccion from "./module/Hero/HeroSeccion";
import Navbar from "./module/Navbar";
import AboutSection from "./module/About/AboutSection";
import { BackgroundBeams } from "../components/background-beams";
import ProyectSection from "./module/Proyects/ProyectsSeccion";
import EducationSection from "./module/Education/EducationSection";
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
        <EducationSection />
        <ContactSection />
      </div>
      <BackgroundBeams className="z-[-1]" />
      <FooterSection />
    </main>
  );
}
