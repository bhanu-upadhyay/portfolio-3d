import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';

export function ExperienceTimeline() {
  const { timeline } = portfolioData;

  return (
    <SectionWrapper
      id="experience"
      badge="Career Progression"
      title="Experience & Education"
      subtitle="A chronological journey through my professional development and academic foundation."
    >
      <div className="max-w-3xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-10">
        {timeline.map((item, index) => {
          const isWork = item.type === 'experience';

          return (
            <div key={index} className="relative group">
              {/* Timeline Node Point */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  isWork
                    ? 'border-cyan-400 bg-slate-950 text-cyan-400'
                    : 'border-purple-400 bg-slate-950 text-purple-400'
                }`}
              >
                {isWork ? (
                  <Briefcase className="w-3 h-3" />
                ) : (
                  <GraduationCap className="w-3 h-3" />
                )}
              </div>

              <Card hoverGlow className="p-5 sm:p-6 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60 inline-flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-cyan-400" />
                    {item.period}
                  </span>
                  <Badge variant={isWork ? 'cyan' : 'purple'}>
                    {isWork ? 'Work Experience' : 'Education'}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm font-medium text-cyan-400/90 font-mono">
                  {item.organization}
                </p>

                <p className="text-sm text-slate-400 leading-relaxed pt-1">
                  {item.description}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
