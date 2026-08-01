import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5">
      {/* Very subtle background gradient */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mb-8 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">Premier EdTech Platform</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white">
            Upskill for <br/> Tomorrow's <br/>
            <span className="text-gold">Tech City.</span>
          </h1>
          
          <p className="text-lg text-text-secondary mb-10 max-w-lg font-light leading-relaxed">
            Industry-led courses designed to bridge the gap between academic knowledge and corporate demand. Clean, focused, and outcome-driven.
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <button className="bg-gold text-black px-8 py-4 rounded-sm font-semibold hover:bg-gold-light transition-all duration-300">
              Explore Programs
            </button>
            
            <button className="flex items-center gap-3 px-8 py-4 rounded-sm font-medium text-white group hover:text-gold transition-colors">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                <Play className="w-4 h-4" />
              </div>
              Watch Demo
            </button>
          </div>
        </motion.div>
        
        {/* Right Minimal Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-end relative"
        >
          <div className="relative w-[500px] h-[500px] border border-white/5 rounded-full flex items-center justify-center">
            <div className="w-[350px] h-[350px] border border-gold/20 rounded-full flex items-center justify-center">
              <div className="w-[200px] h-[200px] border border-gold/40 rounded-full flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-gold/5 rounded-full animate-pulse"></div>
                 {/* Center geometric element */}
                 <div className="w-16 h-16 bg-surface border border-gold/30 rounded-sm transform rotate-45 shadow-[0_0_30px_rgba(212,175,55,0.15)] flex items-center justify-center">
                    <div className="w-8 h-8 border border-gold/50 rounded-sm"></div>
                 </div>
              </div>
            </div>
            
            {/* Minimal Floating Badge */}
            <div className="absolute top-20 right-10 bg-surface border border-white/10 px-6 py-4 rounded-sm shadow-2xl flex items-center gap-4">
               <div className="text-gold font-bold text-2xl">4.9/5</div>
               <div className="text-xs text-text-secondary uppercase tracking-widest leading-tight">Learner<br/>Rating</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
