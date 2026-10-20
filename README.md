# Nexus Portfolio // Bhanu Upadhyay

> A futuristic, 3D-animated personal portfolio application engineered with the **MERN Stack** (MongoDB, Express, React, Node.js), Three.js (React Three Fiber + Drei), Framer Motion, and Tailwind CSS.

---

## 🚀 Live Demonstrations & Repository

- **Frontend Deployment (Vercel / Netlify):** `https://nexus-portfolio-bhanu.vercel.app` *(Configure your deployed URL here)*
- **Backend API (Render / Railway):** `https://nexus-portfolio-api.onrender.com` *(Configure your deployed URL here)*
- **Source Code Repository:** `https://github.com/bhanu-upadhyay/portfolio-3d`

---

## 🌟 Key Features

1. **Animated Hero Section**: Futuristic intro with dynamic headline gradients, live system status, interactive Three.js 3D viewport, and direct CV download triggers.
2. **About Section**: Comprehensive biography, profile avatar, base location, active availability status, and core engineering philosophy.
3. **Interactive Skills Matrix**: Categorized into **Frontend**, **Backend**, and **Tools & Technologies** with animated percentage proficiency meters and tech badges.
4. **Interactive Project Cards**: Interactive cards showcasing real applications with tech stack pills, detailed descriptions, GitHub repositories, and live demo links.
5. **Resume Delivery Service**: Express backend endpoints (`GET /api/resume/pdf` and `GET /api/resume/docx`) serving genuine resume files with download headers and graceful missing-document handling.
6. **Career & Education Timeline**: Chronological vertical timeline displaying work experience and academic milestones.
7. **Certifications & Honors**: Verified credentials with issuer details and verification badges.
8. **Connected Contact System**: Real-time contact form with client & server validation (Zod) persisting inquiries to MongoDB via Mongoose.
9. **Dark & Light Mode**: Seamless theme switching with local storage persistence and system preference detection.
10. **Resilient Architecture**: Production-grade error handling, Helmet security headers, CORS restriction, rate limiting, and database offline graceful degradation (503 Service Unavailable).

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 18, Vite 6, React Router DOM v6 |
| **3D & Canvas** | Three.js, React Three Fiber (`@react-three/fiber`), Drei (`@react-three/drei`) |
| **Styling & Motion** | Tailwind CSS v3, CSS Custom Property Tokens, Framer Motion, Lucide React Icons |
| **Backend Runtime** | Node.js (ES Modules), Express.js |
| **Database & ODM** | MongoDB, Mongoose |
| **Validation & Security**| Zod, Helmet, CORS, Express Rate Limit |
| **Testing** | Vitest, React Testing Library, Supertest, JSDOM |

---

## 📁 Repository Structure

```
nexus-portfolio/
├── client/                     # React + Vite frontend application
│   ├── src/
│   │   ├── app/                # Application router and providers
│   │   ├── assets/             # SVGs and static media
│   │   ├── components/         # ui/, layout/, feedback/ components
│   │   ├── features/           # hero/, about/, skills/, projects/, resume/, etc.
│   │   ├── three/              # Three.js scenes, components, and hooks
│   │   ├── context/            # ThemeContext (dark/light)
│   │   ├── data/               # portfolioData.js (Single source of editable info)
│   │   ├── services/           # apiClient, contactService, resumeService
│   │   ├── styles/             # tokens.css & globals.css
│   │   └── utils/              # cn, formatters, constants
│   └── tests/                  # Frontend Vitest integration tests
│
├── server/                     # Node.js + Express + MongoDB backend
│   ├── public/resumes/         # Directory for resume.pdf & resume.docx
│   ├── tests/                  # Backend API tests (Supertest + Vitest)
│   └── src/
│       ├── config/             # Environment validation (Zod) & MongoDB connection
│       ├── controllers/        # Thin HTTP controllers
│       ├── middleware/         # Error, not-found, and validation middleware
│       ├── models/             # Mongoose schemas (Contact)
│       ├── routes/             # REST endpoints (/api/health, /api/contact, /api/resume)
│       ├── services/           # Business logic & persistence
│       ├── validators/         # Zod request validators
│       ├── utils/              # Logger & ApiError
│       ├── app.js              # Express app setup
│       └── server.js           # Server listener & graceful shutdown
│
├── docs/                       # Architecture and API documentation
│   ├── ARCHITECTURE.md         # File-by-file design specification
│   └── API.md                  # REST endpoint contracts and schemas
├── .editorconfig               # Uniform formatting rules
├── .gitignore                  # Git ignore rules
└── package.json                # Monorepo development orchestration
```

