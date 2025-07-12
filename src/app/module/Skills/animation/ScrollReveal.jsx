'use client';
import * as motion from 'motion/react-client';

export default function ScrollReveal({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 1 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
