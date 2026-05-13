'use client';

import { motion } from 'framer-motion';

type PageKey = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact';

interface NavbarProps {
  pages: { key: PageKey; label: string }[];
  activePage: PageKey;
  setActivePage: (page: PageKey) => void;
}

export default function Navbar({ pages, activePage, setActivePage }: NavbarProps) {
  return (
    <nav className="glass rounded-2xl px-2 py-2">
      <ul className="flex gap-1">
        {pages.map(({ key, label }) => {
          const isActive = activePage === key;
          return (
            <li key={key} className="flex-1">
              <button
                onClick={() => setActivePage(key)}
                className="relative w-full py-2 text-sm font-medium transition-colors rounded-xl"
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-blue-500/15 border border-blue-500/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-200 ${
                    isActive ? 'text-blue-400' : 'text-[#888899] hover:text-[#ccccdd]'
                  }`}
                >
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
