'use client';
import '@/app/globals.css';

import { ContactInfo } from '@/app/types';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { Clock, Mail, Phone, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo: ContactInfo = {
  phone: '+1 (555) 123-CAFE',
  email: 'hello@whimsycafe.com',
  hours: {
    'Monday - Friday': '6:00 AM - 8:00 PM',
    Saturday: '7:00 AM - 9:00 PM',
    Sunday: '7:00 AM - 7:00 PM',
  },
};

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          love to hear from you! Whether you have questions, feedback, or just want to say
          experience exceptional.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="section-subtitle">Get in Touch</h3>

          <div className="contact-info-item">
            <Phone className="contact-info-icon" />
            <div className="contact-info-content">
              <div className="contact-info-label">Phone</div>
              <div className="contact-info-value">{contactInfo.phone}</div>
            </div>
          </div>

          <div className="contact-info-item">
            <Mail className="contact-info-icon" />
            <div className="contact-info-content">
              <div className="contact-info-label">Email</div>
              <div className="contact-info-value">{contactInfo.email}</div>
            </div>
          </div>

          <div className="contact-info-item">
            <Clock className="contact-info-icon" />
            <div className="contact-info-content">
              <div className="contact-info-label">Hours</div>
              <div className="contact-info-value space-y-1">
                {Object.entries(contactInfo.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between">
                    <span className="font-medium">{day}:</span>
                    <span>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="section-subtitle">Send us a Message</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="form-textarea"
                required
              />
            </div>

            <Button type="submit" className="form-button">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
export default Contact;
