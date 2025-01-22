import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter, Code, Terminal, PenTool as Tool, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  const skills = [
    { 
      category: t('about.skills.frontend'),
      icon: Code,
      items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      category: t('about.skills.backend'),
      icon: Terminal,
      items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    { 
      category: t('about.skills.tools'),
      icon: Tool,
      items: ['Git', 'Docker', 'AWS', 'Firebase'],
      color: 'from-orange-500 to-amber-500'
    },
    { 
      category: t('about.skills.other'),
      icon: Palette,
      items: ['UI/UX Design', 'SEO', 'Performance Optimization', 'Testing'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/byteflipper', color: 'hover:text-[#2ea44f]' },
    { icon: Linkedin, href: 'https://linkedin.com/in/byteflipper', color: 'hover:text-[#0a66c2]' },
    { icon: Twitter, href: 'https://twitter.com/byteflipper', color: 'hover:text-[#1da1f2]' },
    { icon: Mail, href: 'mailto:contact@byteflipper.dev', color: 'hover:text-primary-end' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-b from-dark-100 to-dark-200">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-start to-primary-end opacity-75 blur-lg"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <img
              src="src/images/my-picture.jpg"
              alt="Profile"
              className="relative rounded-full w-full h-full object-cover border-4 border-dark-100"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            ByteFlipper
          </h1>
          <p className="text-light-300 text-lg mb-8 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className={`text-light-300 ${social.color} transition-colors`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-dark-200 to-dark-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-dark-200 p-6 rounded-xl border border-dark-300 group-hover:border-primary-end/20 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${skillGroup.color}`}>
                    <skillGroup.icon className="w-6 h-6 text-light-100" />
                  </div>
                  <h3 className="text-xl font-bold text-light-100">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-dark-300 rounded-full text-light-200 text-sm border border-dark-400 group-hover:border-primary-end/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-xl blur-xl" />
          <blockquote className="relative bg-dark-200 p-8 rounded-xl border border-dark-300">
            <div className="text-6xl text-primary-end opacity-20 absolute top-4 left-4">"</div>
            <p className="text-2xl italic text-light-200 relative z-10">
              {t('about.quote')}
            </p>
            <div className="text-6xl text-primary-end opacity-20 absolute bottom-4 right-4">"</div>
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default About;