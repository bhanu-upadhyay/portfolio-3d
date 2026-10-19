import React from 'react';
import { Navbar, Footer } from '../components/layout/index.js';
import { HeroSection } from '../features/hero/index.js';
import { AboutSection } from '../features/about/index.js';
import { SkillsSection } from '../features/skills/index.js';
import { ProjectsSection } from '../features/projects/index.js';
import { ExperienceTimeline } from '../features/experience/index.js';
import { CertificationsSection } from '../features/certifications/index.js';
import { ResumeSection } from '../features/resume/index.js';
import { ContactSection } from '../features/contact/index.js';

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#030712] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <CertificationsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
