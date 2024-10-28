import express from 'express';
import { deletecontact, getAllContacts, handleContactSubmission } from '../controllers/contact.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.post('/contact', handleContactSubmission);
router.get('/getcontact', getAllContacts);
router.delete('/deletecontact/:contactId/:userId',verifyToken, deletecontact);

export default router;