import { apiClient } from './apiClient.js';

export const contactService = {
  /**
   * Submit contact form to Express backend API
   * @param {{ name: string, email: string, message: string }} formData
   * @returns {Promise<{ success: boolean, message: string, data: any }>}
   */
  async sendMessage(formData) {
    return apiClient.post('/contact', formData);
  }
};
