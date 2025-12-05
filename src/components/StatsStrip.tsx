const stats = [
  { label: 'Acres planned & delivered', value: '160+' },
  { label: 'Corridors under coverage', value: '04' },
  { label: 'Km of internal roads', value: '52' },
  { label: 'Families already invested', value: '900+' },
]

export function StatsStrip() {
  return (
    <div className="grid gap-8 rounded-2xl border border-border/60 bg-panel px-10 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.06)] sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="space-y-2">
          <p className="text-3xl font-semibold text-ink">{stat.value}</p>
          <p className="text-xs uppercase tracking-[0.3em] text-slate">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
