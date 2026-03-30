import type { Metadata } from 'next'
import Image from 'next/image'
import AmenitiesClient from './AmenitiesClient'

export const metadata: Metadata = {
  title: 'Amenities – 299 Carling Avenue',
  description: 'World-class amenities at 299 Carling Avenue. Fitness centre, rooftop terrace, concierge service, and more in Ottawa\'s premier development.',
}

export default function AmenitiesPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-[#0d1b2a]" />
        <div className="absolute inset-0">
          <Image
            src="/images/rendering-3.svg"
            alt="Rooftop amenities at 299 Carling"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Life at 299</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Amenities</h1>
        </div>
      </section>

      <AmenitiesClient />
    </>
  )
}
