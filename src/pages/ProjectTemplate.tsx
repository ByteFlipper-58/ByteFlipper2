import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Screenshot {
  url: string;
  alt: string;
}

interface ProjectDetails {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  screenshots: Screenshot[];
  links: {
    github?: string;
    live?: string;
    playStore?: string;
  };
}

interface ProjectTemplateProps {
  project: ProjectDetails;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({ project }) => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-dark-200 border-b border-dark-300">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Link
              to="/projects"
              className="inline-flex items-center text-light-300 hover:text-primary-end transition-colors mb-8 group"
            >
              <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-light-300 text-lg max-w-2xl mx-auto mb-8">
              {project.description}
            </p>

            <div className="flex justify-center gap-4">
              {project.links.github && (
                <motion.a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-dark-300 text-light-100 hover:text-primary-end transition-colors"
                >
                  <Github className="mr-2" size={20} />
                  View Source
                </motion.a>
              )}
              {project.links.live && (
                <motion.a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary-start to-primary-end text-light-100"
                >
                  <ExternalLink className="mr-2" size={20} />
                  Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6 text-light-100">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-dark-200 text-light-200 border border-dark-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6 text-light-100">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-light-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary-end mr-3" />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-4 bg-dark-200 border-y border-dark-300">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-light-100">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-lg overflow-hidden border border-dark-300"
              >
                <img
                  src={screenshot.url}
                  alt={screenshot.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;