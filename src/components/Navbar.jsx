import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Radio } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isProjectsActive = location.pathname === '/projects' || location.pathname === '/ongoing-projects';
  const isAboutActive = location.pathname === '/about';

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
            ? 'bg-[#0A0A0A]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] rounded-2xl px-6 lg:px-8 py-3' 
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
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            <a 
              href="/#courses" 
              className="relative group text-sm font-medium tracking-wide text-text-secondary hover:text-white transition-colors duration-300"
            >
              Programs
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300 ease-out rounded-full"></span>
            </a>

            <Link 
              to="/projects" 
              className={`relative group text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${
                isProjectsActive ? 'text-gold' : 'text-text-secondary hover:text-white'
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Ongoing Projects
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-gold transition-all duration-300 ease-out rounded-full ${
                isProjectsActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <Link 
              to="/about" 
              className={`relative group text-sm font-medium tracking-wide transition-colors duration-300 ${
                isAboutActive ? 'text-gold' : 'text-text-secondary hover:text-white'
              }`}
            >
              About
              <span className={`absolute -bottom-2 left-0 h-[2px] bg-gold transition-all duration-300 ease-out rounded-full ${
                isAboutActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
            
            <a 
              href="/#success" 
              className="relative group text-sm font-medium tracking-wide text-text-secondary hover:text-white transition-colors duration-300"
            >
              Success Stories
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-300 ease-out rounded-full"></span>
            </a>
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/projects"
              className="relative group px-6 py-2.5 rounded-full overflow-hidden border border-gold/40 bg-gold/10 hover:bg-gold/20 hover:border-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.25)] transition-all duration-500 flex items-center gap-2"
            >
              <Radio className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span className="relative z-10 text-[12px] font-bold text-gold tracking-widest uppercase group-hover:text-gold-light transition-colors duration-300">
                Live Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold/0 via-gold/15 to-gold/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-gold transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-4 text-base">
              <a 
                href="/#courses" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-gold transition-colors py-2 border-b border-white/5"
              >
                Programs
              </a>
              <Link 
                to="/projects" 
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-white/5 flex items-center justify-between ${
                  isProjectsActive ? 'text-gold font-bold' : 'text-text-secondary hover:text-gold'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold animate-ping"></span>
                  Ongoing Projects
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30">
                  8 Hubs
                </span>
              </Link>
              <Link 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 border-b border-white/5 ${
                  isAboutActive ? 'text-gold font-bold' : 'text-text-secondary hover:text-gold'
                }`}
              >
                About Us
              </Link>
              <a 
                href="/#success" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-text-secondary hover:text-gold transition-colors py-2"
              >
                Success Stories
              </a>
              <div className="pt-4">
                <Link
                  to="/projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-full bg-gold text-black text-center font-bold text-xs uppercase tracking-wider block"
                >
                  Explore Ongoing Projects Map
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
