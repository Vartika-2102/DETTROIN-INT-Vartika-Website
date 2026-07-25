const reasons = [
  { title: 'Sports & Life Skills', desc: 'Athletics, team games, and fitness woven into the weekly rhythm.' },
  { title: 'Performing Arts', desc: 'Music, dance, and theatre productions across the school year.' },
  { title: 'Fine Arts', desc: 'Studio time for drawing, painting, and craft, from first grade up.' },
  { title: 'Excursions & Trips', desc: 'Learning beyond the classroom, from local visits to longer journeys.' },
  { title: 'Intra-Murals', desc: 'House-level competitions that build spirit across the school year.' },
  { title: 'Community Engagement', desc: 'Outreach and service projects connecting students to their city.' },
]

export default function WhyChooseUs() {
  return (
    <section id="whyus" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="max-w-xl mb-16">
          <p className="text-xs uppercase tracking-widest text-brass mb-4">
            Why Choose Us
          </p>
          <h2 className="font-display text-4xl leading-tight">
            Life at KIS, beyond the syllabus.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={r.title} className="border-t border-ink pt-6">
              <span className="text-xs font-mono text-ink/40">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display text-xl mt-3">{r.title}</h3>
              <p className="text-ink/70 text-sm mt-2 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}