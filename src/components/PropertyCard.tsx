import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Route, Ruler, Layers, Shield } from 'lucide-react'
import type { Property } from '../types/property'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const topConnectivity = property.connectivity.slice(0, 3)
  const utilities = property.utilities.slice(0, 2)
  const facts = [
    { icon: Ruler, label: 'Sizes', value: property.plotSizes },
    { icon: Layers, label: 'Acreage', value: property.acres },
    { icon: Shield, label: 'Land use', value: property.landUse },
  ]

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group overflow-hidden rounded-2xl border border-border/60 bg-panel shadow-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.mainImage}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald shadow">
          {property.status}
        </span>
      </div>
      <div className="space-y-5 p-6 text-slate">
        <div>
          <div className="flex items-center gap-2 text-sm text-emerald">
            <MapPin className="h-4 w-4" />
            {property.location}
          </div>
          <div className="mt-2 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-ivory">{property.title}</h3>
              <p className="text-sm text-slate">{property.tagline}</p>
            </div>
            <span className="rounded-full border border-border px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate">
              {property.category}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 text-xs text-slate">
          {utilities.map((utility) => (
            <span key={utility} className="rounded-full border border-border px-3 py-1">
              {utility}
            </span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-2xl border border-border/70 p-3 text-sm">
              <div className="flex items-center gap-2 text-slate">
                <fact.icon className="h-4 w-4 text-gold" />
                <span className="text-xs uppercase tracking-[0.3em]">{fact.label}</span>
              </div>
              <p className="mt-2 font-semibold text-ivory">{fact.value}</p>
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">Connectivity</p>
          <div className="flex flex-wrap gap-2">
            {topConnectivity.map((point) => (
              <span key={point.name} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1 text-xs text-slate">
                <Route className="h-3.5 w-3.5 text-gold" />
                {point.name} · {point.distance}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-slate">Starting at</p>
            <p className="text-2xl font-semibold text-ivory">{property.price}</p>
          </div>
          <Link
            to={`/properties/${property.id}`}
            className="rounded-full border border-gold/50 px-4 py-2 text-sm font-semibold text-ivory transition hover:bg-gold hover:text-ink"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
