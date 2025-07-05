'use client'
import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links, onClose }) => {
  return (
    <ul className="flex flex-col py-4 items-center bg-white/10 backdrop-blur-xl border border-sky-950 rounded-2xl shadow-lg w-full max-w-md mx-auto">
      {links.map((link, index) => (
        <li
          key={index}
          className="flex flex-row items-center w-full justify-center px-6 py-1 hover:bg-sky-700/50 rounded-xl transition-colors duration-200 cursor-pointer"
          onClick={onClose}  // <-- aquí cerramos el menú al clickear cualquier li
        >
          {link.Icon && React.cloneElement(link.Icon, { size: 20, className: 'text-white mr-3' })}
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay
