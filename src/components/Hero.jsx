import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onExplore, onReadBlog }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,77,64,0.08),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(0,77,64,0.06),transparent_35%)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] leading-tight"
            >
              Fullstack Engineer & Solutions Architect
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base sm:text-lg text-[#1A1A1A]/80"
            >
              I architect and build scalable web platforms and AI-enabled systems that deliver measurable business outcomes.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={onExplore}
                className="inline-flex items-center gap-2 bg-[#004D40] text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-[#003831] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]"
              >
                Explore Case Studies
              </button>
              <button
                onClick={onReadBlog}
                className="inline-flex items-center gap-2 border border-[#BDBDBD] text-[#1A1A1A] px-5 py-3 rounded-md text-sm font-semibold hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40]"
              >
                Read the Blog
              </button>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-[4/3] rounded-xl bg-white shadow-sm border border-[#BDBDBD]/50 overflow-hidden"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
