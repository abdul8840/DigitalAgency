import Contact from '../models/contact.model.js';
import { errorHandler } from '../utils/error.js';

export const handleContactSubmission = async (req, res) => {
    const { name, email, phone, company, services, message } = req.body;

    if (!name  || !email || !phone || !company || !services || !message || name === '' || email === '' || phone === '' || company === '' || services === '' || message === '') {
        next(errorHandler(400, "All fields are required"));
      }

    try {
        const newContact = new Contact({ name, email, phone, company, services, message });
        await newContact.save();
        res.status(201).json({ message: 'Contact information saved successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact information', error });
    }
};
