import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 w-full max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-brand-primary flex items-center justify-center text-white text-xs md:text-sm font-bold ring-2 ring-white shadow-sm">RCCG</div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs md:text-sm font-bold ring-2 ring-white shadow-sm">SRP</div>
          </div>
        </Link>
        
        {/* Mobile Menu Button - Moved next to Join Us Now inside mobile layout */}
        <div className="flex items-center gap-4 md:hidden">
          <Link to="/#contact" className="inline-block bg-brand-primary text-white font-medium px-4 py-2 text-sm rounded hover:bg-green-800 transition-colors">
            Join us
          </Link>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-gray-900 hover:text-brand-primary transition-colors focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-800">
        <Link to="/#welcome" className="hover:text-brand-primary transition-colors">Our Expression</Link>
        <Link to="/blog" className="hover:text-brand-primary transition-colors">Blog</Link>
        <Link to="/#volunteers" className="hover:text-brand-primary transition-colors">Volunteers</Link>
        <Link to="/#welcome" className="hover:text-brand-primary transition-colors">About</Link>
        <Link to="/#contact" className="hover:text-brand-primary transition-colors">Contact</Link>
      </div>

      <div className="hidden md:block">
        <Link to="/#contact" className="inline-block bg-brand-primary text-white font-medium px-6 py-2.5 rounded hover:bg-green-800 transition-colors">
          Join us now
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top-2 flex flex-col gap-4 text-center bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-gray-100 font-medium text-gray-800">
          <Link to="/#welcome" className="hover:text-brand-primary transition-colors py-2">Our Expression</Link>
          <Link to="/blog" className="hover:text-brand-primary transition-colors py-2">Blog</Link>
          <Link to="/#volunteers" className="hover:text-brand-primary transition-colors py-2">Volunteers</Link>
          <Link to="/#welcome" className="hover:text-brand-primary transition-colors py-2">About</Link>
          <Link to="/#contact" className="hover:text-brand-primary transition-colors py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
