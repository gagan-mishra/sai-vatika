import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-lg font-semibold text-ivory tracking-wide">
          Sai Vatika <span className="text-gold">Real Estate</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `transition-colors hover:text-gold ${isActive ? 'text-ivory' : 'text-slate'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="rounded-full bg-gold px-5 py-2 text-ink font-semibold shadow-glow transition hover:scale-[1.02]"
          >
            Enquire
          </Link>
        </nav>
        <button className="md:hidden text-ivory" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-panel px-4 py-4 shadow-lg sm:px-6 md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base transition-colors hover:text-gold ${isActive ? 'text-ivory' : 'text-slate'}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full bg-gold px-5 py-2 text-center font-semibold text-ink shadow-glow"
              onClick={() => setOpen(false)}
            >
              Enquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
