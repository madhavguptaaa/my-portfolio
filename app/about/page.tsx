'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import TypingText from '@/components/TypingText';

export default function About() {
  const education = [
    {
      degree: 'B.Tech (Computer Science in AIML)',
      institution: 'G.L. Bajaj Institutions of Technology and Management, Gr Noida',
      cgpa: 'CGPA: 7',
      period: '2021-2025',
    },
    {
      degree: '12th PCM',
      institution: 'Amity International School, Noida (CBSE)',
      cgpa: '90%',
      period: '2020-2021',
    },
    {
      degree: '10th',
      institution: 'Amity International School, Noida (CBSE)',
      cgpa: '90%',
      period: '2018-2019',
    },
  ];

  const achievements = [
    {
      title: 'Record Breaker of the Year',
      organization: 'Rotaract Club of GL Bajaj',
      year: '2024',
      description: 'Achieved the highest number of letterheads in the club\'s history',
    },
    {
      title: 'States Winner',
      organization: 'AKTU Team - KHO KHO',
      description: 'Competed at state level',
    },
    {
      title: 'Bronze Medal',
      organization: 'District Level KHO KHO',
      description: 'Earned bronze medal for three consecutive years',
    },
    {
      title: 'District Level Player',
      organization: 'Badminton',
      description: 'Competed at district level',
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
            <TypingText text="> About" speed={100} className="text-[#fafafa]" />
          </h1>
          <p className="text-lg text-[#888]">
            Learn more about my journey, education, and achievements
          </p>
        </motion.div>

        {/* Summary Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-[#fafafa]">Professional Summary</h2>
          </div>
          <div className="space-y-4 text-[#aaa] leading-relaxed">
            <p>
              I'm a <span className="text-[#fafafa] font-medium">Full-Stack Software Developer</span> with 
              {' '}<span className="text-[#fafafa] font-medium">1.5+ years</span> of experience, specializing in the 
              {' '}<span className="text-[#fafafa] font-medium">MERN Stack</span> (React.js, Node.js, MongoDB) and TypeScript.
            </p>
            <p>
              I have proven expertise in end-to-end development, delivering scalable web products, managing digital ecosystems, 
              and implementing SEO strategies to enhance visibility. As a recent B.Tech graduate (June 2025), I'm seeking a 
              challenging role to drive product innovation.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-6 text-[#888] text-sm">
            <MapPin size={16} />
            <span>Noida, India</span>
          </div>
        </motion.section>

        <div className="h-px bg-[#1f1f1f] mb-24"></div>

        {/* Education Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-[#fafafa]">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="pb-8 border-b border-[#1f1f1f] last:border-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#0066ff]"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#fafafa] mb-1">{edu.degree}</h3>
                    <p className="text-[#888] mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#666]">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {edu.period}
                      </span>
                      <span className="text-[#0066ff] font-medium">{edu.cgpa}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="h-px bg-[#1f1f1f] mb-24"></div>

        {/* Achievements Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-12 text-[#fafafa]">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="p-6 border border-[#1f1f1f] rounded-md hover:border-[#2a2a2a] transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <h3 className="text-lg font-semibold text-[#fafafa] mb-2">{achievement.title}</h3>
                <p className="text-[#0066ff] text-sm mb-2">{achievement.organization}</p>
                {achievement.year && (
                  <span className="text-xs text-[#666] mb-2 block">{achievement.year}</span>
                )}
                <p className="text-[#888] text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
