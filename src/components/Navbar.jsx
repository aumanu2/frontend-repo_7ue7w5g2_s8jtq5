import React from 'react';

const navItems = [
  { key: 'home', label: 'Home' },
  { key: 'case-studies', label: 'Case Studies' },
  { key: 'about', label: 'About' },
  { key: 'insights', label: 'Insights' },
  { key: 'style', label: 'Style Guide' },
  { key: 'architecture', label: 'Tech Architecture' },
];

export default function Navbar({ current, onNavigate }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-[#BDBDBD]/40">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between" aria-label="Primary">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#004D40]" aria-hidden />
          <span className="font-serif text-xl tracking-tight text-[#1A1A1A]">Solutions Architect</span>
        </div>
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map(item => (
            <li key={item.key}>
              <button
                onClick={() => onNavigate(item.key)}
                className={`text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded px-1 py-1 ${
                  current === item.key ? 'text-[#004D40]' : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'
                }`}
                aria-current={current === item.key ? 'page' : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <select
            aria-label="Navigate"
            className="border border-[#BDBDBD] rounded px-2 py-1 bg-white text-sm"
            value={current}
            onChange={(e) => onNavigate(e.target.value)}
          >
            {navItems.map(item => (
              <option key={item.key} value={item.key}>{item.label}</option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}
