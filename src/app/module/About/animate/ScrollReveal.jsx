'use client'

import * as motion from 'motion/react-client'

export default function ScrollReveal({ children, duration = 0.5, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: duration, ease: 'easeInOut', delay: delay }}
      viewport={{ once: false, amount: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
