import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { properties } from '../data/properties'

const heroMedia = properties[0]

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-border/60 bg-hero-gradient px-6 py-16 shadow-[0_40px_120px_rgba(0,0,0,0.06)] sm:px-10 lg:px-16">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald">Sai Vatika Shirdi Project</p>
            <h1 className="text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">Crafting Landmark.</h1>
            
            <p className="text-base text-slate">
              Residential/farmhouse plotting project located near the Nagar-Manmad Highway. The project offers planned plots,
              internal roads, essential amenities, and a clear layout designed for long-term growth and investment.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/properties"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02] hover:bg-[#0F281E]"
            >
              View Properties
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-ink px-6 py-3 text-sm font-semibold text-ink transition hover:bg-[#F0F5F1] hover:border-ink"
            >
              Schedule a Visit
            </Link>
            <a
              href="/assets/sai-vatika-brochure.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02] hover:border-ink hover:bg-[#F7F7F2]"
            >
              <Download className="h-4 w-4" />
              Download Brochure
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative overflow-hidden rounded-2xl border border-border/60 bg-panel shadow-[0_30px_80px_rgba(0,0,0,0.06)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sand/40 via-transparent to-gold/15" />
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
