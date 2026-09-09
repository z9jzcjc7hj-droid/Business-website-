import { motion } from 'framer-motion';

// Reusable scroll fade-in-up wrapper. Wrap any section/card content with
// <Reveal> to get a consistent, tasteful entrance animation.
export default function Reveal({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
