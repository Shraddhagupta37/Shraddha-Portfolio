import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import { personalInfo } from '../../data/content';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just open email client
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400">Let's collaborate on something amazing</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 flex items-center space-x-4">
              <FiMail className="w-6 h-6 text-primary-500" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-500">
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 flex items-center space-x-4">
              <FiPhone className="w-6 h-6 text-primary-500" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary-500">
                  {personalInfo.phone}
                </a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 flex items-center space-x-4">
              <FiMapPin className="w-6 h-6 text-primary-500" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">India</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-primary-500 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2 font-medium"
            >
              <span>Send Message</span>
              <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;