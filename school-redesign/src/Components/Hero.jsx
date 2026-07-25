export default function Hero() {
  return (
    <section id="top" className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-xs uppercase tracking-widest text-brass mb-4">
            CBSE Affiliated &middot; Aligarh, Uttar Pradesh
          </p>

          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-4">
            Dedicated to
            <br />
            <span className="italic text-brass">Excellence.</span>
          </h1>

          <p className="text-sm uppercase tracking-widest text-ink/50 mb-6">
            Inspiring Young Minds Since 1988
          </p>

          <p className="max-w-lg text-ink/70 mb-8">
            Set across five acres away from the city's noise, Krishna International
            School has spent decades shaping curious, self-motivated learners.
          </p>

          <div className="flex flex-wrap gap-4">
              <a
              href="#contact"
              className="inline-block bg-ink text-paper px-6 py-3 text-xs uppercase tracking-widest"
            >
              Begin Admission
            </a>
              <a
              href="#virtual-tour"
              className="inline-block border border-ink text-ink px-6 py-3 text-xs uppercase tracking-widest"
            >
              Virtual Tour
            </a>
          </div>
        </div>

        {/* Right image with floating stat cards */}
        <div className="relative">
          <img
            src="/Images/hero-school.jpg"
            alt="Krishna International School campus"
            className="w-full h-[420px] md:h-[480px] object-cover object-top"
          />

          {/* Floating card - top left */}
          <div className="absolute -top-6 -left-6 bg-paper shadow-lg px-5 py-4 hidden sm:block">
            <p className="font-display text-2xl text-brass">6000+</p>
            <p className="text-xs uppercase tracking-widest text-ink/60">Students</p>
          </div>

          {/* Floating card - bottom right */}
          <div className="absolute -bottom-6 -right-6 bg-ink text-paper shadow-lg px-5 py-4">
            <p className="font-display text-2xl text-brasslight">60+</p>
            <p className="text-xs uppercase tracking-widest text-paper/70">Awards</p>
          </div>

          {/* Floating card - bottom left */}
          <div className="absolute -bottom-6 left-6 bg-paper shadow-lg px-5 py-4 hidden md:block">
            <p className="font-display text-2xl text-brass">5 Acre</p>
            <p className="text-xs uppercase tracking-widest text-ink/60">Campus</p>
          </div>
        </div>
      </div>
    </section>
  )
}