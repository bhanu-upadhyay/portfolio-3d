import React from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react';
import { cn } from '../../utils/cn.js';

export function Alert({ type = 'info', message, title, className = '', onClose }) {
  const types = {
    info: {
      bg: 'bg-cyan-950/40 border-cyan-500/30 text-cyan-200',
      icon: <Info className="w-5 h-5 text-cyan-400 shrink-0" />
    },
    success: {
      bg: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
    },
    warning: {
      bg: 'bg-amber-950/40 border-amber-500/30 text-amber-200',
      icon: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
    },
    error: {
      bg: 'bg-rose-950/40 border-rose-500/30 text-rose-200',
      icon: <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
    }
  };

  const selected = types[type] || types.info;

  return (
    <div
      role="alert"
      className={cn(
        'p-4 rounded-xl border flex items-start gap-3 backdrop-blur-md',
        selected.bg,
        className
      )}
    >
      {selected.icon}
      <div className="flex-1 text-sm">
        {title && <h5 className="font-semibold mb-0.5">{title}</h5>}
        <p className="leading-relaxed">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          type="button"
          aria-label="Close Alert"
          className="text-slate-400 hover:text-white p-1 rounded-md"
        >
          &times;
        </button>
      )}
    </div>
  );
}
