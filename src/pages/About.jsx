import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Zap, 
  Award, 
  Linkedin, 
  Mail, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2,
  User,
  Compass
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  // Director profiles with placeholder image paths and rich bios
  const leaders = [
    {
      id: 'deepak-tripathi',
      name: 'Mr. Deepak Tripathi',
      role: 'Director & Co-Founder',
      experience: '15+ Years Industry Experience',
      initials: 'DT',
      // To add custom photo, place image in public/images/deepak-tripathi.jpg or update this path
      image: '/Deepak.jpeg',
      bio: 'A technology strategist and visionary educationalist with 15+ years of industry experience. Deepak has spearheaded enterprise transformations and mentored thousands of aspiring engineers. His vision is to dismantle traditional academic barriers and cultivate elite, industry-ready leaders.',
      specialties: [
        'Enterprise Architecture',
        'Technology Leadership',
        'System Design & Cloud',
        'Strategic Mentorship'
      ],
      socials: {
        linkedin: 'https://linkedin.com',
        email: 'deepak.tripathi@techcityskills.com'
      }
    },
    {
      id: 'gunjan-soam',
      name: 'Ms. Gunjan Soam',
      role: 'Director & Co-Founder',
      experience: 'Academic & Strategic Operations Leader',
      initials: 'GS',
      // To add custom photo, place image in public/images/gunjan-soam.jpg or update this path
      image: '/Gunjan.jpeg',
      bio: 'A dynamic academic pioneer and strategic operations leader, Gunjan drives pedagogical innovation at TechCity Skills. Committed to student success and talent development, she architects industry-aligned frameworks and partnerships that empower learners to achieve exceptional outcomes.',
      specialties: [
        'Academic Innovation',
        'Operational Strategy',
        'Talent Incubation',
        'Institutional Partnerships'
      ],
      socials: {
        linkedin: 'https://linkedin.com',
        email: 'gunjan.soam@techcityskills.com'
      }
    }
  ];

  const pillars = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      desc: "Our curriculum is directly vetted by engineering leaders and hiring managers across top global tech hubs and Fortune 500 enterprises."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Future-Proof Stack",
      desc: "We move beyond outdated legacy frameworks. Our immersive tracks focus intensely on Generative AI, cloud architectures, and production-grade full-stack engineering."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Outcome Driven",
      desc: "100% of our programs are mapped directly to verifiable, hands-on production skills, ensuring our graduates are Day-1 deployable contributors."
    }
  ];

  const milestones = [
    { number: "15+", label: "Years Leadership Experience" },
    { number: "100%", label: "Live Project Mastery" },
    { number: "200+", label: "Hiring & Tech Partners" },
    { number: "10K+", label: "Students & Professionals Mentored" }
  ];

  return (
    <main className="pt-32 pb-24 px-6 lg:px-20 max-w-[1400px] w-full mx-auto min-h-screen">
      
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto mb-20 mt-6"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/30 mb-6 bg-gold/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
          <span className="text-xs font-bold tracking-widest text-gold uppercase">About TechCity Skills</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Redefining Tech Education & Leadership.
        </h1>
        <p className="text-lg text-text-secondary font-light leading-relaxed">
          TechCity Skills was founded on a singular premise: to bridge the chasm between academic theory and industry reality. We build engineering leaders, not just coders.
        </p>
      </motion.div>

      {/* Leadership Section */}
      <section className="mb-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 border-b border-white/5 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold uppercase mb-3">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Executive Leadership</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Meet Our Directors
            </h2>
          </div>
          <p className="text-text-secondary text-sm font-light max-w-md mt-4 md:mt-0 leading-relaxed">
            Guided by visionary leaders with decades of combined technological, educational, and operational excellence.
          </p>
        </div>

        {/* Directors Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group relative bg-[#0D0D0D] border border-white/10 hover:border-gold/40 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(212,175,55,0.08)] flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient gold accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 blur-[70px] rounded-full pointer-events-none group-hover:bg-gold/10 transition-colors duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div>
                {/* Director Header: Photo Placeholder + Identity */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                  {/* Photo / Avatar with Placeholder Fallback */}
                  <div className="relative shrink-0">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-[#161616] border-2 border-gold/30 group-hover:border-gold p-1 transition-colors duration-500 overflow-hidden shadow-xl relative flex items-center justify-center">
                      <DirectorImage 
                        src={leader.image} 
                        name={leader.name} 
                        initials={leader.initials} 
                      />
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gold text-black text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md flex items-center gap-1">
                      <Award className="w-3 h-3" />
                      <span>Director</span>
                    </div>
                  </div>

                  {/* Name and Designation */}
                  <div className="flex-1">
                    <div className="inline-block px-2.5 py-1 rounded bg-white/5 border border-white/10 text-gold-light text-xs font-semibold tracking-wide mb-2">
                      {leader.experience}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-sm text-text-secondary font-medium mt-1">
                      {leader.role}
                    </p>
                    <div className="flex items-center gap-3 mt-3">
                      <a 
                        href={leader.socials.linkedin} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/50 flex items-center justify-center text-text-secondary hover:text-gold transition-all duration-300"
                        title="LinkedIn Profile"
                        aria-label={`${leader.name} LinkedIn`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a 
                        href={`mailto:${leader.socials.email}`}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/50 flex items-center justify-center text-text-secondary hover:text-gold transition-all duration-300"
                        title="Direct Email"
                        aria-label={`Email ${leader.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Director Biography */}
                <div className="relative mb-8">
                  <p className="text-text-secondary font-light text-sm sm:text-base leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                {/* Key Expertise & Focus Badges */}
                <div className="pt-6 border-t border-white/5">
                  <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-gold" />
                    <span>Core Focus & Expertise</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.specialties.map((spec, sIdx) => (
                      <span 
                        key={sIdx}
                        className="text-xs bg-[#151515] text-zinc-300 border border-white/5 hover:border-gold/30 px-3 py-1 rounded-md font-light transition-colors"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Institutional Highlights / Numbers */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-28"
      >
        {milestones.map((item, index) => (
          <div 
            key={index}
            className="bg-surface/80 border border-white/5 p-6 rounded-xl text-center relative group hover:border-gold/30 transition-all duration-300"
          >
            <div className="text-3xl md:text-4xl font-extrabold text-gold mb-2 font-outfit">
              {item.number}
            </div>
            <div className="text-xs md:text-sm text-text-secondary font-light">
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Vision & Values Showcase */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-28">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl border border-white/10 bg-surface overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-gold/5"></div>
            <div 
              className="absolute inset-0 opacity-[0.2]"
              style={{
                backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
                backgroundSize: '2rem 2rem',
                maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%)'
              }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <img src="/logo.png" alt="TechCity Skills" className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]" />
            </div>
            {/* Corner Badges */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs text-gold font-bold uppercase tracking-wider">Institution Philosophy</p>
                <p className="text-white text-sm font-medium">Empowering Next-Gen Innovators</p>
              </div>
              <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-8"
        >
          <div className="mb-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-gold uppercase mb-2">
              <GraduationCap className="w-4 h-4 text-gold" />
              <span>Core Principles</span>
            </div>
            <h3 className="text-3xl font-bold text-white">Why TechCity Skills Sets The Benchmark</h3>
          </div>

          {pillars.map((p, idx) => (
            <div key={idx} className="flex gap-5 group">
              <div className="w-12 h-12 shrink-0 bg-surface border border-white/10 flex items-center justify-center rounded-xl text-gold group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-300 shadow-lg">
                {p.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-1.5 group-hover:text-gold transition-colors">{p.title}</h4>
                <p className="text-text-secondary font-light text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Call to action card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl bg-gradient-to-r from-[#111] via-[#16140d] to-[#111] border border-gold/30 p-8 md:p-12 text-center relative overflow-hidden shadow-2xl"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)] pointer-events-none"></div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
          Ready to Learn Under World-Class Leadership?
        </h3>
        <p className="text-text-secondary max-w-xl mx-auto font-light text-sm sm:text-base mb-8 relative z-10 leading-relaxed">
          Join our career-defining engineering programs and ongoing real-world industry hubs.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <Link
            to="/projects"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gold text-black font-bold text-xs uppercase tracking-widest hover:bg-gold-light transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105"
          >
            Explore Ongoing Projects
          </Link>
          <a
            href="/#courses"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/5 text-white border border-white/10 hover:border-gold/50 font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2"
          >
            <span>View Programs</span>
            <ArrowRight className="w-4 h-4 text-gold" />
          </a>
        </div>
      </motion.div>

    </main>
  );
}

/**
 * Robust Director Photo Component
 * Gracefully displays the director's photo if present,
 * or a luxury initial placeholder avatar with subtle tech grid and gold accents.
 */
function DirectorImage({ src, name, initials }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full h-full relative rounded-xl overflow-hidden bg-gradient-to-br from-[#1c1c1c] to-[#0d0d0d] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
      {!imgError && src ? (
        <img 
          src={src} 
          alt={name} 
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-top rounded-xl" 
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center relative p-2 text-center select-none">
          {/* Subtle grid background */}
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(212,175,55,0.4) 1px, transparent 1px)`,
              backgroundSize: '8px 8px'
            }}
          ></div>
          
          <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-extrabold text-xl mb-1 shadow-inner relative z-10">
            {initials}
          </div>
          <span className="text-[10px] text-text-secondary font-medium tracking-wide uppercase relative z-10">
            Photo Placeholder
          </span>
        </div>
      )}
    </div>
  );
}
