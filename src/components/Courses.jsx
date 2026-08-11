import React, { useState } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

export default function Courses() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Programs' },
    { id: 'data', label: 'Data Science' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'web', label: 'Full-Stack' },
  ];

  const courses = [
    {
      id: 1,
      category: 'web',
      title: 'MERN Stack Development',
      duration: '6 Months',
      module: 'Microservices Arch'
    },
    {
      id: 2,
      category: 'data',
      title: 'Applied Data Science',
      duration: '8 Months',
      module: 'Big Data Analytics'
    },
    {
      id: 3,
      category: 'ai',
      title: 'Deep Learning & GenAI',
      duration: '9 Months',
      module: 'Generative AI'
    }
  ];

  const filteredCourses = activeTab === 'all' ? courses : courses.filter(c => c.category === activeTab);

  return (
    <section id="courses" className="py-24 px-6 lg:px-12 border-b border-white/5">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Modules</h2>
            <p className="text-text-secondary font-light">Intensive, outcome-driven tracks.</p>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-sm text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-gold text-black' 
                    : 'bg-surface text-text-secondary border border-white/5 hover:border-white/20'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-surface border border-white/5 p-8 rounded-sm hover:border-gold/30 transition-all duration-300 group">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] uppercase tracking-widest text-gold border border-gold/20 px-2 py-1 rounded-sm">
                  {tabs.find(t => t.id === course.category)?.label}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <Clock className="w-3 h-3" /> {course.duration}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">{course.title}</h3>
              <div className="h-[1px] w-full bg-white/5 my-6"></div>
              
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-[10px] text-text-secondary uppercase tracking-wider mb-1">Key Module</span>
                  <span className="text-sm text-white font-medium">{course.module}</span>
                </div>
                <a href="#cta" className="w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all">
                   <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
