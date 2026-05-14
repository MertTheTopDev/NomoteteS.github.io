'use client';

import { motion } from 'framer-motion';
import { Smartphone, Cpu, Layers, TrendingUp } from 'lucide-react';
import { stats, aboutText, services, techStack } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone size={22} />,
  cpu: <Cpu size={22} />,
  layers: <Layers size={22} />,
  'trending-up': <TrendingUp size={22} />,
};

const colorMap: Record<string, { badge: string; dot: string }> = {
  blue: {
    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    dot: 'bg-blue-500',
  },
  purple: {
    badge: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    dot: 'bg-purple-500',
  },
  emerald: {
    badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    dot: 'bg-emerald-500',
  },
  amber: {
    badge: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    dot: 'bg-amber-500',
  },
  rose: {
    badge: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    dot: 'bg-rose-500',
  },
  cyan: {
    badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    dot: 'bg-cyan-500',
  },
  violet: {
    badge: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    dot: 'bg-violet-500',
  },
  sky: {
    badge: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    dot: 'bg-sky-500',
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function About() {
  return (
    <article className="space-y-5">
      <header className="glass rounded-2xl px-6 py-5">
        <h2 className="text-xl font-semibold text-white">About me</h2>
      </header>

      {/* Stats */}
      <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <motion.div key={stat.label} variants={item} className="glass rounded-2xl p-4 text-center hover:border-blue-500/20 transition-all duration-300">
            <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
            <p className="text-[11px] text-[#555566] uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About text */}
      <motion.div variants={container} initial="hidden" animate="show" className="glass rounded-2xl p-6 space-y-4">
        {aboutText.map((para, i) => (
          <motion.p key={i} variants={item} className="text-sm text-[#888899] leading-relaxed" dangerouslySetInnerHTML={{ __html: para }} />
        ))}
      </motion.div>

      {/* Services */}
      <div>
        <h3 className="text-[11px] font-medium text-[#444455] uppercase tracking-wider px-1 mb-3">What I&apos;m doing</h3>
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={item} className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-blue-500/20 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/15 transition-colors">
                {iconMap[service.icon]}
              </div>
              <div>
                <h4 className="text-[14px] font-medium text-white mb-1">{service.title}</h4>
                <p className="text-[12px] text-[#555566] leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tech Stack */}
      <div>
        <h3 className="text-[11px] font-medium text-[#444455] uppercase tracking-wider px-1 mb-3">Tech Stack</h3>
        <motion.div variants={container} initial="hidden" animate="show" className="glass rounded-2xl p-5 space-y-4">
          {techStack.map((group) => {
            const colors = colorMap[group.color] ?? colorMap.blue;
            return (
              <motion.div key={group.category} variants={item}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                  <span className="text-[11px] text-[#555566] uppercase tracking-wider">{group.category}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span key={tech} className={`text-[11px] px-2.5 py-0.5 rounded-full border ${colors.badge}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </article>
  );
}
