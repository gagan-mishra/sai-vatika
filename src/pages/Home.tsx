import { motion } from 'framer-motion'
import { Shield, Compass, BadgeCheck, Route } from 'lucide-react'
import { Hero } from '../components/Hero'
import { StatsStrip } from '../components/StatsStrip'
import { SectionHeading } from '../components/SectionHeading'
import { TestimonialCard } from '../components/TestimonialCard'
import { CTASection } from '../components/CTASection'
import { properties } from '../data/properties'
import { FeaturedProject } from '../components/FeaturedProject'

const testimonials = [
  {
    quote:
      'Sai Vatika gave us a corridor-by-corridor connectivity deck before we even travelled. Every plot visit in Nashik was routed around school runs and airport timings.',
    name: 'Manohar & Shreya Kulkarni',
    title: 'Parents & Entrepreneurs',
  },
  {
    quote:
      'For our Shirdi investment, the team documented shuttle schedules, temple proximity and even lease potential. The handover packet was better than most developers give.',
    name: 'Aditi N.',
    title: 'NRI Investor, Dubai',
  },
]

const features = [
  {
    icon: Route,
    title: 'Connectivity intelligence',
    description: 'Commute mapping across airports, highways, metros and schools for every plot we shortlist.',
  },
  {
    icon: Shield,
    title: 'Paperwork diligence',
    description: 'Layout approvals, title search, and infra readiness verified with independent legal partners.',
  },
  {
    icon: Compass,
    title: 'Experience tours',
    description: 'Guided site visits with live traffic updates, drone views and mobility concierge.',
  },
  {
    icon: BadgeCheck,
    title: 'Post-purchase support',
    description: 'Assistance with design & build, leasing, and compliance filings after registration.',
  },
]

const connectivitySpotlight = properties.map((property) => ({
  id: property.id,
  city: property.city,
  title: property.title,
  connectivity: property.connectivity.slice(0, 3),
}))

export function Home() {
  return (
    <div className="space-y-20">
      <Hero />

      <StatsStrip />

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Shirdi Project"
          title="Sai Meadows Enclave, Shirdi"
          description="Our flagship plotted enclave near the Nagar-Manmad Highway with approvals, ready infrastructure, and temple-town connectivity."
        />
        <FeaturedProject property={properties[0]} />
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Connectivity"
          title="Corridor snapshots at a glance"
          description="Every plot is mapped against critical anchors like airports, highways, education and healthcare so you know the commute story before you invest."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {connectivitySpotlight.map((spot) => (
            <div key={spot.id} className="rounded-2xl border border-border/60 bg-panel p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-emerald">{spot.city}</p>
                  <p className="text-lg font-semibold text-ivory">{spot.title}</p>
                </div>
                <Route className="h-8 w-8 text-gold" />
              </div>
              <div className="mt-4 space-y-3">
                {spot.connectivity.map((point) => (
                  <div key={point.name} className="flex items-center justify-between rounded-2xl border border-border/60 px-4 py-2 text-sm">
                    <div className="text-ivory">{point.name}</div>
                    <span className="text-xs font-semibold text-emerald">{point.distance}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Why choose us"
          title="Crafting bespoke journeys"
          description="We merge data-backed intelligence with the art of hospitality to create seamless acquisition experiences."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-border/50 bg-panel p-6 text-slate shadow-lg"
            >
              <feature.icon className="h-10 w-10 text-gold" />
              <h3 className="mt-4 text-xl font-semibold text-ivory">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices of our patrons"
          description="Families, founders, and investors who have partnered with Sai Vatika for their flagship addresses."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
