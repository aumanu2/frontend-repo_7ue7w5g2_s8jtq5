import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Insights from './components/Insights';
import StyleGuide from './components/StyleGuide';
import ArchitectureDoc from './components/ArchitectureDoc';
import './index.css';

function App() {
  const [section, setSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1A1A1A]">
      <Navbar current={section} onNavigate={setSection} />
      <main>
        {section === 'home' && <Hero onExplore={() => setSection('case-studies')} />}
        {section === 'case-studies' && <CaseStudies />}
        {section === 'about' && <About />}
        {section === 'insights' && <Insights />}
        {section === 'style' && <StyleGuide />}
        {section === 'architecture' && <ArchitectureDoc />}
      </main>
      <footer className="mt-16 border-t border-[#BDBDBD]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-[#1A1A1A]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} — Strategic Systems Architecture</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#004D40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded" href="#" aria-label="LinkedIn">LinkedIn</a>
            <a className="hover:text-[#004D40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded" href="#" aria-label="GitHub">GitHub</a>
            <a className="hover:text-[#004D40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded" href="#" aria-label="Email">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
