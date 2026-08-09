import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-20 max-w-[1400px] w-full mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mt-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Privacy Policy</h1>
        <div className="bg-surface border border-white/5 p-8 rounded-xl text-text-secondary leading-relaxed space-y-6">
          <p className="font-light">
            [Placeholder Content] This is the Privacy Policy page for TechCity Skills. Your privacy is critically important to us.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Information We Collect</h2>
          <p className="font-light">
            [Placeholder Content] We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. How We Use Information</h2>
          <p className="font-light">
            [Placeholder Content] We use the information we collect in various ways, including to provide, operate, and maintain our website.
          </p>
          <p className="font-light mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
