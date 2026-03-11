import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";

/* Simple Icons (stable ones) */
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiPhp,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker
} from "react-icons/si";

/* Font Awesome */
import {
  FaJava,
  FaCss3Alt,
  FaWindows,
  FaLinux,
  FaCode
} from "react-icons/fa";

const skillsData = {
  Languages: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "C", icon: SiC, color: "#00599C" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" }
  ],

  Frameworks: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Swing", icon: FaJava, color: "#007396" },
    { name: "AWT", icon: FaJava, color: "#007396" }
  ],

  Databases: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }
  ],

  Tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "VS Code", icon: FaCode, color: "#007ACC" },
    { name: "Windows", icon: FaWindows, color: "#0078D6" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" }
  ]
};

const categoryIcons = {
  Languages: <FiCode className="text-[var(--accent-gold)]" size={20} />,
  Frameworks: <FiServer className="text-[var(--accent-copper)]" size={20} />,
  Databases: <FiDatabase className="text-[var(--accent-silver-light)]" size={20} />,
  Tools: <FiTool className="text-[var(--accent-gold)]" size={20} />
};

const SkillCard = ({ name, icon: Icon, color, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.4, 
      delay: index * 0.03,
      ease: [0.25, 0.1, 0.25, 1]
    }}
    whileHover={{ 
      y: -4,
      transition: { duration: 0.2 }
    }}
    className="group relative"
  >
    {/* Glow effect on hover - individual skill only */}
    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         style={{ 
           boxShadow: '0 0 15px rgba(184, 134, 11, 0.3)',
           background: 'rgba(184, 134, 11, 0.03)'
         }} 
    />
    
    {/* Main card */}
    <div className="relative px-4 py-3 bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-lg
                    transition-all duration-300 group-hover:border-[var(--accent-gold)]
                    flex items-center gap-3 min-w-[130px]">
      
      <motion.div
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.2 }}
        style={{ color }}
        className="text-xl"
      >
        <Icon />
      </motion.div>
      
      <span className="text-sm font-medium text-[var(--text-primary)] 
                       group-hover:text-[var(--accent-gold)] transition-colors">
        {name}
      </span>
      
      {/* Corner accent */}
      <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r 
                      border-[var(--accent-gold)] opacity-0 group-hover:opacity-50 
                      transition-opacity duration-300" />
    </div>
  </motion.div>
);

const Skills = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  // Accent colors for each category
  const categoryAccents = {
    Languages: 'var(--accent-gold)',
    Frameworks: 'var(--accent-copper)',
    Databases: 'var(--accent-silver-light)', // Lighter for light mode
    Tools: 'var(--accent-gold)'
  };

  return (
    <section id="skills" className="section relative">
      {/* Subtle background grid */}
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
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-wider" style={{ color: 'var(--accent-gold)' }}>
              // expertise
            </span>
            <div className="h-px flex-1" style={{ 
              background: `linear-gradient(90deg, var(--accent-gold), transparent)`
            }} />
          </div>

          <h2 className="heading-medium mb-4">
            <span className="gradient-accent">Technical Skills</span>
          </h2>
          
          <p className="text-[var(--text-secondary)] max-w-2xl">
            A curated collection of technologies I work with daily.
          </p>
        </motion.div>

        {/* Skills Grid - with hero-style double offset borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsData).map(([category, items], idx) => {
            const accentColor = categoryAccents[category];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="relative group"
              >
                {/* Double offset borders - exactly like hero profile */}
                <div className="absolute inset-0 border-2 translate-x-3 translate-y-3 -z-10 rounded-lg"
                     style={{ borderColor: accentColor }} />
                <div className="absolute inset-0 border-2 translate-x-1.5 translate-y-1.5 -z-5 rounded-lg"
                     style={{ borderColor: accentColor, opacity: 0.4 }} />
                
                {/* Subtle border glow on hover */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                     style={{ 
                       boxShadow: `0 0 20px ${accentColor}`,
                       pointerEvents: 'none'
                     }} 
                />
                
                {/* Main content box */}
                <div className="relative bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-lg p-6
                              transition-all duration-300">
                  
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-[var(--border)]">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border-2 border-[var(--border)] rounded-lg bg-[var(--card-bg)]">
                        {categoryIcons[category]}
                      </div>
                      <h3 className="text-lg font-bold" style={{ 
                        fontFamily: 'Space Grotesk, sans-serif',
                        color: 'var(--text-primary)'
                      }}>
                        {category}
                      </h3>
                    </div>
                    
                    {/* Accent-colored item badge */}
                    <span className="text-xs font-mono px-3 py-1 rounded-full border"
                          style={{ 
                            borderColor: accentColor,
                            color: accentColor,
                            backgroundColor: `${accentColor}15`
                          }}>
                      {items.length} {items.length === 1 ? 'item' : 'items'}
                    </span>
                  </div>

                  {/* Skills Grid - individual cards with their own hover effects */}
                  <div className="grid grid-cols-2 gap-3">
                    {items.map((skill, idx) => (
                      <SkillCard key={skill.name} {...skill} index={idx} />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;