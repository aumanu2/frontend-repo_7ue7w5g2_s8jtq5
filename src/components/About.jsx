import React from 'react';

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h2 className="font-serif text-3xl text-[#1A1A1A]">About</h2>
      <p className="mt-3 text-[#1A1A1A]/85">
        My journey has been defined by a rapid, focused immersion into system architecture and high-impact full‑stack development. My approach to system design is rooted in long‑term maintainability, cost optimization, and anticipating future scale. I treat every project as a strategic investment.
      </p>
      <p className="mt-4 text-[#1A1A1A]/85">
        I work end‑to‑end—from discovery and architecture to implementation and measurement—leveraging proven patterns, thoughtful defaults, and data‑driven decisions. The goal is simple: deliver reliable systems that create measurable business value.
      </p>
      <div className="mt-6 p-4 rounded-lg border border-[#BDBDBD]/50 bg-white">
        <h3 className="font-serif text-xl text-[#1A1A1A]">Core Tenets</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-[#1A1A1A]/85">
          <li>Architecture is product strategy at system scale</li>
          <li>Prefer clarity over cleverness; optimize for maintainability</li>
          <li>Quantify outcomes: latency, cost, reliability, and developer velocity</li>
          <li>Instrument everything; let data guide trade‑offs</li>
        </ul>
      </div>
    </section>
  );
}
