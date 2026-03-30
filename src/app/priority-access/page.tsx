import type { Metadata } from 'next'
import PriorityAccessClient from './PriorityAccessClient'

export const metadata: Metadata = {
  title: 'Priority Access – 299 Carling Avenue',
  description: 'Register for priority access to 299 Carling Avenue. Be among the first to receive suite information, pricing, and exclusive early registration opportunities.',
}

export default function PriorityAccessPage() {
  return (
    <>
      <section className="relative h-[50vh] flex items-end overflow-hidden bg-gradient-to-br from-dark via-dark-2 to-[#0d1b2a]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Exclusive</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Priority Access</h1>
        </div>
      </section>

      <PriorityAccessClient />
    </>
  )
}
