"use client";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiDotnet,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { AnimatedTooltip } from "./component/AnimatedTooltip";
import ScrollReveal from "./animation/ScrollReveal";
import AnimatedText from "../../../components/AnimatedText";
import {
  frontendSkills,
  backendSkills,
  databaseSkills,
} from "./component/skillsData";

const SkillsSection = () => {
  return (
    <section className="py-16 pb-36  bg-[#040c14] text-white">
      <div className="text-center mb-10">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            TECNOLOGÍAS
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <AnimatedText
            className="text-gray-400 text-sm sm:text-base"
            text="Un resumen visual de las herramientas que utilizo en mi stack diario."
          />
        </ScrollReveal>
      </div>

 <section className="max-w-6xl mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-3 divide-y divide-white/20 md:divide-y-0 md:divide-x text-white">

    {/* Frontend */}
    <ScrollReveal delay={0.3} className="flex flex-col justify-center items-center text-center px-6 py-10 ">
      <h2 className="text-2xl font-bold mb-3 md:mb-6 text-center">Frontend</h2>
      <div className="flex justify-center w-full pb-5">
        <AnimatedTooltip skills={frontendSkills} />
      </div>
    </ScrollReveal>

    {/* Backend */}
    <ScrollReveal delay={0.5} className="flex flex-col justify-center items-center text-center px-6 py-10">
      <h2 className="text-2xl font-bold mb-3 md:mb-6 text-center pt-2 md:pt-0">Backend</h2>
      <div className="flex justify-center w-full pb-5">
        <AnimatedTooltip skills={backendSkills} />
      </div>
    </ScrollReveal>

    {/* Base de Datos */}
    <ScrollReveal delay={0.7} className="flex flex-col justify-center items-center text-center px-6 py-10">
      <h2 className="text-2xl font-bold mb-3 md:mb-6 text-center pt-2 md:pt-0">Base de Datos</h2>
      <div className="flex justify-center w-full pb-5">
        <AnimatedTooltip skills={databaseSkills} />
      </div>
    </ScrollReveal>

  </div>
</section>


     
    </section>
  );
};

export default SkillsSection;
