import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-paper">
      <p className="text-xs uppercase tracking-widest text-brass mb-4">
        Error 404
      </p>
      <h1 className="font-display text-5xl md:text-7xl leading-tight mb-6">
        Page not found.
      </h1>
      <p className="max-w-md text-ink/70 mb-8">
        The page you're looking for doesn't exist or may have been moved.
        Let's get you back on track.
      </p>
      <Link
        to="/"
        className="inline-block bg-ink text-paper px-6 py-3 text-xs uppercase tracking-widest"
      >
        Back to Home
      </Link>
    </section>
  )
}