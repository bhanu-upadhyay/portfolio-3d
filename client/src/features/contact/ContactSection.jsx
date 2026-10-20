import React from 'react';
import { Mail, MapPin, Send, MessageSquareCode, Github, Linkedin } from 'lucide-react';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { ContactForm } from './ContactForm.jsx';
import { portfolioData } from '../../data/portfolioData.js';
import { SOCIAL_LINKS } from '../../utils/constants.js';

export function ContactSection() {
  const { personal } = portfolioData;

  return (
    <SectionWrapper
      id="contact"
      badge="Direct Line"
      title="Initiate Contact"
      subtitle="Have an engineering opportunity, collaboration proposal, or technical inquiry? Dispatch a direct message connected to the MongoDB datastore."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-6 p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <MessageSquareCode className="w-5 h-5 text-cyan-500" />
              <span>Let's Connect</span>
            </h3>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Open for software engineering internships, technical collaborations, and full-stack projects. Every submission is validated by Express and stored in MongoDB.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2.5 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Direct Email
                  </span>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium text-xs sm:text-sm"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="p-2.5 rounded-lg bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 text-purple-600 dark:text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-slate-800 dark:text-slate-200 font-medium text-xs sm:text-sm">
                    {personal.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm">
                <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    GitHub Profile
                  </span>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium text-xs sm:text-sm"
                  >
                    github.com/bhanu-upadhyay
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 font-mono">
              Database status: Monitored via Express Health API
            </div>
          </Card>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7">
          <Card hoverGlow className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
