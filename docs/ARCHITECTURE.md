# Nexus Portfolio - Architecture Documentation

## 1. System Overview

Nexus Portfolio is an enterprise-grade personal portfolio built on the **MERN (MongoDB, Express, React, Node.js)** full-stack architecture. It is engineered with a strict separation of concerns, modular feature boundaries, 3D interactive graphics (Three.js & React Three Fiber), reactive animations (Framer Motion), resilient backend services, and a comprehensive test suite.

---

## 2. Architecture Tree

```
nexus-portfolio/
├── .editorconfig               # Uniform editor styling rules (UTF-8, 2 spaces, LF)
├── .gitignore                  # Git exclusion rules (node_modules, .env, dist, logs)
├── README.md                   # Setup, installation, and deployment instructions
├── package.json                # Monorepo root orchestration scripts
│
├── docs/                       # Technical architecture and API documentation
│   ├── ARCHITECTURE.md         # File-by-file architecture specification (this file)
│   └── API.md                  # REST API contract definitions and schemas
│
├── client/                     # React + Vite frontend application
│   ├── .env.example            # Documented client environment template
│   ├── .env                    # Local environment variables
│   ├── index.html              # HTML5 entry with SEO tags & typography
│   ├── package.json            # Client dependencies and build scripts
│   ├── vite.config.js          # Vite bundler, alias (@), and Vitest configuration
│   ├── tailwind.config.js      # Futuristic design tokens & dark mode configuration
│   ├── postcss.config.js       # PostCSS processor setup
│   └── src/
│       ├── main.jsx            # Application bootstrap and React DOM render
│       ├── app/
│       │   ├── router.jsx      # React Router DOM v6 route definitions
│       │   └── providers.jsx   # App-level context & theme providers wrapper
│       ├── assets/             # Vector icons and graphics
│       │   └── nexus-emblem.svg
│       ├── components/
│       │   ├── ui/             # Reusable UI primitives
│       │   │   ├── Button.jsx  # Button with primary, secondary, outline, ghost variants
│       │   │   ├── Badge.jsx   # Pill badges with colored accents
│       │   │   ├── Card.jsx    # Glassmorphic card container with hover glow
│       │   │   ├── Spinner.jsx # Accessible animated loading indicator
│       │   │   └── index.js    # Barrel export
│       │   ├── layout/         # Structural components
│       │   │   ├── Navbar.jsx  # Glassmorphic navigation bar with theme toggle
│       │   │   ├── Footer.jsx  # Footer with social touchpoints and metadata
│       │   │   ├── Container.jsx # Responsive max-width wrapper
│       │   │   ├── SectionWrapper.jsx # Consistent section container with titles
│       │   │   └── index.js    # Barrel export
│       │   └── feedback/       # Feedback UI elements
│       │       ├── Alert.jsx   # Alert banners (success, error, warning, info)
│       │       ├── Skeleton.jsx # Content loading skeleton
│       │       └── index.js    # Barrel export
│       ├── features/           # Feature-based business modules
│       │   ├── hero/           # Hero module
│       │   │   ├── HeroSection.jsx
│       │   │   ├── hero.css
│       │   │   └── index.js
│       │   ├── about/          # About section module
│       │   │   ├── AboutSection.jsx
│       │   │   └── index.js
│       │   ├── skills/         # Technical skill categories
│       │   │   ├── SkillsSection.jsx
│       │   │   └── index.js
│       │   ├── projects/       # Interactive project showcases
│       │   │   ├── ProjectCard.jsx
│       │   │   ├── ProjectsSection.jsx
│       │   │   └── index.js
│       │   ├── resume/         # Backend resume download triggers
│       │   │   ├── ResumeSection.jsx
│       │   │   └── index.js
│       │   ├── experience/     # Education and career timeline
│       │   │   ├── ExperienceTimeline.jsx
│       │   │   └── index.js
│       │   ├── certifications/ # Certification badges and credentials
│       │   │   ├── CertificationsSection.jsx
│       │   │   └── index.js
│       │   └── contact/        # Contact form with backend MongoDB hook
│       │       ├── ContactSection.jsx
│       │       ├── ContactForm.jsx
│       │       ├── useContactForm.js
│       │       └── index.js
│       ├── three/              # 3D Graphics & Canvas layer
│       │   ├── scenes/
│       │   │   └── Hero3DScene.jsx # WebGL Canvas container
│       │   ├── components/
│       │   │   ├── FloatingIcosahedron.jsx # Rotating wireframe & glowing core
│       │   │   └── ParticleField.jsx       # Floating ambient particle points
│       │   └── hooks/
│       │       └── useSceneMouse.js        # Normalized mouse tracker for parallax
│       ├── context/            # Global React Contexts
│       │   ├── ThemeContext.jsx # Dark/Light theme manager with localStorage
│       │   └── index.js
│       ├── hooks/              # Reusable React hooks
│       │   ├── useScrollSpy.js  # Active nav link scroll tracker
│       │   ├── useMediaQuery.js # CSS media query matcher
│       │   └── index.js
│       ├── services/           # HTTP API client layer
│       │   ├── apiClient.js     # Base Fetch client with interceptor & error handling
│       │   ├── contactService.js# Contact form submission API
│       │   └── resumeService.js # Resume download URL provider
│       ├── data/
│       │   └── portfolioData.js # Single source of truth for bio, skills, and projects
│       ├── pages/
│       │   ├── HomePage.jsx     # Main portfolio page composing all features
│       │   ├── NotFoundPage.jsx # 404 fallback page
│       │   └── index.js
│       ├── styles/
│       │   ├── tokens.css       # CSS custom properties (color, glow, glassmorphism)
│       │   └── globals.css      # Tailwind base + custom scrollbar & transitions
│       ├── utils/
│       │   ├── cn.js            # Tailwind merge and clsx utility
│       │   ├── constants.js     # Nav items, social links, base URLs
│       │   └── formatters.js    # Date & string truncation utilities
│       └── tests/
│           ├── setup.js         # Vitest DOM polyfills & mocks
│           ├── App.test.jsx     # UI and theme provider tests
│           └── ContactForm.test.jsx # Contact form validation tests
│
└── server/                     # Node.js + Express + MongoDB backend
    ├── .env.example            # Documented backend environment template
    ├── .env                    # Local environment variables
    ├── package.json            # Server dependencies and test scripts
    ├── public/
    │   └── resumes/            # Served resume assets directory
    │       └── README.md       # Setup instructions for resume.pdf and resume.docx
    ├── tests/                  # Integration tests using Vitest + Supertest
    │   ├── health.test.js      # Health endpoint test
    │   ├── contact.test.js     # Contact validation & error tests
    │   └── resume.test.js      # Resume 404/stream tests
    └── src/
        ├── server.js           # Server bootstrap and graceful shutdown
        ├── app.js              # Express app setup, security headers, rate limiting
        ├── config/
        │   ├── env.js          # Zod schema environment validation
        │   └── database.js     # Resilient MongoDB connection manager
        ├── models/
        │   └── Contact.js      # Mongoose Contact model and schema
        ├── routes/
        │   ├── index.js        # Root /api aggregator
        │   ├── health.routes.js# GET /api/health
        │   ├── contact.routes.js# POST /api/contact
        │   └── resume.routes.js # GET /api/resume/pdf & docx
        ├── controllers/
        │   ├── health.controller.js
        │   ├── contact.controller.js
        │   └── resume.controller.js
        ├── services/
        │   ├── contact.service.js # Contact creation & DB persistence logic
        │   └── resume.service.js  # File resolution & metadata
        ├── validators/
        │   └── contact.validator.js # Zod validation schema for contact payloads
        ├── middleware/
        │   ├── error.middleware.js     # Centralized error handler
        │   ├── not-found.middleware.js # 404 route handler
        │   └── validate.middleware.js  # Zod schema validation middleware
        └── utils/
            ├── logger.js       # Structured ISO timestamped logger
            └── apiError.js     # Operational error class
```

