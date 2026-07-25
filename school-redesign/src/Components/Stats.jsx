import * as CountUpModule from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FaUserGraduate, FaTrophy, FaTree, FaBook } from 'react-icons/fa'

const CountUp = CountUpModule.default?.default ?? CountUpModule.default ?? CountUpModule

const stats = [
  { icon: FaUserGraduate, end: 6000, suffix: '+', label: 'Students & Faculty' },
  { icon: FaTrophy, end: 60, suffix: '+', label: 'National & International Awards' },
  { icon: FaTree, end: 5, suffix: '', label: 'Acres of Green Campus' },
  { icon: FaBook, end: null, display: 'CBSE', suffix: '', label: 'Affiliated Curriculum' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section ref={ref} className="bg-ink text-paper">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => {
          const Icon = s.icon
          return (
            <div
              key={s.label}
              className={`group py-10 px-6 text-center md:text-left border-t border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/5 ${
                i !== 0 ? 'md:border-l' : ''
              }`}
            >
              <Icon className="text-2xl text-brasslight mb-3 mx-auto md:mx-0 transition-transform duration-300 group-hover:scale-110" />

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
          )
        })}
      </div>
    </section>
  )
}