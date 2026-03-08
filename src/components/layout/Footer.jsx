import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/content';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Shraddha Gupta. All rights reserved.
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
          Built with React, TailwindCSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;