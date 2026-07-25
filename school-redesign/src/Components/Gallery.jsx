import { useState, useCallback, useEffect } from 'react'
import { FaSearchPlus } from 'react-icons/fa'
import campus from '../assets/campus.jpg'
import ncc1 from '../assets/ncc1.jpg'
import ncc2 from '../assets/ncc2.jpg'
import ncc3 from '../assets/ncc3.jpg'
import ncc4 from '../assets/ncc4.jpg'
import ncc5 from '../assets/ncc5.jpg'
import ncc6 from '../assets/ncc6.jpg'
import ncc7 from '../assets/ncc7.jpg'
import ncc8 from '../assets/ncc8.jpg'

const photos = [
  { img: campus, label: 'The Campus' },
  { img: ncc1, label: 'NCC Parade' },
  { img: ncc2, label: 'NCC Cadets' },
  { img: ncc3, label: 'NCC Drill' },
  { img: ncc4, label: 'NCC Activities' },
  { img: ncc5, label: 'NCC Camp' },
  { img: ncc6, label: 'NCC Squad' },
  { img: ncc7, label: 'NCC March Past' },
  { img: ncc8, label: 'NCC Formation' },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const showPrev = useCallback(
    (e) => {
      e.stopPropagation()
      setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
    },
    []
  )
  const showNext = useCallback(
    (e) => {
      e.stopPropagation()
      setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length))
    },
    []
  )

  useEffect(() => {
    if (activeIndex === null) return
    function onKey(e) {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') showPrev(e)
      if (e.key === 'ArrowRight') showNext(e)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [activeIndex, close, showPrev, showNext])

  return (
    <section id="gallery" className="py-24 px-6 bg-ink/[0.03]">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-widest text-brass mb-4">
          Gallery
        </p>
        <h2 className="font-display text-4xl leading-tight mb-16">
          Around the campus.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((p, i) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setActiveIndex(i)}
              className="group relative overflow-hidden text-left cursor-zoom-in rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brass"
              aria-label={`View larger image: ${p.label}`}
            >
              <img
                src={p.img}
                alt={p.label}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark overlay - stronger on hover */}
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors duration-300" />

              {/* View Image indicator - centered, fades in on hover */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-paper opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <FaSearchPlus className="text-2xl" />
                <span className="text-xs uppercase tracking-widest">View Image</span>
              </div>

              {/* Bottom label */}
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent text-paper p-4">
                <span className="font-display text-lg">{p.label}</span>
              </figcaption>
            </button>
          ))}
        </div>

      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-ink/95 flex items-center justify-center px-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={photos[activeIndex].label}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-6 right-6 text-paper text-3xl leading-none hover:text-brasslight"
            aria-label="Close image viewer"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={showPrev}
            className="absolute left-4 md:left-8 text-paper text-4xl hover:text-brasslight px-2"
            aria-label="Previous image"
          >
            &#8249;
          </button>

          <figure className="max-w-4xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[activeIndex].img}
              alt={photos[activeIndex].label}
              className="max-h-[75vh] w-auto mx-auto object-contain"
            />
            <figcaption className="text-paper text-center mt-4 font-display text-lg">
              {photos[activeIndex].label}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 md:right-8 text-paper text-4xl hover:text-brasslight px-2"
            aria-label="Next image"
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  )
}