import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = ['About', 'Facilities', 'Why Us', 'Awards', 'Testimonials', 'Gallery', 'Contact']

// Links that navigate to their own route (rest are in-page hash sections on Home)
const routeMap = {
  About: '/about',
  Gallery: '/gallery',
  Contact: '/admissions',
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSlug, setActiveSlug] = useState('')
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    // Slugs for the in-page sections we scrollspy on the home page.
    // Assumes each section has a matching id (e.g. id="facilities").
    const sectionSlugs = links
      .filter((l) => !routeMap[l] && l !== 'Awards')
      .map((l) => l.toLowerCase().replace(' ', ''))

    function onScroll() {
      setScrolled(window.scrollY > 8)

      if (onHome) {
        let current = ''
        for (const slug of sectionSlugs) {
          const el = document.getElementById(slug)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 120 && rect.bottom >= 120) {
              current = slug
              break
            }
          }
        }
        setActiveSlug(current)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onHome])

  function isActive(link) {
    if (routeMap[link]) return location.pathname === routeMap[link]
    if (link === 'Awards') return location.pathname === '/about' && location.hash === '#awards'
    const slug = link.toLowerCase().replace(' ', '')
    return onHome && activeSlug === slug
  }

  function linkClasses(active, extra = '') {
    return `relative text-sm uppercase tracking-widest transition-colors pb-1 ${
      active ? 'text-brass' : 'text-ink/70 hover:text-brass'
    } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-brass after:transition-all after:duration-300 ${
      active ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    } ${extra}`
  }

  function renderLink(link, onClick) {
    const slug = link.toLowerCase().replace(' ', '')
    const active = isActive(link)
    const className = linkClasses(active)

    if (link === 'About') {
      return (
        <Link key={link} to="/about" onClick={onClick} className={className}>
          {link}
        </Link>
      )
    }

    if (link === 'Awards') {
      return (
        <Link key={link} to="/about#awards" onClick={onClick} className={className}>
          {link}
        </Link>
      )
    }

    if (link === 'Gallery') {
      return (
        <Link key={link} to="/gallery" onClick={onClick} className={className}>
          {link}
        </Link>
      )
    }

    if (link === 'Contact') {
      return (
        <Link key={link} to="/admissions" onClick={onClick} className={className}>
          {link}
        </Link>
      )
    }

    const href = onHome ? `#${slug}` : `/#${slug}`

    return (
      <a key={link} href={href} onClick={onClick} className={className}>
        {link}
      </a>
    )
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled ? 'border-ink/10 shadow-md shadow-ink/10' : 'border-transparent shadow-none'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Krishna International School logo"
              className="h-10 w-auto transition-transform duration-300 ease-out group-hover:scale-110"
            />
            <span className="font-display text-lg">Krishna International</span>
          </Link>

          <nav className="hidden lg:flex gap-6 xl:gap-8">
            {links.map((link) => renderLink(link))}
          </nav>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>

        {open && (
          <div className="lg:hidden flex flex-col px-6 pb-4 bg-paper divide-y divide-ink/10 border-t border-ink/10">
            {links.map((link) => (
              <div key={link} className="py-4">
                {renderLink(link, () => setOpen(false))}
              </div>
            ))}
          </div>
        )}
      </header>
    </>
  )
}