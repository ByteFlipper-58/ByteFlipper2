import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Skull, Code2, Eye, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { MysticalParticle, MysticalBackground, RitualMark } from '../components/MysticalEffects';
import { teamMembersData } from '../data/teamMembersData';

const ProjectStatusIndicator = ({ status }: { status?: 'active' | 'completed' | 'forbidden' }) => {
  const statusConfig = {
    active: {
      color: 'bg-green-500',
      pulseColor: 'rgba(34, 197, 94, 0.2)',
      duration: 2
    },
    completed: {
      color: 'bg-blue-500',
      pulseColor: 'rgba(59, 130, 246, 0.2)',
      duration: 3
    },
    forbidden: {
      color: 'bg-red-500',
      pulseColor: 'rgba(239, 68, 68, 0.2)',
      duration: 1.5
    }
  };

  if (!status || !statusConfig[status]) return null;

  const config = statusConfig[status];

  return (
    <div className="absolute right-2 top-2 flex items-center gap-2">
      <motion.div
        className={`w-2 h-2 rounded-full ${config.color}`}
        animate={{
          boxShadow: [
            `0 0 0 0 ${config.pulseColor}`,
            `0 0 0 10px transparent`
          ]
        }}
        transition={{
          duration: config.duration,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

const MemberAvatar = ({ image, isRitualMaster }: { image: string; isRitualMaster?: boolean }) => (
  <motion.div className="relative">
    <motion.div
      className="absolute -inset-2 rounded-lg opacity-50"
      animate={{
        background: [
          'radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, transparent 70%)',
          'radial-gradient(circle at center, rgba(79, 70, 229, 0.3) 0%, transparent 70%)',
          'radial-gradient(circle at center, rgba(147, 51, 234, 0.3) 0%, transparent 70%)'
        ]
      }}
      transition={{ duration: 4, repeat: Infinity }}
    />
    {isRitualMaster && (
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 rounded-lg z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    )}
    <img
      src={image}
      alt=""
      className="relative w-24 h-24 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all duration-500 z-10"
    />
  </motion.div>
);

const SkillTag = ({ skill }: { skill: string }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="px-3 py-1.5 text-sm rounded-full bg-gray-800/50 text-gray-300 border border-purple-900/20 group-hover:border-purple-500/20 transition-all duration-300 hover:bg-purple-900/30"
  >
    {skill}
  </motion.span>
);

const Sectants = () => {
  const { t, i18n } = useTranslation();
  const [activeId, setActiveId] = useState<string | null>(null);
  const teamMembers = teamMembersData[i18n.language] || teamMembersData['en'];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <MysticalBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-5">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-[800px] h-[800px] border border-purple-700/50 rounded-full relative"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-full h-[1px] bg-purple-700/50 origin-left"
                style={{ rotate: `${i * 72}deg` }}
              />
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="relative w-32 h-32 mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-900/30 to-indigo-900/30 blur-xl" />
            <div className="relative w-full h-full flex items-center justify-center">
              <Eye className="w-16 h-16 text-purple-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                {t('sectants.title')}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto italic">
              {t('sectants.description')}
            </p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-[2px] h-16 bg-gradient-to-b from-purple-500 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Members Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent flex items-center justify-center gap-3"
          >
            <Sparkles className="w-8 h-8 text-purple-500" />
            {t('sectants.members.title')}
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
                onMouseEnter={() => setActiveId(member.id)}
                onMouseLeave={() => setActiveId(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 group-hover:opacity-100 opacity-0 transition-opacity duration-500 rounded-xl blur-xl" />
                
                <div className="relative bg-gray-900/90 backdrop-blur-sm border border-purple-900/20 rounded-xl p-8 transition-all duration-500 group-hover:transform group-hover:scale-[1.02]">
                  <div className="flex items-start gap-6">
                    <MemberAvatar image={member.image} isRitualMaster={member.isRitualMaster} />

                    <div>
                      <motion.h3 
                        className="text-2xl font-bold bg-gradient-to-r from-gray-100 to-gray-100 group-hover:from-purple-500 group-hover:to-indigo-500 bg-clip-text text-transparent transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {t(member.name)}
                      </motion.h3>
                      <p className="text-gray-400 italic mb-4">{t(member.title)}</p>
                      <div className="flex gap-3">
                        {member.links.github && (
                          <motion.a
                            href={member.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="text-gray-400 hover:text-purple-500 transition-colors"
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
                            className="text-gray-400 hover:text-purple-500 transition-colors"
                          >
                            <ExternalLink size={20} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400 italic leading-relaxed">
                    {t(member.description)}
                  </p>

                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2 flex items-center gap-2">
                      <Code2 className="w-4 h-4" />
                      {t('sectants.members.skills')}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.skills.map((skill) => (
                        <SkillTag key={skill} skill={t(skill)} />
                      ))}
                    </div>

                    <h4 className="text-lg font-semibold text-gray-200 mb-2 flex items-center gap-2">
                      <Skull className="w-4 h-4" />
                      {t('sectants.members.projects')}
                    </h4>
                    <div className="space-y-4">
                      {member.projects.map((project) => (
                        <motion.a
                          key={project.name}
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors group/project relative"
                          whileHover={{ x: 5 }}
                        >
                          <ProjectStatusIndicator status={project.status} />
                          <h5 className="text-gray-200 font-medium mb-1 group-hover/project:text-purple-500 transition-colors">
                            {t(project.name)}
                          </h5>
                          <p className="text-sm text-gray-400">{t(project.description)}</p>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectants;