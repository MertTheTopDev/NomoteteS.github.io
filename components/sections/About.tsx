'use client';

import { motion } from 'framer-motion';
import { Smartphone, Cpu, Layers, TrendingUp } from 'lucide-react';
import { stats, aboutText, services } from '@/data/content';

const iconMap: Record<string, React.ReactNode> = {
  smartphone: <Smartphone size={22} />,
  cpu: <Cpu size={22} />,
  layers: <Layers size={22} />,
  'trending-up': <TrendingUp size={22} />,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function About() {
  return (
    <article className="space-y-5">
      {/* Header */}
      <header className="glass rounded-2xl px-6 py-5">
        <h2 className="text-xl font-semibold text-white">About me</h2>
      </header>

      {/* Stats row */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-4 gap-3"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="glass rounded-2xl p-4 text-center hover:border-blue-500/20 transition-all duration-300 group"
          >
            <p className="text-2xl font-bold gradient-text mb-1">{stat.value}</p>
            <p className="text-[11px] text-[#666677] uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* About text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="glass rounded-2xl p-6 space-y-4"
      >
        {aboutText.map((para, i) => (
          <motion.p
            key={i}
            variants={item}
            className="text-sm text-[#888899] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: para }}
          />
        ))}
      </motion.div>

      {/* Services */}
      <div>
        <h3 className="text-sm font-medium text-[#555566] uppercase tracking-wider px-1 mb-3">
          What I&apos;m doing
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 gap-3"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={item}
              className="glass rounded-2xl p-5 flex gap-4 items-start hover:border-blue-500/20 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 group-hover:bg-blue-500/15 transition-colors">
                {iconMap[service.icon]}
              </div>
              <div>
                <h4 className="text-[14px] font-medium text-white mb-1">{service.title}</h4>
                <p className="text-[12px] text-[#666677] leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </article>
  );
}
