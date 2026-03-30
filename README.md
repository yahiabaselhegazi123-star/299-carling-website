# 299 Carling Avenue – Marketing Website

A premium luxury real estate marketing website for **299 Carling Avenue**, Ottawa's most anticipated residential development.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Resend** (email API)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home – hero, stats, amenities preview, location highlights |
| `/residences` | Suite types and finishes |
| `/amenities` | Full amenities grid |
| `/location` | Map and points of interest |
| `/gallery` | Image gallery with lightbox |
| `/priority-access` | Registration form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file for email functionality:

```env
RESEND_API_KEY=your_resend_api_key
RESEND_FROM=noreply@yourdomain.com
```

If these are not set, the app runs in **demo mode** — form submissions are logged to the console.

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy

The site is optimized for Vercel's Edge Network with Next.js 15 App Router.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navigation + Footer
│   ├── page.tsx            # Home page
│   ├── residences/         # Residences page
│   ├── amenities/          # Amenities page
│   ├── location/           # Location page
│   ├── gallery/            # Gallery with lightbox
│   ├── priority-access/    # Registration form
│   └── api/
│       └── priority-access/ # Email API route
├── components/
│   ├── Navigation.tsx      # Fixed nav with scroll state
│   └── Footer.tsx          # Site footer
└── hooks/
    └── useScrollReveal.ts  # IntersectionObserver hook
public/
└── images/
    ├── rendering-1.svg     # Exterior rendering placeholder
    ├── rendering-2.svg     # Interior rendering placeholder
    └── rendering-3.svg     # Rooftop rendering placeholder
```
