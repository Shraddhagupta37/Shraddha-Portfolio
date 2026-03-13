import React, { useState, useEffect } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'Skills', 'Projects', 'Certificates', 'Journey', 'Contact'];

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => item.toLowerCase());
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[var(--card-bg)]/80 backdrop-blur-md border-b border-[var(--border)]/30 py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Empty div for spacing on mobile */}
          <div className="w-6 md:hidden" />

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-1">
            {navItems.map((item, index) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;
              
              return (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative px-3 py-1.5"
                >
                  {/* Active indicator - simple dot */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ backgroundColor: 'var(--accent-gold)' }}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  
                  <span className={`text-sm font-mono transition-colors duration-200 ${
                    isActive 
                      ? 'text-[var(--accent-gold)]' 
                      : 'text-[var(--text-secondary)] hover:text-[var(--accent-gold)]'
                  }`}>
                    {item}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Theme Toggle - Right side */}
          <div className="flex items-center gap-2">
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--border)]/10 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? 
                <FiSun className="w-4 h-4 text-[var(--accent-gold)]" /> : 
                <FiMoon className="w-4 h-4 text-[var(--accent-copper)]" />
              }
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-[var(--border)]/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX className="w-4 h-4" /> : <FiMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[var(--card-bg)]/95 backdrop-blur-md border-b border-[var(--border)]/30"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                
                return (
                  <button
                    key={item}
                    onClick={() => scrollToSection(sectionId)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-all ${
                      isActive 
                        ? 'bg-[var(--accent-gold)]/10' 
                        : 'hover:bg-[var(--border)]/10'
                    }`}
                  >
                    <span className={`text-sm font-mono ${
                      isActive ? 'text-[var(--accent-gold)]' : 'text-[var(--text-secondary)]'
                    }`}>
                      {item}
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;