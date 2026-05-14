'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, RefreshCw } from 'lucide-react';
import { blogPosts } from '@/data/content';

interface RssPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
}

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

function stripHtml(html: string) {
  return html.replace(/<[^>]*>/g, '').slice(0, 160);
}

export default function Blog() {
  const [posts, setPosts] = useState<RssPost[]>(blogPosts);
  const [loading, setLoading] = useState(true);
  const [fromRss, setFromRss] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40mertthedev&count=6',
      { signal: controller.signal }
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
          const mapped: RssPost[] = data.items.map(
            (
              p: { title: string; pubDate: string; link: string; description: string; thumbnail: string; categories: string[] },
              i: number
            ) => ({
              id: i + 1,
              title: p.title,
              category: p.categories?.[0] ?? 'Swift',
              date: new Date(p.pubDate).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              }),
              excerpt: stripHtml(p.description),
              image: p.thumbnail || blogPosts[i % blogPosts.length]?.image || '',
              link: p.link,
            })
          );
          setPosts(mapped);
          setFromRss(true);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return (
    <article className="space-y-5">
      <header className="glass rounded-2xl px-6 py-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Blog</h2>
        <div className="flex items-center gap-2">
          {loading && <RefreshCw size={13} className="text-[#444455] animate-spin" />}
          {fromRss && !loading && (
            <span className="text-[10px] text-green-400 bg-green-500/10 border border-green-500/20 rounded-full px-2 py-0.5">
              Live from Medium
            </span>
          )}
        </div>
      </header>

      <motion.ul variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <motion.li key={post.id} variants={item}>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-blue-500/20 transition-all duration-300 h-full"
            >
              <div className="relative h-40 overflow-hidden bg-[#0d0d14]">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    unoptimized={post.image.startsWith('http')}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111118]/60 to-transparent" />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[post.category] ?? 'text-blue-400 bg-blue-500/10 border-blue-500/20'}`}>
                    {post.category}
                  </span>
                  <span className="text-[11px] text-[#444455]">{post.date}</span>
                </div>

                <h3 className="text-[13px] font-medium text-white group-hover:text-blue-400 transition-colors leading-snug mb-2 line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-[12px] text-[#555566] leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-1 mt-3 text-[11px] text-[#444455] group-hover:text-blue-400 transition-colors">
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
