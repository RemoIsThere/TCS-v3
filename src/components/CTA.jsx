import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 lg:px-12 relative z-10 border-b border-white/5">
      <div className="max-w-4xl mx-auto bg-surface border border-white/5 rounded-sm p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gold/5 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Career?</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto font-light">
            Book a free 1-on-1 career counseling session today.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                className="flex-1 bg-background border border-white/10 rounded-sm px-6 py-4 text-white placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors text-sm"
              />
              <button 
                type="submit" 
                className="bg-gold hover:bg-gold-light text-black px-10 py-4 rounded-sm font-semibold transition-all text-sm"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-3 text-gold">
              <CheckCircle2 className="w-6 h-6" />
              <span className="font-medium">Thank you! We will contact you shortly.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
