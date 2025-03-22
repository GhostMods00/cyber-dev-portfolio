import React from 'react';
import { motion } from 'framer-motion';

const CyberButton = ({ 
  children, 
  onClick, 
  className = "", 
  color = "green", 
  size = "md",
  href = null,
  type = "button",
  animated = true,
  glowing = true
}) => {
  // Color variants
  const colorVariants = {
    green: "border-neon-green text-neon-green hover:bg-neon-green hover:text-cyber-black",
    blue: "border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-cyber-black",
    pink: "border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-cyber-black",
    purple: "border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-cyber-black",
  };
  
  // Size variants
  const sizeVariants = {
    sm: "text-xs px-3 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
    xl: "text-lg px-8 py-4",
  };
  
  // Glowing shadow variants
  const glowVariants = {
    green: glowing ? "shadow-neon-green" : "",
    blue: glowing ? "shadow-neon-blue" : "",
    pink: glowing ? "shadow-neon-pink" : "",
    purple: glowing ? "shadow-neon-purple" : "",
  };
  
  const selectedColor = colorVariants[color] || colorVariants.green;
  const selectedSize = sizeVariants[size] || sizeVariants.md;
  const selectedGlow = glowVariants[color] || glowVariants.green;
  
  const buttonClasses = `
    font-mono uppercase tracking-wider border-2 
    ${selectedColor} ${selectedSize} ${selectedGlow}
    bg-transparent transition-all duration-200 
    relative overflow-hidden rounded
    hover:shadow-none focus:outline-none
    ${className}
  `;
  
  // Animation effects
  const hoverAnimation = animated ? {
    whileHover: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    whileTap: { scale: 0.95 }
  } : {};
  
  // Button or link
  const ButtonTag = href ? 'a' : 'button';
  const buttonProps = href ? { href } : { type };
  
  return (
    <motion.div className="relative inline-block" {...hoverAnimation}>
      {/* Glitch effect on hover */}
      <ButtonTag 
        className={buttonClasses}
        onClick={onClick}
        {...buttonProps}
      >
        {/* Diagonal line decoration */}
        <span className={`absolute top-0 left-0 h-full w-1 ${getLineColor(color)} transform -skew-x-12`}></span>
        <span className="relative z-10">{children}</span>
        {/* Diagonal line decoration */}
        <span className={`absolute top-0 right-0 h-full w-1 ${getLineColor(color)} transform skew-x-12`}></span>
      </ButtonTag>
    </motion.div>
  );
};

// Helper function to get the line color
function getLineColor(color) {
  switch(color) {
    case 'blue': return 'bg-cyber-blue';
    case 'pink': return 'bg-cyber-pink';
    case 'purple': return 'bg-cyber-purple';
    default: return 'bg-neon-green';
  }
}

export default CyberButton;