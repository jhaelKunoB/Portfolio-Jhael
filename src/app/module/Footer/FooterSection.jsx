"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-[#040c14] border-t border-white/10 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="text-sm text-gray-400 mb-3">
          Gracias por visitar mi portafolio ✨
        </p>
        <div className="flex space-x-5">
          <a
            href="https://github.com/jhaelKunoB"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://linkedin.com/in/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://instagram.com/tu_usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
