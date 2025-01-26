import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Clock,
  Send,
  ExternalLink
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const socialLinks = [
    {
      icon: Github,
      label: 'Github',
      href: 'https://github.com/byteflipper-58',
      color: 'hover:text-primary-end',
      customIcon: 'images/social_media/github.svg'
    },
    {
      icon: Linkedin,
      label: 'X (Twitter)',
      href: 'https://x.com/in/byteflipper',
      color: 'hover:text-primary-end',
      customIcon: 'images/social_media/x.svg'
    },
    {
      icon: Twitter,
      label: 'Telegram',
      href: 'https://t.me/byteflipper',
      color: 'hover:text-primary-end',
      customIcon: 'images/social_media/telegram.svg'
    },
    {
      icon: Mail,
      label: t('contact.social.email'),
      href: 'mailto:byteflipper.business@gmail.com',
      color: 'hover:text-primary-end',
      customIcon: 'images/social_media/email.svg'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const message = `#ByteFlipperSite\n\nname: ${formData.name}\nemail: ${formData.email}\n\nmessage: ${formData.message}`;
      
      const response = await fetch(`https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: -4120443586,
          text: message,
          disable_web_page_preview: true
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="py-28 px-4 min-h-screen bg-gradient-to-b from-dark-100 to-dark-200">
      <motion.div 
        className="max-w-4xl mx-auto space-y-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header Section */}
        <motion.div
          variants={itemVariants}
          className="text-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-start/10 to-primary-end/10 rounded-full blur-3xl opacity-30" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent relative">
            {t('contact.title')}
          </h1>
          <p className="text-light-300 text-lg max-w-2xl mx-auto relative">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark-200 to-dark-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-dark-200 p-8 rounded-xl border border-dark-300 group-hover:border-primary-end/20 transition-colors">
              <h2 className="text-2xl font-bold mb-6 text-light-100">{t('contact.location.title')}</h2>
              <div className="space-y-4">
                <div className="flex items-center text-light-300 group/item">
                  <div className="p-2 rounded-lg bg-dark-300 group-hover/item:bg-primary-end/10 transition-colors">
                    <MapPin className="text-primary-end" />
                  </div>
                  <span className="ml-3">{t('contact.location.place')}</span>
                </div>
                <div className="flex items-center text-light-300 group/item">
                  <div className="p-2 rounded-lg bg-dark-300 group-hover/item:bg-primary-end/10 transition-colors">
                    <Clock className="text-primary-end" />
                  </div>
                  <span className="ml-3">{t('contact.location.timezone')}</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-dark-200 to-dark-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-dark-200 p-8 rounded-xl border border-dark-300 group-hover:border-primary-end/20 transition-colors">
              <h2 className="text-2xl font-bold mb-6 text-light-100">{t('contact.social.title')}</h2>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    className={`flex items-center text-light-300 ${social.color} transition-colors group/link`}
                  >
                    <div className="p-2 rounded-lg bg-dark-300 group-hover/link:bg-current/10 transition-colors">
                      {social.customIcon ? (
                        <img 
                          src={social.customIcon} 
                          alt={social.label} 
                          className="w-6 h-6 group-hover/link:text-current" 
                        />
                      ) : (
                        <social.icon className="group-hover/link:text-current transition-colors" size={24} />
                      )}
                    </div>
                    <span className="ml-2">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          variants={itemVariants}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark-200 to-dark-300 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-dark-200 p-8 rounded-xl border border-dark-300 group-hover:border-primary-end/20 transition-colors">
            <h2 className="text-2xl font-bold mb-6 text-light-100">{t('contact.form.title')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-light-300 font-medium">
                    {t('contact.form.name.label')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name.placeholder')}
                    required
                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 text-light-100 placeholder-light-300/50 focus:outline-none focus:border-primary-end focus:ring-1 focus:ring-primary-end/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-light-300 font-medium">
                    {t('contact.form.email.label')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email.placeholder')}
                    required
                    className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 text-light-100 placeholder-light-300/50 focus:outline-none focus:border-primary-end focus:ring-1 focus:ring-primary-end/20 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="block text-light-300 font-medium">
                  {t('contact.form.message.label')}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message.placeholder')}
                  required
                  rows={4}
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 text-light-100 placeholder-light-300/50 focus:outline-none focus:border-primary-end focus:ring-1 focus:ring-primary-end/20 transition-colors resize-none"
                ></textarea>
              </div>
              
              <div className="flex items-center justify-between">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={status === 'loading'}
                  className={`
                    relative overflow-hidden px-8 py-3 rounded-lg font-medium
                    ${status === 'loading' 
                      ? 'bg-dark-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-primary-start to-primary-end hover:from-primary-end hover:to-primary-start'}
                    text-light-100 flex items-center justify-center group disabled:opacity-50
                  `}
                >
                  {status === 'loading' ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-light-100 border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                <AnimatedStatus status={status} t={t} />
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const AnimatedStatus = ({ status, t }: { status: string; t: any }) => {
  if (status === 'idle') return null;

  const statusConfig = {
    success: {
      message: t('contact.form.success'),
      className: 'text-green-500',
      icon: '✓'
    },
    error: {
      message: t('contact.form.error'),
      className: 'text-red-500',
      icon: '×'
    }
  };

  if (status !== 'success' && status !== 'error') return null;

  const config = statusConfig[status];

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className={`flex items-center ${config.className}`}
    >
      <span className="text-xl mr-2">{config.icon}</span>
      {config.message}
    </motion.div>
  );
};

export default Contact;