import React from 'react';
import { cn } from '../../utils/cn.js';

export function Card({
  children,
  className = '',
  hoverGlow = false,
  ...props
}) {
  return (
    <div
      className={cn(
        'relative rounded-xl border border-slate-200/90 dark:border-slate-800/80 bg-white/80 dark:bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 shadow-sm dark:shadow-none text-slate-800 dark:text-slate-100',
        hoverGlow && 'hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
