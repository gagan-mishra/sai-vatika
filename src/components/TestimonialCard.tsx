import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  name: string
  title: string
}

export function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <div className="h-full rounded-2xl border border-border/50 bg-panel p-6 text-slate shadow-xl">
      <Quote className="h-8 w-8 text-gold" />
      <p className="mt-4 text-lg italic text-ivory">“{quote}”</p>
      <div className="mt-6 text-sm">
        <p className="font-semibold text-ivory">{name}</p>
        <p className="text-slate">{title}</p>
      </div>
    </div>
  )
}
