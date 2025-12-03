import { useState } from 'react'
import { MapPin, Route, ShieldCheck, TreePine } from 'lucide-react'
import type { Property } from '../types/property'

interface FeaturedProjectProps {
  property: Property
  sitePlanSrc?: string
  locationMapSrc?: string
}

export function FeaturedProject({
  property,
  sitePlanSrc = '/assets/site-plan-current.png',
  locationMapSrc = '/assets/location-map.png',
}: FeaturedProjectProps) {
  const [siteSrc, setSiteSrc] = useState(property.sitePlanImage || sitePlanSrc)
  const [mapSrc, setMapSrc] = useState(property.locationMapImage || locationMapSrc)
  const connectivity = property.connectivity.slice(0, 3)
  const features = (property.features || []).slice(0, 6)
  const benefits = property.benefits || []
  const facilities = (property.nearbyFacilities || []).slice(0, 6)

  return (
    <section className="space-y-8 rounded-[32px] border border-border/60 bg-panel p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:p-12">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-emerald">
            <ShieldCheck className="h-4 w-4 text-gold" />
            Current Project
          </p>
          <h2 className="text-3xl font-semibold text-ivory">{property.title}</h2>
          <p className="text-base text-slate">{property.tagline}</p>
          <p className="inline-flex items-center gap-2 text-sm text-emerald">
            <MapPin className="h-4 w-4 text-gold" />
            {property.location}
          </p>
          <p className="text-xl font-semibold text-ink">{property.price}</p>
        </div>
        <span className="rounded-full border border-emerald/30 bg-emerald/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald">
          {property.status}
        </span>
      </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">Site plan</p>
            </div>
            <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-border/50 bg-white shadow-inner md:h-[520px]">
              <img
                src={siteSrc}
                alt="Site plan"
                className="h-full w-full object-contain"
                loading="lazy"
                onError={() => setSiteSrc(sitePlanSrc)}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <p className="text-xs uppercase tracking-[0.3em] text-slate">Location map</p>
            </div>
            <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-border/50 bg-white shadow-inner md:h-[520px]">
              <img
                src={mapSrc}
                alt="Location map"
                className="h-full w-full object-contain"
                loading="lazy"
                onError={() => setMapSrc(locationMapSrc)}
              />
            </div>
          </div>
        </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 rounded-2xl border border-border/60 bg-panel/80 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">Key features</p>
          <ul className="space-y-2 text-sm text-ivory">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-border/60 bg-panel/80 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">Investment benefits</p>
          <ul className="space-y-2 text-sm text-ivory">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 rounded-2xl border border-border/60 bg-panel/80 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate">Nearby facilities</p>
          <ul className="space-y-2 text-sm text-ivory">
            {facilities.map((facility) => (
              <li key={facility.name} className="flex items-center justify-between gap-3 rounded-xl border border-border/60 px-3 py-2">
                <span className="flex items-center gap-2">
                  <TreePine className="h-4 w-4 text-gold" />
                  {facility.name}
                </span>
                <span className="text-xs text-slate">{facility.distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-slate">Connectivity snapshot</p>
        <div className="flex flex-wrap gap-2 text-xs text-slate">
          {connectivity.map((point) => (
            <span key={point.name} className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1">
              <Route className="h-3.5 w-3.5 text-gold" />
              {point.name} • {point.distance}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
