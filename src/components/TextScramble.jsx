import React, { useState, useEffect, useRef } from 'react';

const TextScramble = ({ text, className = "", speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const phrases = Array.isArray(text) ? text : [text];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(false);
  const timeoutRef = useRef(null);
  
  const scrambleChars = "!<>-_\\/[]{}—=+*^?#_~`|%$@";

  useEffect(() => {
    // Start with empty text
    setDisplayText('');
    
    // Start the scramble effect
    startScramble();
    
    // Clean up on unmount
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentPhraseIndex]);

  const startScramble = () => {
    const targetPhrase = phrases[currentPhraseIndex];
    let iteration = 0;
    const maxIterations = targetPhrase.length * 2; // Adjust for scramble duration
    
    setIsScrambling(true);
    
    const scrambleInterval = setInterval(() => {
      // Build the output string
      let output = '';
      
      for (let i = 0; i < targetPhrase.length; i++) {
        // If the current iteration is past this character's reveal point
        if (iteration / 2 > i) {
          output += targetPhrase[i];
        } else if (targetPhrase[i] === ' ') {
          // Always show spaces
          output += ' ';
        } else {
          // Otherwise show a random character
          output += scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
        }
      }
      
      setDisplayText(output);
      
      // Check if we're done
      if (iteration >= maxIterations) {
        clearInterval(scrambleInterval);
        setDisplayText(targetPhrase);
        setIsScrambling(false);
        
        // Queue next phrase after a delay
        timeoutRef.current = setTimeout(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000);
      }
      
      iteration++;
    }, speed / 2);
    
    // Clean up interval if component unmounts
    return () => clearInterval(scrambleInterval);
  };

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};

export default TextScramble;