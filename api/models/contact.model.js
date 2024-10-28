import { Timestamp } from "bson";
import mongoose, { Schema } from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  company: { type: String, required: true },
  services: [{ type: String, required: true }],
  message: { type: String, required: true },

}, {timestamps: true}
)

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;