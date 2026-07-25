import { useRef } from 'react'
import { useCountUp } from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FaUserGraduate, FaTrophy, FaTree, FaBook } from 'react-icons/fa'

const stats = [
  { icon: FaUserGraduate, end: 6000, suffix: '+', label: 'Students & Faculty' },
  { icon: FaTrophy, end: 60, suffix: '+', label: 'National & International Awards' },
  { icon: FaTree, end: 5, suffix: '', label: 'Acres of Green Campus' },
  { icon: FaBook, end: null, display: 'CBSE', suffix: '', label: 'Affiliated Curriculum' },
]

// Uses the useCountUp hook (named export) instead of the <CountUp> default-export
// component, since the default export was resolving inconsistently across
// bundler/CJS-ESM interop setups and throwing "got: object" render errors.
function StatNumber({ end, suffix }) {
  const spanRef = useRef(null)

  useCountUp({
    ref: spanRef,
    end,
    duration: 2,
    separator: ',',
    suffix,
    start: 0,
  })

  return <span ref={spanRef}>0{suffix}</span>
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-10 text-center md:text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/40 hover:border-brasslight/40 hover:bg-white/[0.08]"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto md:mx-0 mb-5 transition-all duration-300 group-hover:bg-brasslight/20 group-hover:scale-110">
                  <Icon className="text-xl text-brasslight" aria-hidden="true" />
                </div>

                <p className="text-3xl font-mono text-brasslight">
                  {s.end === null ? (
                    s.display
                  ) : inView ? (
                    <StatNumber end={s.end} suffix={s.suffix} />
                  ) : (
                    `0${s.suffix}`
                  )}
                </p>
                <p className="text-xs uppercase tracking-widest text-paper/70 mt-3">
                  {s.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}