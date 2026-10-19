import React from 'react';
import { cn } from '../../utils/cn.js';

export function Skeleton({ className = '', ...props }) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-slate-800/60', className)}
      {...props}
    />
  );
}
