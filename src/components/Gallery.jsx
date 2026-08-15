import React from 'react';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg"
  ];

  return (
    <section className="py-24 bg-surface overflow-hidden border-b border-white/5">
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Training Sessions</h2>
        <p className="text-text-secondary font-light">Glimpses of our immersive, hands-on engineering programs.</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex items-center gap-6 py-4 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...images, ...images].map((src, i) => (
            <div key={i} className="w-[300px] md:w-[450px] h-[200px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden bg-background border border-white/5 relative group-hover:border-gold/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-[#161616] flex items-center justify-center text-white/20 text-sm font-bold uppercase tracking-widest">
                Placeholder
              </div>
              <img 
                src={src} 
                alt="Training Session" 
                className="w-full h-full object-cover relative z-10 opacity-0 transition-opacity duration-300"
                onLoad={(e) => e.target.classList.remove('opacity-0')}
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
