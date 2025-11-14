import React from 'react';

export default function Hero({ onExplore }) {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight">
              Fullstack Software Engineer & Solutions Architect
            </h1>
            <p className="mt-6 text-base sm:text-lg text-[#1A1A1A]/80">
              I architect and build scalable web applications and AI-powered solutions that drive business value.
            </p>
            <div className="mt-8">
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 bg-[#004D40] text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-[#003831] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]"
              >
                Explore Case Studies
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-white shadow-sm border border-[#BDBDBD]/50 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#004D40]/10 to-transparent" aria-hidden />
              <div className="p-6 sm:p-8 flex flex-col gap-4">
                <div className="text-sm font-medium text-[#1A1A1A]/70">Architecture Principles</div>
                <ul className="text-sm text-[#1A1A1A]/80 space-y-2 list-disc pl-5">
                  <li>Design for long-term maintainability</li>
                  <li>Optimize for cost and operational simplicity</li>
                  <li>Bias towards boring tech for core systems</li>
                  <li>Use data to validate decisions and quantify impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
