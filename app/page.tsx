'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';
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

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <div className="max-w-[1100px] mx-auto px-4 py-6 lg:px-6 lg:py-10">
        <div className="flex flex-col lg:flex-row gap-6">
          <Sidebar />

          <div className="flex-1 min-w-0 flex flex-col gap-5">
            <Navbar
              pages={pages}
              activePage={activePage}
              setActivePage={setActivePage}
            />

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
  );
}
