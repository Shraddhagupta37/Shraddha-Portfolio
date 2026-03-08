import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { certificates } from '../../data/content';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? certificates : certificates.slice(0, 4);

  return (
    <section id="certificates" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold mb-1">Certifications</h2>
            <p className="text-gray-600 dark:text-gray-400">Continuous learning journey</p>
          </motion.div>
          
          {!showAll && certificates.length > 4 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 text-primary-500 hover:text-primary-600 font-medium text-sm"
            >
              View All ({certificates.length}) <FiArrowRight />
            </motion.button>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence>
            {displayedCerts.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                      📜
                    </div>
                    <FiExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-primary-500" />
                  </div>
                  <h3 className="font-medium text-sm mb-1 line-clamp-2">{cert.name}</h3>
                  <p className="text-xs text-primary-500 mb-1">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">{cert.date}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6"
          >
            <button
              onClick={() => setShowAll(false)}
              className="text-sm text-primary-500 hover:text-primary-600"
            >
              Show Less
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certificates;