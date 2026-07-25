const facilities = [
  {
    n: '01',
    title: 'Academic Structure',
    desc: 'A staged curriculum from the early years through senior school, aligned to CBSE benchmarks at every level.',
  },
  {
    n: '02',
    title: 'Science Laboratories',
    desc: 'Fully equipped physics, chemistry and biology labs where every concept gets a hands-on demonstration.',
  },
  {
    n: '03',
    title: 'Library',
    desc: 'A full reference and digital collection, open through the school day for independent reading and research.',
  },
  {
    n: '04',
    title: 'Career Guidance',
    desc: 'Structured guidance from middle school onward, preparing students for the choices ahead of them.',
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

        <div className="grid md:grid-cols-2 gap-px bg-ink/10">
          {facilities.map((f) => (
            <div key={f.n} className="bg-paper p-8">
              <span className="text-xs font-mono text-brass">{f.n}</span>
              <h3 className="font-display text-2xl mt-3">{f.title}</h3>
              <p className="text-ink/70 text-sm mt-2 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}