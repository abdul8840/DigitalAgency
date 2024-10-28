import express from 'express';
import { handleContactSubmission } from '../controllers/contact.controller.js';

const router = express.Router();

router.post('/contact', handleContactSubmission);

export default router;