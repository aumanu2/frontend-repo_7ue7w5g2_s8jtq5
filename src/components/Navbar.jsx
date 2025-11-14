import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-[#BDBDBD]/40">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between" aria-label="Primary">
        <button onClick={() => navigate('/')} className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded">
          <div className="w-8 h-8 rounded-full bg-[#004D40]" aria-hidden />
          <span className="font-serif text-xl tracking-tight text-[#1A1A1A]">Solutions Architect</span>
        </button>
        <ul className="hidden md:flex items-center gap-6">
          {nav.map(item => (
            <li key={item.href}>
              <NavLink
                to={item.href}
                className={({ isActive }) => `text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded px-1 py-1 ${isActive ? 'text-[#004D40]' : 'text-[#1A1A1A]/70 hover:text-[#1A1A1A]'}`}
                aria-current={pathname === item.href ? 'page' : undefined}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <select
            aria-label="Navigate"
            className="border border-[#BDBDBD] rounded px-2 py-1 bg-white text-sm"
            value={nav.find(n => n.href === pathname)?.href || ''}
            onChange={(e) => navigate(e.target.value)}
          >
            {nav.map(item => (
              <option key={item.href} value={item.href}>{item.label}</option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}
