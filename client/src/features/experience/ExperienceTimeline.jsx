import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';

export function ExperienceTimeline() {
  const { timeline } = portfolioData;

  return (
    <SectionWrapper
      id="experience"
      badge="Academic & Career Path"
      title="Experience & Education"
      subtitle="A chronological journey through my professional engineering experience and academic foundation."
    >
      <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-10">
        {timeline.map((item, index) => {
          const isWork = item.type === 'experience';

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Indicator Node */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                  isWork
                    ? 'border-cyan-500 bg-white dark:bg-slate-950 text-cyan-600 dark:text-cyan-400'
                    : 'border-purple-500 bg-white dark:bg-slate-950 text-purple-600 dark:text-purple-400'
                }`}
              >
                {isWork ? (
                  <Briefcase className="w-3 h-3" />
                ) : (
                  <GraduationCap className="w-3 h-3" />
                )}
              </div>

              <Card hoverGlow className="p-5 sm:p-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60 inline-flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-cyan-500" />
                    {item.period}
                  </span>
                  <Badge variant={isWork ? 'cyan' : 'purple'}>
                    {item.badge || (isWork ? 'Experience' : 'Education')}
                  </Badge>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-700 dark:text-cyan-400 font-mono">
                    {item.organization}
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
