import { SectionHeading } from '../components/SectionHeading'
import { ContactForm } from '../components/ContactForm'
import { Mail, MapPin, Phone } from 'lucide-react'

const contacts = [
  { icon: Phone, label: 'Phone', value: '+91 7798 221 313' },
  { icon: Mail, label: 'Email', value: 'contact@saivatika4.com' },
  { icon: MapPin, label: 'Project Location', value: 'Nagar–Manmad Highway, Shirdi, Maharashtra' },
]

export function Contact() {
  return (
    <div className="space-y-12">
      <SectionHeading
        eyebrow="Contact"
        title="Speak to our plot advisory desk"
        description="Book a private consultation or request a connectivity dossier for Shirdi, Sangamner, Nashik or Pune."
      />
      <div className="grid gap-10 lg:grid-cols-2">
        <ContactForm />
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/60 bg-panel p-6 text-slate shadow-xl">
            <h3 className="text-xl font-semibold text-ivory">Reach Us</h3>
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
          <div className="rounded-2xl border border-border/60 bg-panel p-6 text-center text-slate shadow-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-emerald">Map</p>
            <div className="mt-4 flex h-64 flex-col items-center justify-center gap-3 rounded-2xl border border-border/50 bg-panel">
              <p className="text-xs text-slate">Location: Nagar–Manmad Highway, Shirdi</p>
              <a
                href="https://maps.app.goo.gl/3DPWwn1R8QHo3spV8?g_st=iw"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-gold px-5 py-2 text-sm font-semibold text-ink shadow-glow transition hover:scale-[1.01]"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
