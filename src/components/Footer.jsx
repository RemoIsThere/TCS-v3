import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background pt-20 pb-8 px-6 lg:px-12">
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div>
          <a href="#" className="flex items-center group mb-6">
            <img src="/logo.png" alt="TechCity Skills" className="h-12 w-auto object-contain" />
          </a>
          <p className="text-sm text-text-secondary font-light">Empowering the next generation of tech leaders.</p>
        </div>
        
        {/* Links */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Quick Links</h4>
          <ul className="space-y-3 text-sm text-text-secondary font-light">
            <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Success Stories</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
          </ul>
        </div>
        
        {/* Courses */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Programs</h4>
          <ul className="space-y-3 text-sm text-text-secondary font-light">
            <li><a href="#" className="hover:text-gold transition-colors">Full-Stack Development</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Data Science</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">AI & Machine Learning</a></li>
          </ul>
        </div>
        
        {/* Contact */}
        <div>
          <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">Contact</h4>
          <ul className="space-y-4 text-sm text-text-secondary font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
              <span>TechCity Hub, Level 4, Cyber City 400001</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold shrink-0" />
              <a href="mailto:hello@techcityskills.com" className="hover:text-white transition-colors">hello@techcityskills.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-gold shrink-0" />
              <span>+1 (800) 123-4567</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary/50 font-light">
        <p>&copy; 2026 TechCity Skills Pvt. Ltd. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
