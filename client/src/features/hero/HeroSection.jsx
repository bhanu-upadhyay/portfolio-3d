import React from 'react';
import { Download, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { Button } from '../../components/ui/Button.jsx';
import { Container } from '../../components/layout/Container.jsx';
import { Hero3DScene } from '../../three/scenes/Hero3DScene.jsx';
import { resumeService } from '../../services/resumeService.js';
import './hero.css';

export function HeroSection() {
  const { personal } = portfolioData;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="hero-glow-sphere w-96 h-96 bg-cyan-500 top-10 left-10" />
      <div className="hero-glow-sphere w-96 h-96 bg-purple-600 bottom-10 right-10" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 font-medium">
              SYSTEM ONLINE // {personal.status}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <br />
            <span className="hero-headline-gradient">{personal.name}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-cyan-400 font-mono font-medium">
            {personal.title}
          </p>

          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {personal.tagline}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a href="#projects">
              <Button size="lg" variant="primary" className="gap-2 group">
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href={resumeService.getPdfUrl()} download="Bhanu_Upadhyay_Resume.pdf">
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </Button>
            </a>
          </div>

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 text-slate-400 font-mono text-xs">
            <div>
              <span className="block text-xl font-bold text-slate-100">{personal.yearsOfExperience}</span>
              <span>Experience</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="block text-xl font-bold text-slate-100">{personal.projectsCompleted}</span>
              <span>Shipped Projects</span>
            </div>
            <div className="w-px h-8 bg-slate-800" />
            <div>
              <span className="block text-xl font-bold text-slate-100">100%</span>
              <span>Code Quality</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Scene Viewport */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="w-full max-w-md aspect-square relative rounded-2xl p-2 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10 border border-slate-800/80 backdrop-blur-sm shadow-2xl shadow-cyan-950/20">
            <Hero3DScene />
          </div>
        </div>
      </Container>
    </section>
  );
}
