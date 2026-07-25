import { useLocation, Link } from 'react-router-dom'
import { FaGooglePlay, FaApple } from 'react-icons/fa'

const socials = [
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCfAsGL009vpBCbLDxP9fQsw' },
  { label: 'Facebook', href: 'https://www.facebook.com/krishnainternationalaligarh' },
  { label: 'Instagram', href: 'https://www.instagram.com/krishnainternationalaligarh/' },
]

const navColumns = [
  {
    title: 'About',
    links: [
      { label: 'Overview', hash: 'top' },
      { label: "Chairman's Message", hash: 'chairman' },
      { label: 'Recognition & Award', hash: 'awards' },
    ],
  },
  {
    title: 'Admission',
    links: [],
  },
  {
    title: 'Academics',
    links: [
      { label: 'Academic Structure', hash: 'facilities' },
      { label: 'Subjects Taught', hash: 'facilities' },
      { label: 'Career Guidance', hash: 'facilities' },
    ],
  },
  {
    title: 'Co-Curricular',
    links: [
      { label: 'Sports & Life Skills', hash: 'whyus' },
      { label: 'Performing Arts', hash: 'whyus' },
      { label: 'Fine Arts', hash: 'whyus' },
    ],
  },
]

const apps = [
  { label: 'Android App', icon: FaGooglePlay, href: 'https://play.google.com/store/apps/details?id=com.accevate&hl=en_IN' },
  { label: 'iOS App', icon: FaApple, href: 'https://apps.apple.com/in/app/accevate-accretion-student/id1275977952' },
]

export default function Footer() {
  const location = useLocation()
  const onHome = location.pathname === '/'

  return (
    <footer className="bg-ink text-paper pt-20 pb-8 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-12 gap-12 pb-16 border-b border-paper/10">

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

            <div className="flex gap-3 mt-6">
              {socials.map((s) => (
                  <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest border border-paper/20 px-3 py-1.5 hover:border-brasslight hover:text-brasslight"
                >
                  {s.label}
                </a>
              ))}
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

          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {navColumns.map((col) => (
              <div key={col.title}>
                <p className="text-xs uppercase tracking-widest text-brasslight mb-4">
                  {col.title}
                </p>
                <ul className="space-y-2 text-sm text-paper/70">
                  {col.links.map((l) => (
                    <li key={l.label}>
                        <a
                        href={onHome ? `#${l.hash}` : `/#${l.hash}`}
                        className="hover:text-paper transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                  {col.title === 'About' && (
                    <li>
                      <Link to="/gallery" className="hover:text-paper transition-colors">
                        Gallery
                      </Link>
                    </li>
                  )}
                  {col.title === 'Admission' && (
                    <>
                      <li>
                        <Link to="/admissions" className="hover:text-paper transition-colors">
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link to="/admissions" className="hover:text-paper transition-colors">
                          Fee Structure
                        </Link>
                      </li>
                      <li>
                        <Link to="/admissions" className="hover:text-paper transition-colors">
                          Enroll
                        </Link>
                      </li>
                    </>
                  )}
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