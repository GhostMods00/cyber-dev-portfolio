import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DisruptionButton from './DisruptionButton';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Handle scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'HOME', path: '#home' },
    { name: 'ABOUT', path: '#about' },
    { name: 'PROJECTS', path: '#projects' },
    { name: 'CONTACT', path: '#contact' },
  ];

  return (
    <motion.nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-cyber-black/80 backdrop-blur-sm py-2 shadow-neon-green' 
          : 'bg-transparent py-4'}
      `}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a 
          href="#home"
          className="flex items-center text-neon-green font-mono text-xl font-bold tracking-wider"
          whileHover={{ scale: 1.05 }}
        >
          &lt;/&gt;
          <span className="ml-2 hidden sm:inline">WALEED_ZARYAB</span>
          <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.path}
              className="text-gray-300 hover:text-neon-green font-mono text-sm relative group"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>{item.name}</span>
              {/* Animated underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
          
          <DisruptionButton
            color="green"
            size="sm"
            href="#contact"
          >
            CONNECT
          </DisruptionButton>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            className="text-neon-green focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-terminal-black border border-neon-green/30 mx-4 mt-2 rounded overflow-hidden shadow-neon-green"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-3 px-2">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.path}
                className="block py-2 px-4 text-gray-300 hover:text-neon-green hover:bg-cyber-black/50 font-mono text-sm border-l-2 border-transparent hover:border-neon-green transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                <span className="text-neon-green mr-2">&gt;</span> {item.name}
              </motion.a>
            ))}
            <div className="mt-4 px-4 pb-2">
              <DisruptionButton
                color="green"
                size="sm"
                href="#contact"
                className="w-full text-center"
              >
                CONNECT
              </DisruptionButton>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;