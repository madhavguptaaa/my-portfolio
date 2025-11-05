'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Award, Settings, Layout } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript (ES 6+)', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Layout,
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'Bootstrap', level: 80 },
      ],
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Settings,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'SEO Tools', level: 80 },
        { name: 'WordPress', level: 75 },
        { name: 'Shopify', level: 80 },
      ],
    },
  ];

  const certifications = [
    {
      name: 'React JS',
      provider: 'Meta',
    },
    {
      name: 'Bootstrap',
      provider: 'IBM',
    },
    {
      name: 'Introduction to Web Development',
      provider: 'Meta',
    },
    {
      name: 'WordPress',
      provider: 'Coursera',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        {/* Header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#fafafa]">
            Skills
          </h1>
          <p className="text-lg text-[#888]">
            Technical expertise and professional certifications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="text-[#0066ff]" size={20} />
                <h2 className="text-xl font-semibold text-[#fafafa]">{category.title}</h2>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-[#aaa] font-medium">{skill.name}</span>
                      <span className="text-xs text-[#666] font-mono">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#1f1f1f] rounded-full h-1.5 overflow-hidden">
                      <motion.div
                        className="h-full bg-[#0066ff] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (sIndex * 0.05), duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="h-px bg-[#1f1f1f] mb-24"></div>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-[#fafafa]">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="p-6 border border-[#1f1f1f] rounded-md hover:border-[#2a2a2a] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Award className="text-[#0066ff] mb-3" size={24} />
                <h3 className="text-sm font-semibold text-[#fafafa] mb-1">{cert.name}</h3>
                <p className="text-xs text-[#666]">{cert.provider}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
