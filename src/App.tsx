import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { WhatsAppButton } from './components/WhatsAppButton'
import { Home } from './pages/Home'
import { Properties } from './pages/Properties'
import { PropertyDetails } from './pages/PropertyDetails'
import { Gallery } from './pages/Gallery'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

export function App() {
  return (
    <div className="relative min-h-screen bg-night text-ivory">
      <Navbar />
      <main className="relative mx-auto max-w-7xl px-4 pb-28 pt-32 sm:px-6 lg:px-8">
        <ScrollToTop />
        <WhatsAppButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
