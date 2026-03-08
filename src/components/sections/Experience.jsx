import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../../data/content';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Experience</h2>
          <p className="text-gray-600 dark:text-gray-400">My professional journey</p>
        </motion.div>

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-display font-semibold">{exp.title}</h3>
              <p className="text-primary-500">{exp.company}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.date}</p>
              <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary-500 hover:underline"
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;