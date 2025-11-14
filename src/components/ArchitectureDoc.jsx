import React from 'react';

export default function ArchitectureDoc() {
  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h2 className="font-serif text-3xl text-[#1A1A1A]">Technical Architecture</h2>
      <p className="mt-3 text-[#1A1A1A]/85">
        This site is designed for performance, accessibility, and longevity. The frontend is a modern SPA using a minimal, high-contrast design system with semantic HTML and ARIA support. The backend uses a lightweight API to enable future dynamic content such as case studies and insights served from a database.
      </p>
      <ul className="mt-6 list-disc pl-6 space-y-2 text-[#1A1A1A]/85">
        <li>Performance-first: optimized assets, minimal JS, lazy rendering where appropriate</li>
        <li>Accessibility: WCAG 2.1 AA contrast, focus states, keyboard navigation</li>
        <li>SEO: semantic headings, descriptive metadata, Open Graph/Twitter tags</li>
        <li>Scalability: backend endpoints ready for persistence with MongoDB</li>
      </ul>

      <div className="mt-8 p-4 rounded-lg border border-[#BDBDBD]/50 bg-white">
        <h3 className="font-serif text-xl text-[#1A1A1A]">High-Level Diagram</h3>
        <p className="mt-2 text-sm text-[#1A1A1A]/80">A simplified C4-style view:</p>
        <ol className="mt-3 space-y-2 text-sm text-[#1A1A1A]/85 list-decimal pl-6">
          <li>User interacts with the SPA (static assets served via CDN)</li>
          <li>SPA fetches content from Backend API</li>
          <li>Backend reads/writes documents to MongoDB</li>
          <li>Observability via server logs and browser performance metrics</li>
        </ol>
      </div>

      <div className="mt-8">
        <h3 className="font-serif text-xl text-[#1A1A1A]">Performance Checklist</h3>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-sm text-[#1A1A1A]/85">
          <li>Preconnects for fonts, system font fallbacks</li>
          <li>Compressed images and vector icons</li>
          <li>Accessible colors and focus rings</li>
          <li>Metadata ready for social sharing control</li>
        </ul>
      </div>
    </section>
  );
}
