import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Terminal from './Terminal';
import GlitchText from './GlitchText';
import CyberButton from './CyberButton';

const HeroSection = () => {
  const [terminalComplete, setTerminalComplete] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  
  // Terminal commands simulation
  const commands = [
    "echo 'Initializing system...'",
    "sudo access --Waleed's-portfolio",
    "loading system components...",
    "mounting drives...",
    "echo 'Cybersecurity protocols engaged'",
    "establishing secure connection...",
    "connection established",
    "echo 'Portfolio Access Granted.'"
  ];
  
  // Show buttons after terminal animation completes
  useEffect(() => {
    if (terminalComplete) {
      const timer = setTimeout(() => {
        setShowButtons(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [terminalComplete]);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center pt-16 pb-10 px-4 relative overflow-hidden crt"
    >
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-md opacity-25 z-0"></div>
      
      {/* Matrix code animation in background */}
      <div className="absolute inset-0 matrix-code opacity-10 z-0"></div>
      
      {/* Main content container */}
      <div className="container mx-auto max-w-7xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left side: Text content */}
          <motion.div 
            className="lg:col-span-2 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6 inline-block">
              <GlitchText 
                text="<FULL STACK DEVELOPER/>" 
                className="text-lg text-neon-green font-mono"
                color="neon-green"
                intensity="low"
              />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-4 text-white">
              <span>THINK.</span> <span className="text-neon-green">BUILD.</span> <span className="text-cyber-blue">CREATE.</span>
            </h1>
            
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Full-stack developer with a passion for creating 
              <span className="text-neon-green"> secure</span>, 
              <span className="text-cyber-blue"> efficient</span>, and 
              <span className="text-cyber-pink"> innovative</span> digital experiences.
            </p>
            
            {/* Animated buttons */}
            {showButtons && (
              <motion.div 
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <CyberButton 
                  color="green" 
                  size="lg" 
                  href="#projects"
                >
                  VIEW PROJECTS
                </CyberButton>
                
                <CyberButton 
                  color="blue" 
                  size="lg" 
                  href="#about"
                >
                  ABOUT ME
                </CyberButton>
              </motion.div>
            )}
          </motion.div>
          
          {/* Right side: Terminal */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border border-neon-green opacity-70"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border border-cyber-blue opacity-70"></div>
              
              {/* Terminal window */}
              <Terminal 
                commands={commands} 
                onComplete={() => setTerminalComplete(true)} 
              />
              
              {/* Animated tech stack text that appears after terminal completes */}
              {terminalComplete && (
                <motion.div 
                  className="mt-6 text-center text-xs sm:text-sm font-mono text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="text-neon-green">TECH STACK:</span> 
                  <span className="tracking-wider ml-2 text-gray-300">
                    JAVASCRIPT • REACT • TYPESCRIPT • PYTHON • HTML • CSS • MONGODB • POSTGRESQL • Git
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 border border-neon-green opacity-10 rotate-45"></div>
      <div className="absolute bottom-1/4 right-10 w-32 h-32 border border-cyber-blue opacity-10 rotate-12"></div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center" 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-gray-400 font-mono text-sm mb-2">SCROLL DOWN</span>
        <svg 
          className="w-6 h-6 text-neon-green" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;