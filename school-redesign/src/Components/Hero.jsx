import Reveal from './Reveal'

export default function Hero() {
  return (
    <section
      id="top"
      className="pt-40 pb-28 px-6 bg-gradient-to-b from-[#faf7ef] via-[#fdfcf8] to-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <Reveal y={36}>
          <p className="text-xs uppercase tracking-[4px] text-brass mb-4">
            CBSE Affiliated • Aligarh, Uttar Pradesh
          </p>

          <h1 className="font-display text-5xl md:text-7xl leading-tight mb-5">
            Dedicated to
            <br />
            <span className="italic text-brass">Excellence.</span>
          </h1>

          <p className="text-sm uppercase tracking-widest text-ink/60 mb-3">
            Inspiring Young Minds Since 1988
          </p>

          <p className="text-green-700 font-medium mb-6">
            Where Knowledge Meets Character & Innovation
          </p>

          <p className="max-w-lg text-ink/70 leading-8 mb-8">
            Set across five acres away from the city's noise, Krishna
            International School has spent decades shaping curious,
            self-motivated learners through academic excellence, innovation,
            leadership and holistic development.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-ink text-paper px-7 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-green-900 hover:scale-105 transition-all duration-300"
            >
              Begin Admission
            </a>

            <a
              href="#gallery"
              className="border-2 border-ink text-ink px-7 py-3 rounded-full text-xs uppercase tracking-widest hover:bg-ink hover:text-paper transition-all duration-300"
            >
              Explore Campus
            </a>
          </div>
        </Reveal>

        {/* Right Image */}
        <div className="relative flex justify-center">

          <Reveal y={24} scale={0.96} delay={0.15}>
            <img
              src="/Images/hero-school.jpg"
              alt="Krishna International School"
              className="w-full max-w-[520px] h-[480px] md:h-[540px] object-cover rounded-[30px] shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            />
          </Reveal>

          {/* Students */}
          <Reveal
            y={16}
            delay={0.4}
            className="absolute top-8 -left-8 hidden lg:flex items-center gap-3 bg-white rounded-2xl shadow-xl px-5 py-4 hover:-translate-y-2 transition-all duration-300"
          >
            <span className="text-3xl">📚</span>

            <div>
              <h3 className="font-bold text-xl text-green-800">6000+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Students
              </p>
            </div>
          </Reveal>

          {/* Awards */}
          <Reveal
            y={16}
            delay={0.55}
            className="absolute top-1/2 -right-8 hidden lg:flex items-center gap-3 bg-white rounded-2xl shadow-xl px-5 py-4 hover:-translate-y-2 transition-all duration-300"
          >
            <span className="text-3xl">🏆</span>

            <div>
              <h3 className="font-bold text-xl text-green-800">60+</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Awards
              </p>
            </div>
          </Reveal>

          {/* Campus */}
          <Reveal
            y={16}
            delay={0.7}
            className="absolute bottom-8 left-8 hidden lg:flex items-center gap-3 bg-white rounded-2xl shadow-xl px-5 py-4 hover:-translate-y-2 transition-all duration-300"
          >
            <span className="text-3xl">🌳</span>

            <div>
              <h3 className="font-bold text-xl text-green-800">5 Acres</h3>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Green Campus
              </p>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}