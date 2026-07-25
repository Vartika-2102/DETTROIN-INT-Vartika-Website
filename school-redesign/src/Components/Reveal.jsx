import { motion } from 'framer-motion'

/**
 * Wraps any section/element and animates it into view the first time it
 * scrolls into the viewport.
 *
 * Props:
 * - y: vertical offset to slide up from (default 28). Set 0 for a pure fade.
 * - scale: optional starting scale (e.g. 0.92) for a "fade + zoom" effect.
 *          Omit for a plain fade + slide with no scaling.
 * - delay: animation delay in seconds — use incrementing values on a list
 *          of siblings (e.g. delay={i * 0.1}) to get a staggered reveal.
 */
export default function Reveal({ children, delay = 0, y = 28, scale, className = '' }) {
  const initial = { opacity: 0, y }
  const animate = { opacity: 1, y: 0 }

  if (scale !== undefined) {
    initial.scale = scale
    animate.scale = 1
  }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}