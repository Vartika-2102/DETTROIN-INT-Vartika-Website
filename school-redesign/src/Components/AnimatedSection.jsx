import Reveal from './Reveal'

// Kept for backward compatibility with existing imports.
// Internally just delegates to Reveal so there's one source of truth
// for the fade/slide/zoom-in-view animation logic.
export default function AnimatedSection({ children, delay = 0 }) {
  return (
    <Reveal delay={delay} y={40}>
      {children}
    </Reveal>
  )
}