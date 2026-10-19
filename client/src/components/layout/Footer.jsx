import React from 'react';
import { Container } from './Container.jsx';
import { SOCIAL_LINKS } from '../../utils/constants.js';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/70 backdrop-blur-md py-12">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-sm font-semibold tracking-wide text-slate-200">
              NEXUS ARCHITECTURE // BHANU UPADHYAY
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Crafted with React, Node.js, Express, MongoDB & Three.js
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            aria-label="Email Contact"
            className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          &copy; {currentYear} All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
