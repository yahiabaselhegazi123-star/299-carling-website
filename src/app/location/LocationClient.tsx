'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const pointsOfInterest = [
  { category: 'Nature', name: "Dow's Lake", distance: '2 min', description: 'Scenic lake and parklands' },
  { category: 'Shopping', name: 'The Glebe', distance: '5 min', description: 'Boutique shops & restaurants' },
  { category: 'Transit', name: 'Carling LRT', distance: '3 min', description: 'O-Train Trillium Line' },
  { category: 'Health', name: 'Civic Hospital', distance: '4 min', description: "Ottawa's main hospital campus" },
  { category: 'Dining', name: 'Preston Street', distance: '6 min', description: 'Little Italy dining district' },
  { category: 'Culture', name: 'National Arts Centre', distance: '15 min', description: 'Via LRT' },
  { category: 'Work', name: 'Downtown Ottawa', distance: '12 min', description: 'Via LRT or car' },
  { category: 'Nature', name: 'Rideau Canal', distance: '8 min', description: 'UNESCO World Heritage Site' },
]

const scores = [
  { label: 'Walk Score', value: 88, description: 'Very Walkable' },
  { label: 'Transit Score', value: 76, description: 'Excellent Transit' },
  { label: 'Bike Score', value: 82, description: 'Very Bikeable' },
]

export default function LocationClient() {
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
      {/* Map */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="reveal">
          <iframe
            src="https://www.openstreetmap.org/export/embed.html?bbox=-75.7350%2C45.3900%2C-75.6850%2C45.4100&layer=mapnik&marker=45.3978%2C-75.7124"
            width="100%"
            height="480"
            style={{ border: 0, borderRadius: 0 }}
            title="299 Carling Avenue location map"
            className="border border-white/10"
            loading="lazy"
          />
        </div>
        <p className="text-white/40 text-xs text-center mt-2">299 Carling Avenue, Ottawa, ON</p>
      </section>

      {/* Points of Interest */}
      <section className="py-16 bg-dark-2 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Neighbourhood</p>
            <h2 className="font-serif text-4xl text-white reveal">Everything at Your Door</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {pointsOfInterest.map((poi, i) => (
              <div key={i} className="border border-white/10 p-6 hover:border-gold/30 transition-colors reveal">
                <p className="text-gold/60 text-xs tracking-widest uppercase mb-2">{poi.category}</p>
                <h3 className="text-white font-medium mb-1">{poi.name}</h3>
                <p className="text-white/40 text-sm mb-2">{poi.description}</p>
                <p className="text-gold text-sm font-medium">{poi.distance} walk</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scores */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Connectivity</p>
          <h2 className="font-serif text-4xl text-white reveal">Unbeatable Scores</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {scores.map((score, i) => (
            <div key={i} className="text-center reveal">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90" aria-hidden="true">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#1f1f2e" strokeWidth="2" />
                  <circle
                    cx="18"
                    cy="18"
                    r="15.9"
                    fill="none"
                    stroke="#c9a96e"
                    strokeWidth="2"
                    strokeDasharray={`${score.value} 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-3xl text-gold">{score.value}</span>
                </div>
              </div>
              <h3 className="text-white font-medium mb-1">{score.label}</h3>
              <p className="text-white/50 text-sm">{score.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 reveal">
          <Link
            href="/priority-access"
            className="inline-block bg-gold text-dark px-12 py-4 text-sm tracking-[0.3em] uppercase hover:bg-gold-light transition-all duration-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            Register Priority Access
          </Link>
        </div>
      </section>
    </div>
  )
}
