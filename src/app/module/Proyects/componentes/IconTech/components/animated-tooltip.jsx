"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const AnimatedTooltip = ({ techs }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap gap-2">
      {techs.map((item, idx) => (
        <div
          key={idx}
          className="relative flex items-center justify-center"
          onMouseEnter={() => setHoveredIndex(item.title)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.title && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className="absolute -top-11 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black py-2 text-xs shadow-xl max-w-xs truncate text-center px-3"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.title}
                </div>
               
              </motion.div>
            )}
          </AnimatePresence>

          <img
            src={item.src}
            alt={item.alt}
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-sky-900 object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};
