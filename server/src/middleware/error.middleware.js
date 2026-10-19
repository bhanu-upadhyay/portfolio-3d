import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

export const errorMiddleware = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  let details = err.details || null;

  // Handle Mongoose duplicate key error
  if (err.code === 11000) {
    statusCode = 409;
    message = 'Duplicate entry error';
    details = err.keyValue;
  }

  // Handle Mongoose validation errors
  if (err.name === 'ValidationError') {
    statusCode = 400;
    message = 'Database validation failed';
    details = Object.values(err.errors || {}).map((e) => ({
      field: e.path,
      message: e.message
    }));
  }

  // Handle Mongoose cast errors (invalid ObjectId)
  if (err.name === 'CastError') {
    statusCode = 400;
    message = `Invalid format for field: ${err.path}`;
  }

  // Handle express json parsing error
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    statusCode = 400;
    message = 'Invalid JSON payload received';
  }

  // Log error
  if (statusCode >= 500) {
    logger.error(`${req.method} ${req.originalUrl} - ${message}`, err.stack);
  } else {
    logger.warn(`${req.method} ${req.originalUrl} - [${statusCode}] ${message}`);
  }

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      statusCode,
      details,
      ...(env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};
