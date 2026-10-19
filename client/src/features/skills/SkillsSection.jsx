import React from 'react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';
import { Layout, Server, Wrench } from 'lucide-react';

export function SkillsSection() {
  const { skills } = portfolioData;

  const categories = [
    {
      id: 'frontend',
      title: 'Frontend Engineering',
      icon: <Layout className="w-5 h-5 text-cyan-400" />,
      items: skills.frontend,
      badgeColor: 'cyan'
    },
    {
      id: 'backend',
      title: 'Backend & Databases',
      icon: <Server className="w-5 h-5 text-purple-400" />,
      items: skills.backend,
      badgeColor: 'purple'
    },
    {
      id: 'tools',
      title: 'Tools & Technologies',
      icon: <Wrench className="w-5 h-5 text-emerald-400" />,
      items: skills.tools,
      badgeColor: 'emerald'
    }
  ];

  return (
    <SectionWrapper
      id="skills"
      badge="Technical Expertise"
      title="Skills & Technologies"
      subtitle="A specialized toolkit honed for modern, scalable full-stack development."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => (
          <Card key={cat.id} hoverGlow className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className="p-2.5 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-lg text-slate-100">{cat.title}</h3>
              </div>

              <div className="space-y-4">
                {cat.items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-medium text-slate-300">{skill.name}</span>
                      <span className="font-mono text-slate-500">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          cat.badgeColor === 'cyan'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                            : cat.badgeColor === 'purple'
                            ? 'bg-gradient-to-r from-purple-500 to-pink-500'
                            : 'bg-gradient-to-r from-emerald-500 to-teal-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/60 flex flex-wrap gap-1.5">
              {cat.items.map((skill) => (
                <Badge key={skill.name} variant={cat.badgeColor}>
                  {skill.name}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
