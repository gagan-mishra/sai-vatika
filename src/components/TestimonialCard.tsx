import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
}

export function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <div className="h-full rounded-2xl border border-border/60 bg-panel p-6 text-slate shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
      <div className="flex items-start gap-3">
        <span className="mt-1 block h-10 w-1 rounded-full bg-ink" aria-hidden />
        <Quote className="h-6 w-6 text-gold" />
      </div>
      <p className="mt-4 text-lg italic text-ink">“{quote}”</p>
      <div className="mt-6 text-sm">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-slate">{title}</p>
      </div>
    </div>
  )
}
