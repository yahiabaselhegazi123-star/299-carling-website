'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const amenities = [
  {
    title: 'Fitness Centre',
    description: 'A fully equipped 5,000 sq ft fitness centre featuring state-of-the-art cardio equipment, free weights, and a dedicated yoga and meditation studio.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M4 16h2M26 16h2M6 16v-4a2 2 0 014 0v8a2 2 0 004 0v-8a2 2 0 014 0v4" />
        <rect x="10" y="8" width="12" height="16" rx="2" />
      </svg>
    ),
    floor: 'Level 5',
  },
  {
    title: 'Rooftop Terrace',
    description: 'A spectacular 34th-floor rooftop terrace featuring a heated infinity pool, private cabanas, outdoor dining areas, and panoramic views of Ottawa.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="18" width="24" height="10" rx="2" />
        <path d="M10 18V10a6 6 0 0112 0v8" />
        <circle cx="16" cy="6" r="3" />
      </svg>
    ),
    floor: 'Level 34',
  },
  {
    title: '24/7 Concierge',
    description: 'Round-the-clock white-glove concierge service to attend to all your needs, from parcel handling and dry-cleaning to restaurant reservations and travel arrangements.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="16" cy="10" r="4" />
        <path d="M8 28v-2a8 8 0 0116 0v2" />
        <path d="M16 14v14" />
      </svg>
    ),
    floor: 'Ground Level',
  },
  {
    title: 'Co-working Lounge',
    description: 'A sophisticated co-working space with private meeting rooms, high-speed internet, a podcast studio, and a curated library — your office away from the office.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="8" width="24" height="18" rx="2" />
        <path d="M10 8V6a2 2 0 014 0v2M18 8V6a2 2 0 014 0v2" />
        <path d="M8 14h16M8 19h10" />
      </svg>
    ),
    floor: 'Level 2',
  },
  {
    title: 'Pet Spa',
    description: 'A dedicated pet grooming and spa facility equipped with wash stations, grooming tables, and a pet-friendly outdoor run on the second-floor terrace.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 6c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
        <path d="M8 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
        <path d="M20 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" />
        <path d="M6 22c0-5.5 4-10 10-10s10 4.5 10 10c0 2-1 3-3 3h-4l-3 3-3-3H9c-2 0-3-1-3-3z" />
      </svg>
    ),
    floor: 'Level 2',
  },
  {
    title: 'Underground Parking',
    description: 'Secure underground parking with EV charging stations, automated parking guidance system, and dedicated bicycle storage with maintenance station.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" rx="2" />
        <path d="M11 24V8h6a5 5 0 010 10h-6" />
      </svg>
    ),
    floor: 'Sub-Level 1–3',
  },
  {
    title: 'Bicycle Storage',
    description: 'A secure, climate-controlled bicycle storage and maintenance room with 150 spaces, including a repair station and e-bike charging ports.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="8" cy="22" r="5" />
        <circle cx="24" cy="22" r="5" />
        <path d="M8 22l4-10h6l4 10" />
        <path d="M12 12l4 10" />
        <circle cx="16" cy="8" r="2" />
      </svg>
    ),
    floor: 'Sub-Level 1',
  },
  {
    title: 'Guest Suites',
    description: 'Beautifully appointed guest suites available for residents to book for visiting family and friends, offering the comfort of home with the service of a boutique hotel.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="4" y="10" width="24" height="18" rx="2" />
        <path d="M10 10V7a6 6 0 0112 0v3" />
        <path d="M16 17v4" />
        <circle cx="16" cy="16" r="1" />
      </svg>
    ),
    floor: 'Level 3',
  },
]

export default function AmenitiesClient() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Curated for You</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 reveal">World-Class Amenities</h2>
          <p className="text-white/50 max-w-xl mx-auto reveal">
            Every detail at 299 Carling has been thoughtfully designed to elevate your everyday experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, i) => (
            <div key={i} className="border border-white/10 p-6 hover:border-gold/40 transition-colors duration-300 group reveal">
              <div className="text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h3 className="font-serif text-lg text-white mb-2">{amenity.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4">{amenity.description}</p>
              <p className="text-gold/60 text-xs tracking-widest uppercase">{amenity.floor}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Lifestyle section */}
      <section className="py-24 bg-dark-2 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] reveal order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-dark-2 to-dark rounded-sm overflow-hidden">
                <Image
                  src="/images/rendering-3.svg"
                  alt="Rooftop terrace lifestyle rendering"
                  fill
                  className="object-cover opacity-80"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-gold opacity-30" />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Elevated Living</p>
              <h2 className="font-serif text-4xl text-white mb-6 reveal">The Rooftop Experience</h2>
              <p className="text-white/60 leading-relaxed mb-4 reveal">
                Perched atop the 34th floor, the rooftop terrace offers an incomparable vantage point over Ottawa. Whether hosting intimate gatherings or simply unwinding after a day in the city, the space transforms with the seasons.
              </p>
              <p className="text-white/60 leading-relaxed reveal">
                A heated infinity pool, cabanas, an outdoor kitchen, and dedicated event space make the rooftop a true extension of your home.
              </p>
              <div className="mt-8 reveal">
                <Link
                  href="/priority-access"
                  className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Register Priority Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
