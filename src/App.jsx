import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';

// Lazy-load route sections for performance
const Hero = lazy(() => import('./components/Hero'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const CaseStudyView = lazy(() => import('./components/CaseStudyView'));
const About = lazy(() => import('./components/About'));
const Blog = lazy(() => import('./components/Blog'));
const PostView = lazy(() => import('./components/PostView'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F9F9F9] text-[#1A1A1A]">
        {/* Skip link for accessibility */}
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-white focus:border focus:border-[#004D40] focus:text-[#004D40] focus:px-3 focus:py-2 focus:rounded">Skip to content</a>
        <Navbar />
        <main id="main">
          <Suspense fallback={<div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 text-sm text-[#1A1A1A]/60">Loading…</div>}>
            <Routes>
              <Route index element={<Hero onExploreHref="/case-studies" onReadBlogHref="/blog" />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:slug" element={<CaseStudyView />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<PostView />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
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
    </BrowserRouter>
  );
}

export default App;
