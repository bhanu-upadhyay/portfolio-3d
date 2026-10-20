import React from 'react';
import { cn } from '../../utils/cn.js';
import { Container } from './Container.jsx';

export function SectionWrapper({
  id,
  children,
  className = '',
  title,
  subtitle,
  badge,
  ...props
}) {
  return (
    <section id={id} className={cn('py-20 lg:py-28 relative scroll-mt-20', className)} {...props}>
      <Container>
        {(title || subtitle || badge) && (
          <div className="mb-14 text-center max-w-2xl mx-auto">
            {badge && (
              <span className="inline-block text-xs font-mono font-medium tracking-wider uppercase px-3.5 py-1 mb-3.5 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/25 shadow-sm">
                {badge}
              </span>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
