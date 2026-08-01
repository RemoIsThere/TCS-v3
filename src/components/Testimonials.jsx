import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    { name: "Priya Sharma", role: "SDE-2 @ Amazon", quote: "The curriculum is exactly what product companies look for. Landed my dream job within 2 weeks of completion." },
    { name: "Rahul Verma", role: "Data Scientist @ Microsoft", quote: "The 1:1 mentorship from industry veterans gave me the edge I needed to crack the toughest interviews." },
    { name: "Ananya Desai", role: "Frontend Lead @ Spotify", quote: "Building 5 live projects during the bootcamp built my confidence. It's the best investment for my career." },
    { name: "Karthik N.", role: "AI Engineer @ Meta", quote: "The GenAI module is cutting-edge. I transitioned from a basic web dev to an AI engineer seamlessly." }
  ];

  return (
    <section id="success" className="py-24 px-6 lg:px-12 bg-surface overflow-hidden border-b border-white/5">
      <div className="w-full max-w-[1400px] mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
        <p className="text-text-secondary font-light">Meet the alumni who transformed their careers with us.</p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <motion.div 
          className="flex items-center gap-6 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[400px] shrink-0 bg-background border border-white/5 p-8 rounded-sm">
              <Quote className="w-8 h-8 text-gold/50 mb-6" />
              <p className="text-white text-lg mb-8 font-light leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-gold/30 rounded-sm flex items-center justify-center text-gold font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-xs text-text-secondary">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
