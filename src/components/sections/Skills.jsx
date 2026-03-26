import React, { useRef, useEffect, useState } from "react";
import { FiCode, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import { skills } from "../../data/content";

// Devicon CDN URLs with proper Excel fix
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
    Vite: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    TailwindCSS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    Laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
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
    Vagrant: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vagrant/vagrant-original.svg",
    Excel: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoft/microsoft-original.svg",
    Windows: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    Linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
  };
  
  return logoMap[skillName] || null;
};

// Skill descriptions for hover meaning
const skillDescriptions = {
  // Languages
  Python: "Data processing & automation",
  C: "System programming",
  "C++": "Performance-critical apps",
  Java: "Enterprise applications",
  JavaScript: "Interactive web apps",
  PHP: "Server-side scripting",
  
  // Frameworks
  React: "Building interactive UIs",
  "Node.js": "Scalable backend services",
  "Express.js": "RESTful APIs",
  Vite: "Lightning-fast builds",
  HTML5: "Semantic structure",
  CSS3: "Modern styling",
  TailwindCSS: "Utility-first styling",
  Laravel: "PHP MVC framework",
  Swing: "Java desktop apps",
  AWT: "Legacy GUI development",
  
  // Databases
  MySQL: "Relational databases",
  MongoDB: "NoSQL document store",
  PostgreSQL: "Advanced relational DB",
  
  // Tools
  Git: "Version control",
  GitHub: "Code collaboration",
  Docker: "Containerization",
  "VS Code": "Primary IDE",
  Vagrant: "Development environments",
  Excel: "Data analysis",
  Windows: "Desktop OS",
  Linux: "Server environment"
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
  const [terminalStep, setTerminalStep] = useState(0);
  const intervalRef = useRef(null);
  const sectionRef = useRef(null);

  const totalSkillsCount = Object.values(skills).reduce((sum, cat) => sum + cat.length, 0);

  // Start the terminal animation
  const startTerminalAnimation = () => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setTerminalStep(0);
    
    let step = 0;
    intervalRef.current = setInterval(() => {
      if (step < 2) {
        step++;
        setTerminalStep(step);
      } else {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 600);
  };

  // Reset terminal animation when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section became visible - start animation
            startTerminalAnimation();
          } else {
            // Section left view - reset and clear interval
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            setTerminalStep(0);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

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
        {/* Heading with Terminal Continuity */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-xs tracking-wider text-[var(--accent-gold)]">
              // expertise
            </span>
            <div className="h-px w-12 bg-gradient-to-r from-[var(--accent-gold)] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-[#B8860B] via-[#B87333] to-[#C0C0C0] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          {/* Terminal narrative - animated on scroll */}
          <div className="font-mono text-sm text-[var(--text-secondary)] bg-[var(--card-bg)]/50 inline-block px-4 py-2 rounded-full border border-[var(--border)] transition-all duration-300 min-w-[220px]">
            <span className="text-[var(--accent-gold)]">$</span>
            {terminalStep === 0 && " load_skills.sh"}
            {terminalStep === 1 && " Loading core technologies..."}
            {terminalStep === 2 && ` ${totalSkillsCount} modules loaded`}
            <span className="animate-pulse ml-1">
              {terminalStep < 2 ? "|" : "_"}
            </span>
          </div>
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
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {category.items.map((skill, skillIndex) => {
                      const logoUrl = getLogoUrl(skill.name);
                      const description = skillDescriptions[skill.name] || "Professional experience";
                      const itemId = `${categoryId}-item-${skillIndex}`;
                      const isHovered = hoveredSkill === itemId;
                      
                      return (
                        <div
                          key={skill.name}
                          data-index={itemId}
                          onMouseEnter={() => setHoveredSkill(itemId)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group relative transition-all duration-700 ${
                            activeIndices[itemId] 
                              ? 'opacity-100 translate-y-0' 
                              : 'opacity-0 translate-y-10'
                          }`}
                          style={{ 
                            transitionDelay: `${skillIndex * 100}ms`
                          }}
                        >
                          {/* Card with micro-interactions */}
                          <div className={`relative bg-[var(--card-bg)] border-2 border-[var(--border)] rounded-lg p-3
                                        transition-all duration-300
                                        hover:scale-105 hover:shadow-[0_0_10px_rgba(184,134,11,0.3)]
                                        hover:border-[var(--accent-gold)]
                                        ${isHovered ? 'shadow-md border-[var(--accent-gold)]' : ''}`}>
                            
                            {/* Icon and name side by side */}
                            <div className="flex items-center gap-3">
                              {logoUrl ? (
                                <img 
                                  src={logoUrl}
                                  alt={skill.name}
                                  className="w-6 h-6 md:w-7 md:h-7 transition-all duration-300
                                           group-hover:rotate-6 group-hover:scale-110"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
                                  }}
                                />
                              ) : (
                                <div className="w-6 h-6 md:w-7 md:h-7 bg-[var(--border)] rounded-full flex items-center justify-center
                                              transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                                  <span className="text-xs font-mono">{skill.name[0]}</span>
                                </div>
                              )}
                              
                              <span className={`text-sm md:text-base font-mono transition-colors duration-300
                                             ${isHovered ? 'text-[var(--accent-gold)]' : ''}`}>
                                {skill.name}
                              </span>
                            </div>

                            {/* Hover meaning - description on top right */}
                            {isHovered && (
                              <div className="absolute -top-3 -right-2 z-20">
                                <div className="relative">
                                  <div className="absolute inset-0 blur-md bg-[var(--accent-gold)] opacity-20 rounded-full" />
                                  <div className="relative bg-[var(--card-bg)] border-2 border-[var(--accent-gold)] 
                                                px-3 py-1 rounded-full shadow-lg">
                                    <span className="text-xs font-mono text-[var(--accent-gold)] whitespace-nowrap">
                                      {description}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
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

        {/* Terminal footer */}
        <div className="mt-20 text-center font-mono text-sm text-[var(--text-secondary)]">
          <span className="text-[var(--accent-gold)]">$</span> echo "Ready to build something amazing"
          <span className="animate-pulse ml-1">_</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;