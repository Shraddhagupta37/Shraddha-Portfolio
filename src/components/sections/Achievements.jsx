import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../../data/content';
import { FiAward } from 'react-icons/fi';

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-4">Achievements</h2>
          <p className="text-gray-600 dark:text-gray-400">Recognition and milestones</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 text-center"
            >
              <FiAward className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;