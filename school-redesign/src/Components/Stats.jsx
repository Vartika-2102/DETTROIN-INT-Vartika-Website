import * as CountUpModule from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CountUp = CountUpModule.default?.default ?? CountUpModule.default ?? CountUpModule

const stats = [
  { end: 6000, suffix: '+', label: 'Students & Faculty' },
  { end: 60, suffix: '+', label: 'National & International Awards' },
  { end: 5, suffix: '', label: 'Acres of Green Campus' },
  { end: null, display: 'CBSE', suffix: '', label: 'Affiliated Curriculum' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="py-10 px-6 text-center md:text-left border-t border-white/10"
          >
            <p className="text-3xl font-mono text-brasslight">
              {s.end === null ? (
                s.display
              ) : inView ? (
                <CountUp end={s.end} duration={2} separator="," suffix={s.suffix} />
              ) : (
                `0${s.suffix}`
              )}
            </p>
            <p className="text-xs uppercase tracking-widest text-paper/70 mt-2">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}