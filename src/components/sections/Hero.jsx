import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink, FiArrowDown, FiCode } from 'react-icons/fi';
import { personalInfo } from '../../data/content';

const Hero = () => {
  // Technical animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const profileVariants = {
    hidden: { opacity: 0, x: -50, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Technical grid overlay */}
      {/* <div className="absolute inset-0 -z-5 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #B8860B 1px, transparent 1px),
            linear-gradient(to bottom, #B8860B 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div> */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-20">
          
          {/* Content - Left Side */}
          <motion.div
            variants={containerVariants}
            className="flex-1 text-center md:text-left order-2 md:order-1"
          >
            {/* Code comment style greeting */}
            <motion.div
              variants={itemVariants}
              className="font-mono text-sm mb-4 flex items-center justify-center md:justify-start gap-2"
              style={{ color: '#B8860B' }}
            >
              <FiCode className="text-lg" />
              <span>// introducing</span>
            </motion.div>

            {/* Name with technical styling */}
            <motion.h1
              variants={itemVariants}
              className="heading-large mb-2"
            >
              <span className="font-display bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 bg-clip-text text-transparent" >{personalInfo.name.split(' ')[0]}</span>
              <br />
              <span className="font-display relative inline-block bg-gradient-to-r from-primary-500 via-accent-500 to-pink-500 bg-clip-text text-transparent">
                {personalInfo.name.split(' ')[1]}
                {/* Underline with glow */}
                <span className="absolute -bottom-2 left-0 w-full h-1 glow-primary" style={{ backgroundColor: '#B8860B', opacity: 0.5 }} />
              </span>
            </motion.h1>

            {/* Title with typing effect */}
            <motion.div
              variants={itemVariants}
              className="font-mono text-lg text-[var(--text-secondary)] mb-6 flex items-center justify-center md:justify-start gap-2"
            >
              <span style={{ color: '#B8860B' }}>$</span>
              <span>cat role.txt</span>
              <span style={{ color: '#B8860B', animation: 'pulse 1s infinite' }}>|</span>
            </motion.div>
            
            <motion.p
              variants={itemVariants}
              className="font-mono text-xl md:text-2xl text-[var(--text-primary)] mb-4"
            >
              Full Stack Developer <span style={{ color: '#B8860B' }}>&</span> AI Enthusiast
            </motion.p>

            {/* Description with technical formatting */}
            <motion.div
              variants={itemVariants}
              className="font-mono text-sm text-[var(--text-secondary)] max-w-xl mb-8 leading-relaxed bg-[var(--card-bg)] p-6 border-2 border-[var(--border)] rounded-lg relative"
            >
              <div className="absolute -top-3 left-4 px-2 bg-[var(--card-bg)] font-mono text-xs border-x-2 border-[var(--border)]" style={{ color: '#B8860B' }}>
                about.me
              </div>
              <p className="leading-relaxed">
                <span className="text-primary-500">const</span> <span className="text-[var(--text-primary)]">developer</span> = {'{'}
                <br />
                &nbsp;&nbsp;name: <span className="text-green-600 dark:text-green-400">'{personalInfo.name}'</span>,
                <br />
                &nbsp;&nbsp;nationality: <span className="text-green-600 dark:text-green-400">'India'</span>,
                <br />
                &nbsp;&nbsp;stack: [<span className="text-green-600 dark:text-green-400">'React'</span>, <span className="text-green-600 dark:text-green-400">'Node.js'</span>, <span className="text-green-600 dark:text-green-400">'Express.js'</span>, <span className="text-green-600 dark:text-green-400">'MongoDB'</span>],
                <br />
                &nbsp;&nbsp;passion: <span className="text-green-600 dark:text-green-400">'Building technical solutions with artistic flair'</span>
                <br />
                {'};'}
              </p>
            </motion.div>

            {/* CTA Buttons - Outlined style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a
                href="#projects"
                className="btn-outline group"
              >
                <span>View Projects</span>
                <FiExternalLink className="inline ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <span>Resume.pdf</span>
                <span className="font-mono text-xs ml-2" style={{ color: '#B8860B' }}>(new tab)</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center md:justify-start gap-3 mt-8"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon group"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon group"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="btn-icon group"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Right Side with Creative Shape */}
          <motion.div
            variants={profileVariants}
            className="relative order-1 md:order-2 group"
          >
            {/* Offset shadow/glow effect */}
            <div className="absolute inset-0 border-2 translate-x-4 translate-y-4 -z-10 rounded-none" style={{ borderColor: '#B8860B' }} />
            <div className="absolute inset-0 border-2 translate-x-2 translate-y-2 -z-5 rounded-none" style={{ borderColor: '#B8860B', opacity: 0.5 }} />
            
            {/* Technical frame elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2" style={{ borderColor: '#B8860B' }} />
            <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2" style={{ borderColor: '#B8860B' }} />
            
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: '#B8860B' }} />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: '#B8860B' }} />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: '#B8860B' }} />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: '#B8860B' }} />

            {/* Profile image with shape */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 overflow-hidden border-2 border-[var(--border)]">
              <img
                src="/profile.png"
                alt={personalInfo.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay grid on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500" style={{
                backgroundImage: `
                  linear-gradient(to right, #B8860B 1px, transparent 1px),
                  linear-gradient(to bottom, #B8860B 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>

            {/* Floating technical badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-8 -right-8 bg-[var(--card-bg)] border-2 px-3 py-1 rounded-none font-mono text-sm" 
              style={{ borderColor: '#B8860B' }}
            >
              &lt;dev /&gt;
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-[var(--card-bg)] border-2 px-3 py-1 rounded-none font-mono text-sm"
              style={{ borderColor: '#B8860B' }}
            >
              .exe
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator - Technical style */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a
            href="#skills"
            className="flex flex-col items-center gap-2 text-[var(--text-secondary)] transition-colors font-mono text-xs hover:text-[#B8860B]"
          >
            <span>$ scroll_down --execute</span>
            <FiArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;