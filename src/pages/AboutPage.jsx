import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import CyberButton from '../components/CyberButton';

const AboutPage = () => {
  // Define animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  // Skills data with icon classes (using simple HTML entities for now)
  // You can replace these with actual icons from a library like react-icons
  const skills = [
    { name: "JavaScript", level: 85, icon: "JS", color: "bg-yellow-400" },
    { name: "React", level: 80, icon: "⚛️", color: "bg-cyber-blue" },
    { name: "HTML & CSS", level: 90, icon: "</> ", color: "bg-cyber-pink" },
    { name: "TypeScript", level: 75, icon: "TS", color: "bg-blue-500" },
    { name: "Python", level: 70, icon: "PY", color: "bg-green-500" },
    { name: "MongoDB", level: 65, icon: "DB", color: "bg-green-600" },
    { name: "PostgreSQL", level: 60, icon: "SQL", color: "bg-blue-600" },
    { name: "Git", level: 85, icon: "GIT", color: "bg-cyber-pink" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-cyber-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-sm opacity-20 z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-mono mb-4">
              <span className="text-neon-green">&gt;</span> ABOUT_ME<span className="text-neon-green animate-blink">_</span>
            </h2>
            <div className="h-px w-24 bg-neon-green mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full-stack developer with a passion for building digital experiences with a cyber edge.
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Bio section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <GlitchText 
                  text="MY_STORY" 
                  className="text-xl font-mono mb-4 inline-block" 
                  color="cyber-blue"
                />
                
                <div className="bg-terminal-black border border-neon-green/30 p-6 rounded-md shadow-neon-green mb-6">
                  <p className="text-gray-300 mb-4">
                    I embarked on my coding journey through an intensive 6-month bootcamp, where I immersed myself in modern web technologies and best practices. This experience transformed my approach to problem-solving and ignited my passion for creating secure, efficient digital solutions.
                  </p>
                  <p className="text-gray-300 mb-4">
                    With a strong passion for programming, I bring a unique perspective to development that combines technical skills.
                  </p>
                  <p className="text-gray-300">
                    I'm constantly exploring new technologies and techniques, driven by curiosity and the desire to craft exceptional user experiences. My approach to coding mirrors the hacker mindset: analytical, creative, and always searching for optimal solutions.
                  </p>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-8">
                <GlitchText 
                  text="EDUCATION" 
                  className="text-xl font-mono mb-4 inline-block" 
                  color="cyber-pink"
                />
                
                <div className="bg-terminal-black border border-cyber-pink/30 p-6 rounded-md shadow-neon-pink">
                  <div className="mb-6 border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-mono text-cyber-pink">Full-Stack Web Development Bootcamp From University of Sydney x edX</h3>
                      <span className="text-sm text-gray-400">2024</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Intensive program covering JavaScript, React, Node.js, databases, and modern development practices.
                    </p>
                  </div>
                  
                  <div>
                    
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <CyberButton 
                  color="green" 
                  href="#contact"
                  size="md"
                >
                  GET IN TOUCH
                </CyberButton>
                
                <CyberButton 
                  color="blue" 
                  href="#projects"
                  size="md"
                  className="ml-4"
                >
                  VIEW PROJECTS
                </CyberButton>
              </motion.div>
            </motion.div>
            
            {/* Skills section */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <GlitchText 
                  text="TECH_STACK" 
                  className="text-xl font-mono mb-4 inline-block" 
                  color="neon-green"
                />
                
                <div className="bg-terminal-black border border-neon-green/30 p-6 rounded-md shadow-neon-green">
                  <div className="space-y-6">
                    {skills.map((skill, index) => (
                      <div key={index} className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center">
                            <span className={`w-8 h-8 ${skill.color} rounded-md flex items-center justify-center text-sm font-mono text-black mr-3`}>
                              {skill.icon}
                            </span>
                            <span className="font-mono text-gray-300">{skill.name}</span>
                          </div>
                          <span className="text-xs text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 w-full bg-terminal-black border border-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${skill.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.1 * index }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <GlitchText 
                  text="INTERESTS" 
                  className="text-xl font-mono mb-4 inline-block" 
                  color="cyber-purple"
                />
                
                <div className="bg-terminal-black border border-cyber-purple/30 p-6 rounded-md shadow-neon-purple">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {['Web Security', 'UI/UX Design', 'API Development', 'DevOps', 'Machine Learning', 'Open Source'].map((interest, index) => (
                      <div 
                        key={index}
                        className="border border-cyber-purple/30 p-3 rounded text-center hover:bg-cyber-purple/10 transition-colors duration-300"
                      >
                        <span className="text-gray-300 text-sm font-mono">{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
