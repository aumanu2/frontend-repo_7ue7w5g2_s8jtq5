import React from 'react';

export default function CaseStudyCard({ title, challenge, impact, onClick }) {
  return (
    <article className="group rounded-xl bg-white border border-[#BDBDBD]/50 p-6 hover:shadow-sm transition-shadow" role="button" tabIndex={0} onClick={onClick} onKeyDown={(e)=> e.key==='Enter' && onClick()}>
      <h3 className="font-serif text-xl text-[#1A1A1A] group-hover:text-[#004D40]">{title}</h3>
      <p className="mt-3 text-sm text-[#1A1A1A]/80 line-clamp-3"><strong className="text-[#1A1A1A]">Challenge:</strong> {challenge}</p>
      <p className="mt-2 text-sm text-[#1A1A1A]/80"><strong className="text-[#1A1A1A]">Impact:</strong> {impact}</p>
    </article>
  );
}
