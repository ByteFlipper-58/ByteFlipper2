import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard, { Project } from '../components/ProjectCard';

const projects: Project[] = [
  {
    id: 'task-manager',
    title: 'Task Manager Pro',
    description: 'A beautiful and intuitive task management application with real-time updates and team collaboration features.',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000',
    category: 'Web App',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    links: {
      github: 'https://github.com/byteflipper/task-manager',
      live: 'https://task-manager-pro.demo'
    }
  },
  {
    id: 'crypto-tracker',
    title: 'Crypto Price Tracker',
    description: 'Real-time cryptocurrency price tracking with interactive charts and portfolio management.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1000',
    category: 'Finance',
    technologies: ['Vue.js', 'Chart.js', 'Firebase'],
    links: {
      github: 'https://github.com/byteflipper/crypto-tracker'
    }
  },
  {
    id: 'ai-image-generator',
    title: 'AI Image Generator',
    description: 'Generate unique images using artificial intelligence and machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1000',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    links: {
      github: 'https://github.com/byteflipper/ai-image-gen',
      live: 'https://ai-image-gen.demo'
    }
  }
];

const categories = ['All', 'Web App', 'Finance', 'AI/ML'];

const Projects = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const filteredProjects = useMemo(() => {
    return selectedCategory === 'All'
      ? projects
      : projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Explore my latest projects and experiments in web development, AI, and more.
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
              {category}
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