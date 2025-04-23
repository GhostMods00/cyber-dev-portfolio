// Updated DisruptionButton.jsx
import React from 'react';
import { motion } from 'framer-motion';

const DisruptionButton = ({ 
  children, 
  onClick, 
  href = null,
  type = "button",
  className = "",
  color = "green", // "green", "blue", "pink", "purple"
  disabled = false,
  fullWidth = false, // Add this prop
  size = "md" // Add size prop: "xs", "sm", "md", "lg", "xl"
}) => {
  // Color variants
  const colorVariants = {
    green: "border-neon-green text-neon-green",
    blue: "border-cyber-blue text-cyber-blue",
    pink: "border-cyber-pink text-cyber-pink",
    purple: "border-cyber-purple text-cyber-purple",
  };
  
  // Size variants
  const sizeVariants = {
    xs: "text-xs px-2 py-1",
    sm: "text-xs px-3 py-1.5",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
    xl: "text-lg px-8 py-4",
  };
  
  const selectedColor = colorVariants[color] || colorVariants.green;
  const selectedSize = sizeVariants[size] || sizeVariants.md;
  const widthClass = fullWidth ? "w-full" : "";
  
  // Animation variants
  const hoverAnimation = !disabled ? { 
    borderColor: ["currentColor", "#0084FF", "#BD00FF", "currentColor"],
    color: ["currentColor", "#0084FF", "#BD00FF", "currentColor"],
    transition: { duration: 2, repeat: Infinity }
  } : {};
  
  const tapAnimation = !disabled ? { scale: 0.98 } : {};
  
  // Common styles and props
  const commonClasses = `relative ${selectedSize} bg-cyber-black border ${selectedColor} font-mono uppercase tracking-wider ${widthClass} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  
  // Inner content with animations
  const innerContent = (
    <>
      {/* Distortion effect on hover */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-neon-green/10 via-cyber-blue/10 to-cyber-purple/10 opacity-0"
          whileHover={{ opacity: 0.5, x: [0, 5, -5, 0] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        ></motion.div>
      )}
      
      {/* Horizontal flicker lines */}
      <span className="absolute h-px w-full bg-current top-0 left-0"></span>
      <span className="absolute h-px w-full bg-current bottom-0 left-0"></span>
      
      {/* Text content with glitch effect */}
      <motion.span
        className="relative z-10 block"
        whileHover={!disabled ? {
          x: [0, -2, 2, -1, 0],
          textShadow: "0 0 8px currentColor",
          transition: { duration: 0.2, repeat: Infinity, repeatType: "mirror" }
        } : {}}
      >
        {children}
      </motion.span>
    </>
  );
  
  // Render as link or button based on href prop
  if (href) {
    return (
      <motion.a
        href={href}
        className={`inline-block text-center ${commonClasses}`}
        whileHover={hoverAnimation}
        whileTap={tapAnimation}
        onClick={!disabled ? onClick : undefined}
      >
        {innerContent}
      </motion.a>
    );
  }
  
  // Otherwise render as button
  return (
    <motion.button
      type={type}
      disabled={disabled}
      className={commonClasses}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
      onClick={!disabled ? onClick : undefined}
    >
      {innerContent}
    </motion.button>
  );
};

export default DisruptionButton;