import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import ProjectCard, { Project } from '../components/ProjectCard';

const featuredProjects: Project[] = [
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

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-light-200">
            {t('home.hero.subtitle')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-start to-primary-end text-light-100 px-8 py-3 rounded-full font-medium flex items-center mx-auto group"
          >
            {t('home.hero.cta')}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
        
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-300 to-dark-100" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-start via-transparent to-transparent animate-pulse" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
              {t('home.about.title')}
            </h2>
            <p className="text-light-300 text-lg leading-relaxed">
              {t('home.about.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Preview Section */}
      <section className="py-20 px-4 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent"
          >
            {t('home.projects.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary-start to-primary-end text-light-100 px-8 py-3 rounded-full font-medium inline-flex items-center group"
            >
              {t('home.projects.viewAll')}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;