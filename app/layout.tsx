import type { Metadata } from 'next';
import { Suspense } from 'react';
import { QueryProvider } from '@/components/providers/query-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CursorTrail } from '@/components/ui/cursor-trail';
import { SEO_KEYWORDS, COMPANY } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} | Veteran-Led Tech Support in Killeen/Temple TX`,
    template: `%s | ${COMPANY.name}`,
  },
  description: 'Expert tech support in Central Texas. WiFi optimization, managed IT, network installations, and more. Veteran-owned with 24/7 support. Serving Killeen, Temple, Fort Hood.',
  keywords: SEO_KEYWORDS,
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abeytanetwork.com',
    siteName: COMPANY.name,
    title: `${COMPANY.name} | Veteran-Led Tech Support`,
    description: 'Expert tech support in Central Texas. WiFi optimization, managed IT, network installations. Veteran-owned with 24/7 support.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: COMPANY.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY.name,
    description: 'Veteran-Led Tech Support in Central Texas',
  },
  robots: {
    index: true,
    follow: true,
  },
  // Local business schema
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: COMPANY.name,
      description: 'Veteran-led tech support serving Killeen, Temple, and Central Texas',
      url: 'https://abeytanetwork.com',
      telephone: COMPANY.phone,
      email: COMPANY.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Killeen',
        addressRegion: 'TX',
        postalCode: '76541',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 31.1171,
        longitude: -97.7278,
      },
      openingHours: 'Mo-Su 00:00-23:59',
      priceRange: '$$',
      areaServed: ['Killeen', 'Temple', 'Fort Hood', 'Harker Heights', 'Belton', 'Copperas Cove'],
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <QueryProvider>
          <Suspense fallback={null}>
            <CursorTrail />
          </Suspense>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
