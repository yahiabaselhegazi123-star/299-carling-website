import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import HomeClient from './HomeClient'

export const metadata: Metadata = {
  title: '299 Carling Avenue – Ottawa\'s Premier Residential Address',
  description: 'Experience luxury urban living at 299 Carling Avenue, Ottawa. Register for priority access to Ottawa\'s most anticipated residential development.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-[#0d1b2a]" />
        <div className="absolute inset-0">
          <Image
            src="/images/rendering-1.svg"
            alt="299 Carling Avenue architectural rendering"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Ottawa, Ontario</p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-tight">
            299 CARLING<br />AVENUE
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light tracking-wider mb-10">
            A New Standard in Urban Living
          </p>
          <Link
            href="/priority-access"
            className="inline-block border border-gold text-gold px-10 py-4 text-sm tracking-[0.3em] uppercase hover:bg-gold hover:text-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Register Priority Access
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      <HomeClient />
    </>
  )
}
