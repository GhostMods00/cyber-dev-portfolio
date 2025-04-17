
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CyberCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  
  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <motion.div 
        className="w-6 h-6 rounded-full border border-neon-green"
        animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
        transition={{ type: 'spring', damping: 10, stiffness: 100, mass: 0.1 }}
      />
      <motion.div 
        className="w-2 h-2 bg-neon-green rounded-full"
        animate={{ x: mousePosition.x - 1, y: mousePosition.y - 1 }}
      />
    </div>
  );
};

export default CyberCursor;