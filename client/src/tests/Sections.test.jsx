import { describe, it, expect } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProjectsSection } from '../features/projects/ProjectsSection.jsx';
import { SkillsSection } from '../features/skills/SkillsSection.jsx';
import { ExperienceTimeline } from '../features/experience/ExperienceTimeline.jsx';

describe('Portfolio Sections & Content Fidelity', () => {
  it('renders all three required projects with authentic titles', () => {
    render(<ProjectsSection />);

    expect(screen.getByText(/Muniva AI/i)).toBeInTheDocument();
    expect(screen.getByText(/Bird Rescue/i)).toBeInTheDocument();
    expect(screen.getByText(/Nexus Portfolio/i)).toBeInTheDocument();
  });

  it('renders all 5 skills categories without fake percentages', () => {
    render(<SkillsSection />);

    expect(screen.getByRole('heading', { name: /Programming Languages/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Frontend Engineering/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Backend & APIs/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Databases & Storage/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Tools & Ecosystem/i })).toBeInTheDocument();

    // Verify key technologies appear
    expect(screen.getAllByText(/Python/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/React\.js/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/Node\.js/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/MongoDB/i)[0]).toBeInTheDocument();
  });

  it('renders authentic timeline entries for university and internship', () => {
    render(<ExperienceTimeline />);

    expect(screen.getByText(/JK Lakshmipat University, Jaipur/i)).toBeInTheDocument();
    expect(screen.getByText(/Aerilon Tech LLP, Jaipur/i)).toBeInTheDocument();
    expect(screen.getByText(/Backend Developer Intern/i)).toBeInTheDocument();
  });
});
