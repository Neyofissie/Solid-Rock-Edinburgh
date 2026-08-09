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
            {/* Official RCCG Logo */}
            <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center ring-2 ring-white shadow-md overflow-hidden relative">
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/2/2a/Redeemed_Christian_Church_of_God_logo.png" 
                alt="RCCG Logo" 
                className="w-full h-full object-contain p-0.5"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Solid Rock Parish Lighthouse logo */}
            <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-white flex items-center justify-center ring-2 ring-white shadow-md overflow-hidden">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  {/* Metallic gold gradient for the outer bezel */}
                  <linearGradient id="goldRim" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#78350f" />
                    <stop offset="20%" stopColor="#f59e0b" />
                    <stop offset="40%" stopColor="#fef08a" />
                    <stop offset="60%" stopColor="#d97706" />
                    <stop offset="80%" stopColor="#fef08a" />
                    <stop offset="100%" stopColor="#78350f" />
                  </linearGradient>
                  {/* Soft background gradient */}
                  <radialGradient id="darkBg" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#2c3540" />
                    <stop offset="100%" stopColor="#11151c" />
                  </radialGradient>
                </defs>
                
                {/* Background base */}
                <circle cx="50" cy="50" r="48" fill="url(#goldRim)" />
                <circle cx="50" cy="50" r="42" fill="url(#darkBg)" />
                
                {/* Subtle dark grid ring for depth */}
                <circle cx="50" cy="50" r="40" fill="none" stroke="#78350f" strokeWidth="0.5" opacity="0.5" />
                
                {/* Light rays from lighthouse */}
                <polygon points="26,30 10,24 10,36" fill="#fef08a" opacity="0.15" />
                <polygon points="26,30 45,24 45,36" fill="#fef08a" opacity="0.1" />
                
                {/* Rock foundation at bottom-left */}
                <path d="M14,64 Q22,62 31,67 L28,74 Q18,72 13,71 Z" fill="#475569" stroke="#334155" strokeWidth="0.5" />
                <path d="M22,63 L28,67 L25,73 Z" fill="#334155" />
                
                {/* Lighthouse body tower */}
                <path d="M21,63 L23,34 L27,34 L29,63 Z" fill="#ffffff" />
                {/* Blue/black stripes */}
                <path d="M21.9,50 L22.4,42 L27.6,42 L28.1,50 Z" fill="#1e293b" />
                
                {/* Light gallery chamber at top */}
                <rect x="22" y="30" width="6" height="4" fill="#0f172a" rx="0.5" />
                {/* Golden solid dome */}
                <path d="M22,30 Q25,23 28,30 Z" fill="#d97706" stroke="#fbbf24" strokeWidth="0.5" />
                {/* Glowing beacon */}
                <circle cx="25" cy="32" r="1.5" fill="#fef08a" />
                
                {/* Text "Solid" */}
                <text 
                  x="36" 
                  y="40" 
                  fill="#ffffff" 
                  fontSize="10px" 
                  fontWeight="800" 
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="0.25px"
                >
                  Solid
                </text>
                
                {/* Text "ROCK" with the mini RCCG logo as the O */}
                <text 
                  x="36" 
                  y="53" 
                  fill="#ffffff" 
                  fontSize="12.5px" 
                  fontWeight="900" 
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="0.2px"
                >
                  R
                </text>
                
                {/* Tiny exact embedded RCCG emblem as the 'O' in "ROCK" */}
                <image 
                  href="https://upload.wikimedia.org/wikipedia/en/2/2a/Redeemed_Christian_Church_of_God_logo.png" 
                  x="45.5" 
                  y="42" 
                  width="11" 
                  height="11" 
                />
                
                <text 
                  x="58" 
                  y="53" 
                  fill="#ffffff" 
                  fontSize="12.5px" 
                  fontWeight="900" 
                  fontFamily="system-ui, -apple-system, sans-serif"
                  letterSpacing="0.2px"
                >
                  RK
                </text>
                
                {/* Text "Parish" in cursive/gold serif */}
                <text 
                  x="36" 
                  y="62" 
                  fill="#f59e0b" 
                  fontSize="8px" 
                  fontStyle="italic" 
                  fontFamily="Georgia, Cambria, serif"
                  letterSpacing="0.3px"
                >
                  Parish
                </text>
              </svg>
            </div>
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
        <Link to="/watch-live" className="hover:text-brand-primary transition-colors flex items-center gap-1.5 font-semibold text-red-600 hover:text-red-700">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span>Watch Live</span>
        </Link>
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
          <Link to="/watch-live" className="hover:text-red-600 transition-colors py-2 text-red-600 font-bold flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            <span>Watch Live Stream</span>
          </Link>
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
