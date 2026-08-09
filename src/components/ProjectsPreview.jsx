import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Activity, Sparkles, Building2, CheckCircle } from 'lucide-react';

const ongoingHighlights = [
  { city: "Delhi NCR", state: "NCR", focus: "Enterprise GenAI & Full-Stack", learners: "450+ Learners" },
  { city: "Mumbai", state: "Maharashtra", focus: "FinTech & Data Engineering", learners: "500+ Learners" },
  { city: "Kolkata", state: "West Bengal", focus: "AI & Cloud Architecture", learners: "320+ Learners" },
  { city: "Nagpur", state: "Maharashtra", focus: "DevOps & Cloud Systems", learners: "290+ Learners" }
];

export default function ProjectsPreview() {
  return (
    <section className="py-24 px-6 lg:px-20 border-b border-white/5 bg-[#070707] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 mb-4 bg-gold/5">
              <Activity className="w-3.5 h-3.5 text-gold animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-gold uppercase">Pan-India Footprint</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Active & Ongoing <span className="text-gold">Projects</span>
            </h2>
            <p className="text-text-secondary mt-4 max-w-xl font-light text-base leading-relaxed">
              TechCity Skills drives real-world cohort training across 23+ technology centers throughout India, empowering engineering talent at scale.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-gold text-black text-xs font-bold uppercase tracking-wider hover:bg-gold-light transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)] group"
            >
              <span>Explore Live Map & Hubs</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ongoingHighlights.map((hub, idx) => (
            <motion.div
              key={hub.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface/80 border border-white/10 hover:border-gold/40 rounded-xl p-6 relative group transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold/15 text-gold border border-gold/30 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping"></span>
                  Active Hub
                </span>
                <span className="text-xs text-text-secondary">{hub.state}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gold" />
                {hub.city}
              </h3>
              <p className="text-xs text-text-secondary mb-4 font-light">{hub.focus}</p>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-text-secondary/70">
                <span>{hub.learners}</span>
                <span className="text-gold group-hover:underline text-[11px]">Details →</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Card with CTA */}
        <div className="bg-gradient-to-r from-surface via-[#141414] to-surface border border-white/10 rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold shrink-0">
              <Building2 className="w-7 h-7" />
            </div>
            <div>
              <div className="text-white font-bold text-lg">23 Total Center Deployments</div>
              <div className="text-xs text-text-secondary font-light">
                8 Ongoing Active Hubs • 15 Successfully Completed Centers across 12+ States
              </div>
            </div>
          </div>

          <Link
            to="/projects"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-gold text-xs font-semibold text-white hover:text-gold uppercase tracking-wider transition-all shrink-0"
          >
            View Interactive Geographic Map
          </Link>
        </div>
      </div>
    </section>
  );
}
