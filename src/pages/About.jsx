import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-20 max-w-[1400px] w-full mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20 mt-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 mb-8 bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
          <span className="text-xs font-bold tracking-widest text-text-secondary uppercase">Our Mission</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Redefining Tech Education.</h1>
        <p className="text-lg text-text-secondary font-light leading-relaxed">
          TechCity Skills was founded on a singular premise: to bridge the chasm between academic theory and industry reality. We build engineering leaders, not just coders.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-sm border border-white/5 bg-surface overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gold/5"></div>
            <div className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
                backgroundSize: '2rem 2rem',
                maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
              }}></div>
            <div className="absolute inset-0 flex items-center justify-center text-text-secondary/10 font-bold text-7xl tracking-widest uppercase rotate-[-45deg]">
              Vision
            </div>
            {/* Elegant overlay element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-gold/30 rounded-full flex items-center justify-center">
               <div className="w-16 h-16 border border-gold/50 rounded-sm transform rotate-45"></div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col justify-center gap-10"
        >
          <div className="flex gap-6 group">
            <div className="w-14 h-14 shrink-0 bg-background border border-white/5 flex items-center justify-center rounded-sm text-gold group-hover:border-gold/50 transition-colors">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Global Standards</h3>
              <p className="text-text-secondary font-light text-sm leading-relaxed">Our curriculum is directly vetted by hiring managers across Silicon Valley and top global tech hubs.</p>
            </div>
          </div>
          
          <div className="flex gap-6 group">
            <div className="w-14 h-14 shrink-0 bg-background border border-white/5 flex items-center justify-center rounded-sm text-gold group-hover:border-gold/50 transition-colors">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Future-Proof Stack</h3>
              <p className="text-text-secondary font-light text-sm leading-relaxed">We don't teach legacy systems. Our programs focus heavily on GenAI, advanced system design, and modern cloud architectures.</p>
            </div>
          </div>
          
          <div className="flex gap-6 group">
            <div className="w-14 h-14 shrink-0 bg-background border border-white/5 flex items-center justify-center rounded-sm text-gold group-hover:border-gold/50 transition-colors">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Outcome Driven</h3>
              <p className="text-text-secondary font-light text-sm leading-relaxed">100% of our programs are mapped directly to verifiable industry skills, ensuring our graduates are deployable from day one.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
