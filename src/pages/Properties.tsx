import { SectionHeading } from '../components/SectionHeading'
import { FeaturedProject } from '../components/FeaturedProject'
import { properties } from '../data/properties'

export function Properties() {
  const project = properties[0]

  return (
    <div className="space-y-16">
      <SectionHeading
        eyebrow="Project"
        title="Shirdi Project - Sai Vatika"
        description="A focused launch with approvals, infrastructure in place, and a complete connectivity dossier."
      />
      <FeaturedProject property={project} />

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Gallery"
          title="Captured views"
          description="Drone flyovers and onsite captures from the Shirdi project."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.galleryImages.map((src) => (
            <div
              key={src}
              className="overflow-hidden rounded-2xl border border-border/60 bg-panel shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            >
              <img src={src} alt="Project gallery" className="h-56 w-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
