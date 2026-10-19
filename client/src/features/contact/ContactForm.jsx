import React from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useContactForm } from './useContactForm.js';
import { Button } from '../../components/ui/Button.jsx';
import { Alert } from '../../components/feedback/Alert.jsx';

export function ContactForm() {
  const {
    formData,
    fieldErrors,
    isLoading,
    isSuccess,
    isError,
    responseMessage,
    handleChange,
    handleSubmit,
    resetForm
  } = useContactForm();

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {isSuccess && (
        <Alert
          type="success"
          title="Message Dispatched"
          message={responseMessage}
          onClose={resetForm}
        />
      )}

      {isError && (
        <Alert
          type="error"
          title="Transmission Error"
          message={responseMessage}
          onClose={resetForm}
        />
      )}

      {/* Name Field */}
      <div className="space-y-1.5">
        <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300">
          YOUR NAME *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g. Alex Morgan"
          disabled={isLoading}
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-slate-100 placeholder-slate-600 focus:outline-none transition-colors text-sm ${
            fieldErrors.name
              ? 'border-rose-500/80 focus:border-rose-500'
              : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40'
          }`}
        />
        {fieldErrors.name && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{fieldErrors.name}</span>
          </p>
        )}
      </div>

      {/* Email Field */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300">
          YOUR EMAIL *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e.g. alex@example.com"
          disabled={isLoading}
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-slate-100 placeholder-slate-600 focus:outline-none transition-colors text-sm ${
            fieldErrors.email
              ? 'border-rose-500/80 focus:border-rose-500'
              : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40'
          }`}
        />
        {fieldErrors.email && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{fieldErrors.email}</span>
          </p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300">
          MESSAGE *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Share project details, opportunities, or questions..."
          disabled={isLoading}
          className={`w-full px-4 py-2.5 rounded-lg bg-slate-950/80 border text-slate-100 placeholder-slate-600 focus:outline-none transition-colors text-sm resize-none ${
            fieldErrors.message
              ? 'border-rose-500/80 focus:border-rose-500'
              : 'border-slate-800 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500/40'
          }`}
        />
        {fieldErrors.message && (
          <p className="text-xs text-rose-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{fieldErrors.message}</span>
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isLoading}
        className="w-full gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Transmit Message</span>
      </Button>
    </form>
  );
}
