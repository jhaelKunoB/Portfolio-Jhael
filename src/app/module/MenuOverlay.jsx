'use client'
import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link, index) => (
            <li key = {index} className='flex flex-row items-center '>
                {link.Icon}
                <NavLink href={link.href} title={link.title}/>
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay