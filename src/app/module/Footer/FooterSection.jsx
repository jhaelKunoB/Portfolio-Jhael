"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="border-t border-white/10 text-white py-6">
      <div className="mx-auto px-4 flex flex-col items-center">
        <p className="text-sm text-white mb-3">
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
            href="https://www.linkedin.com/in/kuno-bustos-jhael-8432b8324/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="https://www.instagram.com/kunobustosjhael/"
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
