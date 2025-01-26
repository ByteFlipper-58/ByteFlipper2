import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: Shield,
      title: t('privacy.sections.collection.title'),
      content: t('privacy.sections.collection.content') // Markdown-enabled content
    },
    {
      icon: Database,
      title: t('privacy.sections.usage.title'),
      content: t('privacy.sections.usage.content') // Markdown-enabled content
    },
    {
      icon: Lock,
      title: t('privacy.sections.security.title'),
      content: t('privacy.sections.security.content') // Markdown-enabled content
    },
    {
      icon: Eye,
      title: t('privacy.sections.thirdParty.title'),
      content: t('privacy.sections.thirdParty.content') // Markdown-enabled content
    },
    {
      icon: Globe,
      title: t('privacy.sections.international.title'),
      content: t('privacy.sections.international.content') // Markdown-enabled content
    },
    {
      icon: FileText,
      title: t('privacy.sections.rights.title'),
      content: t('privacy.sections.rights.content') // Markdown-enabled content
    }
  ];

  return (
    <>
      <Helmet>
        <title>{t('privacy.meta.title')} - ByteFlipper</title>
        <meta name="description" content={t('privacy.meta.description')} />
      </Helmet>

      <div className="min-h-screen py-28 px-4 bg-gradient-to-b from-dark-100 to-dark-200">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-full blur-3xl opacity-30" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent relative">
              {t('privacy.title')}
            </h1>
            <p className="text-light-300 text-lg relative">
              {t('privacy.lastUpdated', { date: new Date().toLocaleDateString() })}
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {t('privacy.introduction')}
            </ReactMarkdown>
          </motion.div>

          {/* Sections */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-dark-200 to-dark-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-dark-200 p-8 rounded-xl border border-dark-300 group-hover:border-primary-end/20 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-primary-start/10 to-primary-end/10 group-hover:from-primary-start/20 group-hover:to-primary-end/20 transition-colors">
                      <section.icon className="w-6 h-6 text-primary-end" />
                    </div>
                    <h2 className="text-2xl font-bold text-light-100">
                      {section.title}
                    </h2>
                  </div>
                  <div className="text-light-300 space-y-4">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {section.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark-200 to-dark-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-dark-200 p-8 rounded-xl border border-dark-300 group-hover:border-primary-end/20 transition-colors">
              <h2 className="text-2xl font-bold text-light-100 mb-4">
                {t('privacy.contact.title')}
              </h2>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {t('privacy.contact.content')}
              </ReactMarkdown>
              <a
                href="mailto:byteflipper.business@gmail.com"
                className="inline-block mt-4 text-primary-end hover:text-primary-start transition-colors"
              >
                byteflipper.business@gmail.com
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
