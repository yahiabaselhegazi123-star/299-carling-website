'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

const suiteTypes = [
  {
    type: 'Studio',
    size: '400–520 sq ft',
    price: 'From $420,000',
    features: ['Open-concept layout', 'Full kitchen', 'In-suite laundry', 'Juliet balcony'],
    available: true,
  },
  {
    type: '1 Bedroom',
    size: '550–720 sq ft',
    price: 'From $560,000',
    features: ['Separate bedroom', 'Full kitchen', 'In-suite laundry', 'Private balcony', '9ft ceilings'],
    available: true,
  },
  {
    type: '2 Bedroom',
    size: '820–1,100 sq ft',
    price: 'From $750,000',
    features: ['Two bedrooms', 'Two bathrooms', 'Open living area', 'Large balcony', 'Den option'],
    available: true,
  },
  {
    type: '3 Bedroom',
    size: '1,200–1,600 sq ft',
    price: 'Coming Soon',
    features: ['Three bedrooms', 'Two+ bathrooms', 'Chef kitchen', 'Wraparound terrace', 'Premium finishes'],
    available: false,
  },
]

const features = [
  'Floor-to-ceiling windows',
  'Wide-plank engineered hardwood',
  'Quartz countertops',
  'Integrated appliances',
  'Custom millwork',
  'Spa-inspired bathrooms',
  'Smart home technology',
  'Individual climate control',
]

export default function ResidencesClient() {
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
      {/* Suite Types */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Suite Collection</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white reveal">Find Your Residence</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {suiteTypes.map((suite, i) => (
            <div
              key={i}
              className={`border p-8 reveal ${suite.available ? 'border-white/20 hover:border-gold/50' : 'border-white/10 opacity-70'} transition-colors duration-300`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-serif text-2xl text-white mb-1">{suite.type}</h3>
                  <p className="text-white/50 text-sm">{suite.size}</p>
                </div>
                <div className="text-right">
                  <p className={`font-serif text-lg ${suite.available ? 'text-gold' : 'text-white/40'}`}>
                    {suite.price}
                  </p>
                  {!suite.available && (
                    <span className="text-xs tracking-widest uppercase text-white/40 border border-white/20 px-2 py-0.5 mt-1 inline-block">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
              <ul className="space-y-2">
                {suite.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="text-gold">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
              {suite.available && (
                <div className="mt-6">
                  <Link
                    href="/priority-access"
                    className="text-gold text-xs tracking-widest uppercase border-b border-gold pb-1 hover:text-gold-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  >
                    Register Interest
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-dark-2 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Crafted Details</p>
              <h2 className="font-serif text-4xl text-white mb-8 reveal">Exceptional Finishes</h2>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 reveal">
                    <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                    <p className="text-white/60 text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 reveal">
              <div className="h-48 bg-gradient-to-br from-dark-2 to-dark border border-white/10 flex items-center justify-center">
                <p className="text-white/20 font-serif text-xl tracking-wider">Floor Plans</p>
              </div>
              <p className="text-white/40 text-sm text-center">Floor plans available upon registration</p>
              <div className="text-center">
                <Link
                  href="/priority-access"
                  className="inline-block border border-gold text-gold px-8 py-3 text-xs tracking-widest uppercase hover:bg-gold hover:text-dark transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  Request Floor Plans
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
