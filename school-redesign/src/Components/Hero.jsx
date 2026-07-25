export default function Hero() {
  return (
    <section id="top" className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-brass mb-4">
          CBSE Affiliated &middot; Aligarh, Uttar Pradesh
        </p>

        <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
          Dedicated to <span className="italic text-brass">excellence.</span>
        </h1>

        <p className="max-w-lg text-ink/70 mb-8">
          Set across five acres away from the city's noise, Krishna International
          School has spent decades shaping curious, self-motivated learners.
        </p>

          <a
          href="#contact"
          className="inline-block bg-ink text-paper px-6 py-3 text-xs uppercase tracking-widest"
        >
          Begin Admission
        </a>
      </div>
    </section>
  )
}