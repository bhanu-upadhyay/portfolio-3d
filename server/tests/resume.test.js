import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app.js';

describe('Resume API Endpoints', () => {
  it('GET /api/resume/pdf returns structured 404 when file is not yet uploaded', async () => {
    const response = await request(app).get('/api/resume/pdf');

    // If file is not present, expects 404 with helpful instructions
    if (response.status === 404) {
      expect(response.body).toHaveProperty('success', false);
      expect(response.body.error).toHaveProperty('code', 'RESUME_PDF_NOT_FOUND');
      expect(response.body.error).toHaveProperty('instruction');
    } else {
      expect(response.status).toBe(200);
      expect(response.headers['content-type']).toContain('application/pdf');
    }
  });

  it('GET /api/resume/docx returns structured 404 when file is not yet uploaded', async () => {
    const response = await request(app).get('/api/resume/docx');

    if (response.status === 404) {
      expect(response.body).toHaveProperty('success', false);
      expect(response.body.error).toHaveProperty('code', 'RESUME_DOCX_NOT_FOUND');
      expect(response.body.error).toHaveProperty('instruction');
    } else {
      expect(response.status).toBe(200);
    }
  });
});
