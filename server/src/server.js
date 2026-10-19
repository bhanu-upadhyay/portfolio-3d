import app from './app.js';
import { env } from './config/env.js';
import { connectDatabase, disconnectDatabase } from './config/database.js';
import { logger } from './utils/logger.js';

const startServer = async () => {
  // Connect to MongoDB asynchronously (non-blocking for app startup)
  await connectDatabase();

  const server = app.listen(env.PORT, () => {
    logger.info(`🚀 Nexus Portfolio API server running on port ${env.PORT} [${env.NODE_ENV}]`);
    logger.info(`📡 Health Check URL: http://localhost:${env.PORT}/api/health`);
    logger.info(`📄 Resume Downloads: http://localhost:${env.PORT}/api/resume/pdf`);
  });

  // Graceful shutdown handling
  const shutdown = async (signal) => {
    logger.info(`${signal} signal received: closing HTTP server...`);
    server.close(async () => {
      logger.info('HTTP server closed.');
      await disconnectDatabase();
      process.exit(0);
    });

    // Force close if graceful shutdown takes too long
    setTimeout(() => {
      logger.error('Forcefully terminating process after timeout.');
      process.exit(1);
    }, 10000);
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
};

startServer().catch((error) => {
  logger.error('Failed to start server:', error);
  process.exit(1);
});