---

## 3. Frontend Architecture Principles

1. **Feature-Driven Modularity**:
   Every domain under `features/` (hero, about, skills, projects, resume, experience, certifications, contact) encapsulates its own components, local styles, and hooks. This eliminates monolithic files and keeps responsibilities distinct.

2. **Isolated 3D Graphics**:
   The `three/` directory encapsulates all Three.js and React Three Fiber scenes. 3D components (`FloatingIcosahedron`, `ParticleField`) are separated from UI logic. If WebGL fails or is unmounted, a graceful fallback renders without crashing the DOM.

3. **Editable Portfolio Store**:
   `data/portfolioData.js` acts as the single source of truth for all personal details, skills, project links, and timeline items. Updating this file updates the entire portfolio instantaneously.

4. **Robust Theme State**:
   `context/ThemeContext.jsx` manages `'dark' | 'light'` modes, syncs with `localStorage` and system preferences, and updates `document.documentElement` class list for Tailwind `darkMode: 'class'`.

5. **Type & Input Validation**:
   `useContactForm` executes client-side validation prior to sending HTTP payloads, maps server-returned validation error arrays to individual input fields, and manages explicit loading/success/error UI states.

---

## 4. Backend Architecture Principles

1. **Layered Separation of Concerns**:
   - **Routes**: Define URL paths and link middleware to controllers.
   - **Validators**: Enforce input constraints using **Zod** before hitting controllers.
   - **Controllers**: Parse HTTP requests and formulate responses.
   - **Services**: Execute domain business logic and database interactions.
   - **Models**: Define Mongoose schemas, types, and persistence rules.
   - **Middleware**: Intercept requests for security headers (**Helmet**), CORS, rate limiting (**express-rate-limit**), and centralized error handling.

2. **Database Resilience**:
   The server boots gracefully even if MongoDB is temporarily unconfigured or offline. Health checks display the current connection status (`connected`, `disconnected`, `error`). Database-dependent endpoints (such as `POST /api/contact`) cleanly return `503 Service Unavailable` with a structured error, preventing unhandled exceptions or fake silent successes.

3. **Graceful Resume Serving**:
   `GET /api/resume/pdf` and `GET /api/resume/docx` inspect the file system for actual candidate files. If missing, they return a descriptive `404` explaining the required file placement rather than crashing or delivering broken downloads.

4. **Security & Production Readiness**:
   - `helmet()` configures HTTP security headers.
   - `cors()` restricts cross-origin access to the configured `CLIENT_URL`.
   - `express-rate-limit` prevents brute-force abuse on `/api`.
   - Request body sizes are capped at `10kb` to thwart payload flooding.
