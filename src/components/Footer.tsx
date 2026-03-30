import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-gold mb-4">299 CARLING</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Ottawa&apos;s most anticipated luxury residential development. Redefining urban living in the heart of the city.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/residences', label: 'Residences' },
                { href: '/amenities', label: 'Amenities' },
                { href: '/location', label: 'Location' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/priority-access', label: 'Priority Access' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/60 text-sm hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-widest uppercase text-gold mb-4">Contact</h4>
            <address className="not-italic text-white/60 text-sm space-y-1">
              <p>299 Carling Avenue</p>
              <p>Ottawa, ON</p>
              <p>Canada</p>
            </address>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-xs tracking-wider">
          <p>&copy; {new Date().getFullYear()} 299 Carling Avenue. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
