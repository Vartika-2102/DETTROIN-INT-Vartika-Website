const facilities = [
  {
    n: '01',
    title: 'Academic Structure',
    desc: 'A staged curriculum from the early years through senior school, aligned to CBSE benchmarks at every level.',
    image: '/Images/facility-academics.png',
  },
  {
    n: '02',
    title: 'Science Laboratories',
    desc: 'Fully equipped physics, chemistry and biology labs where every concept gets a hands-on demonstration.',
    image: '/Images/facility-labs.png',
  },
  {
    n: '03',
    title: 'Library',
    desc: 'A full reference and digital collection, open through the school day for independent reading and research.',
    image: '/Images/facility-library.png',
  },
  {
    n: '04',
    title: 'Career Guidance',
    desc: 'Structured guidance from middle school onward, preparing students for the choices ahead of them.',
    image: '/Images/facility-guidance.png',
  },
]

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 px-6 bg-ink/[0.03]">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest text-brass mb-4">
            Academics & Facilities
          </p>
          <h2 className="font-display text-4xl leading-tight">
            Structured for curiosity, measured by outcomes.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {facilities.map((f) => (
            <div
              key={f.n}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer transition-all duration-300 hover:shadow-2xl"
            >
              {/* Background image */}
              <img
                src={f.image}
                alt={f.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10 transition-colors duration-300 group-hover:from-emerald-900/90 group-hover:via-emerald-900/40" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8 text-paper">
                <span className="text-xs font-mono text-brasslight">{f.n}</span>
                <h3 className="font-display text-2xl mt-3">{f.title}</h3>
                <p className="text-paper/80 text-sm mt-2 leading-relaxed max-w-sm">
                  {f.desc}
                </p>

                <button className="mt-5 inline-flex items-center gap-2 self-start text-xs uppercase tracking-widest border border-paper/40 px-5 py-2.5 rounded-full transition-all duration-300 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
                  Learn More
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}