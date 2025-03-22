import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Terminal = ({ commands = [], onComplete, typingSpeed = 50, prompt = "$" }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);
  const terminalRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    
    // Listen for resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (lineIndex < commands.length) {
      const currentCommand = commands[lineIndex];
      
      if (charIndex < currentCommand.length) {
        // Type the next character
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + currentCommand[charIndex]);
          setCharIndex(charIndex + 1);
        }, Math.random() * typingSpeed + 20); // Random typing speed for realism
        
        return () => clearTimeout(timer);
      } else {
        // Finished typing the current line
        const timer = setTimeout(() => {
          setDisplayedLines([...displayedLines, { text: `${prompt} ${currentLine}`, type: 'command' }]);
          
          // If command has output, add it
          if (currentCommand.output) {
            setDisplayedLines(prev => [...prev, { text: currentCommand.output, type: 'output' }]);
          }
          
          setCurrentLine('');
          setCharIndex(0);
          setLineIndex(lineIndex + 1);
        }, 500); // Pause before the next command
        
        return () => clearTimeout(timer);
      }
    } else if (lineIndex === commands.length && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [lineIndex, charIndex, commands, currentLine, displayedLines, onComplete, prompt, typingSpeed]);

  // Auto-scroll to the bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [displayedLines, currentLine]);

  return (
    <motion.div 
      className="relative bg-terminal-black border border-neon-green/30 rounded-md overflow-hidden shadow-neon-green"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal header */}
      <div className="bg-cyber-black border-b border-neon-green/20 px-3 sm:px-4 py-2 flex items-center">
        <div className="flex space-x-1 sm:space-x-2 mr-2 sm:mr-4">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyber-pink"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyber-yellow"></div>
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-neon-green"></div>
        </div>
        <div className="text-xs text-gray-400 font-mono flex-1 text-center truncate">
          {isMobile ? 'terminal — Waleed Zaryab' : 'terminal — bash — Waleed Zaryab'}
        </div>
      </div>

      {/* Terminal content */}
      <div 
        ref={terminalRef} 
        className="font-mono text-xs sm:text-sm p-3 sm:p-4 h-40 sm:h-64 overflow-y-auto"
      >
        {displayedLines.map((line, i) => (
          <div 
            key={i} 
            className={`mb-1 ${line.type === 'command' ? 'text-neon-green' : 'text-gray-300'}`}
          >
            {line.text}
          </div>
        ))}
        <div className="flex items-center text-neon-green">
          <span>{prompt}&nbsp;</span>
          <span>{currentLine}</span>
          {cursorVisible && <span className="ml-0.5 animate-blink">_</span>}
        </div>
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full animate-scanline bg-gradient-to-b from-transparent via-neon-green to-transparent opacity-[0.03]"></div>
      </div>
    </motion.div>
  );
};

export default Terminal;