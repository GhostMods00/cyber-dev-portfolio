import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';

const HomePage = () => {
  return (
    <div className="bg-cyber-black">
      <HeroSection />
      <AboutPreview />
      
      {/* Divider with cyber styling */}
      <div className="container mx-auto px-4 py-6">
        <div className="relative">
          <div className="h-px w-full bg-neon-green/30"></div>
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-cyber-black px-4"
            animate={{ boxShadow: ['0 0 5px rgba(0, 255, 65, 0.3)', '0 0 15px rgba(0, 255, 65, 0.5)', '0 0 5px rgba(0, 255, 65, 0.3)'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-neon-green font-mono text-sm">&lt;/&gt;</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;