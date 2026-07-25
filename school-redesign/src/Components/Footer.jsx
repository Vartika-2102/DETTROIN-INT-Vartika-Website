import { useState } from 'react'
import { FaGooglePlay, FaApple, FaYoutube, FaFacebookF, FaInstagram } from 'react-icons/fa'

const socials = [
  { label: 'YouTube', icon: FaYoutube, href: 'https://www.youtube.com/channel/UCfAsGL009vpBCbLDxP9fQsw' },
  { label: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/krishnainternationalaligarh' },
  { label: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/krishnainternationalaligarh/' },
]

const navColumns = [
  {
    title: 'About',
    links: [
      { label: 'Overview', href: '#top' },
      { label: "Chairman's Message", href: '#chairman' },
      { label: 'Recognition & Award', href: '#awards' },
    ],
  },
  {
    title: 'Admission',
    links: [
      { label: 'Overview', href: '#contact' },
      { label: 'Fee Structure', href: '#contact' },
      { label: 'Enroll', href: '#contact' },
    ],
  },
  {
    title: 'Academics',
    links: [
      { label: 'Academic Structure', href: '#facilities' },
      { label: 'Subjects Taught', href: '#facilities' },
      { label: 'Career Guidance', href: '#facilities' },
    ],
  },
  {
    title: 'Co-Curricular',
    links: [
      { label: 'Sports & Life Skills', href: '#whyus' },
      { label: 'Performing Arts', href: '#whyus' },
      { label: 'Fine Arts', href: '#whyus' },
    ],
  },
]

const apps = [
  { label: 'Android App', icon: FaGooglePlay, href: 'https://play.google.com/store/apps/details?id=com.accevate&hl=en_IN' },
  { label: 'iOS App', icon: FaApple, href: 'https://apps.apple.com/in/app/accevate-accretion-student/id1275977952' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    // Frontend-only for now — hook this up to your newsletter service later
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-ink text-paper pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Newsletter */}
        <div className="pb-16 border-b border-paper/10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="font-display text-2xl mb-2">Stay in the loop.</p>
            <p className="text-sm text-paper/60">
              Get admission updates, events, and school news straight to your inbox.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border border-paper/20 px-4 py-3 text-sm placeholder:text-paper/40 focus:outline-none focus:border-brasslight"
            />
            <button
              type="submit"
              className="bg-brasslight text-ink px-6 py-3 text-xs uppercase tracking-widest whitespace-nowrap hover:bg-paper transition-colors"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-brasslight md:col-span-2" role="status">
              Thank you for subscribing!
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-12 gap-12 py-16 border-b border-paper/10">

          <div className="md:col-span-4">
            <p className="font-display text-lg mb-4">Krishna International School</p>
            <p className="text-sm text-paper/70">
              Delhi G.T. Road, Aligarh &ndash; 202001 (U.P.) India
            </p>
            <p className="text-sm text-paper/70 mt-4">
              +91 983-70-50000
              <br />
              info@kisaligarh.com
            </p>
            <p className="text-sm text-paper/70 mt-4">
              School Code: <span className="text-paper">KISALG</span>
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socials.map((s) => {
                const Icon = s.icon
                return (
                    <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-paper/20 flex items-center justify-center hover:border-brasslight hover:text-brasslight hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Icon className="text-sm" />
                  </a>
                )
              })}
            </div>

            <p className="text-xs uppercase tracking-widest text-brasslight mt-8 mb-3">
              Get the School App
            </p>
            <div className="flex gap-3">
              {apps.map((app) => {
                const Icon = app.icon
                return (
                    <a
                    key={app.label}
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs border border-paper/20 px-3 py-1.5 hover:border-brasslight hover:text-brasslight"
                  >
                    <Icon aria-hidden="true" />
                    {app.label}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs uppercase tracking-widest text-brasslight mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2 text-sm text-paper/70">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="hover:text-paper transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        <div className="pt-6 flex flex-wrap justify-between gap-4 text-xs text-paper/40">
          <span>&copy; {new Date().getFullYear()} Krishna International School</span>
        </div>

      </div>
    </footer>
  )
}