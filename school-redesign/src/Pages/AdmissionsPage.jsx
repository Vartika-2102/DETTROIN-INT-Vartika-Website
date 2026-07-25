import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

// Create a free form at https://formspree.io (2 minutes), then replace
// YOUR_FORM_ID below with the ID they give you.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const steps = [
  { title: 'Enquire', desc: "Share your child's details and the grade you're applying for." },
  { title: 'Assess', desc: 'A short interaction to understand fit, for both family and school.' },
  { title: 'Enroll', desc: "Complete registration and secure your child's place at KIS." },
]

// Placeholder figures — replace with the school's real, current fee structure.
const feeRows = [
  { grade: 'Nursery &ndash; UKG', admission: '15,000', tuition: '4,500 / month' },
  { grade: 'Class I &ndash; V', admission: '18,000', tuition: '5,200 / month' },
  { grade: 'Class VI &ndash; VIII', admission: '20,000', tuition: '5,800 / month' },
  { grade: 'Class IX &ndash; X', admission: '22,000', tuition: '6,500 / month' },
  { grade: 'Class XI &ndash; XII', admission: '25,000', tuition: '7,200 / month' },
]

const documents = [
  "Birth certificate (original + photocopy)",
  "Previous school's transfer certificate",
  "Previous year's report card / mark sheet",
  "4 recent passport-size photographs",
  "Aadhaar card of student and parents",
  "Address proof",
]

export default function AdmissionsPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        <Link
          to="/"
          className="text-xs uppercase tracking-widest text-brass hover:text-ink inline-flex items-center gap-2 mb-10"
        >
          <span aria-hidden="true">&larr;</span> Back to Home
        </Link>

        <p className="text-xs uppercase tracking-widest text-brass mb-4">
          Admissions 2026&ndash;27
        </p>
        <h1 className="font-display text-4xl md:text-5xl leading-tight max-w-xl mb-16">
          Seats are limited. Enquiries are open.
        </h1>

        {/* Process */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {steps.map((s, i) => (
            <div key={s.title}>
              <div className="w-10 h-10 rounded-full border border-brass flex items-center justify-center text-xs font-mono text-brass mb-4">
                {i + 1}
              </div>
              <h3 className="font-display text-xl mb-2">{s.title}</h3>
              <p className="text-ink/70 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Fee structure */}
        <div className="mb-20">
          <h2 className="font-display text-2xl mb-2">Fee Structure</h2>
          <p className="text-ink/60 text-sm mb-8">
            Indicative figures in &#8377;. Contact the admissions office for the current, confirmed fee schedule.
          </p>
          <div className="overflow-x-auto border border-ink/10">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-ink text-paper">
                  <th className="p-4 font-medium">Grade</th>
                  <th className="p-4 font-medium">One-time Admission Fee</th>
                  <th className="p-4 font-medium">Tuition Fee</th>
                </tr>
              </thead>
              <tbody>
                {feeRows.map((row) => (
                  <tr key={row.grade} className="border-t border-ink/10">
                    <td className="p-4" dangerouslySetInnerHTML={{ __html: row.grade }} />
                    <td className="p-4">&#8377; {row.admission}</td>
                    <td className="p-4">&#8377; {row.tuition}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Documents */}
        <div className="mb-20">
          <h2 className="font-display text-2xl mb-6">Documents Required</h2>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-3 text-ink/70 text-sm">
            {documents.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="text-brass" aria-hidden="true">&#10003;</span>
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Enquiry form + contact info */}
        <div className="grid md:grid-cols-2 gap-16">

          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className="font-display text-2xl mb-2">Send an Enquiry</h2>
            <div>
              <label htmlFor="adm-name" className="text-xs uppercase tracking-widest text-ink/60">Full Name</label>
              <input
                id="adm-name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 border border-ink/20 bg-transparent px-4 py-3 focus:outline-none focus:border-brass"
              />
            </div>

            <div>
              <label htmlFor="adm-email" className="text-xs uppercase tracking-widest text-ink/60">Email</label>
              <input
                id="adm-email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 border border-ink/20 bg-transparent px-4 py-3 focus:outline-none focus:border-brass"
              />
            </div>

            <div>
              <label htmlFor="adm-message" className="text-xs uppercase tracking-widest text-ink/60">Message</label>
              <textarea
                id="adm-message"
                name="message"
                rows="4"
                required
                value={form.message}
                onChange={handleChange}
                className="w-full mt-2 border border-ink/20 bg-transparent px-4 py-3 focus:outline-none focus:border-brass"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-ink text-paper px-6 py-3 text-xs uppercase tracking-widest disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
            </button>

            {status === 'success' && (
              <p className="text-sm text-brass mt-3" role="status">
                Thank you, we will get back to you shortly.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-red-700 mt-3" role="alert">
                Something went wrong. Please call us directly or try again in a moment.
              </p>
            )}
          </form>

          <div className="text-ink/70 text-sm space-y-2">
            <p className="font-display text-xl text-ink mb-3">Krishna International School</p>
            <p>Delhi G.T. Road, Aligarh &ndash; 202001 (U.P.) India</p>
            <p>+91 983-70-50000</p>
            <p>+91 735-10-50000</p>
            <p>info@kisaligarh.com</p>

              <a
              href="https://www.google.com/maps/search/?api=1&query=Delhi+G.T.+Road%2C+Aligarh+-+202001+U.P.+India"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs uppercase tracking-widest text-brass hover:text-ink border-b border-brass hover:border-ink pb-1 transition-colors"
            >
              View Direction
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}