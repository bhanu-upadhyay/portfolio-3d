import { Router } from 'express';
import { resumeController } from '../controllers/resume.controller.js';

const router = Router();

router.get('/pdf', resumeController.downloadPdf);
router.get('/docx', resumeController.downloadDocx);

export default router;
