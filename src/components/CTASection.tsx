import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-panel p-10 text-center shadow-2xl">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/10 via-transparent to-emerald/10 opacity-60" />
      <div className="relative space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald">Private preview</p>
        <h3 className="text-3xl font-semibold text-ivory">Reserve a plotted corridor walkthrough</h3>
        <p className="text-slate">
          Share your aspirations and we will craft an itinerary across Shirdi, Sangamner, Nashik or Pune with live connectivity
          checks and on-site experts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:scale-[1.02]"
          >
            Schedule Now
          </Link>
          <Link
            to="/properties"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ivory transition hover:border-gold/60 hover:text-gold"
          >
            Browse Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
