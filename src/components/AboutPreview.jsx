import React from 'react';
import { motion } from 'framer-motion';
import CyberButton from './CyberButton';
import profileImage from '../assets/images/Profile.jpg';

const AboutPreview = () => {
  return (
    <section 
      className="py-24 px-4 bg-cyber-black relative overflow-hidden"
    >
      {/* Background grid with reduced opacity */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-sm opacity-20 z-0"></div>
      
      <div className="container mx-auto max-w-6xl z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Photo container with cyber frame */}
          <motion.div 
            className="w-full max-w-sm mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Core photo */}
              <div className="aspect-square overflow-hidden relative border-2 border-neon-green/50">
                {/* Replace with your actual photo */}
                <div className="w-full h-full bg-terminal-black flex items-center justify-center">
                  <span className="text-neon-green"><img 
  src={profileImage} 
  alt="Waleed Zaryab" 
  className="w-full h-full object-cover"
/>
</span>
                </div>
                
                {/* Scanline effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="w-full h-full animate-scanline bg-gradient-to-b from-transparent via-neon-green to-transparent opacity-10"></div>
                </div>
              </div>
              
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-8 h-2 bg-neon-green"></div>
              <div className="absolute top-0 left-0 w-2 h-8 bg-neon-green"></div>
              
              <div className="absolute top-0 right-0 w-8 h-2 bg-cyber-blue"></div>
              <div className="absolute top-0 right-0 w-2 h-8 bg-cyber-blue"></div>
              
              <div className="absolute bottom-0 left-0 w-8 h-2 bg-cyber-pink"></div>
              <div className="absolute bottom-0 left-0 w-2 h-8 bg-cyber-pink"></div>
              
              <div className="absolute bottom-0 right-0 w-8 h-2 bg-cyber-purple"></div>
              <div className="absolute bottom-0 right-0 w-2 h-8 bg-cyber-purple"></div>
              
              {/* Additional decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border border-neon-green/60"></div>
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border border-cyber-blue/60"></div>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-mono mb-6 text-white">
              <span className="text-neon-green">&gt;</span> WHO_AM_I
              <span className="text-neon-green animate-blink">_</span>
            </h2>
            
            <div className="bg-terminal-black border border-neon-green/30 p-6 rounded-md shadow-neon-green mb-6">
              <p className="text-gray-300 mb-4 font-mono">
                <span className="text-cyber-blue"># Hello World</span>
              </p>
              <p className="text-gray-300 mb-4">
                I'm a full-stack developer who recently completed an intensive coding bootcamp. 
                With a passion for creating secure and innovative applications, I leverage my skills
                in JavaScript, React, Python, and database management to build digital experiences
                that make an impact.
              </p>
              <p className="text-gray-300">
                My journey in tech is powered by curiosity and a hacker mindset —
                always looking to understand systems and find creative solutions to complex problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <CyberButton 
                color="green" 
                href="#about"
              >
                READ MORE
              </CyberButton>
              
              <CyberButton 
                color="blue" 
                href="#projects"
              >
                SEE MY WORK
              </CyberButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;