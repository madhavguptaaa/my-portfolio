'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import TypingText from '@/components/TypingText';

export default function Projects() {
  const projects = [
    {
      title: 'KnowledgeVerse: Personalized E-learning Platform',
      description: 'A comprehensive e-learning platform leveraging AI/ML for curated user experiences with multiple intelligent features.',
      technologies: ['React.js', 'Node.js', 'Python', 'MongoDB', 'Hugging Face', 'CNN', 'LLM'],
      category: 'Full-Stack',
    },
    {
      title: 'Tour & Travel Webpage',
      description: 'A complete front-end interface for a mock travel booking platform with intuitive navigation and modern design.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'Front-End',
    },
    {
      title: 'Netflix Landing Page Clone',
      description: 'Pixel-perfect replication of the Netflix landing page with responsive design across all major breakpoints.',
      technologies: ['HTML5', 'CSS3', 'Responsive Design'],
      category: 'Front-End',
    },
    {
      title: 'Railway Ticket Booking System',
      description: 'A complete railway ticket booking system clone demonstrating full-stack development capabilities.',
      technologies: ['React', 'HTML', 'CSS'],
      category: 'Full-Stack',
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
            <TypingText text="> Projects" speed={100} className="text-[#fafafa]" />
          </h1>
          <p className="text-lg text-[#888]">
            Showcasing my work and technical expertise
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="border-b border-[#1f1f1f] pb-16 last:border-0 last:pb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-mono text-[#0066ff] px-2 py-1 border border-[#1f1f1f] rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#fafafa] mb-4">
                    {project.title}
                  </h3>
                  <p className="text-[#888] mb-6 leading-relaxed max-w-2xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, tIndex) => (
                      <span
                        key={tIndex}
                        className="text-xs text-[#666] font-mono px-2 py-1 bg-[#1f1f1f] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#888] hover:text-[#fafafa] border border-[#1f1f1f] rounded-md hover:border-[#2a2a2a] transition-colors">
                      <Github size={16} />
                      Code
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-sm text-[#888] hover:text-[#fafafa] border border-[#1f1f1f] rounded-md hover:border-[#2a2a2a] transition-colors">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
