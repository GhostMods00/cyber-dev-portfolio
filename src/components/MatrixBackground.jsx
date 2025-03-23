import React, { useEffect, useRef } from 'react';

const MatrixBackground = ({ opacity = 0.05, density = 'low', speed = 'medium' }) => {
  const canvasRef = useRef(null);
  
  // Convert density to a number value
  const getDensity = () => {
    switch (density) {
      case 'high': return 45;
      case 'medium': return 30;
      default: return 15; // low
    }
  };
  
  // Convert speed to a number value
  const getSpeed = () => {
    switch (speed) {
      case 'fast': return 20;
      case 'medium': return 35;
      default: return 50; // slow
    }
  };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // Set up resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    // Matrix characters - can add more for authenticity
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    
    // Number of columns depends on density
    const fontSize = 10;
    const columns = Math.floor(width / fontSize) * (getDensity() / 20);
    
    // Array to track the y position of each column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -height); // Start above the screen
    }
    
    // Drawing the characters
    const draw = () => {
      // Set background with transparency to create trail effect
      ctx.fillStyle = `rgba(0, 0, 0, 0.05)`;
      ctx.fillRect(0, 0, width, height);
      
      // Set text properties
      ctx.fillStyle = '#00FF41';
      ctx.font = `${fontSize}px monospace`;
      
      // Draw each character
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Draw the character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        
        // Draw only if within canvas bounds
        if (y > 0 && y < height) {
          // Vary opacity for more depth
          ctx.fillStyle = `rgba(0, 255, 65, ${Math.random() * 0.5 + 0.5})`;
          ctx.fillText(char, x, y);
        }
        
        // Move the drop down
        drops[i]++;
        
        // Reset drops that reach the bottom or random reset for variety
        if (drops[i] * fontSize > height && Math.random() > 0.98) {
          drops[i] = Math.floor(Math.random() * -20); // Reset to above screen
        }
      }
    };
    
    // Animation loop
    let interval = setInterval(draw, getSpeed());
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [density, speed]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default MatrixBackground;