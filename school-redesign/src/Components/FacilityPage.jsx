import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

export default function FacilityPage({ number, title, heroImage, intro, highlights, images }) {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brass hover:text-ink mb-10 transition-colors"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        <p className="text-xs font-mono text-brass mb-4">{number}</p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight mb-8">
          {title}
        </h1>

        <div className="rounded-2xl overflow-hidden h-72 md:h-96 mb-10">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
        </div>

        <p className="text-ink/70 leading-relaxed mb-12 max-w-2xl">
          {intro}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {highlights.map((h) => (
            <div key={h.title} className="border border-ink/10 rounded-2xl p-6">
              <h3 className="font-display text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-ink/60">{h.desc}</p>
            </div>
          ))}
        </div>

        {images && images.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${title} ${i + 1}`}
                className="rounded-2xl h-56 w-full object-cover"
              />
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link
            to="/#contact"
            className="inline-block bg-ink text-paper px-8 py-3 text-xs uppercase tracking-widest"
          >
            Enquire About Admission
          </Link>
        </div>

      </div>
    </div>
  )
}