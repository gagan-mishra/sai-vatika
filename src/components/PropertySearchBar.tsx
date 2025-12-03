import { useState } from 'react'
import { Search } from 'lucide-react'

export interface PropertySearchValues {
  city: string
  budget: string
  category: string
}

interface PropertySearchBarProps {
  cities: string[]
  categories: string[]
  onSearch: (values: PropertySearchValues) => void
}

export function PropertySearchBar({ cities, categories, onSearch }: PropertySearchBarProps) {
  const [filters, setFilters] = useState<PropertySearchValues>({
    city: '',
    budget: '',
    category: '',
  })

  const update = (field: keyof PropertySearchValues, value: string) => {
    const next = { ...filters, [field]: value }
    setFilters(next)
    onSearch(next)
  }

  return (
    <div className="grid gap-4 rounded-2xl border border-border/60 bg-panel p-4 text-slate shadow-xl sm:grid-cols-3">
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-slate">City / Region</label>
        <select
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
          value={filters.city}
          onChange={(event) => update('city', event.target.value)}
        >
          <option value="">Any</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-slate">Budget</label>
        <select
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
          value={filters.budget}
          onChange={(event) => update('budget', event.target.value)}
        >
          <option value="">Any</option>
          <option value="20">Under ₹20 Lakhs</option>
          <option value="30">₹20L - ₹30L</option>
          <option value="50">₹30L - ₹50L</option>
          <option value="80plus">₹50L+</option>
        </select>
      </div>
      <div className="space-y-2 sm:col-span-1">
        <label className="text-xs uppercase tracking-widest text-slate">Use Case</label>
        <div className="flex gap-2">
          <select
            className="w-full rounded-xl border border-border bg-night/80 px-4 py-3 text-sm text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
            value={filters.category}
            onChange={(event) => update('category', event.target.value)}
          >
            <option value="">Any</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <button
            className="hidden rounded-xl bg-gold px-4 text-ink shadow-glow transition hover:shadow-gold/40 sm:inline-flex sm:items-center sm:justify-center"
            onClick={() => onSearch(filters)}
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
