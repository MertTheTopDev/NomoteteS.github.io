import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mert Türedü — Senior iOS Developer',
  description:
    'Senior iOS Engineer with 8+ years of experience building AI-powered mobile applications, real-time rendering pipelines, and monetization systems. 52+ apps published, 2M+ users reached.',
  keywords: ['iOS Developer', 'Swift', 'SwiftUI', 'React', 'Flutter', 'Mobile Developer', 'Istanbul', 'Mert Turedu'],
  authors: [{ name: 'Mert Türedü', url: 'https://mertturedu.dev' }],
  metadataBase: new URL('https://mertturedu.dev'),
  openGraph: {
    title: 'Mert Türedü — Senior iOS Developer',
    description: 'Senior iOS Engineer with 8+ years of experience. 52+ apps published, 2M+ users.',
    url: 'https://mertturedu.dev',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mert Türedü — Senior iOS Developer',
    description: 'Senior iOS Engineer with 8+ years of experience. 52+ apps published, 2M+ users.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mert Türedü',
  url: 'https://mertturedu.dev',
  jobTitle: 'Senior iOS Developer',
  description: 'Senior iOS Engineer with 8+ years of experience building AI-powered mobile applications.',
  email: 'mertturedu.thedev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Istanbul',
    addressCountry: 'TR',
  },
  sameAs: [
    'https://linkedin.com/in/mertthedev',
    'https://github.com/MertTheTopDev',
    'https://medium.com/@mertthedev',
  ],
  knowsAbout: ['Swift', 'SwiftUI', 'iOS Development', 'Core ML', 'Flutter', 'React Native'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
