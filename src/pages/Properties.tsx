import { SectionHeading } from '../components/SectionHeading'
import { FeaturedProject } from '../components/FeaturedProject'
import { properties } from '../data/properties'

export function Properties() {
  const project = properties[0]

  return (
    <div className="space-y-10">
      <SectionHeading
        eyebrow="Project"
        title="Shirdi Project – Sai Vatika"
        description="A single focused launch with approvals, infrastructure in place, and a complete connectivity dossier."
      />
      <FeaturedProject property={project} />
    </div>
  )
}
