'use client'
import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import ScrollReveal from './animate/ScrollReveal'
const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 max-w-full overflow-hidden bg-[#040c14]">
      <div className="max-w-6xl mx-auto md:grid md:grid-cols-2 gap-10 items-center">

        {/* Columna izquierda: título arriba, imagen abajo */}
        <div className="flex flex-col items-center text-center">
          {/* Título */}
          <ScrollReveal delay={0.4}>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 select-none">
              SOBRE MÍ
            </h2>
          </ScrollReveal>


          {/* Imagen circular */}
          <ScrollReveal delay={0.5}>
            <Image
              src="/images/image.png"
              alt="Foto de perfil"
              width={350}
              height={350}
              className="rounded-full object-cover w-64 h-64 md:w-[350px] md:h-[350px]"
              priority
            />

          </ScrollReveal>

        </div>

        {/* Contenido texto + redes sociales */}
        <ScrollReveal delay={0.6} className="md:mt-0 mt-6">

          <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 text-white shadow-xl max-w-full overflow-hidden mt-6 md:mt-0">
            <div className="absolute top-[-3rem] right-[-3rem] w-56 h-56 bg-blue-500 rounded-full opacity-20 blur-3xl pointer-events-none z-0" />

            <p className="relative text-base md:text-lg leading-relaxed text-white/90 text-justify z-10">
              Soy un apasionado del desarrollo de software con experiencia en la
              creación de aplicaciones móviles y web. Me encanta construir
              soluciones que realmente generen impacto en las personas. Disfruto
              aprender constantemente, mejorar mis habilidades y enfrentar nuevos
              retos tecnológicos.
              Fuera del mundo del código, me gusta jugar fútbol, escuchar música
              y ver películas. Creo en el equilibrio entre lo profesional y lo
              personal para mantenerme motivado, creativo y enfocado. Busco
              sumarme a proyectos donde pueda seguir creciendo y aportar con
              entusiasmo todo lo aprendido.
            </p>

            <div className="relative mt-6 flex space-x-6 z-10 justify-center md:justify-start">
              <a href="https://www.instagram.com/kunobustosjhael/" target="_blank" className="text-gray-400 hover:text-white transition" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/kuno-bustos-jhael-8432b8324/" target="_blank" className="text-gray-400 hover:text-white transition" rel="noopener noreferrer">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/jhaelKunoB" target="_blank" className="text-gray-400 hover:text-white transition" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
            </div>
          </div>


        </ScrollReveal>


      </div>


    </section>
  )
}

export default AboutSection
