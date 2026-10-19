import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { env } from './config/env.js';
import apiRoutes from './routes/index.js';
import { notFoundMiddleware } from './middleware/not-found.middleware.js';
import { errorMiddleware } from './middleware/error.middleware.js';

const app = express();

// Secure headers with Helmet
app.use(helmet());

// Cross-Origin Resource Sharing (CORS)
const allowedOrigins = [
  env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173'
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) !== -1 || env.NODE_ENV === 'development') {
        return callback(null, true);
      }
      return callback(new Error('CORS policy: Not allowed by Access-Control-Allow-Origin'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
  })
);

// Global Rate Limiting for API routes
const limiter = rateLimit({
  windowMs: env.RATE_LIMIT_WINDOW_MS,
  max: env.RATE_LIMIT_MAX,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: {
      message: 'Too many requests from this IP address. Please try again later.'
    }
  }
});

// Request body parsers with size limit
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Apply rate limiter to API routes
app.use('/api', limiter);

// Mount API routes
app.use('/api', apiRoutes);

// Root route summary
app.get('/', (req, res) => {
  res.status(200).json({
    name: 'Nexus Portfolio API',
    version: '1.0.0',
    description: 'Backend services for Nexus Portfolio',
    endpoints: {
      health: 'GET /api/health',
      contact: 'POST /api/contact',
      resumePdf: 'GET /api/resume/pdf',
      resumeDocx: 'GET /api/resume/docx'
    }
  });
});

// 404 Handler for undefined routes
app.use(notFoundMiddleware);

// Centralized Error Handling
app.use(errorMiddleware);

export default app;
