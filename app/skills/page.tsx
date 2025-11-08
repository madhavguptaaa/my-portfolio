'use client';

import { motion } from 'framer-motion';
import { Code, Database, Globe, Award, Settings, Layout, Terminal } from 'lucide-react';

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
      color: 'purple',
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
      color: 'blue',
    },
    {
      title: 'Databases',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'Firebase', level: 80 },
      ],
      color: 'green',
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
      color: 'orange',
    },
  ];

  const certifications = [
    {
      name: 'React JS',
      provider: 'Meta',
      icon: Award,
    },
    {
      name: 'Bootstrap',
      provider: 'IBM',
      icon: Award,
    },
    {
      name: 'Introduction to Web Development',
      provider: 'Meta',
      icon: Award,
    },
    {
      name: 'WordPress',
      provider: 'Coursera',
      icon: Award,
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, string> = {
      purple: 'from-purple-600 to-indigo-600',
      blue: 'from-blue-600 to-cyan-600',
      green: 'from-green-600 to-emerald-600',
      orange: 'from-orange-600 to-red-600',
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technical expertise and professional certifications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`bg-gradient-to-br ${getColorClasses(category.color)} p-3 rounded-lg`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, sIndex) => (
                  <div key={sIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2.5">
                      <motion.div
                        className={`h-2.5 rounded-full bg-gradient-to-r ${getColorClasses(category.color)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: (index * 0.1) + (sIndex * 0.05), duration: 0.8 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 transition-colors text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-purple-500/20 p-4 rounded-full inline-flex mb-4">
                  <cert.icon className="text-purple-400" size={32} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-purple-400">{cert.provider}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

