import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Clock,
  Send
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
      label: t('contact.social.github'),
      href: 'https://github.com/byteflipper',
      color: 'hover:text-[#2ea44f]'
    },
    {
      icon: Linkedin,
      label: t('contact.social.linkedin'),
      href: 'https://linkedin.com/in/byteflipper',
      color: 'hover:text-[#0a66c2]'
    },
    {
      icon: Twitter,
      label: t('contact.social.twitter'),
      href: 'https://twitter.com/byteflipper',
      color: 'hover:text-[#1da1f2]'
    },
    {
      icon: Mail,
      label: t('contact.social.email'),
      href: 'mailto:contact@byteflipper.dev',
      color: 'hover:text-primary-end'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error('Telegram configuration is missing');
      setStatus('error');
      return;
    }

    try {
      const message = `#ByteFlipperSite\n\nname: ${formData.name}\nemail: ${formData.email}\n\nmessage: ${formData.message}`;
      
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: Number(chatId), // Convert chatId to number
          text: message,
          disable_web_page_preview: true // Disable link previews
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Telegram API error:', errorData);
        throw new Error(errorData.description || 'Failed to send message');
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
    // Reset status when user starts typing again
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            {t('contact.title')}
          </h1>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-dark-200 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-light-100">{t('contact.location.title')}</h2>
            <div className="space-y-4">
              <div className="flex items-center text-light-300">
                <MapPin className="mr-3 text-primary-end" />
                <span>{t('contact.location.place')}</span>
              </div>
              <div className="flex items-center text-light-300">
                <Clock className="mr-3 text-primary-end" />
                <span>{t('contact.location.timezone')}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-200 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-light-100">{t('contact.social.title')}</h2>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center text-light-300 ${social.color} transition-colors`}
                >
                  <social.icon className="mr-2" size={20} />
                  <span>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-200 p-8 rounded-xl mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-light-100">{t('contact.form.title')}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-light-300 mb-2">
                  {t('contact.form.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name.placeholder')}
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 text-light-100 focus:outline-none focus:border-primary-end transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light-300 mb-2">
                  {t('contact.form.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email.placeholder')}
                  required
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 text-light-100 focus:outline-none focus:border-primary-end transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-light-300 mb-2">
                {t('contact.form.message.label')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message.placeholder')}
                required
                rows={4}
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 text-light-100 focus:outline-none focus:border-primary-end transition-colors"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === 'loading'}
              className="bg-gradient-to-r from-primary-start to-primary-end text-light-100 px-8 py-3 rounded-lg font-medium flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <span className="animate-pulse">{t('contact.form.submit')}</span>
              ) : (
                <>
                  {t('contact.form.submit')}
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center"
              >
                {t('contact.form.success')}
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center"
              >
                {t('contact.form.error')}
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;