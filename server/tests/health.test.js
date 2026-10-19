import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('GET /api/health', () => {
  it('should return 200 OK with operational status and system details', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('success', true);
    expect(response.body).toHaveProperty('status', 'ok');
    expect(response.body).toHaveProperty('service', 'nexus-portfolio-api');
    expect(response.body).toHaveProperty('database');
    expect(response.body.database).toHaveProperty('status');
  });
});
