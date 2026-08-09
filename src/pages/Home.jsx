import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Courses from '../components/Courses';
import Stats from '../components/Stats';
import ProjectsPreview from '../components/ProjectsPreview';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Courses />
      <ProjectsPreview />
      <Testimonials />
      <CTA />
    </main>
  );
}

