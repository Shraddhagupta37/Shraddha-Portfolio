import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiChevronLeft, FiChevronRight, FiCode, FiExternalLink, FiMonitor } from 'react-icons/fi';
import { projects } from '../../data/content';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTypingActive, setIsTypingActive] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const typingRef = useRef(null);
  
  const currentProject = projects[currentIndex];

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Clean typing animation
  const startTypingAnimation = useCallback(() => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }

    setIsTypingActive(true);
    setDisplayedLines([]);
    
    const totalLines = 9 + currentProject.tech.length;
    let currentLine = 0;
    
    const typeNextLine = () => {
      if (currentLine < totalLines) {
        setDisplayedLines(prev => [...prev, currentLine]);
        currentLine++;
        typingRef.current = setTimeout(typeNextLine, 50);
      } else {
        setIsTypingActive(false);
        typingRef.current = null;
      }
    };
    
    typingRef.current = setTimeout(typeNextLine, 200);
  }, [currentProject]);

  // Start typing when project changes
  useEffect(() => {
    setDisplayedLines([]);
    setIsTypingActive(false);
    
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    
    startTypingAnimation();
    
    return () => {
      if (typingRef.current) {
        clearTimeout(typingRef.current);
      }
    };
  }, [currentIndex, startTypingAnimation]);

  // Navigation functions
  const nextProject = () => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    if (typingRef.current) {
      clearTimeout(typingRef.current);
    }
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-gold) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-gold) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">
            <span className="bg-gradient-to-r from-[#B8860B] via-[#B87333] to-[#C0C0C0] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Featured work that solves real problems
          </p>
          
          <div className="mt-4">
            <a
              href="https://github.com/Shraddhagupta37?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-4 py-2 border border-[var(--border)] rounded-lg
                       hover:border-[var(--accent-gold)] hover:bg-[var(--accent-gold)]/5 transition-colors duration-300"
            >
              <span className="text-sm font-mono text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)]">
                view all projects
              </span>
              <FiExternalLink 
                size={14} 
                className="text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)]" 
              />
            </a>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* LEFT SECTION */}
          <div className="lg:w-5/12">
            {/* Screenshot box with double borders */}
            <div className="relative group">
              {/* Double offset borders */}
              <div className="absolute inset-0 border-2 translate-x-3 translate-y-3 -z-10"
                   style={{ borderColor: 'var(--accent-gold)' }} />
              <div className="absolute inset-0 border-2 translate-x-1.5 translate-y-1.5 -z-5"
                   style={{ borderColor: 'var(--accent-copper)', opacity: 0.4 }} />
              
              {/* Main Panel */}
              <div className="bg-[var(--card-bg)] border-2 border-[var(--border)] overflow-hidden 
                            shadow-xl hover:shadow-2xl transition-all group-hover:border-[var(--accent-gold)]">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b-2 border-[var(--border)]">
                  <div className="flex items-center gap-2">
                    <FiMonitor style={{ color: 'var(--accent-gold)' }} size={18} />
                    <span className="text-sm font-mono text-[var(--text-secondary)]">
                      preview
                    </span>
                  </div>
                  
                  {/* GitHub button - Using anchor tag with high z-index */}
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border-2 border-[var(--border)] hover:border-[var(--accent-gold)] 
                              transition-colors duration-300 inline-flex items-center justify-center
                              rounded-lg cursor-pointer relative z-20"
                    onClick={(e) => {
                      e.stopPropagation();
                      console.log('GitHub link clicked:', currentProject.github);
                    }}
                  >
                    <FiGithub size={18} className="text-[var(--text-secondary)] hover:text-[var(--accent-gold)]" />
                  </a>
                </div>
                
                {/* Project Screenshot */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900
                              flex items-center justify-center relative overflow-hidden">
                  {currentProject.image ? (
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-center">
                      <div className="text-4xl mb-2 opacity-30">📁</div>
                      <p className="text-sm text-gray-400 dark:text-gray-600 font-mono">
                        {currentProject.title}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation - with spacing */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevProject}
                className="px-5 py-2.5 bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-lg
                         hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] 
                         transition-colors duration-300 font-mono text-sm cursor-pointer"
              >
                ← Prev
              </button>
              
              <div className="px-5 py-2.5 bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-lg 
                            font-mono text-sm font-medium">
                <span style={{ color: 'var(--accent-gold)' }}>{currentIndex + 1}</span>
                <span className="text-[var(--text-secondary)] mx-1">/</span>
                <span style={{ color: 'var(--accent-silver)' }}>{projects.length}</span>
              </div>
              
              <button
                onClick={nextProject}
                className="px-5 py-2.5 bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-lg
                         hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] 
                         transition-colors duration-300 font-mono text-sm cursor-pointer"
              >
                Next →
              </button>
            </div>
          </div>

          {/* RIGHT SECTION - Terminal */}
          <div className="lg:w-7/12">
            {/* Single accent border */}
            <div className="relative group">
              <div className="absolute inset-0 border-2 translate-x-2 translate-y-2 rounded-2xl -z-10"
                   style={{ borderColor: 'var(--accent-copper)' }} />
              
              <div className="bg-gray-900 border-2 border-[var(--border)] rounded-2xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-gray-800/80 border-b-2 border-gray-700 px-4 py-3 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-2">
                    {!isTypingActive && displayedLines.length > 0 && showCursor && (
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--accent-gold)' }} />
                    )}
                    <span className="text-xs font-mono text-gray-400">
                      {currentProject.title.replace(/\s/g, '')}.tsx
                    </span>
                  </div>
                  <div className="w-10" />
                </div>
                
                {/* Terminal Content */}
                <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm overflow-x-auto min-h-[400px]">
                  {/* Line 1 */}
                  <div style={{ opacity: displayedLines.includes(0) ? 1 : 0, transition: 'opacity 0.2s' }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">1</span>
                    <span style={{ color: 'var(--accent-gold)' }}>// {currentProject.title}</span>
                  </div>

                  {/* Line 2 */}
                  <div style={{ opacity: displayedLines.includes(1) ? 1 : 0, transition: 'opacity 0.2s', marginTop: '0.5rem' }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">2</span>
                    <span style={{ color: 'var(--accent-copper)' }}>import</span>
                    <span className="text-gray-300"> {'{'} </span>
                    <span style={{ color: 'var(--accent-gold)' }}>Project</span>
                    <span className="text-gray-300"> {'}'} </span>
                    <span style={{ color: 'var(--accent-copper)' }}>from</span>
                    <span className="text-green-400"> './{currentProject.title.toLowerCase().replace(/\s/g, '')}'</span>
                    <span className="text-gray-300">;</span>
                  </div>

                  {/* Line 3 */}
                  <div style={{ opacity: displayedLines.includes(2) ? 1 : 0, transition: 'opacity 0.2s' }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">3</span>
                  </div>

                  {/* Line 4 */}
                  <div style={{ opacity: displayedLines.includes(3) ? 1 : 0, transition: 'opacity 0.2s' }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">4</span>
                    <span style={{ color: 'var(--accent-copper)' }}>const</span>
                    <span style={{ color: 'var(--accent-gold)' }}> project</span>
                    <span className="text-gray-300"> = </span>
                    <span style={{ color: 'var(--accent-gold)' }}>{'{'}</span>
                  </div>

                  {/* Line 5 */}
                  <div style={{ opacity: displayedLines.includes(4) ? 1 : 0, transition: 'opacity 0.2s', paddingLeft: '1rem' }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">5</span>
                    <span style={{ color: 'var(--accent-copper)' }}>title</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-green-400">"{currentProject.title}"</span>
                    <span className="text-gray-300">,</span>
                  </div>

                  {/* Line 6 */}
                  <div style={{ opacity: displayedLines.includes(5) ? 1 : 0, transition: 'opacity 0.2s', paddingLeft: '1rem' }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">6</span>
                    <span style={{ color: 'var(--accent-copper)' }}>description</span>
                    <span className="text-gray-300">: </span>
                    <span className="text-green-400">"{currentProject.fullDescription || currentProject.description}"</span>
                    <span className="text-gray-300">,</span>
                  </div>

                  {/* Line 7 */}
                  <div style={{ opacity: displayedLines.includes(6) ? 1 : 0, transition: 'opacity 0.2s', paddingLeft: '1rem' }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">7</span>
                    <span style={{ color: 'var(--accent-copper)' }}>tech</span>
                    <span className="text-gray-300">: [</span>
                  </div>

                  {/* Tech stack items */}
                  {currentProject.tech.map((tech, i) => (
                    <div key={i} style={{ 
                      opacity: displayedLines.includes(7 + i) ? 1 : 0, 
                      transition: 'opacity 0.2s', 
                      paddingLeft: '2rem' 
                    }}>
                      <span className="text-gray-600 mr-4 select-none text-xs">{8 + i}</span>
                      <span className="text-green-400">  '{tech}'</span>
                      {i < currentProject.tech.length - 1 && <span className="text-gray-300">,</span>}
                    </div>
                  ))}

                  {/* Close tech array */}
                  <div style={{ 
                    opacity: displayedLines.includes(7 + currentProject.tech.length) ? 1 : 0, 
                    transition: 'opacity 0.2s', 
                    paddingLeft: '1rem' 
                  }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">{8 + currentProject.tech.length}</span>
                    <span className="text-gray-300">],</span>
                  </div>

                  {/* Closing brace */}
                  <div style={{ 
                    opacity: displayedLines.includes(8 + currentProject.tech.length) ? 1 : 0, 
                    transition: 'opacity 0.2s' 
                  }}>
                    <span className="text-gray-600 mr-4 select-none text-xs">{9 + currentProject.tech.length}</span>
                    <span style={{ color: 'var(--accent-gold)' }}>{'};'}</span>
                  </div>

                  {/* Typing indicator */}
                  {isTypingActive && displayedLines.length < 9 + currentProject.tech.length && (
                    <div className="mt-2 flex items-center gap-1">
                      <span className="w-2 h-4" style={{ backgroundColor: 'var(--accent-gold)' }} />
                      <span className="text-xs text-gray-500">typing...</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;