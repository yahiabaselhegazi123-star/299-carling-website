'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const images = [
  {
    src: '/images/rendering-1.svg',
    alt: 'Exterior architectural rendering of 299 Carling Avenue',
    caption: 'Exterior Rendering',
  },
  {
    src: '/images/rendering-2.svg',
    alt: 'Interior suite rendering showing floor-to-ceiling windows',
    caption: 'Suite Interior',
  },
  {
    src: '/images/rendering-3.svg',
    alt: 'Rooftop terrace rendering with pool and lounge areas',
    caption: 'Rooftop Terrace',
  },
]

export default function GalleryClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null)
    document.body.classList.remove('lightbox-open')
  }, [])

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : null))
  }, [])

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % images.length : null))
  }, [])

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    document.body.classList.add('lightbox-open')
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevImage()
      if (e.key === 'ArrowRight') nextImage()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, closeLightbox, prevImage, nextImage])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('revealed')),
      { threshold: 0.1 }
    )
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="py-24 px-6 max-w-7xl mx-auto" ref={ref}>
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 reveal">Renderings</p>
          <h2 className="font-serif text-4xl text-white reveal">Architectural Vision</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, i) => (
            <button
              key={i}
              onClick={() => openLightbox(i)}
              className="relative aspect-[4/3] group overflow-hidden border border-white/10 hover:border-gold/40 transition-colors duration-300 reveal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={`View ${image.caption} in full screen`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark to-transparent">
                <p className="text-gold text-xs tracking-widest uppercase">{image.caption}</p>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold" aria-hidden="true">
                  <path d="M15 3h6v6M21 3l-9 9M9 21H3v-6M3 21l9-9" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-white/30 text-sm mt-8 reveal">
          Click any image to view full screen. Use arrow keys to navigate.
        </p>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white/60 hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
              aria-label="Close lightbox"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M8 8l16 16M24 8L8 24" />
              </svg>
            </button>

            {/* Image */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Caption and counter */}
            <div className="mt-4 text-center">
              <p className="text-gold text-sm tracking-widest uppercase">{images[lightboxIndex].caption}</p>
              <p className="text-white/40 text-xs mt-1">{lightboxIndex + 1} / {images.length}</p>
            </div>

            {/* Navigation */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none px-2">
              <button
                onClick={prevImage}
                className="pointer-events-auto text-white/60 hover:text-gold transition-colors p-2 bg-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                aria-label="Previous image"
              >
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M20 8l-8 8 8 8" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="pointer-events-auto text-white/60 hover:text-gold transition-colors p-2 bg-dark/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                aria-label="Next image"
              >
                <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 8l8 8-8 8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
