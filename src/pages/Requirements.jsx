import React from 'react';
import { motion } from 'framer-motion';

export default function Requirements() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-20 max-w-[1400px] w-full mx-auto min-h-screen flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 mb-6 bg-gold/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest text-gold uppercase">Coming Soon</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Project Requirements</h1>
        <p className="text-text-secondary font-light text-lg">
          The requirements for live projects will be available here soon. Stay tuned!
        </p>
      </motion.div>
    </main>
  );
}
