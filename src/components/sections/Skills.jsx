import React, { useRef, useEffect, useState } from "react";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import { skills } from "../../data/content";

// Devicon CDN URLs - much more comprehensive than simple-icons
const getLogoUrl = (skillName) => {
  const logoMap = {
    // Languages
    Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    
    // Frameworks
    React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    Swing: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    AWT: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    
    // Databases
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    
    // Tools
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    Excel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", // fallback
    Windows: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  };
  
  return logoMap[skillName] || null;
};

// Organize skills data for display
const skillsCategories = [
  {
    title: "Languages",
    icon: FiCode,
    color: "var(--accent-gold)",
    items: skills.languages
  },
  {
    title: "Frameworks",
    icon: FiServer,
    color: "var(--accent-copper)",
    items: skills.frameworks
  },
  {
    title: "Databases",
    icon: FiDatabase,
    color: "var(--accent-silver)",
    items: skills.databases
  },
  {
    title: "Tools",
    icon: FiTool,
    color: "var(--accent-gold)",
    items: skills.tools
  }
];

const Skills = () => {
  const [activeIndices, setActiveIndices] = useState({});
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute('data-index');
          if (entry.isIntersecting) {
            setActiveIndices(prev => ({ ...prev, [index]: true }));
          } else {
            setActiveIndices(prev => ({ ...prev, [index]: false }));
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: "-50px 0px -50px 0px"
      }
    );

    const elements = document.querySelectorAll('[data-index]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 overflow-hidden min-h-screen" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, var(--accent-gold) 1px, transparent 1px),
            linear-gradient(to bottom, var(--accent-gold) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-wider text-[var(--accent-gold)]">
              // expertise
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#B8860B] via-[#B87333] to-[#C0C0C0] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Technologies I work with daily
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-20">
          {skillsCategories.map((category, catIndex) => {
            const Icon = category.icon;
            const categoryId = `cat-${catIndex}`;
            
            return (
              <div key={category.title} className="grid md:grid-cols-12 gap-8">
                {/* Category Title - Left side */}
                <div className="md:col-span-4 lg:col-span-3">
                  <div
                    data-index={`${categoryId}-title`}
                    className={`flex items-center gap-3 md:block transition-all duration-700 ${
                      activeIndices[`${categoryId}-title`] 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                  >
                    <Icon className="w-8 h-8 mb-2" style={{ color: category.color }} />
                    <h3 className="text-3xl md:text-4xl font-display font-bold" style={{ color: category.color }}>
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Skills Items - Right side */}
                <div className="md:col-span-8 lg:col-span-9">
                  <div className="flex flex-wrap gap-6 md:gap-8">
                    {category.items.map((skill, skillIndex) => {
                      const logoUrl = getLogoUrl(skill.name);
                      const itemId = `${categoryId}-item-${skillIndex}`;
                      const isHovered = hoveredSkill === itemId;
                      
                      return (
                        <div
                          key={skill.name}
                          data-index={itemId}
                          onMouseEnter={() => setHoveredSkill(itemId)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group relative cursor-pointer transition-all duration-700 ${
                            activeIndices[itemId] 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-10'
                          }`}
                          style={{ 
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        >
                          {/* Glow effect on hover */}
                          <div className={`absolute -inset-2 rounded-full opacity-0 transition-all duration-500 ${
                            isHovered ? 'opacity-30' : ''
                          }`}
                               style={{ 
                                 boxShadow: `0 0 40px ${category.color}`,
                                 backgroundColor: category.color
                               }} />
                          
                          {/* Main content */}
                          <div className={`relative flex items-center gap-3 p-2
                                        transition-all duration-300 ease-out
                                        ${isHovered ? 'scale-110' : 'scale-100'}`}>
                            
                            {/* Logo image */}
                            <div className="relative">
                              <div className={`absolute inset-0 rounded-full blur-md transition-opacity duration-500 ${
                                isHovered ? 'opacity-60' : 'opacity-0'
                              }`}
                                   style={{ backgroundColor: category.color }} />
                              {logoUrl ? (
                                <img 
                                  src={logoUrl}
                                  alt={skill.name}
                                  className="w-8 h-8 md:w-10 md:h-10"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                                  }}
                                />
                              ) : (
                                <div className="w-8 h-8 md:w-10 md:h-10 bg-[var(--border)] rounded-full flex items-center justify-center">
                                  <span className="text-xs font-mono">{skill.name[0]}</span>
                                </div>
                              )}
                            </div>
                            
                            {/* Skill name */}
                            <span className={`text-lg md:text-xl font-medium font-mono
                                           transition-all duration-300
                                           ${isHovered ? 'text-[var(--accent-gold)] scale-105' : ''}`}>
                              {skill.name}
                            </span>

                            {/* Corner accent */}
                            {/* <div className={`w-1.5 h-1.5 border-t border-r border-[var(--accent-gold)] 
                                          transition-all duration-300
                                          ${isHovered ? 'opacity-100 scale-125' : 'opacity-0'}`} /> */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;