---

## ⚡ Quick Start & Local Setup

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (Tested with Node v20 / v22 / v26)
- **npm**: v9.0.0 or later
- **MongoDB**: Local MongoDB instance or MongoDB Atlas connection URI

### 2. Clone the Repository
```bash
git clone https://github.com/bhanuupadhyay/nexus-portfolio.git
cd nexus-portfolio
```

### 3. Install All Dependencies
```bash
npm run install:all
```
*(Or install manually: `npm install`, `cd client && npm install`, `cd ../server && npm install`)*

### 4. Configure Environment Variables

#### Backend (`server/.env`)
Copy `server/.env.example` to `server/.env`:
```bash
cp server/.env.example server/.env
```
Edit `server/.env`:
```env
PORT=5001
NODE_ENV=development
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb://localhost:27017/nexus_portfolio
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
```

#### Frontend (`client/.env`)
Copy `client/.env.example` to `client/.env`:
```bash
cp client/.env.example client/.env
```
Edit `client/.env`:
```env
VITE_API_BASE_URL=http://localhost:5001/api
VITE_APP_ENV=development
```

### 5. Resume Documents Setup
Place your genuine resume files in `server/public/resumes/`:
- `resume.pdf` (or `Bhanu_Upadhyay_Resume.pdf`)
- `resume.docx` (or `Bhanu_Upadhyay_Resume.docx`)

> *Note: If files are omitted, the API safely responds with a descriptive HTTP 404 guiding the administrator, without crashing.*

### 6. Run Both Applications Concurrently
```bash
npm run dev
```
- Frontend will open at: `http://localhost:5173`
- Backend API will listen on: `http://localhost:5001`
- Health check endpoint: `http://localhost:5001/api/health`

---

## 🧪 Testing

Run both frontend and backend test suites with a single command from the root:
```bash
npm test
```

### Run Individually:
- **Backend Tests:** `npm run test:server`
- **Frontend Tests:** `npm run test:client`

---

## 📡 API Endpoints Overview

| Method | Endpoint | Description | Status Codes |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | Service uptime, status & database health | `200` |
| `POST` | `/api/contact` | Submits validated message to MongoDB | `201`, `400`, `503` |
| `GET` | `/api/resume/pdf` | Streams downloadable PDF resume | `200`, `404` |
| `GET` | `/api/resume/docx` | Streams downloadable DOCX resume | `200`, `404` |

*See [`docs/API.md`](docs/API.md) for full request/response schemas.*

---

## 🚢 Deployment Guide

### Frontend (Vercel / Netlify)
1. Link your GitHub repository to Vercel or Netlify.
2. Set Root Directory to: `client`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Configure Environment Variables:
   - `VITE_API_BASE_URL`: `https://your-backend-domain.onrender.com/api`

### Backend (Render / Railway)
1. Create a Web Service pointing to `server`.
2. Build Command: `npm install`
3. Start Command: `npm start`
4. Configure Environment Variables:
   - `PORT`: `5001` (or assigned by host)
   - `NODE_ENV`: `production`
   - `CLIENT_URL`: `https://your-frontend-domain.vercel.app`
   - `MONGODB_URI`: `mongodb+srv://<user>:<password>@cluster.mongodb.net/nexus_portfolio`

---

## 📄 License
This project is open-source and created for academic and professional demonstration.
All rights reserved © Bhanu Upadhyay.
