import React from 'react';
import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <main className="pt-32 pb-24 px-6 lg:px-20 max-w-[1400px] w-full mx-auto min-h-screen">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto mt-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms & Conditions</h1>
        <div className="bg-surface border border-white/5 p-8 rounded-xl text-text-secondary leading-relaxed space-y-6">
          <p className="font-light">
            [Placeholder Content] Welcome to TechCity Skills. By accessing this website, we assume you accept these terms and conditions.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. License</h2>
          <p className="font-light">
            [Placeholder Content] Unless otherwise stated, TechCity Skills and/or its licensors own the intellectual property rights for all material on the website.
          </p>
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. User Responsibilities</h2>
          <p className="font-light">
            [Placeholder Content] As a user, you agree not to use the website in a way that may impair its performance, corrupt the content, or otherwise reduce its overall functionality.
          </p>
          <p className="font-light mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
