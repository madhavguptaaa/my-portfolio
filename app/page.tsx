'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MacMonitor from '@/components/MacMonitor';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Mac Monitor Section */}
      <MacMonitor />

      {/* Quick Info Section */}
      <section className="py-20 px-6 lg:px-8 border-t border-[#1f1f1f]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xl text-[#888] mb-8 leading-relaxed max-w-2xl mx-auto">
              Full-stack developer specializing in building scalable web applications 
              with React, Node.js, and TypeScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-[#0066ff] text-white rounded-md hover:bg-[#0052cc] transition-colors font-medium text-sm"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-[#1f1f1f] text-[#fafafa] rounded-md hover:border-[#2a2a2a] transition-colors font-medium text-sm"
              >
                Get in Touch
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-[#666]">
              <div>
                <span className="text-[#fafafa] font-medium">1.5+</span> years experience
              </div>
              <div>
                <span className="text-[#fafafa] font-medium">5+</span> projects delivered
              </div>
              <div>
                <span className="text-[#fafafa] font-medium">MERN</span> stack expertise
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-32 px-6 lg:px-8 border-t border-[#1f1f1f]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#fafafa]">
              Technical Expertise
            </h2>
            <p className="text-[#888] text-lg">Technologies I work with</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'React.js', level: 'Advanced' },
              { name: 'Node.js', level: 'Advanced' },
              { name: 'TypeScript', level: 'Proficient' },
              { name: 'JavaScript', level: 'Advanced' },
              { name: 'MongoDB', level: 'Proficient' },
              { name: 'Express.js', level: 'Proficient' },
              { name: 'Python', level: 'Proficient' },
              { name: 'HTML5/CSS3', level: 'Advanced' },
              { name: 'Firebase', level: 'Proficient' },
              { name: 'Git', level: 'Proficient' },
              { name: 'Bootstrap', level: 'Proficient' },
              { name: 'Next.js', level: 'Proficient' },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="p-6 border border-[#1f1f1f] rounded-md hover:border-[#2a2a2a] transition-colors"
              >
                <div className="text-[#fafafa] font-semibold mb-1 text-sm">{tech.name}</div>
                <div className="text-[#666] text-xs">{tech.level}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
