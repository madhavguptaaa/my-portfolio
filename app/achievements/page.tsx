'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import TypingText from '@/components/TypingText';
import { X } from 'lucide-react';

export default function Achievements() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Image paths - you can add your images to public/achievements/ folder
  // and add their paths here
  const achievementImages: string[] = [
    // Example: Add your image paths here
    // '/achievements/image1.jpg',
    // '/achievements/image2.jpg',
    // '/achievements/image3.jpg',
  ];

  const openModal = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

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
            <TypingText text="> Achievements" speed={100} className="text-[#fafafa]" />
          </h1>
          <p className="text-lg text-[#888]">
            A collection of my achievements, certificates, and memorable moments
          </p>
        </motion.div>

        {/* Instructions */}
        {achievementImages.length === 0 && (
          <motion.div
            className="mb-12 p-8 border border-[#1f1f1f] rounded-lg bg-[#0f0f0f]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold text-[#fafafa] mb-4">
              How to Add Your Photos
            </h2>
            <div className="space-y-3 text-[#aaa]">
              <p className="flex items-start gap-2">
                <span className="text-[#0066ff] mt-1">1.</span>
                <span>Create a folder named <code className="px-2 py-1 bg-[#1f1f1f] rounded text-[#fafafa]">achievements</code> in the <code className="px-2 py-1 bg-[#1f1f1f] rounded text-[#fafafa]">public</code> folder</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#0066ff] mt-1">2.</span>
                <span>Upload your achievement photos/certificates to <code className="px-2 py-1 bg-[#1f1f1f] rounded text-[#fafafa]">public/achievements/</code></span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-[#0066ff] mt-1">3.</span>
                <span>Add the image paths to the <code className="px-2 py-1 bg-[#1f1f1f] rounded text-[#fafafa]">achievementImages</code> array in this file</span>
              </p>
              <p className="text-sm text-[#666] mt-4">
                Example: <code className="px-2 py-1 bg-[#1f1f1f] rounded text-[#888]">'/achievements/certificate1.jpg'</code>
              </p>
            </div>
          </motion.div>
        )}

        {/* Image Gallery */}
        {achievementImages.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {achievementImages.map((imagePath, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg border border-[#1f1f1f] hover:border-[#2a2a2a] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => openModal(imagePath)}
              >
                <div className="aspect-square relative bg-[#0f0f0f]">
                  <Image
                    src={imagePath}
                    alt={`Achievement ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Zoom Icon Effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#0066ff]/20 backdrop-blur-sm flex items-center justify-center border border-[#0066ff]/30">
                      <div className="w-6 h-6 border-2 border-[#0066ff] rounded-full" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Empty State */}
        {achievementImages.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#1f1f1f] flex items-center justify-center">
              <div className="w-12 h-12 border-2 border-[#0066ff]/30 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[#0066ff] rounded-full" />
              </div>
            </div>
            <p className="text-[#888] text-lg">
              No photos added yet. Follow the instructions above to add your achievements.
            </p>
          </motion.div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="relative max-w-5xl max-h-[90vh] w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 p-2 text-[#fafafa] hover:text-[#0066ff] transition-colors"
            >
              <X size={24} />
            </button>
            <div className="relative w-full h-[80vh] bg-[#0a0a0a] rounded-lg overflow-hidden border border-[#1f1f1f]">
              <Image
                src={selectedImage}
                alt="Achievement"
                fill
                className="object-contain"
                sizes="90vw"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

