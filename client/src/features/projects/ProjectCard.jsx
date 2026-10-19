import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';
import { Button } from '../../components/ui/Button.jsx';

export function ProjectCard({ project }) {
  return (
    <Card hoverGlow className="flex flex-col h-full overflow-hidden p-0 bg-slate-900/70 border-slate-800">
      {/* Project Banner Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        {project.featured && (
          <div className="absolute top-3 right-3">
            <Badge variant="cyan">Featured Project</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <Button variant="secondary" size="sm" className="w-full gap-2">
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </Button>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1"
          >
            <Button variant="primary" size="sm" className="w-full gap-2">
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}
