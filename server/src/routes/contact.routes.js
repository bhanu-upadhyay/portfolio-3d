import { Router } from 'express';
import { contactController } from '../controllers/contact.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { createContactSchema } from '../validators/contact.validator.js';

const router = Router();

router.post('/', validate(createContactSchema, 'body'), contactController.submitContact);

export default router;
