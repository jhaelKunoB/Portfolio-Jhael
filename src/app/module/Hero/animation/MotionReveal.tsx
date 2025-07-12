'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
}

export default function MotionReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
  yOffset = 40,
}: MotionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
