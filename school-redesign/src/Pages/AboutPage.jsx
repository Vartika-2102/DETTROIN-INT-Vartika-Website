import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa'
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import about4 from '../assets/about-4.jpg'

const awards = [
  { icon: FaTrophy, title: 'Best CBSE School, Aligarh Division', org: 'State Education Excellence Awards', year: '2024' },
  { icon: FaMedal, title: 'Excellence in NCC Training', org: 'Directorate General, NCC', year: '2023' },
  { icon: FaAward, title: 'Outstanding Contribution to Sports', org: 'Uttar Pradesh School Sports Council', year: '2023' },
  { icon: FaStar, title: 'Green Campus Recognition', org: 'Eco Schools India Programme', year: '2022' },
  { icon: FaTrophy, title: 'Best Infrastructure & Safety Standards', org: 'CBSE Regional Board', year: '2022' },
  { icon: FaMedal, title: 'State-Level Science Exhibition, 1st Place', org: 'UP Council of Educational Research', year: '2021' },
]

export default function AboutPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.hash])

  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="text-xs uppercase tracking-widest text-brass hover:text-ink inline-flex items-center gap-2 mb-10"
        >
          <span aria-hidden="true">&larr;</span> Back to Home
        </Link>

        <p className="text-xs uppercase tracking-widest text-brass mb-4">About the School</p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-16 max-w-2xl">
          A campus built for the whole child.
        </h1>

        {/* Story */}
        <div className="grid md:grid-cols-12 gap-12 mb-28">
          <div className="md:col-span-4">
            <div className="grid grid-cols-2 gap-3">
              <img src={about1} alt="Students learning at Krishna International School" loading="lazy" className="rounded-2xl object-cover h-40 w-full" />
              <img src={about2} alt="Classroom activity at Krishna International School" loading="lazy" className="rounded-2xl object-cover h-40 w-full mt-6" />
              <img src={about3} alt="Sports at Krishna International School" loading="lazy" className="rounded-2xl object-cover h-40 w-full" />
              <img src={about4} alt="Student studying at Krishna International School" loading="lazy" className="rounded-2xl object-cover h-40 w-full mt-6" />
            </div>
          </div>
          <div className="md:col-span-7 md:col-start-6 space-y-5 text-ink/70">
            <p>
              Amongst the region's most established CBSE schools, Krishna
              International sits on five acres away from Aligarh's pollution
              &mdash; an environment built for academic and co-curricular
              excellence alike. A fully equipped library, theatre, and
              science laboratories give every discipline room to grow.
            </p>
            <p>
              The school is committed to sound moral values, a scientific
              temperament, and the overall development of every student.
              Regular counselling gives young people insight into the
              competitive world ahead, alongside a healthy spirit of
              enquiry.
            </p>
            <p>
              Under the motto <span className="italic text-ink">"Dedicated to Excellence,"</span>{' '}
              the school looks beyond academics &mdash; building social
              awareness, pride in cultural heritage, and a sense of
              responsibility toward the nation.
            </p>
          </div>
        </div>

        {/* Chairman's message */}
        <div id="chairman" className="grid md:grid-cols-12 gap-12 items-start mb-28 scroll-mt-24">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-widest text-brass mb-4">
              Chairman&rsquo;s Message
            </p>
            <h2 className="font-display text-3xl leading-tight">
              A word from our Chairman.
            </h2>
            <div className="mt-8 w-32 h-32 rounded-full bg-ink text-paper flex items-center justify-center font-display text-3xl select-none">
              KIS
            </div>
            <p className="mt-4 font-display text-lg text-ink">Mr. R. K. Sharma</p>
            <p className="text-xs uppercase tracking-widest text-ink/50">
              Chairman, Krishna International School
            </p>
          </div>

          <div className="md:col-span-7 md:col-start-6 space-y-5 text-ink/70">
            <p className="font-display italic text-2xl text-ink leading-snug">
              &ldquo;Every child who walks through our gates carries a story
              still being written &mdash; our task is to make sure it&rsquo;s
              written well.&rdquo;
            </p>
            <p>
              Welcome to Krishna International School. For over two decades,
              we have worked toward a single goal: giving every student the
              grounding, curiosity, and character they need to meet the
              world with confidence. Education, to us, has never been only
              about marks on a report card &mdash; it is about building
              thoughtful, capable human beings.
            </p>
            <p>
              Our teachers, our facilities, and our values all serve that
              one purpose. We invest in small class sizes so no child goes
              unnoticed, in laboratories and libraries that reward
              curiosity, and in a campus large enough for every kind of
              student to find their place &mdash; on the field, on stage, or
              in the classroom.
            </p>
            <p>
              I invite you to visit our campus, meet our faculty, and see
              for yourself why generations of families in Aligarh have
              trusted us with their children&rsquo;s formative years. We
              look forward to welcoming your family to ours.
            </p>
          </div>
        </div>

        {/* Awards */}
        <div id="awards" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-widest text-brass mb-4">
                Recognition &amp; Awards
              </p>
              <h2 className="font-display text-3xl leading-tight">
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
                  <h3 className="font-display text-lg leading-snug mb-2">{a.title}</h3>
                  <p className="text-ink/60 text-sm">{a.org}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}