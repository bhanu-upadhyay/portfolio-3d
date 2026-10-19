import React from 'react';
import { cn } from '../../utils/cn.js';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  isLoading = false,
  type = 'button',
  onClick,
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 focus:ring-cyan-400',
    secondary:
      'bg-slate-800 text-slate-100 hover:bg-slate-700 border border-slate-700/60 shadow-sm focus:ring-slate-400',
    outline:
      'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 focus:ring-cyan-400',
    ghost:
      'text-slate-300 hover:text-white hover:bg-slate-800/50 focus:ring-slate-400'
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-6 py-3 gap-2.5 font-semibold'
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
          <span>Processing...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
