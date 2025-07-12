'use client'
import { PointerHighlight } from "../../../components/pointer-highlight";
import React, { useRef } from 'react'
import gsap from 'gsap'
import AnimatedText from "./animation/AnimatedText";
import AnimatedTitle from "./animation/AnimatedTitle";
import MotionReveal from "./animation/MotionReveal";
const HeroSeccion = () => {
  // Dos refs, uno por cada botón
  const contactBtnRef = useRef(null)
  const downloadBtnRef = useRef(null)

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      scale: 1.1,
      duration: 0.25,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.inOut",
    });
  };

  return (
    <section className="flex items-center justify-center text-center min-h-[80vh] px-4">
      <div className="max-w-2xl w-full">


        {/* <h1 className="mb-2 text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#19335A] via-[#4A78A4] to-[#8FC8EB]">
          Jhael Kuno Bustos
        </h1> */}

        <AnimatedTitle text={'Jhael Kuno Bustos'} className="mb-2 text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#19335A] via-[#4A78A4] to-[#8FC8EB]" />

        <MotionReveal className="my-4 inline-block relative" yOffset={20}>
          <PointerHighlight
            rectangleClassName=" rounded-lg p-[2px] border-2 border-sky-900"
            pointerClassName="text-sky-900"
            containerClassName="inline-block"
          >
            <span className="block  rounded-lg px-3 py-2 text-xl lg:text-2xl font-semibold text-transparent bg-clip-text text-white relative z-10">
              Ingeniero en Sistemas
            </span>
          </PointerHighlight>
        </MotionReveal>



        <MotionReveal className="mt-4 mb-8" yOffset={20}>
          <AnimatedText text={'Estoy construyendo mi camino en el mundo del desarrollo. Cada proyecto aquí representa un paso más en mi aprendizaje y una muestra de lo que disfruto hacer: crear soluciones funcionales y creativas.'} />
        </MotionReveal>




        <MotionReveal yOffset={20} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            onMouseEnter={() => handleMouseEnter(contactBtnRef)}
            onMouseLeave={() => handleMouseLeave(contactBtnRef)}
            ref={contactBtnRef}
            className="px-6 py-3 rounded-full text-white bg-white/10 hover:bg-white/20 border border-white/10 shadow-md backdrop-blur transition-all w-full sm:w-auto"
          >
            Contáctame
          </a>

          <a
            href="/Jhael-Kuno-CV.pdf"
            download
            ref={downloadBtnRef}
            onMouseEnter={() => handleMouseEnter(downloadBtnRef)}
            onMouseLeave={() => handleMouseLeave(downloadBtnRef)}
            className="px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/10 hover:text-white shadow-md backdrop-blur transition-all w-full sm:w-auto"
          >
            Descargar CV
          </a>
        </MotionReveal>

      </div>
    </section>
  )
}

export default HeroSeccion
