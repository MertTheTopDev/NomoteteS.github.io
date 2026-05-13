'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/data/content';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const categoryColors: Record<string, string> = {
  Swift: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
  Insights: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  Questions: 'text-green-400 bg-green-500/10 border-green-500/20',
};

export default function Blog() {
  return (
    <article className="space-y-5">
      <header className="glass rounded-2xl px-6 py-5">
        <h2 className="text-xl font-semibold text-white">Blog</h2>
      </header>

      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {blogPosts.map((post) => (
          <motion.li key={post.id} variants={item}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/20 transition-all duration-300 h-full"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden bg-[#0d0d14]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                      categoryColors[post.category] ??
                      'text-blue-400 bg-blue-500/10 border-blue-500/20'
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#444455]">{post.date}</span>
                </div>

                <h3 className="text-[13px] font-medium text-white group-hover:text-blue-400 transition-colors leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[12px] text-[#666677] leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 mt-3 text-[11px] text-[#555566] group-hover:text-blue-400 transition-colors">
                  <span>Read on Medium</span>
                  <ArrowUpRight size={12} />
                </div>
              </div>
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </article>
  );
}
