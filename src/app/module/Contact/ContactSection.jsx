'use client'

import dynamic from 'next/dynamic'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import ScrollReveal from './animate/ScrollReveal'
// Importa dinámicamente Lottie Player (solo en el cliente)
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
)

const ContactSection = () => {
  return (
    <section id="contact" className="bg-[#040c14] text-white py-10 pt-20 px-6">

      {/* Título */}
      <ScrollReveal>
        <div className="relative max-w-6xl mx-auto px-2 sm:px-1 text-center">
          <h2 className="flex items-center justify-center text-4xl font-bold text-white">
            CONTACTO
          </h2>
        </div>
      </ScrollReveal>


      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Imagen o animación */}
        <div className="flex justify-center">
          <ScrollReveal delay={0.3}>
            <Player
              autoplay
              loop
              src="/animations/contact.json"
              className="w-full max-w-sm"
            />
          </ScrollReveal>
        </div>

        {/* Contenido de contacto */}
        <div className="space-y-6">

          <ScrollReveal delay={0.3}>
            <h2 className="text-3xl sm:text-4xl font-bold">¡Hablemos!</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>

            <p className="text-gray-400 text-sm sm:text-base">
              Soy estudiante y estoy construyendo mi camino en el desarrollo. Si quieres conectar, colaborar o compartir ideas, estoy atento a tu mensaje.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>

            <div className="space-y-2 text-sm sm:text-base text-gray-300">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-sky-900" />
                jhaelkuno345@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-sky-900" />
                +591 68842185
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.7}>
            <div className="flex space-x-5 text-xl">

              <a href="https://github.com/jhaelKunoB" target="_blank" className="text-gray-400 hover:text-white transition">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/kuno-bustos-jhael-8432b8324/" target="_blank" className="text-gray-400 hover:text-white transition">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/kunobustosjhael/" target="_blank" className="text-gray-400 hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
