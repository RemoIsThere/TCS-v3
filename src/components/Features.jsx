import React from 'react';
import { Target, Users, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Live Project-Based Learning",
      desc: "Build a real-world portfolio before you graduate. Work on the same stack top product companies use."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "1:1 Mentorship",
      desc: "Direct access to CTOs and senior architects from top MNCs to guide your career and technical growth."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognized Certificates",
      desc: "Verified credentials accepted by 200+ hiring partners worldwide, fast-tracking your interview process."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 border-b border-white/5">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why TechCity?</h2>
          <p className="text-text-secondary font-light">We don't just teach code, we build careers. The minimal path to mastery.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div key={i} className="group bg-surface p-8 sm:p-10 border border-white/5 hover:border-gold/30 transition-all duration-300 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gold transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-gold mb-8 rounded-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{f.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed font-light">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
