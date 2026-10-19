import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppProviders } from './app/providers.jsx';
import { AppRouter } from './app/router.jsx';
import './styles/globals.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppProviders>
        <AppRouter />
      </AppProviders>
    </React.StrictMode>
  );
}
