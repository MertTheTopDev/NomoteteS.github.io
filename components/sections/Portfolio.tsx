'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Info } from 'lucide-react';
import { projects, type Project } from '@/data/content';
import ProjectModal from '@/components/ui/ProjectModal';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'My Apps', value: 'my-apps' },
  { label: 'iOS Apps', value: 'ios-apps' },
  { label: 'Android Apps', value: 'android-apps' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = projects.filter(
    (p) => activeFilter === 'all' || p.tags.includes(activeFilter)
  );

  return (
    <>
      <article className="space-y-5">
        <header className="glass rounded-2xl px-6 py-5">
          <h2 className="text-xl font-semibold text-white">Portfolio</h2>
        </header>

        {/* Filters */}
        <div className="glass rounded-2xl p-2 flex gap-1 flex-wrap">
          {filters.map((f) => {
            const isActive = activeFilter === f.value;
            return (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className="relative flex-1 min-w-[80px] py-2 px-3 text-sm font-medium rounded-xl transition-colors"
              >
                {isActive && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-blue-500/15 border border-blue-500/30 rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className={`relative z-10 ${isActive ? 'text-blue-400' : 'text-[#888899] hover:text-[#ccccdd]'}`}>
                  {f.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <motion.ul layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.li
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.22 }}
              >
                <button
                  onClick={() => setSelectedProject(project)}
                  className="group glass rounded-2xl overflow-hidden block w-full text-left hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="relative aspect-video overflow-hidden bg-[#0d0d14]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-400/50 flex items-center justify-center text-blue-400 backdrop-blur-sm">
                        <Info size={17} />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[13px] font-medium text-white group-hover:text-blue-400 transition-colors truncate">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-[#444455] mt-0.5">{project.category}</p>
                  </div>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </article>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
