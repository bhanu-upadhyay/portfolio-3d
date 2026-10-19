import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../components/ui/Button.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { ThemeProvider, useTheme } from '../context/ThemeContext.jsx';

function TestThemeConsumer() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={toggleTheme} data-testid="toggle-btn">Toggle</button>
    </div>
  );
}

describe('Frontend UI & Architecture', () => {
  it('renders Button with variants and handles clicks', () => {
    let clicked = false;
    render(
      <Button variant="primary" onClick={() => { clicked = true; }}>
        Launch Project
      </Button>
    );

    const button = screen.getByRole('button', { name: /Launch Project/i });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(clicked).toBe(true);
  });

  it('renders Badge component with text', () => {
    render(<Badge variant="cyan">MERN Stack</Badge>);
    expect(screen.getByText('MERN Stack')).toBeInTheDocument();
  });

  it('toggles theme correctly via ThemeProvider', () => {
    render(
      <ThemeProvider>
        <TestThemeConsumer />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId('current-theme');
    const toggleButton = screen.getByTestId('toggle-btn');

    const initialTheme = themeDisplay.textContent;
    fireEvent.click(toggleButton);

    const updatedTheme = themeDisplay.textContent;
    expect(updatedTheme).not.toBe(initialTheme);
  });
});
