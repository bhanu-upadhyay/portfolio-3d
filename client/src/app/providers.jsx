import React from 'react';
import { ThemeProvider } from '../context/ThemeContext.jsx';

/**
 * Global application providers wrapper
 */
export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
