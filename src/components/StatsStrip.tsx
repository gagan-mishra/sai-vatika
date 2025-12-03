const stats = [
  { label: 'Acres planned & delivered', value: '160+' },
  { label: 'Corridors under coverage', value: '04' },
  { label: 'Km of internal roads', value: '52' },
  { label: 'Families already invested', value: '900+' },
]

export function StatsStrip() {
  return (
    <div className="grid gap-6 rounded-2xl border border-border/60 bg-panel px-6 py-8 text-center shadow-lg sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <p className="text-3xl font-semibold text-gold">{stat.value}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
