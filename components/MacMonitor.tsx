'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import TypingText from './TypingText';

export default function MacMonitor() {
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHasTyped(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center py-20 px-4 md:px-6">
      <div className="relative w-full max-w-6xl mx-auto">
        <motion.div
          className="relative mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Monitor Screen */}
          <div className="relative w-full max-w-[800px] mx-auto aspect-[16/10] bg-[#1f1f1f] border-[12px] border-[#2a2a2a] rounded-t-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Screen Bezel Highlights */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Bezel */}
              <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#3a3a3a] to-[#2a2a2a]" />
              {/* Side Bezels */}
              <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-r from-[#3a3a3a]/60 to-transparent" />
              <div className="absolute top-0 right-0 bottom-0 w-2 bg-gradient-to-l from-[#3a3a3a]/60 to-transparent" />
            </div>

            {/* Screen Content Area */}
            <div
              className="absolute inset-[3px] bg-[#0a0a0a] flex items-center justify-center rounded-t-xl overflow-hidden"
              style={{
                boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.9)',
              }}
            >
              {/* Subtle Glow */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.06) 0%, transparent 70%)',
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 w-full h-full flex items-center justify-center px-4 md:px-8">
                {hasTyped && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center w-full"
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
                      <TypingText 
                        text="Madhav" 
                        speed={150}
                        className="text-[#fafafa] block"
                        showCursor={false}
                      />
                      <TypingText 
                        text="Gupta" 
                        speed={150}
                        className="text-[#0066ff] block"
                        showCursor={false}
                      />
                    </h1>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 0.6 }}
                      className="text-lg sm:text-xl md:text-2xl text-[#aaa] font-light"
                    >
                      Full-Stack Software Developer
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Scanlines Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
                <div className="h-full w-full" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)'
                }} />
              </div>
            </div>
          </div>

          {/* Monitor Stand */}
          <div className="relative mx-auto mt-0">
            {/* Stand Neck */}
            <div className="relative w-28 h-6 mx-auto bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-lg shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-[#3a3a3a] to-transparent rounded-t-lg" />
            </div>
            {/* Stand Base */}
            <div className="relative w-52 h-4 mx-auto bg-[#1a1a1a] rounded-b-2xl shadow-xl border-t border-[#0a0a0a]">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-b from-[#2a2a2a] to-transparent rounded-t-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
