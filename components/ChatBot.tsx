'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const predefinedAnswers: Record<string, string> = {
  'hello': 'Hello! I\'m here to help answer questions about Madhav Gupta. What would you like to know?',
  'hi': 'Hi! How can I help you today?',
  'hey': 'Hey there! Ask me anything about Madhav\'s work or experience.',
  'about': 'Madhav is a Full-Stack Software Developer with 1.5+ years of experience, specializing in MERN Stack (React.js, Node.js, MongoDB) and TypeScript.',
  'experience': 'Madhav has 1.5+ years of experience working as a Software Developer at Elysion Softwares, and previously interned at Tech Mahindra. He has experience with end-to-end development, Shopify stores, and SEO implementation.',
  'skills': 'Madhav\'s key skills include React.js, Node.js, TypeScript, MongoDB, Express.js, Python, JavaScript, HTML5/CSS3, Firebase, Git, Bootstrap, and Next.js.',
  'projects': 'Madhav has worked on several projects including KnowledgeVerse (AI/ML e-learning platform), Tour & Travel Webpage, Netflix Landing Page Clone, and Railway Ticket Booking System. Check out the Projects page for more details!',
  'contact': 'You can reach Madhav via email at madhavguptaaa@gmail.com, phone at +91 9821707186, or through LinkedIn. Check the Contact page for more details.',
  'education': 'Madhav is pursuing B.Tech in Computer Science (AIML) from G.L. Bajaj Institutions of Technology and Management, Gr Noida (CGPA: 7). He completed 12th and 10th from Amity International School with 90% marks.',
  'location': 'Madhav is based in Noida, India.',
  'availability': 'Madhav is currently available for opportunities and open to discussing new projects.',
  'mern': 'MERN Stack stands for MongoDB, Express.js, React.js, and Node.js. It\'s a popular full-stack JavaScript framework that Madhav specializes in.',
  'default': 'I\'m not sure about that specific question. You can ask me about Madhav\'s experience, skills, projects, education, or contact information. Try asking "What are his skills?" or "Tell me about his projects."'
};

