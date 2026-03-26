import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiCalendar, FiMapPin, FiAward, FiCode, FiBookOpen, FiExternalLink, FiStar, FiBriefcase } from 'react-icons/fi';

const journeyData = [
  {
    id: 1,
    type: "training",
    title: "Java Maestro: GUI Applications",
    organization: "Lovely Professional University",
    location: "Punjab, India",
    period: "June 2025 — July 2025",
    description: "Intensive training in Core Java, OOP, Collections, and Multithreading. Developed a capstone project 'ToddleUp', an interactive learning app for toddlers using Swing/AWT.",
    achievements: ["Built 'ToddleUp' learning app", "15+ user testing"],
    icon: FiCode,
    color: "var(--accent-copper)",
    link: "https://drive.google.com/file/d/1SrwS0FTCN776-9HD5pZC6ZBW8Yg3GblO/view"
  },
  {
    id: 2,
    type: "education",
    title: "B.Tech in Computer Science",
    organization: "Lovely Professional University",
    location: "Punjab, India",
    period: "2023 — Present",
    description: "Currently maintaining a CGPA of 9.04. Coursework includes Data Structures, Algorithms, Operating Systems, and Full-Stack Development.",
    achievements: ["University Honor Roll", "Winner: DevFest Gen-AI Hackathon"],
    icon: FiBookOpen,
    color: "var(--accent-gold)",
    link: null
  },
  {
    id: 3,
    type: "school",
    title: "School Education",
    organization: "Udaya Public School",
    location: "Ayodhya, Uttar Pradesh",
    period: "2019 — 2022",
    description: "Completed secondary and higher secondary education with a strong academic record in the science stream.",
    achievements: ["Class X: 97.2%", "Class XII: 88%"],
    icon: FiStar,
    color: "var(--accent-copper)",
    link: null
  }
];

const Journey = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.95], ['0%', '100%']);

  return (
    <section id="journey" className="section relative overflow-hidden py-24" ref={containerRef}>
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-gold) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-gold) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="section-container max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-wider" style={{ color: 'var(--accent-gold)' }}>
              // my journey
            </span>
            <div className="h-px w-12" style={{ 
              background: `linear-gradient(90deg, var(--accent-gold), transparent)`
            }} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">
            <span className="bg-gradient-to-r from-[#B8860B] via-[#B87333] to-[#C0C0C0] bg-clip-text text-transparent">
              Path to Engineering
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Academic foundation and specialized training
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated timeline line */}
          <motion.div 
            className="absolute left-[31px] md:left-1/2 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-[var(--accent-gold)] via-[var(--accent-copper)] to-transparent"
            style={{ height: lineHeight, top: 0 }}
          />

          <div className="space-y-12">
            {journeyData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-6 ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[22px] md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 bg-[var(--card-bg)] z-10"
                     style={{ borderColor: item.color }} />

                {/* Date marker */}
                <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'pl-12'}`}>
                  <span className="font-mono text-sm" style={{ color: 'var(--accent-silver)' }}>
                    {item.period}
                  </span>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  {/* Double border card - NO ROUNDED CORNERS */}
                  <div className="relative group">
                    {/* Double offset borders */}
                    <div className="absolute inset-0 border-2 translate-x-2 translate-y-2 -z-10"
                         style={{ borderColor: item.color }} />
                    <div className="absolute inset-0 border-2 translate-x-1 translate-y-1 -z-5"
                         style={{ borderColor: item.color === 'var(--accent-gold)' ? 'var(--accent-copper)' : 'var(--accent-gold)', opacity: 0.4 }} />
                    
                    {/* Main card - NO ROUNDED CORNERS */}
                    <div className="bg-[var(--card-bg)] border-2 border-[var(--border)] p-6
                                  transition-all duration-300 group-hover:border-[var(--accent-gold)]">
                      
                      {/* Header with icon */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 border-2 border-[var(--border)] flex items-center justify-center shrink-0
                                      group-hover:border-[var(--accent-gold)] transition-colors">
                          <item.icon className="w-5 h-5" style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-display font-bold mb-1 group-hover:text-[var(--accent-gold)] transition-colors">
                              {item.title}
                            </h3>
                            <span className="text-xs font-mono px-2 py-0.5 rounded-full border"
                                  style={{ 
                                    borderColor: item.color,
                                    color: item.color
                                  }}>
                              {item.type === 'education' ? '🎓' : item.type === 'training' ? '💻' : '🏫'}
                            </span>
                          </div>
                          <p className="text-sm font-mono" style={{ color: 'var(--accent-copper)' }}>
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      {/* Mobile date */}
                      <div className="flex items-center gap-2 mb-4 md:hidden">
                        <FiCalendar className="w-3 h-3" style={{ color: 'var(--accent-silver)' }} />
                        <span className="text-xs font-mono text-[var(--text-secondary)]">
                          {item.period}
                        </span>
                        <FiMapPin className="w-3 h-3 ml-2" style={{ color: 'var(--accent-silver)' }} />
                        <span className="text-xs font-mono text-[var(--text-secondary)]">
                          {item.location}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      {item.achievements && (
                        <div className="mb-4">
                          <p className="text-xs font-mono mb-2" style={{ color: 'var(--accent-gold)' }}>
                            // {item.type === 'school' ? 'academic' : 'key'} achievements
                          </p>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                                <span className="text-[var(--accent-gold)] mt-1">▹</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                        <div className="flex items-center gap-2">
                          <FiMapPin className="w-3 h-3" style={{ color: 'var(--accent-silver)' }} />
                          <span className="text-xs font-mono text-[var(--text-secondary)]">
                            {item.location}
                          </span>
                        </div>

                        {item.link && (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1.5 border border-[var(--border)]
                                     hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]
                                     transition-all duration-300 cursor-pointer z-20 relative"
                          >
                            <span className="text-xs font-mono">verify</span>
                            <FiExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>

                      {/* Corner accents */}
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-copper)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;