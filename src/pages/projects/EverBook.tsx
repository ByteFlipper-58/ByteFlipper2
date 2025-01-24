// types.ts
interface Screenshot {
  url: string;
  alt: string;
}

interface Metric {
  icon: any;
  label: string;
  value: string;
}

interface ProjectLinks {
  github?: string;
  live?: string;
  googlePlay?: string;
  ruStore?: string;
}

interface Project {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
  features: string[];
  screenshots: Screenshot[];
  links: ProjectLinks;
  metrics: Metric[];
}

// EverBook.tsx
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowLeft, Video, Users, MessageSquare, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const EverBook = () => {
  const project: Project = {
    title: "EverBook",
    description: "A modern social media platform for sharing short-form videos with interactive features and real-time engagement.",
    icon: "/images/everbook/logo.png",
    technologies: [
      "Jetpack Compose", "Kotlin", "MVVM", "Room", "Firebase", "Material You",
      "Retrofit2", "OkHttp3", "GSON", "Moshi", "Datastore Preferences"
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
        alt: "EverBook Feed Interface"
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
      github: "https://github.com/byteflipper/EverBook",
      live: "https://EverBook-demo.web.app",
      googlePlay: "https://play.google.com/store/apps/details?id=com.EverBook",
      ruStore: "https://apps.rustore.ru/app/com.EverBook"
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

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-dark-200">
          <div className="max-w-7xl mx-auto px-4 py-16">
            
          <Link
          to="/projects"
          className="inline-flex items-center text-light-300 hover:text-primary-end transition-colors mb-12 group pt-10 pl-6"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center mb-8">
                <motion.img
                  src={project.icon}
                  alt={`${project.title} icon`}
                  className="w-24 h-24 rounded-2xl shadow-lg mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
                  {project.title}
                </h1>
              </div>
              
              <p className="text-light-300 text-lg md:text-xl mb-12">
                {project.description}
              </p>

              <div className="flex flex-wrap justify-center items-center gap-4">
                {/* All buttons with consistent size */}
                {project.links.github && (
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-[188px] h-[63px] rounded-lg bg-dark-300 text-light-100 hover:text-primary-end transition-colors"
                  >
                    <Github className="mr-2" size={24} />
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
                    className="inline-flex items-center justify-center w-[188px] h-[63px] rounded-lg bg-gradient-to-r from-primary-start to-primary-end text-light-100"
                  >
                    <ExternalLink className="mr-2" size={24} />
                    Try Demo
                  </motion.a>
                )}
                {project.links.googlePlay && (
                  <motion.a
                    href={project.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-[212px] h-[80px] flex items-center justify-center"
                  >
                    <img
                      src="/images/badges/googleplay.png"
                      alt="Get it on Google Play"
                      className="w-full h-full object-contain"
                    />
                  </motion.a>
                )}
                {project.links.ruStore && (
                  <motion.a
                    href={project.links.ruStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-[180px] h-[60px] flex items-center justify-center"
                  >
                    <img
                      src="/images/badges/rustore.svg"
                      alt="Get it on RuStore"
                      className="w-full h-full object-contain"
                    />
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

export default EverBook;