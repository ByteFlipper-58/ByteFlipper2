// pages/Projects.tsx
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const categories = ['All', 'Android App', 'Web App', 'Finance', 'AI/ML'];

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const projects = projectsData[i18n.language] || projectsData['en'];
  
  const filteredProjects = useMemo(() => {
    return selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory, projects]);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            {t('projects.title')}
          </h1>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-start to-primary-end text-light-100'
                  : 'bg-dark-200 text-light-300 hover:text-light-100'
              }`}
            >
              {t(`projects.categories.${category.toLowerCase()}`)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;