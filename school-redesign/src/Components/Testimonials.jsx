const testimonials = [
  {
    quote: 'The counselling support and small class sizes gave our daughter the confidence to speak up in class for the first time.',
    name: 'Parent, Grade 6',
  },
  {
    quote: 'Teachers here actually notice when a student is struggling, and step in before it becomes a bigger problem.',
    name: 'Parent, Grade 9',
  },
  {
    quote: 'The sports program pushed me to try things I never thought I would be good at.',
    name: 'Student, Grade 11',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-ink text-paper">
      <div className="max-w-6xl mx-auto">

        <p className="text-xs uppercase tracking-widest text-brasslight mb-4">
          What Families Say
        </p>
        <h2 className="font-display text-4xl leading-tight max-w-xl mb-16">
          Trusted by parents, remembered by students.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t) => (
            <div key={t.name}>
              <p className="text-lg font-display italic leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-widest text-paper/60">
                {t.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}