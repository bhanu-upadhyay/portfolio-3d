import { env } from '../config/env.js';
import { getDbStatus } from '../config/database.js';

export const healthController = {
  /**
   * Health-check handler returning service uptime, environment and database status
   */
  getHealth(req, res) {
    const db = getDbStatus();
    res.status(200).json({
      success: true,
      status: 'ok',
      service: 'nexus-portfolio-api',
      timestamp: new Date().toISOString(),
      uptimeSeconds: Math.floor(process.uptime()),
      environment: env.NODE_ENV,
      database: {
        status: db.state,
        connected: db.isConnected
      }
    });
  }
};
