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

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 }); // Sort by date (latest first)
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving contacts', error });
    }
};

export const deletecontact = async (req, res, next) => {
    if (!req.user.isAdmin || req.user.id !== req.params.userId) {
      return next(errorHandler(403, 'You are not allowed to delete this post'));
    }
    try {
      await Contact.findByIdAndDelete(req.params.contactId);
      res.status(200).json('The post has been deleted');
    } catch (error) {
      next(error);
    }
  };
