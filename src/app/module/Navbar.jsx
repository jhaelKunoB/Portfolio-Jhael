'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const navLinks = [
    { href: '#about', title: 'Sobre mí' },
    { href: '#projects', title: 'Proyectos' },
    { href: '#contact', title: 'Contacto' },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
                <div className="bg-white/10 backdrop-blur-xl border border-sky-900 rounded-2xl shadow-lg px-6 py-4 flex items-center justify-between">
                   
                    <Link href="/" className="text-2xl text-white font-semibold mr-4">
                        PORFOLIO
                    </Link>

                    {/* MENÚ PRINCIPAL */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} href={link.href} title={link.title} />
                        ))}
                    </div>

                    {/* REDES SOCIALES */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="https://github.com/jhaelKunoB"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white transition"
                        >
                            <FaGithub size={20} className="transform transition-transform duration-200 hover:scale-125" />  
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kuno-bustos-jhael-8432b8324/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white   transition"
                        >
                            <FaLinkedin size={20} className="transform transition-transform duration-200 hover:scale-125" />
                        </a>
                        <a
                            href="https://www.instagram.com/kunobustosjhael/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-white transition"
                            
                        >
                            <FaInstagram size={20} className="transform transition-transform duration-200 hover:scale-125"/>
                        </a>
                    </div>



                    {/* BOTÓN MENÚ MOBILE */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="flex items-center px-3 py-2 border rounded border-white/20 text-white hover:border-white"
                        >
                            {navbarOpen ? (
                                <XMarkIcon className="h-5 w-5" />
                            ) : (
                                <Bars3Icon className="h-5 w-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* MENÚ MOBILE */}
                {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}

            </div>
        </nav>
    );
};

export default Navbar;
