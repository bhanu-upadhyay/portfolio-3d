/**
 * Central Editable Portfolio Information
 * Edit this file to update biographical data, skills, projects, and career timeline.
 */
export const portfolioData = {
  personal: {
    name: 'Bhanu Upadhyay',
    title: 'Full Stack MERN Developer & 3D Web Creative',
    tagline: 'Engineering immersive, high-performance web applications with React, Node.js, and Three.js.',
    bio: 'Passionate MERN stack engineer with a dedication to building scalable web architectures, engaging user interfaces, and interactive 3D digital experiences. Experienced in designing REST APIs, robust database models, and reactive modern frontends.',
    location: 'India',
    status: 'Available for Full-Time Roles & High-Impact Projects',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    yearsOfExperience: '2+',
    projectsCompleted: '15+'
  },

  skills: {
    frontend: [
      { name: 'React.js', level: 90, icon: 'Code' },
      { name: 'JavaScript (ES6+)', level: 92, icon: 'FileCode' },
      { name: 'Three.js / React Three Fiber', level: 75, icon: 'Box' },
      { name: 'Tailwind CSS', level: 88, icon: 'Palette' },
      { name: 'Framer Motion', level: 85, icon: 'Sparkles' },
      { name: 'HTML5 & CSS3', level: 95, icon: 'Layout' }
    ],
    backend: [
      { name: 'Node.js', level: 88, icon: 'Server' },
      { name: 'Express.js', level: 86, icon: 'Cpu' },
      { name: 'MongoDB & Mongoose', level: 84, icon: 'Database' },
      { name: 'RESTful API Architecture', level: 90, icon: 'Network' },
      { name: 'Authentication & JWT', level: 82, icon: 'ShieldCheck' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 90, icon: 'GitBranch' },
      { name: 'Vite & Webpack', level: 85, icon: 'Zap' },
      { name: 'Postman', level: 88, icon: 'Send' },
      { name: 'Docker (Basics)', level: 70, icon: 'Container' },
      { name: 'VS Code & Google Antigravity', level: 95, icon: 'Terminal' }
    ]
  },

  projects: [
    {
      id: 'nexus-portal',
      title: 'Nexus 3D Cyber Analytics Dashboard',
      description: 'A futuristic monitoring platform with interactive Three.js data visualizers, real-time metrics streaming, and dark neon aesthetics.',
      technologies: ['React.js', 'Three.js', 'Node.js', 'Express', 'Tailwind CSS'],
      githubUrl: 'https://github.com/bhanuupadhyay/nexus-portal',
      liveUrl: 'https://nexus-portal.demo.app',
      featured: true,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'hyper-commerce',
      title: 'HyperCommerce MERN Marketplace',
      description: 'Full-featured e-commerce ecosystem featuring product catalog, cart synchronization, Stripe payments, and an administrative order management dashboard.',
      technologies: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB', 'Express'],
      githubUrl: 'https://github.com/bhanuupadhyay/hyper-commerce',
      liveUrl: 'https://hyper-commerce.demo.app',
      featured: true,
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'cloud-task-ai',
      title: 'Synapse Collaborative Workspace',
      description: 'Team project management suite with real-time websocket updates, role-based access control, and dynamic kanban boards.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Framer Motion'],
      githubUrl: 'https://github.com/bhanuupadhyay/synapse-workspace',
      liveUrl: 'https://synapse-workspace.demo.app',
      featured: true,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
    }
  ],

  timeline: [
    {
      type: 'experience',
      title: 'Full Stack MERN Developer',
      organization: 'Tech Innovations Studio',
      period: '2023 - Present',
      description: 'Architecting scalable web applications, REST APIs, and responsive React frontend systems with micro-animations.'
    },
    {
      type: 'experience',
      title: 'Frontend Web Developer Intern',
      organization: 'Digital Creations Lab',
      period: '2022 - 2023',
      description: 'Built interactive UI components, integrated third-party REST services, and optimized asset pipelines for high performance.'
    },
    {
      type: 'education',
      title: 'Bachelor of Technology in Computer Science',
      organization: 'University Technical Institute',
      period: '2019 - 2023',
      description: 'Core coursework in Data Structures, Algorithms, Database Management Systems, and Web Engineering.'
    }
  ],

  certifications: [
    {
      title: 'MERN Full Stack Web Development Specialization',
      issuer: 'Advanced Web Academy',
      date: '2023',
      credentialUrl: '#'
    },
    {
      title: 'React & Three.js Interactive Web Applications',
      issuer: 'Creative Coding Institute',
      date: '2023',
      credentialUrl: '#'
    },
    {
      title: 'MongoDB Certified Associate Developer',
      issuer: 'MongoDB Inc.',
      date: '2022',
      credentialUrl: '#'
    }
  ]
};
