import { useState } from 'react'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'

// Create a free form at https://formspree.io (2 minutes), then replace
// YOUR_FORM_ID below with the ID they give you. Until then the form will
// show a friendly error instead of silently pretending to send.
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'

const steps = [
  { title: 'Enquire', desc: "Share your child's details and the grade you're applying for." },
  { title: 'Assess', desc: 'A short interaction to understand fit, for both family and school.' },
  { title: 'Enroll', desc: "Complete registration and secure your child's place at KIS." },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-widest text-brass mb-4">
          Admissions 2026&ndash;27
        </p>
        <h2 className="font-display text-4xl leading-tight max-w-xl mb-16">
          Seats are limited. Enquiries are open.
        </h2>

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

        <div className="grid md:grid-cols-2 gap-16">

          {/* Left side - contact info with icons */}
          <div className="text-ink/70 text-sm">
            <p className="font-display text-xl text-ink mb-6">Krishna International School</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-brass" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink/50 mb-1">Address</p>
                  <p>Delhi G.T. Road, Aligarh &ndash; 202001 (U.P.) India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-brass" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink/50 mb-1">Phone</p>
                  <p>+91 983-70-50000</p>
                  <p>+91 735-10-50000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brass/10 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-brass" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-ink/50 mb-1">Email</p>
                  <p>info@kisaligarh.com</p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8 rounded-2xl overflow-hidden border border-ink/10 h-64">
              <iframe
                title="Krishna International School location"
                src="https://www.google.com/maps?q=Delhi+G.T.+Road,+Aligarh+-+202001,+U.P.+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

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

          {/* Right side - form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="text-xs uppercase tracking-widest text-ink/60">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full mt-2 border border-ink/20 bg-transparent px-4 py-3 focus:outline-none focus:border-brass"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="text-xs uppercase tracking-widest text-ink/60">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full mt-2 border border-ink/20 bg-transparent px-4 py-3 focus:outline-none focus:border-brass"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-xs uppercase tracking-widest text-ink/60">Message</label>
              <textarea
                id="contact-message"
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

        </div>

      </div>
    </section>
  )
}