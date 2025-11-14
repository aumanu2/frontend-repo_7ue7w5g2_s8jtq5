import React from 'react';

const palette = [
  { name: 'Off-White', hex: '#F9F9F9' },
  { name: 'Deep Charcoal', hex: '#1A1A1A' },
  { name: 'Muted Gray', hex: '#BDBDBD' },
  { name: 'Primary Accent (Dark Teal)', hex: '#004D40' },
];

export default function StyleGuide() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <h2 className="font-serif text-3xl text-[#1A1A1A]">Style Guide</h2>
      <p className="mt-2 text-sm text-[#1A1A1A]/80">Typography, color palette, and components used across the site.</p>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="font-serif text-2xl text-[#1A1A1A]">Typography</h3>
          <div className="mt-4 space-y-4">
            <div>
              <div className="text-xs uppercase tracking-wide text-[#1A1A1A]/60">Headings (Serif: Playfair / Lora / Merriweather)</div>
              <div className="font-serif text-4xl">A hierarchy rooted in classic proportions</div>
              <div className="font-serif text-2xl">Major Third scale</div>
              <div className="font-serif text-xl">H3 subtitle example</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-[#1A1A1A]/60">Body (Sans: Inter)</div>
              <p className="text-base leading-7 text-[#1A1A1A]/90">
                Body text uses a modern, high-contrast sans-serif optimized for long-form reading. Line height and measure are tuned for readability.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-[#1A1A1A]">Colors</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {palette.map((c) => (
              <div key={c.hex} className="p-4 rounded-lg border border-[#BDBDBD]/50 bg-white">
                <div className="h-16 rounded" style={{ backgroundColor: c.hex }} />
                <div className="mt-2 text-sm font-medium text-[#1A1A1A]">{c.name}</div>
                <div className="text-xs text-[#1A1A1A]/70">{c.hex}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-serif text-2xl text-[#1A1A1A]">Components</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          <button className="bg-[#004D40] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#003831]">Primary CTA</button>
          <button className="border border-[#BDBDBD] text-[#1A1A1A] px-4 py-2 rounded-md text-sm hover:bg-white">Secondary</button>
          <span className="px-2 py-1 rounded bg-[#004D40]/10 text-[#004D40] text-xs">Badge</span>
        </div>
      </div>
    </section>
  );
}
