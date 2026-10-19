import { describe, it, expect, vi } from 'vitest';
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ContactForm } from '../features/contact/ContactForm.jsx';

describe('ContactForm Component', () => {
  it('renders form inputs for name, email, and message', () => {
    render(<ContactForm />);

    expect(screen.getByLabelText(/YOUR NAME/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/YOUR EMAIL/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/MESSAGE/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Transmit Message/i })).toBeInTheDocument();
  });

  it('displays validation errors on empty submission', async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole('button', { name: /Transmit Message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Name must be at least 2 characters long/i)).toBeInTheDocument();
      expect(screen.getByText(/Please provide a valid email address/i)).toBeInTheDocument();
      expect(screen.getByText(/Message must be at least 10 characters long/i)).toBeInTheDocument();
    });
  });

  it('allows user to enter text into inputs', () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/YOUR NAME/i);
    fireEvent.change(nameInput, { target: { value: 'Alex Morgan' } });
    expect(nameInput.value).toBe('Alex Morgan');
  });
});
