import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import { Button } from '../components/ui/Button.jsx';
import { Container } from '../components/layout/Container.jsx';

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030712] text-slate-100 px-4">
      <Container className="text-center space-y-6 max-w-md">
        <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <h1 className="text-6xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          404
        </h1>

        <h2 className="text-xl font-bold text-slate-200">
          Sector Not Located
        </h2>

        <p className="text-sm text-slate-400">
          The coordinates you navigated to do not exist within this portfolio mainframe.
        </p>

        <div className="pt-2">
          <Link to="/">
            <Button variant="primary" size="md" className="gap-2">
              <Home className="w-4 h-4" />
              <span>Return to Mainframe</span>
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
