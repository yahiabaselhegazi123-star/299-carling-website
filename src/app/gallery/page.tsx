import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery – 299 Carling Avenue',
  description: 'View architectural renderings and interior concepts for 299 Carling Avenue, Ottawa\'s premier luxury residential development.',
}

export default function GalleryPage() {
  return (
    <>
      <section className="relative h-[40vh] flex items-end overflow-hidden bg-gradient-to-br from-dark via-dark-2 to-[#0d1b2a]">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-3">Visual Journey</p>
          <h1 className="font-serif text-5xl md:text-6xl text-white">Gallery</h1>
        </div>
      </section>

      <GalleryClient />
    </>
  )
}
