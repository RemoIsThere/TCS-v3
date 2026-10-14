import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles, ChevronLeft, ChevronRight, GalleryHorizontal } from 'lucide-react';

/**
 * TrainingGallery Page
 * 
 * Automatically discovers all images placed in /public/gallery/.
 * To add more photos, simply drop image files into that folder and
 * update the GALLERY_IMAGES array below with their filenames.
 * 
 * Supported formats: .jpeg, .jpg, .png, .webp
 */
const GALLERY_IMAGES = [
  { src: '/gallery/1.jpeg',  title: 'Interactive Classroom Training',       category: 'Cohort Session'     },
  { src: '/gallery/2.jpeg',  title: 'Hands-on Technical Workshop',          category: 'Live Engineering'   },
  { src: '/gallery/3.jpeg',  title: '1:1 Mentorship & Code Review',         category: 'Practical Guidance' },
  { src: '/gallery/4.jpeg',  title: 'Collaborative Student Lab',            category: 'Team Projects'      },
  { src: '/gallery/5.jpeg',  title: 'Specialized Technical Seminars',       category: 'System Design'      },
  { src: '/gallery/6.jpeg',  title: 'Industry Readiness & Demonstrations',  category: 'Project Showcase'   },
  // ─── Add new photos here ────────────────────────────────────────────────────
  // { src: '/gallery/7.jpeg',  title: 'Your Photo Title',  category: 'Category' },
  // { src: '/gallery/8.jpeg',  title: 'Your Photo Title',  category: 'Category' },
];

export default function TrainingGallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Collect unique categories
  const categories = ['All', ...Array.from(new Set(GALLERY_IMAGES.map(img => img.category)))];

  const filtered = activeFilter === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter(img => img.category === activeFilter);

  const openLightbox = (idx) => setSelectedIdx(idx);
  const closeLightbox = () => setSelectedIdx(null);

  const goPrev = () =>
    setSelectedIdx((prev) => (prev - 1 + filtered.length) % filtered.length);
  const goNext = () =>
    setSelectedIdx((prev) => (prev + 1) % filtered.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'ArrowLeft')  goPrev();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'Escape')     closeLightbox();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedIdx, filtered.length]);

  return (
    <main className="pt-28 sm:pt-32 pb-24 min-h-screen">

      {/* ── Header ───────────────────────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 mb-5 bg-gold/5">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs font-bold tracking-widest text-gold uppercase">Campus & Labs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Training <span className="text-gold">Gallery</span>
          </h1>
          <p className="text-text-secondary font-light max-w-xl text-base leading-relaxed">
            A visual archive of our immersive cohort sessions, live workshops, and real classroom experiences across TechCity Skills campuses.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <GalleryHorizontal className="w-4 h-4 text-gold" />
              <span><span className="text-white font-semibold">{GALLERY_IMAGES.length}</span> photos</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <div className="text-sm text-text-secondary">
              <span className="text-white font-semibold">{categories.length - 1}</span> categories
            </div>
          </div>
        </motion.div>

        {/* ── Filter Pills ──────────────────────────────────────── */}
        <div className="flex flex-wrap gap-2 mt-8">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gold text-black shadow-[0_0_16px_rgba(212,175,55,0.3)]'
                  : 'bg-white/5 text-text-secondary border border-white/10 hover:border-gold/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────── */}
      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35 }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filtered.map((img, idx) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid rounded-xl overflow-hidden border border-white/10 hover:border-gold/50 transition-all duration-300 relative group cursor-pointer bg-[#111] shadow-lg"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Caption overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/30 w-fit mb-1.5">
                    {img.category}
                  </span>
                  <h4 className="text-sm font-semibold text-white leading-tight">{img.title}</h4>
                </div>
                {/* Expand icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-3.5 h-3.5 text-gold" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-text-secondary">
            No photos in this category yet.
          </div>
        )}
      </div>

      {/* ── Lightbox ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedIdx !== null && filtered[selectedIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-[#0d0d0d] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={closeLightbox}
                aria-label="Close"
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Prev */}
              <button
                onClick={goPrev}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next */}
              <button
                onClick={goNext}
                aria-label="Next photo"
                className="absolute right-16 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-black transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="max-h-[80vh] overflow-hidden bg-black flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={filtered[selectedIdx].src}
                    src={filtered[selectedIdx].src}
                    alt={filtered[selectedIdx].title}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.2 }}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-5 bg-surface border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold bg-gold/15 px-2.5 py-0.5 rounded-full border border-gold/30">
                    {filtered[selectedIdx].category}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1.5">
                    {filtered[selectedIdx].title}
                  </h3>
                </div>
                <span className="text-xs text-text-secondary shrink-0">
                  {selectedIdx + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
