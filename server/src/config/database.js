import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

let dbStatus = 'disconnected';

export const connectDatabase = async () => {
  if (!env.MONGODB_URI) {
    dbStatus = 'unconfigured';
    logger.warn('MONGODB_URI not provided. Running with database offline. Contact submissions will fail gracefully.');
    return false;
  }

  try {
    dbStatus = 'connecting';
    logger.info('Attempting MongoDB connection...');

    mongoose.connection.on('connected', () => {
      dbStatus = 'connected';
      logger.info('MongoDB connected successfully.');
    });

    mongoose.connection.on('error', (err) => {
      dbStatus = 'error';
      logger.error('MongoDB connection error:', err.message);
    });

    mongoose.connection.on('disconnected', () => {
      dbStatus = 'disconnected';
      logger.warn('MongoDB disconnected.');
    });

    await mongoose.connect(env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000 // Quick timeout to not freeze the app if local mongo is offline
    });

    dbStatus = 'connected';
    return true;
  } catch (error) {
    dbStatus = 'error';
    logger.warn(`Could not connect to MongoDB: ${error.message}. Server is running, but database features will return 503 Service Unavailable.`);
    return false;
  }
};

export const disconnectDatabase = async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.disconnect();
    dbStatus = 'disconnected';
    logger.info('MongoDB connection closed.');
  }
};

export const isDbConnected = () => {
  return mongoose.connection.readyState === 1;
};

export const getDbStatus = () => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  return {
    state: states[mongoose.connection.readyState] || dbStatus,
    readyState: mongoose.connection.readyState,
    isConnected: mongoose.connection.readyState === 1
  };
};
