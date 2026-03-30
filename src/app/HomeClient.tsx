'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: '299', label: 'Suites' },
  { value: '34', label: 'Floors' },
  { value: '2026', label: 'Completion' },
  { value: 'Ottawa', label: 'Capital City' },
]

const amenityPreviews = [
  {
    title: 'Fitness Centre',
    description: 'State-of-the-art equipment and dedicated yoga studio on the 5th floor.',
    icon: '◈',
  },
  {
    title: 'Rooftop Terrace',
    description: 'Panoramic views of Ottawa with a heated pool and lounge areas.',
    icon: '◈',
  },
  {
    title: 'Concierge',
    description: '24/7 white-glove concierge service for all your needs.',
    icon: '◈',
  },
]

const locationHighlights = [
  { name: "Dow's Lake", distance: '2 min walk' },
  { name: 'The Glebe', distance: '5 min walk' },
  { name: 'LRT Station', distance: '3 min walk' },
  { name: 'Civic Hospital', distance: '4 min walk' },
]

export default function HomeClient() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef}>
      {/* The Building Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">The Development</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 reveal">
              Redefining<br />Ottawa Living
            </h2>
            <p className="text-white/60 leading-relaxed mb-4 reveal">
              Rising 34 floors above Carling Avenue, 299 Carling represents the pinnacle of contemporary urban design. Each suite is meticulously crafted to harmonize sophisticated aesthetics with functional elegance.
            </p>
            <p className="text-white/60 leading-relaxed reveal">
              Positioned at the confluence of Ottawa&apos;s most desirable neighborhoods, residents enjoy unparalleled access to the city&apos;s cultural, culinary, and natural offerings.
            </p>
          </div>
          <div className="relative aspect-[4/3] reveal">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-2 to-dark rounded-sm overflow-hidden">
              <Image
                src="/images/rendering-2.svg"
                alt="Interior rendering of 299 Carling"
                fill
                className="object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold opacity-30" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark-2 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center reveal">
                <p className="font-serif text-4xl md:text-5xl text-gold mb-2">{stat.value}</p>
                <p className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Preview */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Life at 299</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white reveal">Curated Amenities</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {amenityPreviews.map((amenity, i) => (
            <div key={i} className="border border-white/10 p-8 hover:border-gold/40 transition-colors duration-300 reveal">
              <p className="text-gold text-2xl mb-4">{amenity.icon}</p>
              <h3 className="font-serif text-xl text-white mb-3">{amenity.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 reveal">
          <Link
            href="/amenities"
            className="text-gold text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-gold-light hover:border-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          >
            View All Amenities
          </Link>
        </div>
      </section>

      {/* Location Highlights */}
      <section className="py-24 bg-dark-2 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Prime Position</p>
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-8 reveal">At the Heart<br />of Ottawa</h2>
              <div className="space-y-4">
                {locationHighlights.map((loc, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 reveal">
                    <span className="text-white/70">{loc.name}</span>
                    <span className="text-gold text-sm">{loc.distance}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 reveal">
                <Link href="/location" className="text-gold text-sm tracking-widest uppercase border-b border-gold pb-1 hover:text-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded">
                  Explore Location
                </Link>
              </div>
            </div>
            <div className="relative aspect-square reveal">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-2 to-dark rounded-sm overflow-hidden">
                <Image
                  src="/images/rendering-3.svg"
                  alt="Rooftop terrace rendering"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Limited Availability</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 reveal">Secure Your Place</h2>
          <p className="text-white/60 mb-10 reveal">
            Join our priority access list to be among the first to receive suite information, pricing, and exclusive early registration opportunities.
          </p>
          <div className="reveal">
            <Link
              href="/priority-access"
              className="inline-block bg-gold text-dark px-12 py-4 text-sm tracking-[0.3em] uppercase hover:bg-gold-light transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
