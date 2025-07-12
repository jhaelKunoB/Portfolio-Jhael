'use client'

import { motion } from 'framer-motion'

interface AnimatedBlockTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedBlockText({
  text,
  className = '',
  delay = 0.1,
}: AnimatedBlockTextProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {text}
    </motion.h1>
  )
}
