'use client'
import React, { useState } from 'react'
import CourseCardContainer from "./component/Card"
import {dataCourse} from "./data/data"
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
        className={`w-40 py-3 text-base font-semibold transition-colors duration-200 ${
          active === 'certificados'
            ? 'bg-[#172e41] text-white'
            : 'bg-[#08131c] text-gray-300 hover:bg-[#11202e]'
        }`}
      >
        Certificados
      </button>
      <button
        onClick={() => handleClick('cursos')}
        className={`w-40 py-3 text-base font-semibold transition-colors duration-200 ${
          active === 'cursos'
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
  console.log('CertificatesAndCourses component rendered', dataCourse)
  const [selected, setSelected] = useState('certificados')

  return (
    <section className="py-16 text-white max-w-6xl mx-auto px-6">
      <div className="flex justify-center mb-10">
        <RenderToggle onSelect={setSelected} />
      </div>

      <div>
        {selected === 'certificados' ? (
          <div>
            <h3 className="text-2xl font-bold mb-4">Certificados destacados</h3>
            <p className="text-gray-400">Aquí puedes mostrar tus certificados de participación o logros.</p>
          </div>
        ) : (
          <div>
            <h3 className="text-2xl font-bold mb-4">Cursos realizados</h3>
            <CourseCardContainer courses={dataCourse}  />
          </div>
        )}
      </div>
    </section>
  )
}

export default CertificatesAndCourses
