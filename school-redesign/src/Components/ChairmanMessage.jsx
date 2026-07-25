export default function ChairmanMessage() {
  return (
    <section id="chairman" className="py-24 px-6 bg-ink/[0.03]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-start">

        <div className="md:col-span-4">
          <p className="text-xs uppercase tracking-widest text-brass mb-4">
            Chairman&rsquo;s Message
          </p>
          <h2 className="font-display text-4xl leading-tight">
            A word from our Chairman.
          </h2>

          {/* Portrait placeholder — swap the div below for an <img> of the
              Chairman once a photograph is available. */}
          <div className="mt-8 w-32 h-32 rounded-full bg-ink text-paper flex items-center justify-center font-display text-3xl select-none">
            KIS
          </div>
          <p className="mt-4 font-display text-lg text-ink">Mr. R. K. Sharma</p>
          <p className="text-xs uppercase tracking-widest text-ink/50">
            Chairman, Krishna International School
          </p>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-5 text-ink/70">
          <p className="font-display italic text-2xl text-ink leading-snug">
            &ldquo;Every child who walks through our gates carries a story
            still being written &mdash; our task is to make sure it&rsquo;s
            written well.&rdquo;
          </p>
          <p>
            Welcome to Krishna International School. For over two decades, we
            have worked toward a single goal: giving every student the
            grounding, curiosity, and character they need to meet the world
            with confidence. Education, to us, has never been only about
            marks on a report card &mdash; it is about building thoughtful,
            capable human beings.
          </p>
          <p>
            Our teachers, our facilities, and our values all serve that one
            purpose. We invest in small class sizes so no child goes
            unnoticed, in laboratories and libraries that reward curiosity,
            and in a campus large enough for every kind of student to find
            their place &mdash; on the field, on stage, or in the
            classroom.
          </p>
          <p>
            I invite you to visit our campus, meet our faculty, and see for
            yourself why generations of families in Aligarh have trusted us
            with their children&rsquo;s formative years. We look forward to
            welcoming your family to ours.
          </p>
        </div>

      </div>
    </section>
  )
}
