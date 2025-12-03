import type { Property } from '../types/property'
import { PropertyCard } from './PropertyCard'

interface PropertyGridProps {
  properties: Property[]
  emptyMessage?: string
}

export function PropertyGrid({ properties, emptyMessage = 'No properties match the selection.' }: PropertyGridProps) {
  if (properties.length === 0) {
    return <p className="rounded-2xl border border-border/60 bg-panel px-6 py-10 text-center text-slate">{emptyMessage}</p>
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  )
}
