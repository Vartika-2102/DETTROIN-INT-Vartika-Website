import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Stats from './Components/Stats'
import About from './Components/About'
import ChairmanMessage from './Components/ChairmanMessage'
import Facilities from './Components/Facilities'
import WhyChooseUs from './Components/WhyChooseUs'
import Awards from './Components/Awards'
import Testimonials from './Components/Testimonials'
import Contact from './Components/Contact'
import Gallery from './Components/Gallery'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'
import Reveal from './Components/Reveal'
import WhatsAppButton from './Components/WhatsAppButton'
import BackToTop from './Components/BackToTop'
import StickyApplyButton from './Components/StickyApplyButton'

function App() {
  return (
    <div>
      <Navbar />
      <main id="main-content">
        <Reveal><Hero /></Reveal>
        <Reveal><Stats /></Reveal>
        <Reveal><About /></Reveal>
        <Reveal><ChairmanMessage /></Reveal>
        <Reveal><Facilities /></Reveal>
        <Reveal><WhyChooseUs /></Reveal>
        <Reveal><Awards /></Reveal>
        <Reveal><Testimonials /></Reveal>
        <Reveal><Gallery /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><Contact /></Reveal>
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
      <StickyApplyButton />
    </div>
  )
}

export default App