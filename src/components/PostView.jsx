import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const CONTENT = {
  'architecting-for-outcomes': {
    title: 'Architecting for Outcomes: From Diagrams to Business Impact',
    body: `Architecture is only as valuable as the outcomes it enables. This article outlines a pragmatic loop: define measurable targets, design to achieve them, instrument relentlessly, and iterate...\n\n1. Set outcome targets (latency, availability, cost, DX).\n2. Map capabilities to outcomes (caching, idempotency, autoscaling, tracing).\n3. Ship in vertical slices and measure deltas.\n4. Use error budgets and SLOs to steer prioritization.`,
    date: '2025-05-01',
    minutes: 9
  },
  'boring-tech-edge': {
    title: 'The Competitive Edge of Boring Tech',
    body: `Novelty is a tax. In core flows, predictability outperforms. This post explores where to innovate (interfaces, experiences) and where to standardize (data plane, build/deploy, observability).`,
    date: '2025-04-15',
    minutes: 7
  },
  'platform-dx-metrics': {
    title: 'Platform DX Metrics That Actually Predict Delivery',
    body: `We walk through a lightweight scorecard that correlates with throughput: PR cycle time, CI success probability, MTTR, environment setup time, and preview deploy coverage.`,
    date: '2025-03-30',
    minutes: 8
  }
};

export default function PostView() {
  const { slug } = useParams();
  const post = CONTENT[slug];
  if (!post) return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <p className="text-[#1A1A1A]/80">Article not found.</p>
      <Link to="/blog" className="text-[#004D40] hover:underline">Back to Blog</Link>
    </section>
  );

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <Link to="/blog" className="text-[#004D40] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded">← Back to Blog</Link>
      <motion.h1 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mt-4 font-serif text-3xl text-[#1A1A1A]">{post.title}</motion.h1>
      <div className="mt-2 text-xs text-[#1A1A1A]/60">{new Date(post.date).toLocaleDateString()} • {post.minutes}-min read</div>
      <article className="prose prose-neutral max-w-none mt-6">
        {post.body.split('\n').map((p, idx) => (
          <p key={idx} className="text-[#1A1A1A]/85 leading-7">{p}</p>
        ))}
      </article>
    </section>
  );
}
