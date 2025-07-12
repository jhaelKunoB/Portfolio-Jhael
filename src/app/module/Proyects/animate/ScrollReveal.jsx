'use client';
import * as motion from 'motion/react-client';

export default function ScrollReveal({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut', delay: delay}}
    >
      {children}
    </motion.div>
  );
}
