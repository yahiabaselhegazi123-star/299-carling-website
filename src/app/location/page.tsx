import type { Metadata } from 'next'
import LocationClient from './LocationClient'

export const metadata: Metadata = {
  title: 'Location – 299 Carling Avenue',
  description: 'Ideally situated in Ottawa\'s most vibrant neighbourhood. Steps from Dow\'s Lake, The Glebe, LRT, and all the city has to offer.',
}

export default function LocationPage() {
  return (
    <>
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-gradient-to-br from-dark via-dark-2 to-[#0d1b2a]">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Ottawa, Ontario</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Location</h1>
        </div>
      </section>

      <LocationClient />
    </>
  )
}
