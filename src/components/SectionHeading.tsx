interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`space-y-3 ${alignment} max-w-3xl`}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold text-ivory sm:text-4xl">{title}</h2>
      {description && <p className="text-slate text-base">{description}</p>}
    </div>
  )
}
