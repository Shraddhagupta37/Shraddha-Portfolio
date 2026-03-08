import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const educationData = [
  {
    degree: "B.Tech Computer Science",
    institution: "Lovely Professional University",
    location: "Punjab",
    period: "2023 - Present",
    score: "CGPA: 9.08",
    type: "current"
  },
  {
    degree: "Intermediate (XII)",
    institution: "Udaya Public School",
    location: "Ayodhya",
    period: "2021 - 2022",
    score: "88%",
    type: "completed"
  },
  {
    degree: "Matriculation (X)",
    institution: "Udaya Public School",
    location: "Ayodhya",
    period: "2019 - 2020",
    score: "97.2%",
    type: "completed"
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl font-display font-bold mb-2">Education</h2>
          <p className="text-gray-600 dark:text-gray-400">Academic background</p>
        </motion.div>

        <div className="space-y-4">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-6 border-l-2 border-primary-500/30 last:border-l-2"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-2 top-2 w-4 h-4 rounded-full ${
                edu.type === 'current' 
                  ? 'bg-primary-500 animate-pulse' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`} />
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-lg">{edu.degree}</h3>
                  <span className={`text-sm font-medium px-2 py-0.5 rounded ${
                    edu.type === 'current'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                      : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
                  }`}>
                    {edu.score}
                  </span>
                </div>
                
                <p className="text-primary-500 font-medium mb-2">{edu.institution}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="w-3.5 h-3.5" /> {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiMapPin className="w-3.5 h-3.5" /> {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;