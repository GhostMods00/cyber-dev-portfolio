import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-terminal-black border-t border-neon-green/30 py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and copyright */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start text-neon-green font-mono text-xl font-bold mb-2">
              &lt;/&gt; <span className="ml-2">CYBER_DEV</span>
            </div>
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Waleed Zaryab. All rights reserved.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="mb-6 md:mb-0">
            <div className="flex space-x-6">
              <a href="#home" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">HOME</a>
              <a href="#about" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">ABOUT</a>
              <a href="#projects" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">PROJECTS</a>
              <a href="#contact" className="text-gray-400 hover:text-neon-green transition-colors duration-300 text-sm">CONTACT</a>
            </div>
          </div>
          
          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="https://github.com/GhostMods00" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <a href="https://linkedin.com/in/waleed-zaryab-79571517a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="https://x.com/O_zee9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
  <span className="sr-only">X (Twitter)</span>
  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
</a>
<a href="https://www.instagram.com/waleedzaryab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-green transition-colors duration-300">
    <span className="sr-only">Instagram</span>
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  </a>
          </div>
        </div>
        
        {/* Made with section */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Built with Love</p>
          <p className="mt-2">HACK THE PLANET</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;