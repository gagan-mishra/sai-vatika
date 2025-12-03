import { Link } from 'react-router-dom'
import { MapPin, Route, Layers, Ruler, ShieldCheck, Sparkles } from 'lucide-react'
import type { Property } from '../types/property'

interface PropertyShowcaseProps {
  property: Property
  index: number
}

export function PropertyShowcase({ property, index }: PropertyShowcaseProps) {
  const connectivity = property.connectivity.slice(0, 3)
  const highlights = property.highlights.slice(0, 3)
  const stats = [
    { icon: Ruler, label: 'Plot sizes', value: property.plotSizes },
    { icon: Layers, label: 'Total acreage', value: property.acres },
    { icon: ShieldCheck, label: 'Land use', value: property.landUse },
  ]

  return (
    <article className="rounded-[32px] border border-border/50 bg-panel shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
      <div className="grid gap-8 p-6 lg:grid-cols-[1.1fr,1fr] lg:p-10">
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-3xl">
            <img src={property.mainImage} alt={property.title} className="h-72 w-full object-cover" loading="lazy" />
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald">
              {property.status}
            </span>
            <span className="absolute right-5 top-5 rounded-full bg-ink/80 px-4 py-1 text-xs font-semibold text-white">
              #{String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 text-xs text-slate">
            {property.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-border px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-emerald">
              <MapPin className="h-4 w-4 text-gold" />
              {property.location}
            </p>
            <div>
              <h2 className="text-3xl font-semibold text-ivory">{property.title}</h2>
              <p className="mt-1 text-base text-slate">{property.tagline}</p>
            </div>
            <p className="text-2xl font-semibold text-ink">{property.price}</p>
            {property.isFlagship && (
              <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-ink">
                <Sparkles className="h-3.5 w-3.5 text-gold" /> Current Project
              </span>
            )}
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border/70 p-4">
                <div className="flex items-center gap-2 text-slate">
                  <stat.icon className="h-4 w-4 text-gold" />
                  <span className="text-xs uppercase tracking-[0.3em]">{stat.label}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-ivory">{stat.value}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate">Highlights</p>
            <ul className="mt-3 space-y-2 text-sm text-ivory">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate">Connectivity snapshot</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate">
              {connectivity.map((point) => (
                <span key={point.name} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1">
                  <Route className="h-3.5 w-3.5 text-gold" />
                  {point.name} • {point.distance}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              to={`/properties/${property.id}`}
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:scale-[1.01]"
            >
              View details
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ivory transition hover:border-gold/60 hover:text-gold"
            >
              Talk to us
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
