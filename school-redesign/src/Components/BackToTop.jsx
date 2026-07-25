import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-11 h-11 rounded-full bg-ink text-paper shadow-lg hover:bg-brass transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brass"
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  )
}
