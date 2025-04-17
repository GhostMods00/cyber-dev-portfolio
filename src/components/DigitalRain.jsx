
import React, { useEffect, useRef } from 'react';

const DigitalRain = ({ containerClass = "" }) => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;
    
    // Characters to use
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const charArray = chars.split('');
    
    // Column setup
    const fontSize = 12;
    const columns = Math.floor(width / fontSize);
    
    // Drops - one per column
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -height);
    }
    
    function draw() {
      ctx.fillStyle = 'rgba(13, 2, 8, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const y = drops[i] * fontSize;
        
        ctx.fillStyle = i % 2 === 0 ? '#00FF41' : '#0084FF';
        ctx.globalAlpha = Math.random() * 0.5 + 0.5;
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(char, i * fontSize, y);
        
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 33);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <canvas ref={canvasRef} className={`w-full h-full ${containerClass}`} />
  );
};

export default DigitalRain;