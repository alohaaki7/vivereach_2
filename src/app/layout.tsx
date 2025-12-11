import type { Metadata } from 'next';
import './globals.css';
import CustomCursor from '@/components/ui/CustomCursor';
import NoiseOverlay from '@/components/ui/NoiseOverlay';

export const metadata: Metadata = {
  title: 'ViveReach Protocol | Secure VC Funding for Startups | 50K+ Investor Database',
  description:
    'Access our proprietary database of 50,000+ VCs. Hand-crafted outreach. Real meetings. Invisible mechanism. We operate in the shadows, you take the stage. 45+ meetings booked Q3.',
  keywords:
    'VC funding, venture capital, startup funding, investor outreach, fundraising, Series A, seed funding, pitch deck, investor database',
  authors: [{ name: 'ViveReach Systems' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://vivereach.com',
    title: 'ViveReach Protocol | Secure VC Funding for Startups',
    description:
      'Access our proprietary database of 50,000+ VCs. Hand-crafted outreach. Real meetings. The mechanism is invisible.',
    siteName: 'ViveReach Protocol',
    images: [
      {
        url: 'https://vivereach.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ViveReach Protocol',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ViveReach Protocol | Secure VC Funding for Startups',
    description:
      'Access our proprietary database of 50,000+ VCs. Hand-crafted outreach. Real meetings. The mechanism is invisible.',
    images: ['https://vivereach.com/twitter-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://vivereach.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'ViveReach Protocol',
              alternateName: 'ViveReach Systems',
              url: 'https://vivereach.com',
              logo: 'https://vivereach.com/logo.png',
              description:
                'ViveReach provides secure VC funding connections through a proprietary database of 50,000+ venture capitalists. We specialize in hand-crafted outreach and investor matching for startups.',
              foundingDate: '2025',
              sameAs: ['https://twitter.com/vivereach', 'https://linkedin.com/company/vivereach'],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Sales',
                email: 'access@vivereach.com',
              },
              offers: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'VC Funding Outreach Service',
                  description:
                    'Private infrastructure for secure investor outreach, deep database access to 50,000+ VCs, and narrative calibration for pitch optimization.',
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <NoiseOverlay />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
