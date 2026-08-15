import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await fetch("https://formsubmit.co/ajax/techcityskillspvt.ltd@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            email,
            message,
            _subject: "New Contact Form Submission from TechCity Skills"
        })
      });
      setSubmitted(true);
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-24 px-6 lg:px-12 relative z-10 border-b border-white/5">
      <div className="max-w-4xl mx-auto bg-surface border border-white/5 rounded-sm p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gold/5 blur-[100px] pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-text-secondary mb-10 max-w-xl mx-auto font-light">
            Have any questions or looking to enroll? Send us a message!
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-2xl mx-auto">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                className="w-full bg-background border border-white/10 rounded-sm px-6 py-4 text-white placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors text-sm"
              />
              <textarea 
                placeholder="Your Message" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required 
                rows="4"
                className="w-full bg-background border border-white/10 rounded-sm px-6 py-4 text-white placeholder-text-secondary/50 focus:outline-none focus:border-gold transition-colors text-sm resize-none"
              ></textarea>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`bg-gold text-black px-10 py-4 rounded-sm font-semibold transition-all text-sm w-full md:w-auto self-center mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gold-light'}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex items-center justify-center gap-3 text-gold">
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium">Message sent successfully! We'll get back to you soon.</span>
              </div>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-text-secondary hover:text-white text-sm transition-colors mt-4"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
