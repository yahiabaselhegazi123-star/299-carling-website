'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/residences', label: 'Residences' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/location', label: 'Location' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/priority-access', label: 'Priority Access' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen ? 'bg-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        <Link href="/" className="text-gold font-serif text-xl font-semibold tracking-[0.2em] hover:text-gold-light transition-colors">
          299 CARLING
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-white/80 hover:text-gold'
                } ${link.href === '/priority-access' ? 'border border-gold px-4 py-2 text-gold hover:bg-gold hover:text-dark' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="bg-dark/95 px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block text-sm tracking-widest uppercase py-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded ${
                  pathname === link.href ? 'text-gold' : 'text-white/80 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
