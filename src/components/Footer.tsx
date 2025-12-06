import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-panel">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="text-lg font-semibold text-ivory">Sai Vatika</p>
          <p className="text-sm text-slate">
            Crafting Landmark - focus on delivering legally clear and strategically located land options suitable for both home-building and future value appreciation .
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate">Quick Links</p>
          <div className="flex flex-col gap-2 text-sm text-slate">
            <Link to="/" className="hover:text-gold">
              Home
            </Link>
            <Link to="/properties" className="hover:text-gold">
              Properties
            </Link>
            <Link to="/about" className="hover:text-gold">
              About
            </Link>
            <Link to="/contact" className="hover:text-gold">
              Contact
            </Link>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate">Contact</p>
          <div className="space-y-3 text-sm text-slate">
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold" />
              +91 7798 221 313
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold" />
              contact@saivatika4.in
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-gold" />
              Nagar-Manmad Highway, Shirdi, Maharashtra
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate">Availability</p>
          <p className="text-sm text-slate">Always reachable — drop us a note anytime.</p>
        </div>
      </div>
      <div className="border-t border-border/40 py-6 text-center text-xs text-slate">
        © {new Date().getFullYear()} Sai Vatika. Crafted with intent.
      </div>
    </footer>
  )
}
