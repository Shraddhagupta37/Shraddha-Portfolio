import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiChevronLeft, FiChevronRight, FiCode, FiExternalLink } from 'react-icons/fi';
import { projects } from '../../data/content';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const ProjectDisplay = ({ project }) => {
    const [currentMockup, setCurrentMockup] = useState(0);

    const nextMockup = () => {
      setCurrentMockup((prev) => (prev + 1) % (project.mockups?.length || 1));
    };

    const prevMockup = () => {
      setCurrentMockup((prev) => (prev - 1 + (project.mockups?.length || 1)) % (project.mockups?.length || 1));
    };

    return (
      <div className="grid md:grid-cols-2 gap-6 bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-xl">
        {/* Left - MacOS Window with Mockups */}
        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-900 rounded-t-xl overflow-hidden shadow-lg">
            {/* Window Controls */}
            <div className="bg-gray-200 dark:bg-gray-800 px-4 py-3 flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="flex-1 text-center text-sm text-gray-600 dark:text-gray-400 font-medium">
                {project.title} — Preview
              </span>
            </div>
            
            {/* Mockup Display */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMockup}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2">📱</div>
                    <div className="text-white font-display text-xl opacity-50">
                      {project.title} Interface
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Arrows for Mockups */}
              {project.mockups && project.mockups.length > 1 && (
                <>
                  <button
                    onClick={prevMockup}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={nextMockup}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FiChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right - VS Code Style Description */}
        <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
          {/* VS Code Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2">
            <FiCode className="text-blue-400" />
            <span className="text-sm text-gray-300 font-mono">README.md</span>
            <span className="flex-1"></span>
            <span className="text-xs text-gray-500">TypeScript</span>
          </div>
          
          {/* VS Code Content */}
          <div className="p-6 font-mono text-sm">
            <div className="text-green-400 mb-3">$ cat project-info.md</div>
            
            <div className="space-y-4">
              {/* Title */}
              <div>
                <span className="text-blue-400">#</span>{' '}
                <span className="text-blue-400 font-bold">{project.title}</span>
              </div>
              
              {/* Date */}
              <div>
                <span className="text-purple-400">Date:</span>{' '}
                <span className="text-yellow-300">{project.date}</span>
              </div>
              
              {/* Description */}
              <div>
                <div className="text-purple-400 mb-1">/**</div>
                <div className="text-purple-400 pl-4">* Description</div>
                <div className="text-purple-400 pl-4">*/</div>
                <p className="text-gray-300 mt-2 leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>
              
              {/* Tech Stack */}
              <div>
                <div className="text-purple-400 mb-1">/**</div>
                <div className="text-purple-400 pl-4">* Tech Stack</div>
                <div className="text-purple-400 pl-4">*/</div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* GitHub Link */}
              <div className="pt-4 border-t border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View source on GitHub</span>
                  <FiExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-display font-bold mb-2">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world applications that solve problems and showcase technical expertise
          </p>
        </motion.div>

        {/* Project Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Project {currentIndex + 1} of {projects.length}
            </span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevProject}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProject}
              className="p-2 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Project Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDisplay project={currentProject} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;