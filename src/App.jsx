import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import About from './components/About';
import Blog from './components/Blog';
import PostView from './components/PostView';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [section, setSection] = useState('home');
  const [activePost, setActivePost] = useState(null);

  const goToPost = (slug) => {
    setActivePost(slug);
    setSection('post');
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1A1A1A]">
      <Navbar current={section} onNavigate={(key)=>{
        if(key!== 'post') setActivePost(null);
        setSection(key);
      }} />
      <main>
        {section === 'home' && <Hero onExplore={() => setSection('case-studies')} onReadBlog={() => setSection('blog')} />}
        {section === 'case-studies' && <CaseStudies />}
        {section === 'about' && <About />}
        {section === 'blog' && <Blog onOpenPost={goToPost} />}
        {section === 'post' && activePost && <PostView slug={activePost} onBack={() => setSection('blog')} />}
        {section === 'contact' && <Contact />}
      </main>
      <footer className="mt-16 border-t border-[#BDBDBD]/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 text-sm text-[#1A1A1A]/70 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} — Strategic Systems Architecture</div>
          <div className="flex items-center gap-4">
            <a className="hover:text-[#004D40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded" href="#" aria-label="LinkedIn">LinkedIn</a>
            <a className="hover:text-[#004D40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded" href="#" aria-label="GitHub">GitHub</a>
            <a className="hover:text-[#004D40] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004D40] rounded" href="mailto:hello@example.com" aria-label="Email">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
