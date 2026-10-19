import React from 'react';
import { cn } from '../../utils/cn.js';

export function Spinner({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  return (
    <div
      className={cn(
        'inline-block rounded-full border-cyan-500 border-t-transparent animate-spin',
        sizes[size] || sizes.md,
        className
      )}
      role="status"
      aria-label="Loading"
    />
  );
}
