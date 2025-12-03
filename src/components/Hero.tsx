import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { properties } from '../data/properties'

const heroMedia = properties[0]

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-border/40 bg-hero-gradient px-6 py-16 shadow-[0_40px_120px_rgba(2,6,23,0.9)] sm:px-10 lg:px-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">Sai Vatika Shirdi Project</p>
            <h1 className="text-4xl font-semibold text-ivory sm:text-5xl lg:text-6xl">
              A single focus: temple-front plotted living with ready infrastructure.
            </h1>
            <p className="text-lg text-slate">
              Explore our Shirdi Project - legal approvals, 30-ft internal roads, utilities in place, and a connectivity
              dossier spanning highways, airport, rail, education, and healthcare anchors.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/properties"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:scale-[1.02]"
            >
              View Properties
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border/80 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-gold/60 hover:text-gold"
            >
              Schedule a Visit
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-panel shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald/5 via-transparent to-gold/10" />
          <img
            src={heroMedia.mainImage}
            alt={heroMedia.title}
            className="relative h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
      <div className="pointer-events-none absolute -right-20 top-10 hidden h-72 w-72 rounded-full bg-gold/20 blur-[140px] lg:block" />
    </section>
  )
}
