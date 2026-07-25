import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import Facilities from './Components/Facilities'
import WhyChooseUs from './Components/WhyChooseUs'
import Testimonials from './Components/Testimonials'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import Reveal from './Components/Reveal'
import WhatsAppButton from './Components/WhatsAppButton'
import BackToTop from './Components/BackToTop'
import GalleryPage from './Pages/GalleryPage'
import AdmissionsPage from './Pages/AdmissionsPage'
import AboutPage from './Pages/AboutPage'
import campus from './assets/campus.jpg'
import about1 from './assets/about-1.jpg'

function AboutTeaser() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src={about1}
          alt="Students at Krishna International School"
          loading="lazy"
          className="w-full aspect-[4/3] object-cover rounded-2xl"
        />
        <div>
          <p className="text-xs uppercase tracking-widest text-brass mb-4">About the School</p>
          <h2 className="font-display text-4xl leading-tight mb-4">
            A campus built for the whole child.
          </h2>
          <p className="text-ink/70 mb-8 max-w-md">
            Read our full story, a message from our Chairman, and the
            national &amp; international recognitions we've earned.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-xs uppercase tracking-widest hover:bg-brass transition-colors"
          >
            Learn More
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function GalleryTeaser() {
  return (
    <section id="gallery" className="py-24 px-6 bg-ink/[0.03]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-xs uppercase tracking-widest text-brass mb-4">Gallery</p>
          <h2 className="font-display text-4xl leading-tight mb-4">
            Around the campus.
          </h2>
          <p className="text-ink/70 mb-8 max-w-md">
            A closer look at our campus and our NCC unit in action.
          </p>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-xs uppercase tracking-widest hover:bg-brass transition-colors"
          >
            View Full Gallery
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <img
          src={campus}
          alt="Krishna International School campus"
          loading="lazy"
          className="w-full aspect-[4/3] object-cover"
        />
      </div>
    </section>
  )
}

function AdmissionsTeaser() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs uppercase tracking-widest text-brass mb-4">
          Admissions 2026&ndash;27
        </p>
        <h2 className="font-display text-4xl leading-tight mb-6">
          Seats are limited. Enquiries are open.
        </h2>
        <p className="text-ink/70 max-w-lg mx-auto mb-8">
          View the fee structure, required documents, and send an enquiry
          directly to our admissions office.
        </p>
        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-xs uppercase tracking-widest hover:bg-brass transition-colors"
        >
          View Admissions Details
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </section>
  )
}

function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Stats />
      <Reveal><AboutTeaser /></Reveal>
      <Reveal><Facilities /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><GalleryTeaser /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><AdmissionsTeaser /></Reveal>
    </main>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<main id="main-content"><AboutPage /></main>} />
        <Route path="/gallery" element={<main id="main-content"><GalleryPage /></main>} />
        <Route path="/admissions" element={<main id="main-content"><AdmissionsPage /></main>} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  )
}

export default App