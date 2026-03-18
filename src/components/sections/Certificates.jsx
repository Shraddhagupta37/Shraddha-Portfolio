import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiAward, FiCalendar } from "react-icons/fi";
import { certificates } from "../../data/content";

const Certificates = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  // Track horizontal scroll progress
  const handleHorizontalScroll = () => {
    if (timelineRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = timelineRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth);
      setScrollProgress(progress || 0);
    }
  };

  useEffect(() => {
    const timeline = timelineRef.current;
    if (timeline) {
      timeline.addEventListener('scroll', handleHorizontalScroll);
      return () => timeline.removeEventListener('scroll', handleHorizontalScroll);
    }
  }, []);

  const formatDate = (cert) => {
    const dateStr = cert.date_achieved || cert.date;
    if (!dateStr) return "Issued";

    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <section id="certificates" className="relative py-24 overflow-hidden" ref={containerRef}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-gold) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-gold) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-wider text-[var(--accent-gold)]">
              / certifications
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-[#B8860B] via-[#B87333] to-[#C0C0C0] bg-clip-text text-transparent">
              Technical Credentials
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Industry-recognized certifications in software development, AI, and cloud computing
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line Container - with faded ends */}
          <div className="absolute top-8 left-0 w-full h-[2px] overflow-hidden">
            {/* Background track */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(90deg, transparent, var(--border)/30 10%, var(--border)/30 90%, transparent)'
            }} />
            
            {/* Animated fill line */}
            <motion.div 
              className="absolute left-0 top-0 h-full"
              style={{
                width: `${scrollProgress * 100}%`,
                background: 'linear-gradient(90deg, transparent, var(--accent-gold) 10%, var(--accent-copper) 90%, transparent)',
              }}
            />
          </div>

          {/* Scrollable timeline */}
          <div
            ref={timelineRef}
            className="flex gap-8 overflow-x-auto pb-8 pt-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((cert, i) => {
              const isHovered = hoveredIndex === i;
              // Fix: use index-based accent color but ensure first card doesn't default to gold border
              const accentColor = i % 3 === 0 ? 'var(--accent-gold)' : 
                                 i % 3 === 1 ? 'var(--accent-copper)' : 'var(--accent-silver)';

              // Dot active state
              const dotActive = scrollProgress > (i / certificates.length) - 0.1 && 
                               scrollProgress < (i / certificates.length) + 0.1;

              return (
                <motion.div
                  key={i}
                  onHoverStart={() => setHoveredIndex(i)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  className="relative min-w-[300px]"
                >
                  {/* Timeline Node */}
                  <motion.div 
                    className="w-4 h-4 rounded-full mx-auto mb-6 relative z-10"
                    animate={{ 
                      scale: isHovered || dotActive ? 1.3 : 1,
                    }}
                    style={{ 
                      backgroundColor: accentColor,
                      boxShadow: dotActive ? `0 0 15px ${accentColor}` : 'none',
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  {/* Card */}
                  <motion.div
                    animate={{ y: isHovered ? -4 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative h-[300px]"
                  >
                    {/* Double borders */}
                    <div className="absolute inset-0 border-2 translate-x-2 translate-y-2 rounded-xl -z-10"
                         style={{ borderColor: accentColor }} />
                    <div className="absolute inset-0 border-2 translate-x-1 translate-y-1 rounded-xl -z-5"
                         style={{ borderColor: accentColor, opacity: 0.4 }} />
                    
                    {/* Main card */}
                    <div className="relative bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-xl 
                                  p-6 h-full flex flex-col transition-all duration-200 hover:border-[var(--accent-gold)]">
                      
                      {/* Issuer section - fixed at top */}
                      <div className="flex items-center gap-2 mb-3">
                        <FiAward className="w-4 h-4 shrink-0" style={{ color: accentColor }} />
                        <span className="text-xs font-mono text-[var(--text-secondary)] truncate">
                          {cert.issuer || cert.organization}
                        </span>
                      </div>

                      {/* Certificate name */}
                      <h3 className="text-xl font-display font-semibold mb-3 leading-snug line-clamp-2">
                        {cert.name}
                      </h3>

                      {/* Date - with icon */}
                      <div className="flex items-center gap-2 mb-4">
                        <FiCalendar className="w-3 h-3 shrink-0" style={{ color: accentColor }} />
                        <span className="text-xs font-mono text-[var(--text-secondary)]">
                          {formatDate(cert)}
                        </span>
                      </div>

                      {/* Description - flexible space */}
                      {cert.description && (
                        <p className="text-xs text-[var(--text-secondary)] mb-4 leading-relaxed line-clamp-2">
                          {cert.description}
                        </p>
                      )}

                      {/* Spacer to push verify link to bottom */}
                      <div className="flex-1" />

                      {/* Verify link - with hover effect */}
                      <motion.a
                        href={cert.link || cert.verification_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        className="inline-flex items-center gap-2 text-xs font-mono
                                 text-[var(--text-secondary)] hover:text-[var(--accent-gold)] 
                                 transition-colors group/link pt-2 border-t border-[var(--border)]/30"
                      >
                        <span>Verify credential</span>
                        <FiExternalLink className="w-3 h-3 group-hover/link:translate-x-1 
                                                 group-hover/link:-translate-y-1 transition-transform" />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;