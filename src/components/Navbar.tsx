import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <div className="flex -space-x-2">
          <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white text-sm font-bold ring-2 ring-white shadow-sm">RCCG</div>
          <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-white text-sm font-bold ring-2 ring-white shadow-sm">SRP</div>
        </div>
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">
        <Link to="/#welcome" className="hover:text-brand-primary transition-colors">Our Expression</Link>
        <Link to="/blog" className="text-brand-primary hover:text-green-800 transition-colors">Blog</Link>
        <Link to="/#volunteers" className="hover:text-brand-primary transition-colors">Volunteers</Link>
        <Link to="/#welcome" className="hover:text-brand-primary transition-colors">About</Link>
        <Link to="/#contact" className="hover:text-brand-primary transition-colors">Contact</Link>
      </div>

      <Link to="/#contact" className="inline-block bg-brand-primary text-white font-medium px-6 py-2.5 rounded hover:bg-green-800 transition-colors">
        Join us now
      </Link>
    </nav>
  );
}
