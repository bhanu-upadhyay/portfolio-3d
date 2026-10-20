import React from 'react';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';
import profilePhoto from '../../assets/images/profile-photo.jpg';

export function AboutSection() {
  const { personal } = portfolioData;

  return (
    <SectionWrapper
      id="about"
      badge="About Me"
      title="Engineering Scalable & Intelligent Solutions"
      subtitle="Computer Science student and full-stack developer committed to clean architecture and modern web systems."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Profile Visual Card */}
        <motion.div
          className="lg:col-span-5 flex justify-center"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative group max-w-sm w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500" />
            
            <Card className="relative overflow-hidden p-0 bg-slate-900/90 dark:bg-slate-950 border-slate-200/90 dark:border-slate-800">
              {/* Photo */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Bhanu Upadhyay — Computer Science Engineering Student and Full-Stack Developer"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Identity & Status below photo */}
              <div className="p-5 space-y-3">
                <div className="space-y-1 text-center">
                  <h3 className="text-lg font-bold text-slate-100">{personal.name}</h3>
                  <p className="text-xs font-mono text-cyan-400">{personal.title}</p>
                </div>

                {/* Status & Location Pill */}
                <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{personal.location}</span>
                  </div>
                  <Badge variant="cyan">Available</Badge>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Biography Content & Quick Facts */}
        <motion.div
          className="lg:col-span-7 space-y-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>{personal.bio}</p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              My hands-on experience spans backend development at Aerilon Tech LLP, full-stack application design, and generative AI platforms incorporating retrieval-augmented generation (RAG) and vector databases. I prioritize modular component hierarchies, testability, and resilient API contracts.
            </p>
          </div>

          {/* Institutional Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/50 shadow-sm backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
              <div className="flex items-center gap-2.5 mb-2 text-cyan-600 dark:text-cyan-400">
                <GraduationCap className="w-5 h-5" />
                <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Education</h4>
              </div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                B.Tech in Computer Science Engineering
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                JK Lakshmipat University, Jaipur (2024–2028)
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200/90 dark:border-slate-800/90 bg-white/70 dark:bg-slate-900/50 shadow-sm backdrop-blur-sm hover:border-purple-500/30 transition-colors">
              <div className="flex items-center gap-2.5 mb-2 text-purple-600 dark:text-purple-400">
                <Briefcase className="w-5 h-5" />
                <h4 className="font-semibold text-sm text-slate-900 dark:text-slate-100">Professional Role</h4>
              </div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                Backend Developer Intern
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Aerilon Tech LLP, Jaipur
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
