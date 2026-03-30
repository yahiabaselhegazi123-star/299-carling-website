import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '299 Carling Avenue – Ottawa\'s Premier Residential Address',
  description: 'Experience luxury urban living at 299 Carling Avenue, Ottawa. Register for priority access to Ottawa\'s most anticipated residential development.',
  openGraph: {
    title: '299 Carling Avenue – Ottawa\'s Premier Residential Address',
    description: 'Experience luxury urban living at 299 Carling Avenue, Ottawa.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-white font-sans antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-dark focus:rounded">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
