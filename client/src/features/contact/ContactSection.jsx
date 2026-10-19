import React from 'react';
import { Mail, MapPin, Send, MessageSquareCode } from 'lucide-react';
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
      subtitle="Have an inquiry, project proposal, or collaboration opportunity? Send a message directly to my MongoDB datastore."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto items-start">
        {/* Contact Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="space-y-6 p-6">
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
              <MessageSquareCode className="w-5 h-5 text-cyan-400" />
              <span>Let's Build Something Together</span>
            </h3>

            <p className="text-sm text-slate-400 leading-relaxed">
              I am available for full-time engineering roles, high-impact contract projects, and ambitious technical collaborations.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-500">EMAIL ADDRESS</span>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {SOCIAL_LINKS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-300">
                <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-500">BASE LOCATION</span>
                  <span>{personal.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-mono">
              Avg. response turnaround: &lt; 24 Hours
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
