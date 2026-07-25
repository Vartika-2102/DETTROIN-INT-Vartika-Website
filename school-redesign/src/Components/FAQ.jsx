import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

const faqs = [
  {
    q: 'What is the admission process at Krishna International School?',
    a: 'Admissions follow a simple three-step process: Enquire with your child\'s details and grade, Assess through a short interaction with the school, and Enroll by completing registration. You can start by filling the enquiry form in our Contact section.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Fee details vary by grade and are shared directly with families during the enquiry process. Please contact our admissions office for the current fee structure.',
  },
  {
    q: 'What are the school timings?',
    a: 'The school operates Monday to Saturday. Exact timings vary slightly by grade level — please reach out to us for grade-specific schedules.',
  },
  {
    q: 'Is transportation available?',
    a: 'Yes, the school provides bus transportation covering major routes across Aligarh. Contact the admissions office to check if your area is covered.',
  },
  {
    q: 'What extracurricular activities does the school offer?',
    a: 'Students can participate in sports, performing arts, fine arts, NCC, excursions, intra-murals, and community engagement programs — details are available in our "Why Choose Us" section.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">

        <p className="text-xs uppercase tracking-widest text-brass mb-4">
          Frequently Asked Questions
        </p>
        <h2 className="font-display text-4xl leading-tight mb-16">
          Common questions, answered.
        </h2>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <div key={item.q} className="border border-ink/10 rounded-2xl overflow-hidden">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display text-lg">{item.q}</span>
                <FaChevronDown
                  className={`text-brass flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-ink/70 text-sm leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}