'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'madhavguptaaa@gmail.com',
      link: 'mailto:madhavguptaaa@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9821707186',
      link: 'tel:+919821707186',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Noida, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/madhavguptaaa',
    },
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/madhavguptaaa',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fafafa]">
            Contact
          </h1>
          <p className="text-lg text-[#888]">
            Let's connect and discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-8 text-[#fafafa]">Contact Information</h2>
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 border border-[#1f1f1f] rounded-md hover:border-[#2a2a2a] transition-colors group"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="p-2 border border-[#1f1f1f] rounded-md group-hover:border-[#0066ff] transition-colors">
                    <info.icon className="text-[#0066ff]" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[#666] mb-1">{info.label}</p>
                    <p className="text-sm text-[#fafafa] font-medium">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-[#888]">Connect</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-[#1f1f1f] rounded-md hover:border-[#0066ff] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-[#888] hover:text-[#0066ff] transition-colors" size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold mb-8 text-[#fafafa]">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#aaa]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-md focus:outline-none focus:border-[#0066ff] text-[#fafafa] placeholder-[#666] transition-colors"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#aaa]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-md focus:outline-none focus:border-[#0066ff] text-[#fafafa] placeholder-[#666] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#aaa]">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1f1f1f] rounded-md focus:outline-none focus:border-[#0066ff] text-[#fafafa] resize-none placeholder-[#666] transition-colors"
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-[#0066ff] text-white rounded-md hover:bg-[#0052cc] transition-colors font-medium flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
