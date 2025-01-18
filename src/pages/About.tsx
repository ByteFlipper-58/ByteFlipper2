import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Firebase'] },
    { category: 'Other', items: ['UI/UX Design', 'SEO', 'Performance Optimization', 'Testing'] }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="relative w-32 h-32 mx-auto mb-8">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
              alt="Profile"
              className="rounded-full w-full h-full object-cover"
            />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute inset-0 rounded-full border-2 border-primary-end opacity-50"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            ByteFlipper
          </h1>
          <p className="text-light-300 text-lg mb-8 max-w-2xl mx-auto">
            Creative developer passionate about building beautiful and functional web applications.
            With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
          </p>
          
          <div className="flex justify-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/byteflipper' },
              { icon: Linkedin, href: 'https://linkedin.com/in/byteflipper' },
              { icon: Twitter, href: 'https://twitter.com/byteflipper' },
              { icon: Mail, href: 'mailto:contact@byteflipper.dev' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="text-light-300 hover:text-primary-end transition-colors"
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-200 p-6 rounded-xl"
            >
              <h3 className="text-xl font-bold mb-4 text-primary-end">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-dark-300 rounded-full text-light-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <blockquote className="text-2xl italic text-light-200 max-w-3xl mx-auto">
            "The best way to predict the future is to create it."
          </blockquote>
        </motion.div>
      </div>
    </div>
  );
};

export default About;