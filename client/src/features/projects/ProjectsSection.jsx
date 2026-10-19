import React from 'react';
import { portfolioData } from '../../data/portfolioData.js';
import { SectionWrapper } from '../../components/layout/SectionWrapper.jsx';
import { ProjectCard } from './ProjectCard.jsx';

export function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper
      id="projects"
      badge="Portfolio Showcase"
      title="Featured Projects"
      subtitle="Interactive, scalable web applications built with modern engineering practices."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
