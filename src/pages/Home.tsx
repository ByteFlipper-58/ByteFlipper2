import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Home = () => {
  const { t, i18n } = useTranslation();
  const featuredProjects = projectsData[i18n.language] || projectsData['en'];

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