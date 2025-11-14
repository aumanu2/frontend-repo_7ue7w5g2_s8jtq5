import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CaseStudyCard({ title, challenge, impact, onClick }) {
  return (
    <article className="group rounded-xl bg-white border border-[#BDBDBD]/50 p-6 hover:shadow-sm transition-all duration-300 hover:-translate-y-0.5" role="button" tabIndex={0} onClick={onClick} onKeyDown={(e)=> e.key==='Enter' && onClick()}>
      <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#004D40] transition-colors">{title}</h3>
      <p className="mt-3 text-sm text-[#1A1A1A]/80 line-clamp-3"><strong className="text-[#1A1A1A]">Challenge:</strong> {challenge}</p>
      <p className="mt-2 text-sm text-[#1A1A1A]/80"><strong className="text-[#1A1A1A]">Impact:</strong> {impact}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-[#004D40] text-sm">Read more <ChevronRight size={16} /></div>
    </article>
  );
}
