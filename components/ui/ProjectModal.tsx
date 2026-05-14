'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2 } from 'lucide-react';
import type { Project } from '@/data/content';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const tagColorMap: Record<string, string> = {
  Swift: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  SwiftUI: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  'React Native': 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Flutter: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
  Firebase: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  RevenueCat: 'text-green-400 bg-green-500/10 border-green-500/20',
};

const getTagColor = (tag: string) =>
  tagColorMap[tag] ?? 'text-[#888899] bg-white/[0.04] border-white/[0.08]';

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = project ? 'hidden' : '';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:-translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-lg max-h-[90vh] z-50 flex flex-col glass rounded-2xl overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-52 shrink-0 bg-[#0d0d14]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="512px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              {/* Category badge */}
              <span className="absolute bottom-3 left-4 text-[11px] text-blue-400 bg-blue-500/20 border border-blue-500/30 rounded-full px-2.5 py-0.5 backdrop-blur-sm">
                {project.category}
              </span>
            </div>

            {/* Content — scrollable */}
            <div className="overflow-y-auto flex-1 p-5 space-y-4">
              <h2 className="text-lg font-semibold text-white">{project.title}</h2>

              <p className="text-sm text-[#888899] leading-relaxed">
                {project.details.description}
              </p>

              {/* Highlights */}
              <div>
                <h3 className="text-[11px] text-[#555566] uppercase tracking-wider mb-2">
                  Key Highlights
                </h3>
                <ul className="space-y-1.5">
                  {project.details.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13px] text-[#ccccdd]">
                      <CheckCircle2 size={13} className="text-blue-400 mt-0.5 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div>
                <h3 className="text-[11px] text-[#555566] uppercase tracking-wider mb-2">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {project.details.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] px-2.5 py-0.5 rounded-full border ${getTagColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/[0.06] shrink-0">
              <a
                href={project.details.appStoreLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-blue-500/15 border border-blue-500/30 text-blue-400 text-sm font-medium hover:bg-blue-500/25 transition-colors"
              >
                <ExternalLink size={15} />
                View on App Store
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
