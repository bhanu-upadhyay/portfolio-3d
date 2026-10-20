import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Code, Database, Wrench, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';

export function SkillsSection() {
  const { skills } = portfolioData;

  const categories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5 text-cyan-500" />,
      items: skills.languages || [],
      badgeColor: 'cyan'
    },
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      icon: <Layout className="w-5 h-5 text-blue-500" />,
      items: skills.frontend || [],
      badgeColor: 'cyan'
    },
    {
      id: 'backend',
      title: 'Backend & APIs',
      icon: <Server className="w-5 h-5 text-purple-500" />,
      items: skills.backend || [],
      badgeColor: 'purple'
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      items: skills.databases || [],
      badgeColor: 'emerald'
    },
    {
      id: 'tools',
      title: 'Tools & Ecosystem',
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      items: skills.tools || [],
      badgeColor: 'amber'
    }
  ];

  return (
    <SectionWrapper
      id="skills"
      badge="Technical Expertise"
      title="Skills & Technologies"
      subtitle="A curated toolkit of engineering capabilities, programming languages, and modern frameworks."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            className={cat.id === 'tools' ? 'md:col-span-2 lg:col-span-1' : ''}
          >
            <Card hoverGlow className="h-full flex flex-col justify-between p-6">
              <div>
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
                  <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-slate-100">
                    {cat.title}
                  </h3>
                </div>

                <div className="space-y-2.5">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-950/40 border border-slate-200/60 dark:border-slate-800/60 transition-colors hover:border-cyan-500/40"
                    >
                      <span className="text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        {skill.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        {skill.focus}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                {cat.items.map((skill) => (
                  <Badge key={skill.name} variant={cat.badgeColor} className="text-[10px]">
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
