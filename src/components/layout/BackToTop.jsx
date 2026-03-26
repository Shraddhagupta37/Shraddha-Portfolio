import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress percentage
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Calculate circle dash offset for progress ring
  const size = 56;
  const radius = 24;
  const center = size / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group cursor-pointer"
          style={{ width: size, height: size }}
          aria-label="Back to top"
        >
          {/* Progress Ring SVG - Positioned absolutely to cover entire button */}
          <svg 
            className="absolute top-0 left-0 w-full h-full -rotate-90"
            style={{ pointerEvents: 'none' }}
            viewBox={`0 0 ${size} ${size}`}
          >
            {/* Background ring */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="var(--border)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Progress ring - only shows if progress > 0 */}
            {scrollProgress > 0 && (
              <circle
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke="var(--accent-gold)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-200 ease-out"
              />
            )}
          </svg>

          {/* Main Button */}
          <div className="relative w-full h-full rounded-full bg-[var(--card-bg)] border-2 border-[var(--border)]
                        hover:border-[var(--accent-gold)] transition-all duration-300 shadow-lg hover:shadow-xl
                        flex items-center justify-center group">
            
            {/* Arrow Icon */}
            <FiArrowUp className="w-5 h-5 text-[var(--text-secondary)] group-hover:text-[var(--accent-gold)]
                               transition-all duration-300 group-hover:-translate-y-1" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;