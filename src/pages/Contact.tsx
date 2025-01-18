import React from 'react';
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

const Contact = () => {
  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/byteflipper',
      color: 'hover:text-[#2ea44f]'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/byteflipper',
      color: 'hover:text-[#0a66c2]'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/byteflipper',
      color: 'hover:text-[#1da1f2]'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:contact@byteflipper.dev',
      color: 'hover:text-primary-end'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-light-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from you.
            Feel free to reach out through any of the channels below.
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
            <h2 className="text-2xl font-bold mb-6 text-light-100">Location & Time</h2>
            <div className="space-y-4">
              <div className="flex items-center text-light-300">
                <MapPin className="mr-3 text-primary-end" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-light-300">
                <Clock className="mr-3 text-primary-end" />
                <span>PST (UTC-8)</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-dark-200 p-8 rounded-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-light-100">Social Links</h2>
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

        {/* Message Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-dark-200 p-8 rounded-xl mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-light-100">Send a Message</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-light-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 text-light-100 focus:outline-none focus:border-primary-end transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-light-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 text-light-100 focus:outline-none focus:border-primary-end transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-light-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-2 text-light-100 focus:outline-none focus:border-primary-end transition-colors"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-primary-start to-primary-end text-light-100 px-8 py-3 rounded-lg font-medium flex items-center justify-center group"
            >
              Send Message
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;