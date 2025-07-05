'use client';

import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-[#040c14] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Imagen o animación */}
        <div className="flex justify-center">
           <Player
            autoplay
            loop
            src="/animations/contact.json" // ← asegúrate de colocar el archivo en public/animations
            className="w-full max-w-sm"
          />
        </div>

        {/* Contenido de contacto */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold">¡Hablemos!</h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Si tienes alguna consulta, idea o proyecto, estaré encantado de escucharte.
          </p>

          <div className="space-y-2 text-sm sm:text-base text-gray-300">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-emerald-400" />
              Jhaelkuno345@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-emerald-400" />
              +591 68842185
            </p>
          </div>

          <div className="flex space-x-5 text-xl">
            <a href="https://linkedin.com/in/tu_usuario" target="_blank" className="hover:text-blue-400">
              <FaLinkedin />
            </a>
            <a href="https://github.com/tu_usuario" target="_blank" className="hover:text-gray-300">
              <FaGithub />
            </a>
            <a href="https://instagram.com/tu_usuario" target="_blank" className="hover:text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
