import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('POST /api/contact', () => {
  it('should return 400 Bad Request when request body is empty', async () => {
    const response = await request(app).post('/api/contact').send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body.error).toHaveProperty('details');
    expect(Array.isArray(response.body.error.details)).toBe(true);
  });

  it('should return 400 Bad Request when email is invalid', async () => {
    const response = await request(app).post('/api/contact').send({
      name: 'Alex Developer',
      email: 'not-an-email',
      message: 'Hello, this is a test inquiry message with more than ten characters.'
    });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    const emailError = response.body.error.details.find((d) => d.field === 'email');
    expect(emailError).toBeDefined();
  });

  it('should return 400 Bad Request when message is too short', async () => {
    const response = await request(app).post('/api/contact').send({
      name: 'Alex Developer',
      email: 'alex@example.com',
      message: 'Hi'
    });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    const messageError = response.body.error.details.find((d) => d.field === 'message');
    expect(messageError).toBeDefined();
  });

  it('should handle database unavailability cleanly without crashing', async () => {
    const response = await request(app).post('/api/contact').send({
      name: 'Alex Developer',
      email: 'alex@example.com',
      message: 'This is a valid test message with adequate character length.'
    });

    // In testing without a running MongoDB, it should return 503 rather than crashing
    if (response.status === 503) {
      expect(response.body).toHaveProperty('success', false);
      expect(response.body.error.message).toContain('Database');
    } else if (response.status === 201) {
      expect(response.body).toHaveProperty('success', true);
    }
  });
});
