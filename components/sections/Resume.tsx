'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import { education, experience, skills, certifications } from '@/data/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

function SectionTitle({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
    </div>
  );
}

function TimelineItem({
  title,
  subtitle,
  period,
  description,
}: {
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
}) {
  return (
    <motion.li variants={item} className="relative pl-6">
      <div className="absolute left-0 top-[6px] w-2 h-2 rounded-full bg-blue-500/60 ring-2 ring-blue-500/20" />
      <div className="absolute left-[3px] top-[14px] bottom-[-16px] w-px bg-gradient-to-b from-blue-500/30 to-transparent" />
      <div className="mb-1">
        <h4 className="text-[13px] font-semibold text-white leading-tight">{title}</h4>
        {subtitle && (
          <span className="text-[11px] text-blue-400/80">{subtitle}</span>
        )}
      </div>
      <span className="inline-block text-[11px] text-[#555566] bg-white/[0.04] border border-white/[0.06] rounded-full px-2.5 py-0.5 mb-2">
        {period}
      </span>
      {description && (
        <p className="text-[12px] text-[#777788] leading-relaxed">{description}</p>
      )}
    </motion.li>
  );
}

export default function Resume() {
  return (
    <article className="space-y-5">
      <header className="glass rounded-2xl px-6 py-5">
        <h2 className="text-xl font-semibold text-white">Resume</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Education */}
        <div className="glass rounded-2xl p-6">
          <SectionTitle icon={<GraduationCap size={18} />} title="Education" />
          <motion.ol variants={container} initial="hidden" animate="show" className="space-y-5">
            {education.map((edu) => (
              <TimelineItem
                key={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                period={edu.period}
                description={edu.detail}
              />
            ))}
          </motion.ol>
        </div>

        {/* Skills */}
        <div className="glass rounded-2xl p-6">
          <SectionTitle icon={<Award size={18} />} title="My Skills" />
          <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-4"
          >
            {skills.map((skill) => (
              <motion.li key={skill.name} variants={item}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-[12px] text-[#ccccdd]">{skill.name}</span>
                  <span className="text-[11px] text-[#555566]">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                  />
                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Certifications */}
          <div className="mt-6 pt-5 border-t border-white/[0.06]">
            <h4 className="text-[11px] text-[#555566] uppercase tracking-wider mb-3">
              Certifications
            </h4>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/60 mt-[5px] shrink-0" />
                  <div>
                    <p className="text-[12px] text-[#ccccdd]">{cert.name}</p>
                    <p className="text-[11px] text-[#555566]">{cert.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Experience — full width */}
      <div className="glass rounded-2xl p-6">
        <SectionTitle icon={<Briefcase size={18} />} title="Experience" />
        <motion.ol variants={container} initial="hidden" animate="show" className="space-y-6">
          {experience.map((exp) => (
            <TimelineItem
              key={`${exp.company}-${exp.period}`}
              title={`${exp.role} — ${exp.company}`}
              subtitle={exp.type}
              period={exp.period}
              description={exp.description}
            />
          ))}
        </motion.ol>
      </div>
    </article>
  );
}
