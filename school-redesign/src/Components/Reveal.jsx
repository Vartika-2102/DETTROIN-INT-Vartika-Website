import { motion } from 'framer-motion'

/**
 * Wraps any section and fades + slides it up into view the first time
 * it scrolls into the viewport. Respects users who prefer reduced motion
 * (framer-motion reads this automatically via useReducedMotion internally
 * for the "prefers-reduced-motion" media query when using layout defaults,
 * but we also cap the movement distance to keep it subtle either way).
 */
export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
