export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

export const NAV_LINKS = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'resume', label: 'Resume', href: '#resume' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/bhanuupadhyay',
  linkedin: 'https://linkedin.com/in/bhanuupadhyay',
  email: 'bhanu.upadhyay@example.com'
};
