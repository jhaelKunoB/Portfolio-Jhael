'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const AnimatedTooltip = ({ skills }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <div className="flex flex-wrap justify-center gap-6">
      {skills.map((item, idx) => (
        <div
          key={idx}
          className="relative flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: -10,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 15
                  }
                }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="absolute -top-11 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black py-2 text-xs shadow-xl max-w-xs truncate text-center px-3"
              >
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ícono */}
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 border border-white/10 backdrop-blur-md shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300">
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  )
}
