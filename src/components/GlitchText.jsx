import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ 
  text, 
  className = "", 
  intensity = "medium", 
  color = "neon-green",
  fontSize = "",
  responsive = true
}) => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile based on screen width
  useEffect(() => {
    if (responsive) {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Listen for resize
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }
  }, [responsive]);
  
  // Adjust intensity if mobile
  const actualIntensity = isMobile ? 
    (intensity === "high" ? "medium" : (intensity === "medium" ? "low" : "low")) : 
    intensity;
  
  // Map intensity to animation values
  const intensityMap = {
    low: { frequency: 20, displacement: 2 },
    medium: { frequency: 10, displacement: 3 },
    high: { frequency: 5, displacement: 5 }
  };
  
  const { frequency, displacement } = intensityMap[actualIntensity] || intensityMap.medium;
  
  // Color classes
  const colorClasses = {
    "neon-green": "text-neon-green",
    "cyber-blue": "text-cyber-blue",
    "cyber-pink": "text-cyber-pink",
    "cyber-purple": "text-cyber-purple",
    "white": "text-white"
  };
  
  const selectedColor = colorClasses[color] || colorClasses["neon-green"];
  
  // Font size classes if responsive
  let fontSizeClass = fontSize;
  if (!fontSize && responsive) {
    fontSizeClass = isMobile ? "text-sm" : "text-base";
  }
  
  // Create the glitch animation
  const glitchAnimation = {
    animate: {
      x: [0, -displacement, displacement, -displacement, 0],
      y: [0, displacement, -displacement, displacement, 0],
    },
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatType: "mirror",
      repeatDelay: frequency / 10,
      ease: "easeInOut",
    },
  };

  return (
    <div className={`relative inline-block ${className} ${fontSizeClass}`}>
      {/* Main text */}
      <span className={`relative z-10 ${selectedColor}`}>{text}</span>
      
      {/* Only add the glitch effects if not on mobile or if responsive is false */}
      {(!isMobile || !responsive) && (
        <>
          {/* Glitch layers */}
          <motion.span
            {...glitchAnimation}
            className={`absolute left-0 top-0 text-cyber-pink opacity-70 clip-text z-0`}
            style={{ 
              clipPath: "inset(15% 0 15% 0)",
              transform: "translateX(-2px)",
            }}
          >
            {text}
          </motion.span>
          
          <motion.span
            animate={{
              x: [0, displacement, -displacement, displacement, 0],
              y: [0, -displacement, displacement, -displacement, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              repeatDelay: frequency / 10,
              ease: "easeInOut",
              delay: 0.1,
            }}
            className={`absolute left-0 top-0 text-cyber-blue opacity-70 clip-text z-0`}
            style={{ 
              clipPath: "inset(45% 0 40% 0)",
              transform: "translateX(2px)",
            }}
          >
            {text}
          </motion.span>
        </>
      )}
      
      {/* Text shadow for neon effect */}
      <style jsx>{`
        .clip-text {
          clip-path: inset(0% 0 0% 0);
        }
        
        @keyframes glitch {
          0% { clip-path: inset(40% 0 61% 0); }
          20% { clip-path: inset(92% 0 1% 0); }
          40% { clip-path: inset(43% 0 1% 0); }
          60% { clip-path: inset(25% 0 58% 0); }
          80% { clip-path: inset(54% 0 7% 0); }
          100% { clip-path: inset(58% 0 43% 0); }
        }
      `}</style>
    </div>
  );
};

export default GlitchText;