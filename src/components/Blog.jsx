import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const posts = [
  {
    slug: 'architecting-for-outcomes',
    title: 'Architecting for Outcomes: From Diagrams to Business Impact',
    summary: 'A practical blueprint for turning architectural intent into measurable results across latency, cost, and reliability.',
    minutes: 9,
    date: '2025-05-01'
  },
  {
    slug: 'boring-tech-edge',
    title: 'The Competitive Edge of Boring Tech',
    summary: 'Why conservative choices in core paths create compounding velocity and fewer incidents.',
    minutes: 7,
    date: '2025-04-15'
  },
  {
    slug: 'platform-dx-metrics',
    title: 'Platform DX Metrics That Actually Predict Delivery',
    summary: 'From PR cycle time to deployment pain index—leading indicators you can instrument today.',
    minutes: 8,
    date: '2025-03-30'
  }
];

export default function Blog() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl text-[#1A1A1A]">Blog</h2>
          <p className="mt-2 text-sm text-[#1A1A1A]/80">Long-form thoughts on architecture, velocity, and platform strategy.</p>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {posts.map((p, i) => (
          <motion.article 
            key={p.slug} 
            initial={{ opacity: 0, y: 8 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-xl bg-white border border-[#BDBDBD]/50 p-6 hover:shadow-sm"
          >
            <div className="text-xs text-[#1A1A1A]/60">{new Date(p.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })} • {p.minutes}-min read</div>
            <h3 className="mt-2 font-serif text-xl text-[#1A1A1A]">{p.title}</h3>
            <p className="mt-3 text-sm text-[#1A1A1A]/80">{p.summary}</p>
            <Link 
              to={`/blog/${p.slug}`}
              className="mt-4 inline-flex text-[#004D40] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded"
              aria-label={`Read: ${p.title}`}
            >
              Read article →
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
