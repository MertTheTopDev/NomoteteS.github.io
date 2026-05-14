'use client';

import { motion } from 'framer-motion';
import { User, FileText, Grid3x3, BookOpen, Mail } from 'lucide-react';

type PageKey = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact';

interface MobileNavProps {
  activePage: PageKey;
  setActivePage: (page: PageKey) => void;
}

const navItems: { key: PageKey; label: string; icon: React.ReactNode }[] = [
  { key: 'about', label: 'About', icon: <User size={20} /> },
  { key: 'resume', label: 'Resume', icon: <FileText size={20} /> },
  { key: 'portfolio', label: 'Portfolio', icon: <Grid3x3 size={20} /> },
  { key: 'blog', label: 'Blog', icon: <BookOpen size={20} /> },
  { key: 'contact', label: 'Contact', icon: <Mail size={20} /> },
];

export default function MobileNav({ activePage, setActivePage }: MobileNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="glass border-t border-white/[0.06] px-2 pb-safe">
        <ul className="flex">
          {navItems.map(({ key, label, icon }) => {
            const isActive = activePage === key;
            return (
              <li key={key} className="flex-1">
                <button
                  onClick={() => {
                    setActivePage(key);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="relative w-full flex flex-col items-center gap-1 py-3 transition-colors"
                >
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-bg"
                      className="absolute inset-1 rounded-xl bg-blue-500/10"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-200 ${
                      isActive ? 'text-blue-400' : 'text-[#555566]'
                    }`}
                  >
                    {icon}
                  </span>
                  <span
                    className={`relative z-10 text-[10px] font-medium transition-colors duration-200 ${
                      isActive ? 'text-blue-400' : 'text-[#444455]'
                    }`}
                  >
                    {label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