const getBotResponse = (userMessage: string): string => {
  const message = userMessage.toLowerCase().trim();
  
  // Check for keywords
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return predefinedAnswers['hello'];
  }
  if (message.includes('about') || message.includes('who')) {
    return predefinedAnswers['about'];
  }
  if (message.includes('experience') || message.includes('work') || message.includes('job')) {
    return predefinedAnswers['experience'];
  }
  if (message.includes('skill') || message.includes('technolog') || message.includes('stack')) {
    return predefinedAnswers['skills'];
  }
  if (message.includes('project') || message.includes('work')) {
    return predefinedAnswers['projects'];
  }
  if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('reach')) {
    return predefinedAnswers['contact'];
  }
  if (message.includes('education') || message.includes('degree') || message.includes('college') || message.includes('university')) {
    return predefinedAnswers['education'];
  }
  if (message.includes('location') || message.includes('where') || message.includes('city')) {
    return predefinedAnswers['location'];
  }
  if (message.includes('available') || message.includes('hire') || message.includes('opportunity')) {
    return predefinedAnswers['availability'];
  }
  if (message.includes('mern') || message.includes('stack')) {
    return predefinedAnswers['mern'];
  }
  
  return predefinedAnswers['default'];
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWakingUp, setIsWakingUp] = useState(false);
  const [isAwake, setIsAwake] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: 'Woof! *yawn* Hello! I just woke up. I\'m here to help answer questions about Madhav Gupta. What would you like to know?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simulate bot thinking delay
    setTimeout(() => {
      const botResponse: Message = {
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleDogClick = () => {
    setIsWakingUp(true);
    setTimeout(() => {
      setIsAwake(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 300);
    }, 800);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsAwake(false);
      setIsWakingUp(false);
    }, 300);
  };

  return (
    <>
      {/* Sleeping Dog Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={handleDogClick}
            className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer flex items-center justify-center overflow-hidden"
            style={{ background: 'transparent' }}
          >
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              animate={isWakingUp ? {
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0],
              } : {
                y: [0, -3, 0],
              }}
              transition={
                isWakingUp
                  ? { duration: 0.8, ease: "easeInOut" }
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }
            >
              {/* Sleeping Dog SVG */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                {/* Dog Body */}
                <motion.ellipse
                  cx="32"
                  cy="40"
                  rx="18"
                  ry="12"
                  fill="#8B7355"
                  animate={isWakingUp ? {} : {
                    scaleY: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Dog Head */}
                <motion.g
                  animate={isWakingUp ? {
                    rotate: [-5, 5, 0],
                    transformOrigin: '32px 28px',
                  } : {}}
                  transition={{
                    duration: isWakingUp ? 0.8 : 0,
                  }}
                >
                  <circle cx="32" cy="28" r="14" fill="#8B7355" />
                </motion.g>
                
                {/* Closed Eyes (when sleeping) */}
                {!isWakingUp && (
                  <>
                    <motion.line
                      x1="26"
                      y1="26"
                      x2="30"
                      y2="26"
                      stroke="#1f1f1f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <motion.line
                      x1="34"
                      y1="26"
                      x2="38"
                      y2="26"
                      stroke="#1f1f1f"
                      strokeWidth="2"
                      strokeLinecap="round"
                      animate={{
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </>
                )}
                
                {/* Open Eyes (when waking up) */}
                {isWakingUp && (
                  <>
                    <circle cx="28" cy="26" r="2" fill="#1f1f1f" />
                    <circle cx="36" cy="26" r="2" fill="#1f1f1f" />
                  </>
                )}
                
                {/* Nose */}
                <ellipse cx="32" cy="30" rx="2" ry="1.5" fill="#1f1f1f" />
                
                {/* Ears */}
                <motion.g
                  animate={isWakingUp ? {
                    rotate: [0, 10, 0],
                    transformOrigin: '20px 20px',
                  } : {}}
                  transition={{
                    duration: isWakingUp ? 0.8 : 0,
                  }}
                >
                  <path d="M 20 20 Q 20 15 25 18 Q 22 20 20 20" fill="#6B5D4F" />
                </motion.g>
                <motion.g
                  animate={isWakingUp ? {
                    rotate: [0, -10, 0],
                    transformOrigin: '44px 20px',
                  } : {}}
                  transition={{
                    duration: isWakingUp ? 0.8 : 0,
                  }}
                >
                  <path d="M 44 20 Q 44 15 39 18 Q 42 20 44 20" fill="#6B5D4F" />
                </motion.g>
                
                {/* Zzz (sleeping thoughts) */}
                {!isWakingUp && (
                  <>
                    <motion.text
                      x="45"
                      y="20"
                      fill="#0066ff"
                      fontSize="12"
                      fontFamily="monospace"
                      animate={{
                        y: [20, 15, 20],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0,
                      }}
                    >
                      z
                    </motion.text>
                    <motion.text
                      x="50"
                      y="15"
                      fill="#0066ff"
                      fontSize="14"
                      fontFamily="monospace"
                      animate={{
                        y: [15, 10, 15],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.3,
                      }}
                    >
                      z
                    </motion.text>
                    <motion.text
                      x="55"
                      y="12"
                      fill="#0066ff"
                      fontSize="16"
                      fontFamily="monospace"
                      animate={{
                        y: [12, 7, 12],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: 0.6,
                      }}
                    >
                      z
                    </motion.text>
                  </>
                )}
              </svg>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden"
                  animate={isAwake ? {
                    scale: [1, 1.1, 1],
                  } : {}}
                  transition={{
                    duration: 0.5,
                    repeat: isAwake ? Infinity : 0,
                    repeatDelay: 2,
                  }}
                >
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="32" cy="28" r="14" fill="#8B7355" />
                    <ellipse cx="32" cy="40" rx="18" ry="12" fill="#8B7355" />
                    <circle cx="28" cy="26" r="2" fill="#1f1f1f" />
                    <circle cx="36" cy="26" r="2" fill="#1f1f1f" />
                    <ellipse cx="32" cy="30" rx="2" ry="1.5" fill="#1f1f1f" />
                    <path d="M 20 20 Q 20 15 25 18 Q 22 20 20 20" fill="#6B5D4F" />
                    <path d="M 44 20 Q 44 15 39 18 Q 42 20 44 20" fill="#6B5D4F" />
                  </svg>
                </motion.div>
                <div>
                  <div className="text-sm font-semibold text-[#fafafa]">Assistant Dog</div>
                  <div className="text-xs text-[#666]">Woof! Ask me anything</div>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-1 hover:bg-[#1f1f1f] rounded transition-colors"
              >
                <X size={18} className="text-[#888]" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.isBot
                        ? 'bg-[#1f1f1f] text-[#fafafa]'
                        : 'bg-[#0066ff] text-white'
                    }`}
                  >
                    <div className="text-sm leading-relaxed">{message.text}</div>
                    <div className="text-xs mt-1 opacity-60">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[#1f1f1f]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  className="flex-1 px-4 py-2 bg-[#0a0a0a] border border-[#1f1f1f] rounded-md text-[#fafafa] placeholder-[#666] focus:outline-none focus:border-[#0066ff] transition-colors text-sm"
                />
                <button
                  onClick={handleSend}
                  className="px-4 py-2 bg-[#0066ff] text-white rounded-md hover:bg-[#0052cc] transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

