'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Calendar,
  MapPin,
  LayoutGrid,
  Github,
  Linkedin,
  BookOpen,
  ChevronDown,
} from 'lucide-react';
import { personalInfo } from '@/data/content';

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false);
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const target = personalInfo.appsPublished;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const contacts = [
    {
      icon: <Mail size={16} />,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: <Phone size={16} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: <Calendar size={16} />,
      label: 'Birthday',
      value: personalInfo.birthday,
      href: null,
    },
    {
      icon: <MapPin size={16} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
    {
      icon: <LayoutGrid size={16} />,
      label: 'Apps Published',
      value: `${count}`,
      href: null,
      isCounter: true,
    },
  ];

  const socials = [
    { icon: <Linkedin size={18} />, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: <Github size={18} />, href: personalInfo.social.github, label: 'GitHub' },
    { icon: <BookOpen size={18} />, href: personalInfo.social.medium, label: 'Medium' },
  ];

  return (
    <aside className="glass rounded-2xl lg:w-[272px] lg:sticky lg:top-10 lg:self-start overflow-hidden">
      {/* Top section: always visible */}
      <div className="p-6 flex flex-col items-center text-center">
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-[88px] h-[88px] rounded-2xl overflow-hidden ring-2 ring-blue-500/20 ring-offset-2 ring-offset-[#0a0a0f]">
            <Image
              src={personalInfo.avatar}
              alt={personalInfo.name}
              width={88}
              height={88}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -inset-2 rounded-2xl bg-blue-500/10 blur-2xl -z-10" />
        </div>

        {/* Name */}
        <h1 className="text-[17px] font-semibold text-white mb-2">{personalInfo.name}</h1>

        {/* Title badge */}
        <span className="text-xs text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full">
          {personalInfo.title}
        </span>

        {/* Mobile toggle */}
        <button
          onClick={() => setShowContacts(!showContacts)}
          className="flex items-center gap-1.5 mt-4 text-xs text-[#666677] hover:text-[#aaaacc] transition-colors lg:hidden"
        >
          <span>Show Contacts</span>
          <motion.span animate={{ rotate: showContacts ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={14} />
          </motion.span>
        </button>
      </div>

      {/* Contacts — always visible desktop, toggle on mobile */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          showContacts ? 'max-h-[400px]' : 'max-h-0 lg:max-h-[400px]'
        }`}
      >
        <div className="border-t border-white/[0.06] mx-4" />

        <ul className="px-5 py-4 space-y-3">
          {contacts.map((item) => (
            <li key={item.label} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-blue-400 shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-[#555566] uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-[13px] text-[#ccccdd] hover:text-blue-400 transition-colors truncate block"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-[13px] text-[#ccccdd]">
                    {item.isCounter ? count : item.value}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t border-white/[0.06] mx-4" />

        {/* Social links */}
        <div className="px-5 py-4 flex gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center text-[#888899] hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/10 transition-all duration-200"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
