import React from 'react';

const posts = [
  {
    title: 'The Hidden Cost of Serverless: A 5-Year TCO Analysis',
    summary: 'Modeling traffic patterns, cold starts, and operational overhead to understand the true long-term cost profile of serverless architectures.',
    minutes: 8,
  },
  {
    title: 'Designing for Boring: Why Stability Outweighs Novelty in Core Systems',
    summary: 'A case for conservative tech choices in mission-critical paths and where to place innovation for maximum ROI.',
    minutes: 7,
  },
  {
    title: 'Measuring Developer Experience: Leading Indicators for Platform Teams',
    summary: 'A practical framework for tracking the business impact of internal platform investments.',
    minutes: 6,
  },
];

export default function Insights() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-12">
      <h2 className="font-serif text-3xl text-[#1A1A1A]">Insights</h2>
      <p className="mt-2 text-sm text-[#1A1A1A]/80">Long-form articles on architectural trade-offs, cost models, and system design principles.</p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p.title} className="rounded-xl bg-white border border-[#BDBDBD]/50 p-6 hover:shadow-sm">
            <h3 className="font-serif text-xl text-[#1A1A1A]">{p.title}</h3>
            <p className="mt-3 text-sm text-[#1A1A1A]/80">{p.summary}</p>
            <div className="mt-4 text-xs text-[#1A1A1A]/60">{p.minutes}-minute read</div>
          </article>
        ))}
      </div>
    </section>
  );
}
