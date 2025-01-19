import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Flame, Skull } from 'lucide-react';
import { FallingStars, FloatingRunes } from '../components/MysticalEffects';
import { Helmet } from 'react-helmet';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  skills: string[];
  projects: {
    name: string;
    description: string;
    link: string;
  }[];
  links: {
    github?: string;
    website?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Dark Coder",
    title: "Shadow Architect",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    skills: ["Dark Arts", "Necro Programming", "Soul Binding", "Shadow Debugging"],
    projects: [
      {
        name: "Soul Harvester",
        description: "A mystical application that captures user engagement",
        link: "https://github.com/darkcoder/soul-harvester"
      },
      {
        name: "Shadow Portal",
        description: "Gateway to the digital underworld",
        link: "https://github.com/darkcoder/shadow-portal"
      }
    ],
    links: {
      github: "https://github.com/darkcoder",
      website: "https://dark-coder.dev"
    }
  },
  {
    name: "Rune Weaver",
    title: "Code Mystic",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=400",
    skills: ["Rune Crafting", "Spell Compilation", "Arcane Algorithms", "Mystical UI"],
    projects: [
      {
        name: "Rune Compiler",
        description: "Transforms ancient runes into modern code",
        link: "https://github.com/runeweaver/compiler"
      },
      {
        name: "Mystic Patterns",
        description: "A library of enchanted design patterns",
        link: "https://github.com/runeweaver/patterns"
      }
    ],
    links: {
      github: "https://github.com/runeweaver",
      website: "https://runeweaver.dev"
    }
  }
];

const Sectants = () => {
  return (
    <>
      <Helmet>
        <title>The Inner Circle | ByteFlipper - Elite Digital Craftsmen</title>
        <meta name="description" content="Join the elite fellowship of digital craftsmen who shape the future through code and dark creativity. Meet our team of exceptional developers." />
        <meta name="keywords" content="developers, programming, dark theme, creative coding, elite developers" />
        <meta property="og:title" content="The Inner Circle | ByteFlipper" />
        <meta property="og:description" content="Join the elite fellowship of digital craftsmen who shape the future through code and dark creativity." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=1200" />
      </Helmet>

      <div className="min-h-screen pt-20 bg-dark-100 relative overflow-hidden">
        <FallingStars />
        <FloatingRunes />
        
        {/* Animated Ravens */}
        {[...Array(5)].map((_, i) => (
          <motion.img
            key={i}
            src="https://images.unsplash.com/photo-1557401622-cfc0aa5d146c?auto=format&fit=crop&q=80&w=200"
            alt="Raven silhouette"
            className="absolute w-16 h-16 object-contain opacity-30 pointer-events-none"
            initial={{ x: i % 2 === 0 ? -100 : '100vw', y: Math.random() * 500, rotate: i % 2 === 0 ? -45 : 45 }}
            animate={{
              x: i % 2 === 0 ? '100vw' : -100,
              y: Math.random() * 500,
              rotate: i % 2 === 0 ? 45 : -45
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Enhanced mystical background */}
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5" />
          <div className="absolute inset-0 bg-gradient-radial from-dark-200 via-dark-100 to-dark-100 opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-100 via-transparent to-dark-100" />
        </div>

        {/* Hero Section with enhanced animations */}
        <section className="relative py-20">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-end/20 via-transparent to-transparent animate-pulse" />
            <div className="absolute inset-0 bg-dark-100/50" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative max-w-7xl mx-auto px-4 text-center"
          >
            {/* Enhanced mystical circles */}
            {[64, 48, 32].map((size, i) => (
              <motion.div
                key={i}
                animate={{ 
                  rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  rotate: { duration: 20 - i * 3, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-0 left-1/2 -translate-x-1/2 border border-primary-end/20 rounded-full
                          before:absolute before:inset-0 before:border before:border-primary-start/20 before:rounded-full before:animate-ping"
                style={{ width: size + 'rem', height: size + 'rem' }}
              />
            ))}
            
            {/* Enhanced flame icon */}
            <div className="relative">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <Flame className="w-16 h-16 mx-auto mb-6 text-primary-end drop-shadow-[0_0_10px_rgba(239,17,111,0.5)]" />
                <motion.div
                  animate={{ 
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 blur-xl bg-primary-end/30"
                />
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent
                         drop-shadow-[0_0_10px_rgba(239,17,111,0.3)]"
                animate={{ 
                  textShadow: [
                    '0 0 20px rgba(239, 17, 111, 0.5)',
                    '0 0 40px rgba(239, 17, 111, 0.3)',
                    '0 0 20px rgba(239, 17, 111, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                The Inner Circle
              </motion.h1>
              <p className="text-xl text-light-300 max-w-2xl mx-auto">
                Join the elite fellowship of digital craftsmen who shape the future through code and dark creativity.
              </p>
            </div>
          </motion.div>
        </section>

        {/* Enhanced team member cards */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-dark-100/90" />
          <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                {/* Enhanced hover effect with skull icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute -top-4 -right-4 z-10"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 0.9, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Skull className="w-8 h-8 text-primary-end drop-shadow-[0_0_8px_rgba(239,17,111,0.5)]" />
                  </motion.div>
                </motion.div>

                {/* Enhanced card background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-start to-primary-end opacity-20 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-b from-dark-200/50 to-dark-300/50 rounded-xl backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-dark-200/90 backdrop-blur-sm m-[1px] rounded-xl p-8 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    <div className="relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-primary-start/30 to-primary-end/30 rounded-lg"
                        animate={{ opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-light-100 group-hover:text-primary-end transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-light-300 mb-4">{member.title}</p>
                      <div className="flex gap-3">
                        {member.links.github && (
                          <motion.a
                            href={member.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="text-light-300 hover:text-primary-end"
                          >
                            <Github size={20} />
                          </motion.a>
                        )}
                        {member.links.website && (
                          <motion.a
                            href={member.links.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            className="text-light-300 hover:text-primary-end"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-light-100 mb-2">Dark Powers</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 text-sm rounded-full bg-dark-300/50 backdrop-blur-sm text-light-200 border border-dark-400 group-hover:border-primary-end/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-light-100 mb-2">Forbidden Projects</h4>
                    <div className="space-y-4">
                      {member.projects.map((project) => (
                        <motion.a
                          key={project.name}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 rounded-lg bg-dark-300/50 backdrop-blur-sm hover:bg-dark-400/50 transition-colors group/project"
                          whileHover={{ x: 5 }}
                        >
                          <h5 className="text-light-100 font-medium mb-1 group-hover/project:text-primary-end transition-colors">
                            {project.name}
                          </h5>
                          <p className="text-sm text-light-300">{project.description}</p>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Sectants;