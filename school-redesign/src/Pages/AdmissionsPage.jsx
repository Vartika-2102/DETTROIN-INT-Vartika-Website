import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa'
import Reveal from '../Components/Reveal'

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

// Contact info shown as cards below the enquiry form.
const contactCards = [
  {
    icon: FaMapMarkerAlt,
    label: 'Address',
    lines: ['Delhi G.T. Road, Aligarh', '\u2013 202001 (U.P.) India'],
    href: 'https://www.google.com/maps/search/?api=1&query=Delhi+G.T.+Road%2C+Aligarh+-+202001+U.P.+India',
    linkLabel: 'View Direction',
  },
  {
    icon: FaPhoneAlt,
    label: 'Phone',
    lines: ['+91 983-70-50000', '+91 735-10-50000'],
    href: 'tel:+919837050000',
    linkLabel: 'Call Now',
  },
  {
    icon: FaEnvelope,
    label: 'Email',
    lines: ['info@kisaligarh.com'],
    href: 'mailto:info@kisaligarh.com',
    linkLabel: 'Send Email',
  },
  {
    icon: FaClock,
    label: 'Office Hours',
    lines: ['Mon \u2013 Sat: 8:00 AM \u2013 3:00 PM', 'Sunday: Closed'],
  },
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

        {/* Enquiry form */}
        <Reveal y={32} className="mb-20">
          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
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
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-gradient-to-r from-ink to-brass bg-[length:200%_100%] bg-left hover:bg-right text-paper px-7 py-3 text-xs uppercase tracking-widest transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-brass/30"
            >
              {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
              {status !== 'sending' && (
                <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              )}
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
        </Reveal>

        {/* Contact info cards */}
        <Reveal y={32}>
          <h2 className="font-display text-2xl mb-8">Krishna International School</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map(({ icon: Icon, label, lines, href, linkLabel }, i) => (
              <Reveal key={label} y={24} delay={i * 0.12}>
                <div className="group h-full border border-ink/10 bg-paper px-6 py-8 transition-all duration-300 hover:border-brass hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-1">
                  <div className="w-11 h-11 rounded-full bg-ink text-brass flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-brass group-hover:text-paper">
                    <Icon aria-hidden="true" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-brass mb-3">{label}</p>
                  {lines.map((line) => (
                    <p key={line} className="text-ink/70 text-sm leading-relaxed">{line}</p>
                  ))}
                  {href && (
                    <a
                      href={href}
                      target={label === 'Address' ? '_blank' : undefined}
                      rel={label === 'Address' ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 mt-5 text-xs uppercase tracking-widest text-ink hover:text-brass border-b border-ink/30 hover:border-brass pb-1 transition-colors"
                    >
                      {linkLabel}
                      <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>


      </div>
    </div>
  )
}