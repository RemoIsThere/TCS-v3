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
            Welcome to TechCity Skills. These Terms and Conditions outline the rules and regulations for the use of TechCity Skills's Website, located at techcityskills.com. By accessing this website we assume you accept these terms and conditions. Do not continue to use TechCity Skills if you do not agree to take all of the terms and conditions stated on this page.
          </p>
          
          <h2 className="text-xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="font-light">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services. Any participation in this service will constitute acceptance of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">2. Intellectual Property Rights</h2>
          <p className="font-light">
            Other than the content you own, under these Terms, TechCity Skills and/or its licensors own all the intellectual property rights and materials contained in this Website. You are granted limited license only for purposes of viewing the material contained on this Website. All trademarks, service marks, and trade names are proprietary to TechCity Skills.
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4 font-light">
            <li>You must not republish material from TechCity Skills without prior written consent.</li>
            <li>You must not sell, rent or sub-license material from TechCity Skills.</li>
            <li>You must not reproduce, duplicate or copy material from TechCity Skills for commercial purposes.</li>
            <li>You must not redistribute content from TechCity Skills.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">3. User Responsibilities & Acceptable Use</h2>
          <p className="font-light">
            As a user of our platform, you agree to use our website and services only for lawful purposes. You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website. Furthermore, you must not use our website in any way which is unlawful, illegal, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
          </p>
          <p className="font-light mt-4">
            You are responsible for maintaining the confidentiality of any account information and passwords. Any unauthorized use of our resources, attempting to exploit vulnerabilities, or distributing malicious content will result in immediate termination of services and potential legal action.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">4. Program Requirements & Enrollment</h2>
          <p className="font-light">
            Enrollment in our educational programs requires strict adherence to our academic standards, attendance policies, and code of conduct. TechCity Skills reserves the right to modify the curriculum, schedules, and program structure at any time to ensure the highest quality of education and industry relevance. Failure to meet the program standards may result in dismissal without refund.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="font-light">
            In no event shall TechCity Skills, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this Website, whether such liability is under contract. TechCity Skills, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">6. Indemnification</h2>
          <p className="font-light">
            You hereby indemnify to the fullest extent TechCity Skills from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">7. Termination</h2>
          <p className="font-light">
            We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8 mb-4">8. Governing Law & Jurisdiction</h2>
          <p className="font-light">
            These Terms will be governed by and interpreted in accordance with the laws of the local jurisdiction, and you submit to the non-exclusive jurisdiction of the state and federal courts located in the region for the resolution of any disputes.
          </p>
          <p className="font-light mt-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </motion.div>
    </main>
  );
}
