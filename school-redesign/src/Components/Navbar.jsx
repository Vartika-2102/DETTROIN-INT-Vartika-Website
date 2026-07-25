import { useState, useEffect } from 'react'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = ['About', 'Facilities', 'Why Us', 'Awards', 'Testimonials', 'Gallery', 'Contact']

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[999] focus:bg-ink focus:text-paper focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b transition-shadow ${
          scrolled ? 'border-ink/10 shadow-sm' : 'border-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

          <a href="#top" className="flex items-center gap-3">
            <img src={logo} alt="Krishna International School logo" className="h-10 w-auto" />
            <span className="font-display text-lg">Krishna International</span>
          </a>

          <nav className="hidden lg:flex gap-6 xl:gap-8">
            {links.map((link) => (
                <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '')}`}
                className="text-sm uppercase tracking-widest text-ink/70 hover:text-brass"
              >
                {link}
              </a>
            ))}
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
          <div className="lg:hidden flex flex-col gap-4 px-6 pb-6 bg-paper">
            {links.map((link) => (
                <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '')}`}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest"
              >
                {link}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  )
}
