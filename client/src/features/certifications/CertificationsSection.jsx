import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';

export function CertificationsSection() {
  const { certifications } = portfolioData;

  return (
    <SectionWrapper
      id="certifications"
      badge="Credentials"
      title="Certifications & Honors"
      subtitle="Industry recognitions and technical milestones validating my skills."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} hoverGlow className="flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Award className="w-5 h-5" />
              </div>

              <h3 className="font-bold text-slate-100 text-base leading-snug">
                {cert.title}
              </h3>

              <p className="text-xs text-slate-400 font-mono">
                Issued by {cert.issuer}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono">{cert.date}</span>
              <Badge variant="cyan" className="gap-1">
                <CheckCircle className="w-3 h-3 text-cyan-400" />
                Verified
              </Badge>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
