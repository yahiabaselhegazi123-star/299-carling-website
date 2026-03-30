'use client'

import { useState, useEffect, useRef } from 'react'

export default function PriorityAccessClient() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/priority-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
        setMessage(data.message)
        setEmail('')
      } else {
        setStatus('error')
        setMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Network error. Please try again.')
    }
  }

  return (
    <div ref={ref}>
      <section className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Limited Availability</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6 reveal">
            Join the Priority List
          </h2>
          <p className="text-white/60 mb-12 leading-relaxed reveal">
            Be among the first to access suite information, floor plans, pricing, and exclusive presale opportunities at 299 Carling Avenue. Priority access registrants receive first right of presentation before the public launch.
          </p>

          {status === 'success' ? (
            <div className="border border-gold/30 bg-gold/5 p-10 reveal">
              <div className="text-gold text-4xl mb-4">✓</div>
              <h3 className="font-serif text-2xl text-white mb-3">You&apos;re on the List</h3>
              <p className="text-white/60">{message}</p>
              <p className="text-white/40 text-sm mt-4">We&apos;ll be in touch with exclusive updates soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal" noValidate>
              <div className="mb-6">
                <label htmlFor="email" className="block text-white/60 text-xs tracking-widest uppercase mb-3 text-left">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-transparent border border-white/20 text-white placeholder-white/30 px-6 py-4 text-sm focus:outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold transition-colors"
                  disabled={status === 'loading'}
                  aria-required="true"
                  aria-label="Email address for priority access registration"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400 text-sm mb-4" role="alert">{message}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || !email}
                className="w-full bg-gold text-dark py-4 text-sm tracking-[0.3em] uppercase font-medium hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {status === 'loading' ? 'Registering...' : 'Register for Priority Access'}
              </button>

              <p className="text-white/30 text-xs mt-4">
                Your information is kept strictly confidential and will never be shared with third parties.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Benefits section */}
      <section className="py-16 bg-dark-2 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: 'First Access', description: 'Receive suite availability and pricing before the public launch' },
              { title: 'Exclusive Events', description: 'Invitations to private preview events and sales centre tours' },
              { title: 'Priority Selection', description: 'Choose your preferred suite before general registration opens' },
            ].map((benefit, i) => (
              <div key={i} className="reveal">
                <div className="w-8 h-0.5 bg-gold mx-auto mb-6" />
                <h3 className="font-serif text-xl text-white mb-3">{benefit.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
