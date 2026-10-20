import React from 'react';
import { Container } from './Container.jsx';
import { SOCIAL_LINKS } from '../../utils/constants.js';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-200/80 dark:border-slate-800/80 bg-white/80 dark:bg-[#060810]/80 backdrop-blur-md py-10 transition-colors">
      <Container>
        {/* Main footer content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wide text-slate-800 dark:text-slate-200">
                BHANU<span className="text-cyan-600 dark:text-cyan-400">.DEV</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Engineered with React, Node.js, Express, MongoDB & Three.js
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              aria-label="Email Contact"
              className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
            </a>

            <div className="w-px h-6 bg-slate-200 dark:bg-slate-800 mx-1" />

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              title="Return to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-500">
          <p>
            &copy; {currentYear} Bhanu Upadhyay. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-rose-500" /> and modern web technologies
          </p>
        </div>
      </Container>
    </footer>
  );
}
