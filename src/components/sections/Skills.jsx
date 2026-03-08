import React from "react";
import { motion } from "framer-motion";

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
  SiGithub
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
  languages: [
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "C", icon: SiC, color: "#00599C" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" }
  ],

  frameworks: [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express", icon: SiExpress, color: "#000000" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Swing", icon: FaJava, color: "#007396" },
    { name: "AWT", icon: FaJava, color: "#007396" }
  ],

  databases: [
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" }
  ],

  tools: [
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "VS Code", icon: FaCode, color: "#007ACC" },
    { name: "Windows", icon: FaWindows, color: "#0078D6" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" }
  ]
};

const SkillBadge = ({ name, icon: Icon, color }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
  >
    <Icon style={{ color }} className="w-4 h-4" />
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold mb-2">Skills</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Technologies I work with
          </p>
        </motion.div>

        <div className="space-y-6">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category}>

              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>

              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <SkillBadge key={skill.name} {...skill} />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;