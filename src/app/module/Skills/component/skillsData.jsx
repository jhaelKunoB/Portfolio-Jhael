import {
  FaReact,
  FaNodeJs,
  FaDatabase,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTypescript,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiTailwindcss,
  SiJavascript
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'



export const frontendSkills = [
  { name: 'React', icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white text-2xl" /> },
  { name: 'React Native', icon: <TbBrandReactNative className="text-cyan-300 text-2xl" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400 text-2xl" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
   { name: 'JavaScript', icon: <SiJavascript className="text-yellow-300 text-2xl" /> },
]

export const backendSkills = [
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: '.NET', icon: <SiDotnet className="text-purple-300 text-2xl" /> },
]

export const databaseSkills = [
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-300 text-2xl" /> },
  { name: 'SQL Server', icon: <FaDatabase className="text-red-400 text-2xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-200 text-2xl" /> },
]
