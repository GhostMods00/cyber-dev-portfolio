
import React, { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Grid layers that move at different speeds */}
      <div 
        className="absolute inset-0 bg-cyber-grid bg-grid-lg opacity-10"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>
      <div 
        className="absolute inset-0 bg-cyber-grid bg-grid-md opacity-15" 
        style={{ transform: `translateY(${scrollY * 0.05}px)` }}
      ></div>
      
      {/* Floating elements */}
      <div 
        className="absolute top-1/4 left-1/4 w-40 h-40 border border-neon-green/20 opacity-30 rotate-45"
        style={{ transform: `translateY(${scrollY * 0.2}px) rotate(45deg)` }}
      ></div>
      <div 
        className="absolute bottom-1/3 right-1/5 w-64 h-64 border border-cyber-blue/20 opacity-20 -rotate-12"
        style={{ transform: `translateY(${-scrollY * 0.15}px) rotate(-12deg)` }}
      ></div>
    </div>
  );
};

export default ParallaxBackground;