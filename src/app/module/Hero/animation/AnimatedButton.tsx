'use client'

import * as motion from 'motion/react-client'
import type { HTMLMotionProps } from 'framer-motion'
import React from 'react'

interface AnimatedButtonProps extends HTMLMotionProps<'a'> {
  children: React.ReactNode
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className = '',
  ...props
}) => {
  return (
    <motion.a
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`inline-block transition-all ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  )
}

export default AnimatedButton
