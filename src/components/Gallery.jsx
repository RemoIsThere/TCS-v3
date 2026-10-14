import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const trainingImages = [
  {
    src: "/gallery/1.jpeg",
    title: "Interactive Classroom Training",
    category: "Cohort Session"
  },
  {
    src: "/gallery/2.jpeg",
    title: "Hands-on Technical Workshop",
    category: "Live Engineering"
  },
  {
    src: "/gallery/3.jpeg",
    title: "1:1 Mentorship & Code Review",
    category: "Practical Guidance"
  },
  {
    src: "/gallery/4.jpeg",
    title: "Collaborative Student Lab",
    category: "Team Projects"
  },
  {
    src: "/gallery/5.jpeg",
    title: "Specialized Technical Seminars",
    category: "System Design"
  },
  {
    src: "/gallery/6.jpeg",
    title: "Industry Readiness & Demonstrations",
    category: "Project Showcase"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-surface overflow-hidden border-b border-white/5 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 mb-4 bg-gold/5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold tracking-widest text-gold uppercase">Campus &amp; Labs</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Training Sessions</h2>
          <p className="text-text-secondary font-light max-w-xl">
            Glimpses of our immersive, hands-on engineering programs and real classroom cohorts.
          </p>
        </div>

        {/* Visit Gallery CTA */}
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold text-black font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] group shrink-0 self-start sm:self-auto"
        >
          <span>Visit Gallery</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Infinite scrolling marquee */}
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex items-center gap-6 py-4 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...trainingImages, ...trainingImages].map((item, i) => (
            <div 
              key={i} 
              onClick={() => setSelectedImage(item)}
              className="w-[280px] sm:w-[380px] md:w-[450px] h-[190px] sm:h-[260px] md:h-[300px] shrink-0 rounded-2xl overflow-hidden bg-[#121212] border border-white/10 relative group/card hover:border-gold/50 transition-all duration-300 shadow-xl cursor-pointer"
            >
              {/* Image element */}
              <img 
                src={item.src} 
                alt={item.title} 
                loading="lazy"
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover/card:scale-105"
              />

              {/* Bottom gradient caption overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent z-20 flex flex-col justify-end p-5 transition-opacity duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/30 w-fit mb-1.5 backdrop-blur-sm">
                  {item.category}
                </span>
                <h4 className="text-sm md:text-base font-semibold text-white tracking-tight drop-shadow-sm">
                  {item.title}
                </h4>
              </div>

              {/* Hover expand icon */}
              <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                <Maximize2 className="w-3.5 h-3.5 text-gold" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#111] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-gold hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>

              <div className="p-5 bg-surface border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/30">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-1.5">{selectedImage.title}</h3>
                </div>
                <span className="text-xs text-text-secondary">TechCity Skills Campus</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
