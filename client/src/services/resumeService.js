import { API_BASE_URL } from '../utils/constants.js';

export const resumeService = {
  /**
   * Get direct download URL for PDF resume
   */
  getPdfUrl() {
    return `${API_BASE_URL.replace(/\/$/, '')}/resume/pdf`;
  },

  /**
   * Get direct download URL for DOCX resume
   */
  getDocxUrl() {
    return `${API_BASE_URL.replace(/\/$/, '')}/resume/docx`;
  }
};
