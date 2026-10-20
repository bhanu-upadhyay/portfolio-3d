/**
 * Central Editable Portfolio Information - Bhanu Upadhyay
 * All personal, educational, professional, and project data is centralized here.
 */
export const portfolioData = {
  personal: {
    name: 'Bhanu Upadhyay',
    title: 'Computer Science Engineering Student | Full-Stack Developer',
    headlineRoles: [
      'Computer Science Engineering Student',
      'Full-Stack Developer',
      'GenAI & Backend Explorer',
      'MERN Architecture Enthusiast'
    ],
    tagline:
      'Engineering scalable web applications, robust backend architectures, and intelligent systems with modern technology stacks.',
    bio:
      'I am a Computer Science Engineering undergraduate at JK Lakshmipat University, Jaipur, and a Full-Stack Developer with hands-on experience in backend engineering, API architecture, and modern web applications. Currently focused on building production-ready MERN systems and GenAI applications with clean code, scalable database designs, and thoughtful user experiences.',
    location: 'Jaipur, India',
    status: 'Available for Software Engineering Internships',
    educationShort: 'B.Tech CSE (2024–2028) • JK Lakshmipat University',
    experienceShort: 'Backend Developer Intern • Aerilon Tech LLP'
  },

  skills: {
    frontend: [
      { name: 'React.js', focus: 'Primary Framework' },
      { name: 'Next.js', focus: 'SSR & App Router' },
      { name: 'JavaScript (ES6+)', focus: 'Core Language' },
      { name: 'TypeScript', focus: 'Typed Systems' },
      { name: 'Tailwind CSS', focus: 'Responsive Design' },
      { name: 'HTML5 & CSS3', focus: 'Semantic Markup' },
      { name: 'Framer Motion', focus: 'Micro-Animations' },
      { name: 'Three.js / React Three Fiber', focus: '3D Web Canvas' }
    ],
    backend: [
      { name: 'Node.js', focus: 'Runtime & Services' },
      { name: 'Express.js', focus: 'REST API Framework' },
      { name: 'FastAPI', focus: 'High-Performance Python' },
      { name: 'RESTful API Design', focus: 'Architectural Standards' },
      { name: 'Authentication (JWT)', focus: 'Security & Access' },
      { name: 'System Architecture', focus: 'Layered Patterns' }
    ],
    languages: [
      { name: 'JavaScript', focus: 'Full-Stack' },
      { name: 'TypeScript', focus: 'Type-Safe Web' },
      { name: 'Python', focus: 'GenAI & Backend' },
      { name: 'C / C++', focus: 'CS Core & Algorithms' }
    ],
    databases: [
      { name: 'MongoDB', focus: 'NoSQL Document Store' },
      { name: 'Mongoose ODM', focus: 'Schema Modeling' },
      { name: 'Vector Databases', focus: 'Embeddings & RAG' },
      { name: 'PostgreSQL', focus: 'Relational DBs (Basics)' }
    ],
    tools: [
      { name: 'Git & GitHub', focus: 'Version Control & CI' },
      { name: 'Vite', focus: 'Modern Frontend Tooling' },
      { name: 'Postman', focus: 'API Testing & Documentation' },
      { name: 'Docker', focus: 'Containerization Basics' },
      { name: 'Linux / Bash', focus: 'Development Environment' },
      { name: 'Google Antigravity IDE', focus: 'Agentic Engineering' }
    ]
  },

  projects: [
    {
      id: 'muniva-ai',
      title: 'Muniva AI — GenAI Spiritual Guidance Platform',
      category: 'genai',
      categoryLabel: 'GenAI & Full Stack',
      description:
        'A Generative AI-powered spiritual guidance platform combining conversational AI, retrieval-augmented generation (RAG), and vector database semantic search for meaningful contextual responses.',
      technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'LLMs', 'RAG', 'Vector Databases'],
      githubUrl: 'https://github.com/bhanu-upadhyay/muniva-ai',
      liveUrl: null, // Accurate: No fabricated live demo
      featured: true,
      highlights: [
        'Integrated RAG pipeline with vector databases for grounded context retrieval',
        'Built fast asynchronous API endpoints using Python and FastAPI',
        'Responsive interactive frontend interface developed with Next.js and TypeScript'
      ]
    },
    {
      id: 'bird-rescue',
      title: 'Bird Rescue Web Application',
      category: 'frontend',
      categoryLabel: 'Web & Next.js',
      description:
        'A dedicated community web application facilitating rapid reporting, location tracking, and coordinated rescue operations for injured and distressed birds.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
      githubUrl: 'https://github.com/bhanu-upadhyay/BirdRescue',
      liveUrl: null, // Accurate: No fabricated live demo
      featured: true,
      highlights: [
        'Streamlined emergency incident reporting with responsive UI workflows',
        'Modern, accessible user interface styled with Tailwind CSS',
        'Type-safe application architecture built with TypeScript and Next.js'
      ]
    },
    {
      id: 'nexus-portfolio',
      title: 'Nexus Portfolio — MERN Stack 3D Portfolio',
      category: 'mern',
      categoryLabel: 'Full-Stack MERN',
      description:
        'An architectural MERN stack developer portfolio featuring interactive Three.js 3D elements, Framer Motion animations, dark/light theme switching, and Express/MongoDB backend contact persistence.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Three.js', 'Tailwind CSS', 'Zod'],
      githubUrl: 'https://github.com/bhanu-upadhyay/portfolio-3d',
      liveUrl: null, // This repository itself
      featured: true,
      highlights: [
        'Layered backend architecture (Routes, Validators, Controllers, Services, Models)',
        'Interactive 3D geometry and particle canvas with React Three Fiber',
        'Validated contact form communicating directly with Express and MongoDB'
      ]
    }
  ],

  timeline: [
    {
      type: 'experience',
      title: 'Backend Developer Intern',
      organization: 'Aerilon Tech LLP, Jaipur',
      period: 'Recent / Ongoing',
      badge: 'Internship',
      description:
        'Contributing to backend services, API design, server-side development, and integration tasks within a collaborative engineering environment.'
    },
    {
      type: 'education',
      title: 'B.Tech in Computer Science Engineering',
      organization: 'JK Lakshmipat University, Jaipur',
      period: 'July 2024 – July 2028',
      badge: 'Undergraduate Degree',
      description:
        'Pursuing comprehensive coursework in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Full-Stack Web Development.'
    }
  ],

  certifications: [
    {
      title: 'Full Stack Web Development & Modern JavaScript',
      issuer: 'Technical Course Completion',
      date: '2024',
      badge: 'Web Engineering'
    },
    {
      title: 'Python for Backend & Generative AI Systems',
      issuer: 'Self-Directed & Coursework',
      date: '2024',
      badge: 'GenAI & Python'
    },
    {
      title: 'Data Structures & Algorithms Foundations',
      issuer: 'JK Lakshmipat University',
      date: '2024',
      badge: 'Academic Coursework'
    }
  ]
};
