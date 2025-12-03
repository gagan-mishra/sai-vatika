interface FilterBarProps {
  cities: string[]
  categories: string[]
  statuses: string[]
  filters: {
    city: string
    price: string
    category: string
    status: string
  }
  onChange: (filters: FilterBarProps['filters']) => void
}

export function FilterBar({ cities, categories, statuses, filters, onChange }: FilterBarProps) {
  const update = (field: keyof FilterBarProps['filters'], value: string) => {
    onChange({ ...filters, [field]: value })
  }

  return (
    <div className="grid gap-4 rounded-2xl border border-border/60 bg-panel p-4 text-sm text-slate shadow-lg sm:grid-cols-2 lg:grid-cols-4">
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-slate">City / Region</label>
        <select
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-2 text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
          value={filters.city}
          onChange={(event) => update('city', event.target.value)}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-slate">Price</label>
        <select
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-2 text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
          value={filters.price}
          onChange={(event) => update('price', event.target.value)}
        >
          <option value="">Any budget</option>
          <option value="20">Under ₹20 Lakhs</option>
          <option value="30">₹20L - ₹30L</option>
          <option value="50">₹30L - ₹50L</option>
          <option value="80plus">₹50L+</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-slate">Category</label>
        <select
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-2 text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
          value={filters.category}
          onChange={(event) => update('category', event.target.value)}
        >
          <option value="">Any category</option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-xs uppercase tracking-widest text-slate">Status</label>
        <select
          className="w-full rounded-xl border border-border bg-night/80 px-4 py-2 text-ivory outline-none ring-1 ring-transparent focus:ring-gold/60"
          value={filters.status}
          onChange={(event) => update('status', event.target.value)}
        >
          <option value="">Any status</option>
          {statuses.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
