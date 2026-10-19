import { Contact } from '../models/Contact.js';
import { isDbConnected } from '../config/database.js';
import { ApiError } from '../utils/apiError.js';
import { logger } from '../utils/logger.js';

export const contactService = {
  /**
   * Save a new contact submission to MongoDB
   * @param {Object} contactData
   * @param {string} contactData.name
   * @param {string} contactData.email
   * @param {string} contactData.message
   * @param {string} [contactData.ipAddress]
   * @param {string} [contactData.userAgent]
   * @returns {Promise<Object>}
   */
  async createMessage(contactData) {
    if (!isDbConnected()) {
      logger.warn('Contact submission attempted while MongoDB is disconnected.');
      throw new ApiError(
        503,
        'Database service is currently unavailable. Please try again later or contact me directly via email.'
      );
    }

    const newContact = await Contact.create({
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
      ipAddress: contactData.ipAddress || null,
      userAgent: contactData.userAgent || null
    });

    logger.info(`New contact inquiry saved from ${newContact.email} (ID: ${newContact.id})`);

    return {
      id: newContact.id,
      name: newContact.name,
      email: newContact.email,
      createdAt: newContact.createdAt
    };
  }
};
