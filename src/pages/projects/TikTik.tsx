import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Video, Users, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const TikTik = () => {
  const project = {
    title: "TikTik",
    description: "A modern social media platform for sharing short-form videos with interactive features and real-time engagement.",
    technologies: [
      "React", "TypeScript", "Node.js", "Firebase",
      "Tailwind CSS", "Framer Motion", "FFmpeg",
      "WebRTC", "Cloud Functions"
    ],
    features: [
      "Video upload and processing with FFmpeg",
      "Real-time comments and likes",
      "User profiles and following system",
      "Video recommendations algorithm",
      "Interactive video player with gestures",
      "Social sharing and deep linking",
      "Push notifications",
      "Analytics dashboard"
    ],
    screenshots: [
      {
        url: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        alt: "TikTik Feed Interface"
      },
      {
        url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
        alt: "Video Creation Studio"
      },
      {
        url: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=800&q=80",
        alt: "User Profile View"
      }
    ],
    links: {
      github: "https://github.com/byteflipper/tiktik",
      live: "https://tiktik-demo.web.app"
    },
    metrics: [
      { icon: Video, label: "1M+ Videos", value: "1,234,567" },
      { icon: Users, label: "Active Users", value: "500K+" },
      { icon: MessageSquare, label: "Comments", value: "2.5M+" },
      { icon: Heart, label: "Likes", value: "10M+" }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{project.title} - ByteFlipper Projects</title>
        <meta name="description" content={project.description} />
      </Helmet>

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
                    Try Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 px-4 bg-dark-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <metric.icon className="w-8 h-8 mx-auto mb-4 text-primary-end" />
                  <div className="text-2xl font-bold text-light-100 mb-2">{metric.value}</div>
                  <div className="text-light-300">{metric.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
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
    </>
  );
};

export default TikTik;