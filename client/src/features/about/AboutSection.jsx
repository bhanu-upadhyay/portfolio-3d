import React from 'react';
import { MapPin, CheckCircle2, User, Globe, Code2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';

export function AboutSection() {
  const { personal } = portfolioData;

  return (
    <SectionWrapper
      id="about"
      badge="About Me"
      title="Engineering Modern Digital Solutions"
      subtitle="Bridging thoughtful design and scalable full-stack engineering."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Profile Card / Avatar */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative group max-w-sm w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />
            <Card className="relative overflow-hidden p-3 bg-slate-950 border-slate-800">
              <div className="aspect-square rounded-xl overflow-hidden bg-slate-900 relative">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/80 backdrop-blur-md rounded-lg border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-mono text-slate-200">{personal.location}</span>
                  </div>
                  <Badge variant="cyan">Available</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Biography Content */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p>{personal.bio}</p>
            <p className="text-slate-400 text-sm sm:text-base">
              My engineering philosophy revolves around clean modular code, intuitive interfaces, and rock-solid backend services. Whether crafting reactive interfaces with React and Framer Motion, architecting RESTful services in Node.js, or modeling complex relations in MongoDB, I emphasize clarity and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="flex items-center gap-3 mb-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <h4 className="font-semibold text-slate-200 text-sm">Full-Stack MERN</h4>
              </div>
              <p className="text-xs text-slate-400">
                End-to-end web apps with Node.js, Express, MongoDB, and React.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/40">
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-5 h-5 text-purple-400" />
                <h4 className="font-semibold text-slate-200 text-sm">Interactive 3D</h4>
              </div>
              <p className="text-xs text-slate-400">
                Immersive canvas components with Three.js and React Three Fiber.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
