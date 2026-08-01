import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-[1400px] w-full px-6 lg:px-20 transition-all duration-500`}>
        <div className={`flex items-center justify-between transition-all duration-700 ease-out ${
          scrolled 
            ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-2xl px-8 py-3' 
            : 'bg-transparent rounded-none px-0 py-0'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center group relative z-10">
            <img 
              src="/logo.png" 
              alt="TechCity Skills" 
              className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-105 transition-transform duration-500" 
            />
          </Link>
          
          {/* Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="/#courses" 
              className="relative group text-sm font-medium tracking-wide text-text-secondary hover:text-white transition-colors duration-300"
            >
              Programs
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gold group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out rounded-full"></span>
            </a>
            
            <Link 
              to="/about" 
              className={`relative group text-sm font-medium tracking-wide transition-colors duration-300 ${location.pathname === '/about' ? 'text-gold' : 'text-text-secondary hover:text-white'}`}
            >
              About
              <span className={`absolute -bottom-2 left-1/2 h-[2px] bg-gold transition-all duration-300 ease-out rounded-full ${location.pathname === '/about' ? 'w-full left-0' : 'w-0 group-hover:w-full group-hover:left-0'}`}></span>
            </Link>
            
            <a 
              href="/#success" 
              className="relative group text-sm font-medium tracking-wide text-text-secondary hover:text-white transition-colors duration-300"
            >
              Success Stories
              <span className="absolute -bottom-2 left-1/2 w-0 h-[2px] bg-gold group-hover:w-full group-hover:left-0 transition-all duration-300 ease-out rounded-full"></span>
            </a>
          </div>

          {/* Premium CTA */}
          <button className="hidden md:block relative group px-8 py-2.5 rounded-full overflow-hidden border border-gold/30 bg-gold/5 hover:bg-gold/10 hover:border-gold/60 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)] transition-all duration-500">
            <span className="relative z-10 text-[13px] font-bold text-gold tracking-widest uppercase group-hover:text-gold-light transition-colors duration-300">
              Get Started
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
