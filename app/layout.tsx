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
    'Senior iOS Engineer with 8+ years of experience building AI-powered mobile applications, real-time rendering pipelines, and monetization systems. Led a cross-functional team, delivered apps to 2M+ users.',
  keywords: ['iOS Developer', 'Swift', 'SwiftUI', 'React', 'Flutter', 'Mobile Developer', 'Istanbul'],
  authors: [{ name: 'Mert Türedü', url: 'https://mertturedu.dev' }],
  openGraph: {
    title: 'Mert Türedü — Senior iOS Developer',
    description: 'Senior iOS Engineer with 8+ years of experience building AI-powered mobile applications.',
    url: 'https://mertturedu.dev',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
