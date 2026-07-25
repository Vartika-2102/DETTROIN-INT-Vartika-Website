import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import about4 from '../assets/about-4.jpg'
import { FaMedal, FaEye, FaBullseye } from 'react-icons/fa'

const highlights = [
  {
    icon: FaMedal,
    title: 'Experience',
    text: 'Over three decades of shaping curious, self-motivated learners in Aligarh.',
  },
  {
    icon: FaEye,
    title: 'Vision',
    text: 'To be a center of academic excellence rooted in strong moral values.',
  },
  {
    icon: FaBullseye,
    title: 'Mission',
    text: 'Nurturing every child through holistic, values-driven, quality education.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-brass mb-4">
            About the school
          </p>
          <h2 className="font-display text-4xl leading-tight mb-8">
            A campus built for the whole child.
          </h2>

          <div className="grid grid-cols-2 gap-3">
            <div className="overflow-hidden rounded-2xl h-40">
              <img
                src={about1}
                alt="Students learning at Krishna International School"
                loading="lazy"
                className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-40 mt-6">
              <img
                src={about2}
                alt="Classroom activity at Krishna International School"
                loading="lazy"
                className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-40">
              <img
                src={about3}
                alt="Sports at Krishna International School"
                loading="lazy"
                className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="overflow-hidden rounded-2xl h-40 mt-6">
              <img
                src={about4}
                alt="Student studying at Krishna International School"
                loading="lazy"
                className="object-cover h-full w-full transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-5 text-ink/70">
          <p>
            Amongst the region's most established CBSE schools, Krishna
            International sits on five acres away from Aligarh's pollution
            &mdash; an environment built for academic and co-curricular
            excellence alike. A fully equipped library, theatre, and science
            laboratories give every discipline room to grow.
          </p>
          <p>
            The school is committed to sound moral values, a scientific
            temperament, and the overall development of every student.
            Regular counselling gives young people insight into the
            competitive world ahead, alongside a healthy spirit of enquiry.
          </p>
          <p>
            Under the motto <span className="italic text-ink">"Dedicated to Excellence,"</span>{' '}
            the school looks beyond academics &mdash; building social
            awareness, pride in cultural heritage, and a sense of
            responsibility toward the nation.
          </p>

          <div className="grid sm:grid-cols-3 gap-5 pt-6">
            {highlights.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border border-ink/10 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <Icon className="text-xl text-brass mb-3" />
                <h3 className="font-display text-lg mb-2">{title}</h3>
                <p className="text-sm text-ink/60">{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}