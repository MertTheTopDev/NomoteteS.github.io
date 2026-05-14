'use client';

import { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
import MobileNav from '@/components/MobileNav';
import About from '@/components/sections/About';
import Resume from '@/components/sections/Resume';
import Portfolio from '@/components/sections/Portfolio';
import Blog from '@/components/sections/Blog';
import Contact from '@/components/sections/Contact';

type PageKey = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact';

const pages: { key: PageKey; label: string }[] = [
  { key: 'about', label: 'About' },
  { key: 'resume', label: 'Resume' },
  { key: 'portfolio', label: 'Portfolio' },
  { key: 'blog', label: 'Blog' },
  { key: 'contact', label: 'Contact' },
];

const sectionMap: Record<PageKey, React.ReactNode> = {
  about: <About />,
  resume: <Resume />,
  portfolio: <Portfolio />,
  blog: <Blog />,
  contact: <Contact />,
};

export default function Home() {
  const [activePage, setActivePage] = useState<PageKey>('about');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hasHovered, setHasHovered] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
        if (!hasHovered) setHasHovered(true);
      });
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasHovered]);

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Mouse spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-20 transition-opacity duration-500"
        style={{
          opacity: hasHovered ? 1 : 0,
          background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.05), transparent 70%)`,
        }}
      />

      <main className="min-h-screen bg-[#0a0a0f]">
        <div className="max-w-[1100px] mx-auto px-4 py-6 pb-24 lg:pb-10 lg:px-6 lg:py-10">
          <div className="flex flex-col lg:flex-row gap-6">
            <Sidebar />

            <div className="flex-1 min-w-0 flex flex-col gap-5">
              {/* Desktop top nav */}
              <div className="hidden lg:block">
                <Navbar pages={pages} activePage={activePage} setActivePage={setActivePage} />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePage}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                >
                  {sectionMap[activePage]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile bottom navigation */}
      <MobileNav activePage={activePage} setActivePage={setActivePage} />
    </>
  );
}
