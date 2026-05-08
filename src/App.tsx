import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import BlogPostPage from './pages/BlogPost';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-sans text-gray-900 bg-white min-h-screen relative overflow-hidden flex flex-col">
      {/* Faint Grid Background covering the whole screen, -z-10 */}
      <div className="absolute inset-0 bg-grid z-0 pointer-events-none" />
      <Navbar />
      <main className="flex-1 relative z-10">
        {children}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/blog/:id" element={<Layout><BlogPostPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
