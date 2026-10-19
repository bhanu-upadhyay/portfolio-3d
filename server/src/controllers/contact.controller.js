import { contactService } from '../services/contact.service.js';

export const contactController = {
  /**
   * Handle POST /api/contact
   */
  async submitContact(req, res, next) {
    try {
      const { name, email, message } = req.body;
      const ipAddress = req.headers['x-forwarded-for'] || req.socket?.remoteAddress;
      const userAgent = req.headers['user-agent'];

      const result = await contactService.createMessage({
        name,
        email,
        message,
        ipAddress: typeof ipAddress === 'string' ? ipAddress.split(',')[0].trim() : null,
        userAgent
      });

      res.status(201).json({
        success: true,
        message: 'Thank you for reaching out! Your message has been received.',
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
};
