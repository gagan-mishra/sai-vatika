import { Link } from 'react-router-dom'

export function CTASection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-border/60 bg-panel p-12 text-center shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/12 via-transparent to-ink/10 opacity-80" />
      <div className="relative space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald">Private preview</p>
        <h3 className="text-3xl font-semibold text-ink">Reserve a plotted corridor walkthrough</h3>
        <p className="text-slate">
          Share your aspirations and we will craft an itinerary across Shirdi, Sangamner, Nashik or Pune with live connectivity
          checks and on-site experts.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:bg-[#0F281E]"
          >
            Schedule Now
          </Link>
          <Link
            to="/properties"
            className="rounded-full border border-ink/60 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:text-ink"
          >
            Browse Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
