import type { Metadata } from 'next'
import Image from 'next/image'
import ResidencesClient from './ResidencesClient'

export const metadata: Metadata = {
  title: 'Residences – 299 Carling Avenue',
  description: 'Explore suite options at 299 Carling Avenue. Studio, 1, 2, and 3 bedroom residences available in Ottawa\'s premier new development.',
}

export default function ResidencesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-[#0d1b2a]" />
        <div className="absolute inset-0">
          <Image
            src="/images/rendering-2.svg"
            alt="299 Carling residence interior"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">299 Carling Avenue</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Residences</h1>
        </div>
      </section>

      <ResidencesClient />
    </>
  )
}
