import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Phone', value: '+91 7798 221 313' },
  { icon: Mail, label: 'Email', value: 'contact@saivatika4.in' },
  { icon: MapPin, label: 'Project Location', value: 'Nagar-Manmad Highway, Shirdi, Maharashtra' },
]

export function Contact() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Contact"
        title="Speak to our plot advisory desk"
        description="Book a private consultation or request details for Shirdi, Sangamner, Nashik or Pune projects"
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-panel p-6 text-slate shadow-xl">
            <h3 className="text-xl font-semibold text-ink">Reach Us</h3>
            <div className="mt-4 space-y-4 text-sm">
              {contacts.map((contact) => (
                <div key={contact.label} className="flex items-center gap-3">
                  <contact.icon className="h-5 w-5 text-gold" />
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate">{contact.label}</p>
                    <p className="text-ivory">{contact.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-border/60 bg-panel p-6 text-slate shadow-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald">Map</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-panel shadow-inner">
              <iframe
                title="Sai Vatika Shirdi Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15001.266817592457!2d74.467!3d19.7445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdcb0cefa23c77d%3A0x37a52d60c54ab9d1!2sShirdi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000001"
                className="h-64 w-full border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/3DPWwn1R8QHo3spV8?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] hover:bg-[#0F281E]"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
