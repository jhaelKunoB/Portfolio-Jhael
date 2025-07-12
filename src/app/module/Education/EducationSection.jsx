'use client'
import React, { useState } from 'react'
import { dataCourse } from "./data/course"
import { eventData } from "./data/event"
// Importando los datos de los cursos y certificados
import CourseSection from "./CourseSection/CourseSection"
import CertificateSection from './EventSection/EventSection'
import ScrollReveal from './animation/ScrollReveal'
const RenderToggle = ({ onSelect }) => {
  const [active, setActive] = useState('certificados')

  const handleClick = (value) => {
    setActive(value)
    onSelect(value)
  }

  return (
    <div className="inline-flex rounded-xl border border-sky-950 overflow-hidden shadow-md">
      <button
        onClick={() => handleClick('certificados')}
        className={`w-40 py-3 text-base font-semibold transition-colors duration-200 ${active === 'certificados'
          ? 'bg-[#172e41] text-white'
          : 'bg-[#08131c] text-gray-300 hover:bg-[#11202e]'
          }`}
      >
        Eventos
      </button>
      <button
        onClick={() => handleClick('cursos')}
        className={`w-40 py-3 text-base font-semibold transition-colors duration-200 ${active === 'cursos'
          ? 'bg-[#172e41] text-white'
          : 'bg-[#08131c] text-gray-300 hover:bg-[#11202e]'
          }`}
      >
        Cursos
      </button>
    </div>
  )
}

const CertificatesAndCourses = () => {
  const [selected, setSelected] = useState('certificados')

  return (
    <section className="py-16 pt-20 text-white max-w-6xl mx-auto">

      <ScrollReveal>
        <div className="relative max-w-6xl mx-auto px-2 sm:px-1 text-center">
          <h2 className="flex items-center justify-center text-4xl font-bold text-white">
            EVENTOS Y CURSOS
          </h2>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="flex justify-center my-5">
        <RenderToggle onSelect={setSelected} />
      </ScrollReveal>

      <div>
        {selected === 'certificados' ? (
          <CertificateSection events={eventData} />
        ) : (
          <CourseSection courses={dataCourse} />
        )}
      </div>
    </section>
  )
}

export default CertificatesAndCourses
