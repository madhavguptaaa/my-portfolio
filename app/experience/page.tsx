'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code, ShoppingCart, Settings, Search } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Elysion Softwares Pvt. Ltd., Noida',
      role: 'Software Developer',
      period: 'June 2025 - Present',
      location: 'Noida',
      achievements: [
        {
          icon: Code,
          title: 'End-to-End Development',
          description: 'Spearheaded end-to-end development and maintenance of 5+ key web products, internal portals, and the company\'s digital ecosystem',
        },
        {
          icon: ShoppingCart,
          title: 'Shopify Store Development',
          description: 'Engineered and deployed an in-house Shopify store (store.sobhagya.in), managing custom theme development, product lifecycle, and store deployment',
        },
        {
          icon: Settings,
          title: 'Admin Panel Design',
          description: 'Designed and built a comprehensive Admin Panel for the Baatein App, integrating dynamic dashboards and features to streamline internal management',
        },
        {
          icon: Search,
          title: 'SEO Implementation',
          description: 'Implemented robust SEO strategies for all major company and product pages, leading to measurable increase in organic search rankings and web visibility',
        },
      ],
    },
    {
      company: 'Tech Mahindra',
      role: 'Web Development Intern',
      period: 'September 2024 - December 2024',
      location: 'Remote',
      achievements: [
        {
          icon: Code,
          title: 'Railway Booking System',
          description: 'Developed a complete railway ticket booking system clone using React, HTML, and CSS to demonstrate full-stack comprehension',
        },
        {
          icon: Settings,
          title: 'UI/UX Improvement',
          description: 'Designed and implemented user-friendly interfaces, resulting in an estimated 20% improvement in user experience metrics',
        },
      ],
    },
    {
      company: 'Rotaract | RID 3021',
      role: 'Director, Sponsorship',
      period: 'July 2024 - June 2025',
      location: 'Noida',
      achievements: [
        {
          icon: Settings,
          title: 'Sponsorship Management',
          description: 'Directed all sponsorship initiatives for a major Rotaract district (RID 3012), managing a portfolio of corporate partners and funding goals',
        },
      ],
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
            Experience
          </h1>
          <p className="text-lg text-[#888]">
            Professional journey and key achievements
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-6 border-l border-[#1f1f1f]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#0066ff] border-2 border-[#0a0a0a]"></div>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-[#fafafa] mb-1">{exp.role}</h3>
                <p className="text-[#0066ff] text-sm mb-3">{exp.company}</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-[#666]">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                {exp.achievements.map((achievement, aIndex) => (
                  <div
                    key={aIndex}
                    className="p-4 border border-[#1f1f1f] rounded-md hover:border-[#2a2a2a] transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <achievement.icon className="text-[#0066ff] mt-0.5 flex-shrink-0" size={18} />
                      <div>
                        <h4 className="text-sm font-semibold text-[#fafafa] mb-1">{achievement.title}</h4>
                        <p className="text-sm text-[#888] leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
