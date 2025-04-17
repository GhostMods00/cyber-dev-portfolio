
import React from 'react';
import { motion } from 'framer-motion';

const GlitchDivider = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      <div className="flex items-center">
        <div className="flex-grow h-px bg-neon-green/30"></div>
        <motion.div 
          className="px-4 py-2 mx-4 bg-cyber-black border border-neon-green/50 font-mono text-neon-green text-sm"
          animate={{ 
            x: [0, -3, 5, -2, 0],
            opacity: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 0.5, 
            repeat: Infinity, 
            repeatType: "mirror",
            repeatDelay: 5
          }}
        >
          {"<SYSTEM.DIVIDER/>"}
        </motion.div>
        <div className="flex-grow h-px bg-neon-green/30"></div>
      </div>
      
      {/* Glitch lines */}
      <motion.div 
        className="absolute left-0 right-0 h-px bg-cyber-blue/60"
        style={{ top: '50%' }}
        animate={{ 
          scaleX: [0, 1, 0.5, 1, 0],
          x: ['-100%', '0%', '50%', '0%', '100%']
        }}
        transition={{ duration: 4, repeat: Infinity }}
      ></motion.div>
      
      <motion.div 
        className="absolute left-0 right-0 h-px bg-cyber-pink/60"
        style={{ top: 'calc(50% + 3px)' }}
        animate={{ 
          scaleX: [0, 0.5, 1, 0.5, 0],
          x: ['100%', '50%', '0%', '-50%', '-100%']
        }}
        transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default GlitchDivider;