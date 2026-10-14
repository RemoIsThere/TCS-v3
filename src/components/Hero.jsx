import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden border-b border-white/5">
      {/* Very subtle background gradient */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-white/3 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mb-6 sm:mb-8 bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
            <span className="text-xs font-medium tracking-wide text-text-secondary uppercase">Premier EdTech Platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-5 sm:mb-6 text-white">
            Upskill for <br/> Tomorrow's <br/>
            <span className="text-gold">Tech City.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-text-secondary mb-8 sm:mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
            Industry-led courses designed to bridge the gap between academic knowledge and corporate demand. Clean, focused, and outcome-driven.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6">
            <a href="#courses" className="w-full sm:w-auto inline-block text-center bg-gold text-black px-8 py-4 rounded-sm font-semibold hover:bg-gold-light transition-all duration-300">
              Explore Programs
            </a>
            
            <a href="#courses" className="flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-medium text-white group hover:text-gold transition-colors w-full sm:w-auto">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-gold transition-colors">
                <Play className="w-4 h-4" />
              </div>
              Watch Demo
            </a>
          </div>
        </motion.div>
        
        {/* Right — Logo Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:flex justify-center items-center relative"
        >
          {/* Ambient rings — grey/dark tones */}
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[540px] h-[540px] rounded-full border border-white/10"
          />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute w-[430px] h-[430px] rounded-full border border-white/15"
          />

          {/* Logo container */}
          <div className="relative w-[420px] h-[420px] flex items-center justify-center">
            {/* Dark radial glow — greyish */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[-20px] bg-white/5 rounded-full blur-[70px]"
            />
            <motion.div
              className="absolute inset-0 rounded-full blur-[40px] bg-slate-400/10"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />

            {/* Logo — animated float + glow */}
            <motion.img
              src="/removed bg logo.png"
              alt="TechCity Skills"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_45px_rgba(180,180,180,0.4)]"
            />
          </div>

          {/* Floating Rating Badge */}
          <div className="absolute top-10 right-0 bg-surface border border-white/10 px-6 py-4 rounded-sm shadow-2xl flex items-center gap-4">
            <div className="text-gold font-bold text-2xl">4.9/5</div>
            <div className="text-xs text-text-secondary uppercase tracking-widest leading-tight">Learner<br/>Rating</div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
