import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, BookOpen } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';

export function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <SectionWrapper
      id="certifications"
      badge="Credentials & Milestones"
      title="Certifications & Coursework"
      subtitle="Structured academic and technical coursework in full-stack engineering, GenAI, and computer science foundations."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
          >
            <Card hoverGlow className="h-full flex flex-col justify-between p-6">
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <Award className="w-5 h-5" />
                </div>

                <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-500 dark:text-slate-400 font-mono">{cert.date}</span>
                <Badge variant="cyan" className="gap-1 text-[11px]">
                  <CheckCircle className="w-3 h-3 text-cyan-500" />
                  {cert.badge || 'Verified'}
                </Badge>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
