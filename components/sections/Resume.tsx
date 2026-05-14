'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Languages } from 'lucide-react';
import { education, experience, skills, certifications, languages } from '@/data/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.065 } },
};
const item = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

const langColorMap: Record<string, string> = {
  blue: 'from-blue-500 to-blue-400',
  purple: 'from-purple-500 to-purple-400',
  emerald: 'from-emerald-500 to-emerald-400',
  amber: 'from-amber-500 to-amber-400',
};

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
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
  isLast = false,
}: {
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
  isLast?: boolean;
}) {
  return (
    <motion.li variants={item} className="relative pl-5">
      {/* Dot */}
      <div className="absolute left-0 top-[7px] w-2 h-2 rounded-full bg-blue-500/70 ring-2 ring-blue-500/20" />
      {/* Line */}
      {!isLast && (
        <div className="absolute left-[3px] top-[16px] bottom-[-20px] w-px bg-gradient-to-b from-blue-500/25 to-transparent" />
      )}

      <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
        <h4 className="text-[13px] font-semibold text-white leading-snug">{title}</h4>
        {subtitle && (
          <span className="text-[11px] text-blue-400/80 shrink-0">{subtitle}</span>
        )}
      </div>
      <span className="inline-flex items-center text-[11px] text-[#555566] bg-white/[0.04] border border-white/[0.06] rounded-full px-2.5 py-0.5 mb-2">
        {period}
      </span>
      {description && (
        <p className="text-[12px] text-[#6e6e80] leading-relaxed">{description}</p>
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

      {/* Education + Skills side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Education */}
        <div className="glass rounded-2xl p-6">
          <SectionTitle icon={<GraduationCap size={17} />} title="Education" />
          <motion.ol variants={container} initial="hidden" animate="show" className="space-y-5">
            {education.map((edu, i) => (
              <TimelineItem
                key={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                period={edu.period}
                description={edu.detail}
                isLast={i === education.length - 1}
              />
            ))}
          </motion.ol>
        </div>

        {/* Skills + Certifications + Languages */}
        <div className="glass rounded-2xl p-6 space-y-6">
          {/* Skills */}
          <div>
            <SectionTitle icon={<Award size={17} />} title="Skills" />
            <motion.ul variants={container} initial="hidden" animate="show" className="space-y-4">
              {skills.map((skill) => (
                <motion.li key={skill.name} variants={item}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[12px] text-[#ccccdd]">{skill.name}</span>
                    <span className="text-[11px] text-[#444455]">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
                    />
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Certifications */}
          <div className="pt-4 border-t border-white/[0.06]">
            <h4 className="text-[11px] text-[#444455] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-blue-500/60 inline-block" />
              Certifications
            </h4>
            <ul className="space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/60 mt-[5px] shrink-0" />
                  <div>
                    <p className="text-[12px] text-[#ccccdd]">{cert.name}</p>
                    <p className="text-[11px] text-[#444455]">{cert.year}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Languages */}
          <div className="pt-4 border-t border-white/[0.06]">
            <h4 className="text-[11px] text-[#444455] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-1 h-3 rounded-full bg-emerald-500/60 inline-block" />
              Languages
            </h4>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[12px] text-[#ccccdd]">{lang.name}</span>
                    <span className="text-[11px] text-[#444455]">{lang.level}</span>
                  </div>
                  <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${langColorMap[lang.color] ?? 'from-blue-500 to-blue-400'}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${lang.width}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Experience full width */}
      <div className="glass rounded-2xl p-6">
        <SectionTitle icon={<Briefcase size={17} />} title="Experience" />
        <motion.ol variants={container} initial="hidden" animate="show" className="space-y-6">
          {experience.map((exp, i) => (
            <TimelineItem
              key={`${exp.company}-${exp.period}`}
              title={`${exp.role} — ${exp.company}`}
              subtitle={exp.type}
              period={exp.period}
              description={exp.description}
              isLast={i === experience.length - 1}
            />
          ))}
        </motion.ol>
      </div>
    </article>
  );
}
