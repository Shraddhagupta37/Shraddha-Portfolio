import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { personalInfo } from '../../data/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--border)]/30 py-12 px-4 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-gold)]/5 to-transparent pointer-events-none" />
      
      {/* Decorative line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[var(--accent-gold)] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 border border-[var(--border)] hover:border-[var(--accent-gold)] 
                       transition-colors duration-300 rounded-lg"
              aria-label="GitHub"
            >
              <FiGithub className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors" />
              {/* Corner accent */}
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--accent-gold)] 
                             opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--accent-gold)] 
                             opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 border border-[var(--border)] hover:border-[var(--accent-gold)] 
                       transition-colors duration-300 rounded-lg"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors" />
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--accent-gold)] 
                             opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--accent-gold)] 
                             opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            
            <a
              href={`mailto:${personalInfo.email}`}
              className="group relative p-3 border border-[var(--border)] hover:border-[var(--accent-gold)] 
                       transition-colors duration-300 rounded-lg"
              aria-label="Email"
            >
              <FiMail className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)] transition-colors" />
              <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[var(--accent-gold)] 
                             opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[var(--accent-gold)] 
                             opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Copyright with heart */}
          <div className="text-center space-y-2">
            <p className="text-sm font-mono text-[var(--text-secondary)]">
              © {currentYear} Shraddha Gupta. All rights reserved.
            </p>
            {/* <p className="text-xs font-mono text-[var(--text-secondary)]/60 flex items-center justify-center gap-1.5">
              <span>Built with</span>
              <FiHeart className="w-3 h-3 text-[var(--accent-gold)] animate-pulse" />
              <span>using React, TailwindCSS & Framer Motion</span>
            </p> */}
          </div>

          {/* Small decorative element */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-mono text-[var(--text-secondary)]/40">_</span>
            <span className="text-[10px] font-mono text-[var(--text-secondary)]/40">/ / /</span>
            <span className="text-[10px] font-mono text-[var(--text-secondary)]/40">_</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;