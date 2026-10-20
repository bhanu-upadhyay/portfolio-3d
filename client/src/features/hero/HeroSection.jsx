import React, { useState, useEffect } from 'react';
import { Download, ArrowRight, Mail, Terminal, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData.js';
import { Button } from '../../components/ui/Button.jsx';
import { Container } from '../../components/layout/Container.jsx';
import profilePhoto from '../../assets/images/profile-photo.jpg';
import './hero.css';

export function HeroSection() {
  const { personal } = portfolioData;
  const roles = personal.headlineRoles || [
    'Computer Science Engineering Student',
    'Full-Stack Developer'
  ];

  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full text
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === '') {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? 35 : 70;
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting ? currentRole.substring(0, prev.length - 1) : currentRole.substring(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex, roles]);

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="hero-glow-sphere w-[500px] h-[500px] bg-cyan-500/15 -top-20 -left-20 dark:bg-cyan-500/10" />
      <div className="hero-glow-sphere w-[400px] h-[400px] bg-purple-600/15 bottom-0 right-0 dark:bg-purple-600/10" />
      <div className="hero-glow-sphere w-[300px] h-[300px] bg-blue-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 dark:bg-blue-500/5" />

      <Container className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Intro, Typewriter & Actions */}
        <motion.div
          className="lg:col-span-7 space-y-5 text-center lg:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/60 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-slate-700 dark:text-cyan-300 font-medium">
              {personal.status}
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-1.5">
            <p className="text-sm sm:text-base font-mono uppercase tracking-widest text-cyan-600 dark:text-cyan-400 font-semibold">
              Hello, World! I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-slate-900 dark:text-slate-100">
              <span className="hero-headline-gradient">{personal.name}</span>
            </h1>
          </div>

          {/* Typewriter Dynamic Headline */}
          <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
            <div className="font-mono text-base sm:text-xl lg:text-2xl font-semibold text-slate-800 dark:text-slate-200 flex items-center">
              <span className="text-cyan-600 dark:text-cyan-400 mr-2">&gt;</span>
              <span>{displayText}</span>
              <span className="inline-block w-2.5 h-5 sm:h-6 ml-1 bg-cyan-500 animate-blink" />
            </div>
          </div>

          {/* Brief Bio / Tagline */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {personal.tagline}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <a href="#projects">
              <Button size="lg" variant="primary" className="gap-2 group shadow-md shadow-cyan-500/20">
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            <a href="#contact">
              <Button size="lg" variant="secondary" className="gap-2">
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </Button>
            </a>

            <a href="/bhanu-upadhyay-resume.pdf" download="Bhanu_Upadhyay_Resume.pdf">
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </Button>
            </a>
          </div>

          {/* Contextual Badges */}
          <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
              <Terminal className="w-3.5 h-3.5 text-purple-500" />
              <span>{personal.experienceShort}</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Portrait */}
        <motion.div
          className="lg:col-span-5 flex items-center justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="hero-portrait-wrapper">
            {/* Ambient glow behind portrait */}
            <div className="hero-portrait-glow" />

            {/* Orbit rings - decorative */}
            <div className="hero-orbit-ring hero-orbit-ring--1" />
            <div className="hero-orbit-ring hero-orbit-ring--2" />

            {/* Portrait frame */}
            <div className="hero-portrait-frame">
              <img
                src={profilePhoto}
                alt="Bhanu Upadhyay — Software Engineer"
                className="hero-portrait-image"
                loading="eager"
                fetchPriority="high"
              />
              {/* Subtle rim-light overlay */}
              <div className="hero-portrait-rimlight" />
            </div>

            {/* Small floating tech labels */}
            <div className="hero-float-label hero-float-label--1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>React</span>
            </div>
            <div className="hero-float-label hero-float-label--2">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Node.js</span>
            </div>
            <div className="hero-float-label hero-float-label--3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span>GenAI</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
