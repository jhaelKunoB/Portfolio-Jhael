'use client'

import {
    FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDatabase
} from 'react-icons/fa'
import {
    SiTailwindcss, SiJavascript, SiMongodb, SiNextdotjs,
    SiDotnet, SiPostgresql, SiTypescript
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { AnimatedTooltip } from './component/AnimatedTooltip'

const skills = [
  { name: 'React', icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white text-2xl" /> },
  { name: 'React Native', icon: <TbBrandReactNative className="text-cyan-300 text-2xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 text-2xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: '.NET', icon: <SiDotnet className="text-purple-300 text-2xl" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300 text-2xl" /> },
  { name: 'SQL Server', icon: <FaDatabase className="text-red-400 text-2xl" /> },
]

const SkillsSection = () => {
    return (
        <section className="py-16 pb-20  bg-[#040c14] text-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                    TECNOLOGÍAS
                </h2>
                <p className="text-gray-400 text-sm sm:text-base">
                    Un resumen visual de las herramientas que utilizo en mi stack diario.
                </p>
            </div>

            <AnimatedTooltip skills={skills} />
        </section>
    )
}

export default SkillsSection
