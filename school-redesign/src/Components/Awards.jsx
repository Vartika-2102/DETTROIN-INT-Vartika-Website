import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa'

const awards = [
  {
    icon: FaTrophy,
    title: 'Best CBSE School, Aligarh Division',
    org: 'State Education Excellence Awards',
    year: '2024',
  },
  {
    icon: FaMedal,
    title: 'Excellence in NCC Training',
    org: 'Directorate General, NCC',
    year: '2023',
  },
  {
    icon: FaAward,
    title: 'Outstanding Contribution to Sports',
    org: 'Uttar Pradesh School Sports Council',
    year: '2023',
  },
  {
    icon: FaStar,
    title: 'Green Campus Recognition',
    org: 'Eco Schools India Programme',
    year: '2022',
  },
  {
    icon: FaTrophy,
    title: 'Best Infrastructure & Safety Standards',
    org: 'CBSE Regional Board',
    year: '2022',
  },
  {
    icon: FaMedal,
    title: 'State-Level Science Exhibition, 1st Place',
    org: 'UP Council of Educational Research',
    year: '2021',
  },
]

export default function Awards() {
  return (
    <section id="awards" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-widest text-brass mb-4">
              Recognition &amp; Awards
            </p>
            <h2 className="font-display text-4xl leading-tight">
              60+ awards, one standard of excellence.
            </h2>
          </div>
          <p className="text-ink/70 text-sm max-w-sm">
            A selection of the national and international recognitions
            earned by our students, faculty, and campus over the years.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
          {awards.map((a) => {
            const Icon = a.icon
            return (
              <div key={a.title} className="bg-paper p-8">
                <Icon className="text-brass text-2xl mb-4" aria-hidden="true" />
                <p className="text-xs font-mono text-ink/40 mb-2">{a.year}</p>
                <h3 className="font-display text-lg leading-snug mb-2">
                  {a.title}
                </h3>
                <p className="text-ink/60 text-sm">{a.org}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
