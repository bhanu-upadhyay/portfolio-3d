import React from 'react';
import { Github, ExternalLink, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { Card } from '../../components/ui/Card.jsx';
import { Badge } from '../../components/ui/Badge.jsx';
import { Button } from '../../components/ui/Button.jsx';

export function ProjectCard({ project }) {
  return (
    <Card hoverGlow className="flex flex-col h-full overflow-hidden p-0 bg-white dark:bg-slate-900/80 border-slate-200/90 dark:border-slate-800">
      {/* Visual Header / Banner Frame */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 p-6 flex flex-col justify-between border-b border-slate-200/80 dark:border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 via-slate-900 to-purple-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
        
        <div className="relative z-10 flex items-center justify-between">
          <Badge variant="cyan">{project.categoryLabel}</Badge>
          <div className="w-8 h-8 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400">
            <Code2 className="w-4 h-4" />
          </div>
        </div>

        <div className="relative z-10">
          <h4 className="text-xl font-extrabold text-white tracking-tight leading-snug">
            {project.title.split('—')[0].trim()}
          </h4>
          {project.title.includes('—') && (
            <p className="text-xs font-mono text-cyan-300 mt-0.5 line-clamp-1">
              {project.title.split('—')[1].trim()}
            </p>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-4">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-1.5 pt-1">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-[11px] font-mono">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center gap-3">
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

          {project.liveUrl ? (
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
          ) : (
            <div className="flex-1">
              <Button
                variant="ghost"
                size="sm"
                disabled
                className="w-full text-xs text-slate-400 dark:text-slate-500 cursor-not-allowed opacity-75 border border-dashed border-slate-200 dark:border-slate-800"
              >
                <span>Repo Showcase</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
