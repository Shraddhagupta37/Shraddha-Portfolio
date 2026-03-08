import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import { personalInfo } from '../../data/content';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="/profile.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">
              <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer & AI Enthusiast
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0 mb-6 leading-relaxed">
              I build full-stack applications with React, Node.js, and MongoDB. 
              Passionate about creating elegant solutions and exploring AI technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all"
                title="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all"
                title="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white transition-all"
                title="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>

            {/* View Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm"
            >
              View Resume <FiExternalLink className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;