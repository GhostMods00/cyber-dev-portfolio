import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import DisruptionButton from '../components/DisruptionButton';
import TextScramble from '../components/TextScramble';
import aboutImage from '../assets/images/Aboutme.png';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3, FaGitAlt, FaDocker, FaTerminal
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiMongodb, SiPostgresql, 
  SiPython, SiTailwindcss, SiGithub
} from 'react-icons/si';

const AboutPage = () => {
  // State for active skills tab
  const [activeTab, setActiveTab] = useState('frontend');
  
  // Tabs for skill categories
  const tabs = [
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'tools', label: 'TOOLS' },
    { id: 'soft', label: 'SOFT SKILLS' },
  ];
  
  // Skill data with icons and levels
  const skillSets = {
    frontend: [
      { name: 'React', level: 90, icon: FaReact, color: 'text-blue-400' },
      { name: 'TypeScript', level: 85, icon: SiTypescript, color: 'text-blue-600' },
      { name: 'JavaScript', level: 90, icon: SiJavascript, color: 'text-yellow-400' },
      { name: 'HTML5', level: 95, icon: FaHtml5, color: 'text-orange-500' },
      { name: 'CSS3', level: 90, icon: FaCss3, color: 'text-blue-500' },
      { name: 'Tailwind CSS', level: 85, icon: SiTailwindcss, color: 'text-cyan-400' },
    ],
    backend: [
      { name: 'Node.js', level: 80, icon: FaNodeJs, color: 'text-green-500' },
      { name: 'MongoDB', level: 75, icon: SiMongodb, color: 'text-green-600' },
      { name: 'PostgreSQL', level: 70, icon: SiPostgresql, color: 'text-blue-500' },
      { name: 'Python', level: 65, icon: SiPython, color: 'text-yellow-300' },
      { name: 'Express.js', level: 75, icon: FaNodeJs, color: 'text-gray-400' },
    ],
    tools: [
      { name: 'Git', level: 85, icon: FaGitAlt, color: 'text-orange-600' },
      { name: 'GitHub', level: 80, icon: SiGithub, color: 'text-white' },
      { name: 'VS Code', level: 90, color: 'text-blue-500' }, // Removed the icon here
      { name: 'Docker', level: 65, icon: FaDocker, color: 'text-blue-400' },
      { name: 'Terminal', level: 80, icon: FaTerminal, color: 'text-gray-300' },
    ],
    soft: [
      { name: 'Problem Solving', level: 95 },
      { name: 'Communication', level: 90 },
      { name: 'Teamwork', level: 85 },
      { name: 'Time Management', level: 80 },
      { name: 'Adaptability', level: 90 },
    ]
  };
  
  // Experience timeline data
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "FreeLancer",
      period: "2023 - Present",
      description: "Developed and maintained web applications using React, Node.js, and MongoDB. Implemented responsive UIs and RESTful APIs."
    },
    // {
    //   title: "Frontend Developer",
    //   company: "Previous Company",
    //   period: "2022 - 2023",
    //   description: "Built responsive UI components and implemented modern JavaScript frameworks. Collaborated with designers to create pixel-perfect interfaces."
    // },
    
  ];
  
  // Education data
  const education = [
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "University of Sydney x edX",
      year: "2024",
      description: "Intensive program covering JavaScript, React, Node.js, databases, and modern development practices."
    },
    // {
    //   school: "University/Institution Name",
    //   year: "Year",
    //   description: "Brief description of your studies and achievements."
    // },
    // // Replace with your actual education
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
            <h2 className="text-3xl md:text-4xl font-mono mb-4 inline-block relative">
              <span className="text-neon-green">&gt;</span> ABOUT_ME
              <span className="text-neon-green animate-blink">_</span>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 left-0 w-full h-px bg-neon-green/70"></div>
              <div className="absolute -bottom-2 left-0 w-1/3 h-px bg-cyber-blue/70"></div>
              <div className="absolute -bottom-4 left-0 w-1/4 h-px bg-cyber-pink/70"></div>
            </h2>
            
            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              <TextScramble 
                text={[
                  "Decoding problems, encoding solutions.",
                  "Turning coffee into code since 2022.",
                  "Crafting digital experiences with a cyber edge."
                ]} 
                speed={40}
              />
            </p>
          </div>
          
          {/* Profile and bio section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Profile image with cyber frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Core photo with scanline effect */}
                <div className="absolute inset-2 overflow-hidden border-2 border-neon-green/50">
                <img 
  src={aboutImage} 
  alt="Waleed Zaryab 
  className="w-full h-full object-cover
/>
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="w-full h-full animate-scanline bg-gradient-to-b from-transparent via-neon-green to-transparent opacity-10"></div>
                  </div>
                </div>
                
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-12 h-2 bg-neon-green"></div>
                <div className="absolute top-0 left-0 w-2 h-12 bg-neon-green"></div>
                
                <div className="absolute top-0 right-0 w-12 h-2 bg-cyber-blue"></div>
                <div className="absolute top-0 right-0 w-2 h-12 bg-cyber-blue"></div>
                
                <div className="absolute bottom-0 left-0 w-12 h-2 bg-cyber-pink"></div>
                <div className="absolute bottom-0 left-0 w-2 h-12 bg-cyber-pink"></div>
                
                <div className="absolute bottom-0 right-0 w-12 h-2 bg-cyber-purple"></div>
                <div className="absolute bottom-0 right-0 w-2 h-12 bg-cyber-purple"></div>
                
                {/* Data points */}
                <motion.div 
                  className="absolute -top-4 -right-4 bg-terminal-black text-neon-green border border-neon-green/50 px-3 py-1 text-xs font-mono"
                  animate={{ 
                    boxShadow: ['0 0 5px rgba(0, 255, 65, 0.3)', '0 0 10px rgba(0, 255, 65, 0.5)', '0 0 5px rgba(0, 255, 65, 0.3)']
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  STATUS: ONLINE
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-4 -left-4 bg-terminal-black text-cyber-blue border border-cyber-blue/50 px-3 py-1 text-xs font-mono"
                  animate={{ 
                    boxShadow: ['0 0 5px rgba(0, 132, 255, 0.3)', '0 0 10px rgba(0, 132, 255, 0.5)', '0 0 5px rgba(0, 132, 255, 0.3)']
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  ACCESS: GRANTED
                </motion.div>
              </div>
            </motion.div>
            
            {/* Bio section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-terminal-black border border-neon-green/30 p-6 rounded-md shadow-neon-green h-full">
                <div className="mb-4 pb-2 border-b border-gray-700 flex items-center">
                  <div className="w-3 h-3 rounded-full bg-cyber-red mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-green mr-2"></div>
                  <span className="text-sm text-gray-400 font-mono">bio.md</span>
                </div>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    <span className="text-cyber-blue">/**</span>
                  </p>
                  <p>
                    <span className="text-cyber-blue"> * </span>
                    Hello! I'm a Full Stack Developer who recently completed an intensive coding bootcamp.
                    With a background in Programming, I bring a unique perspective to development
                    that combines technical skills with Cyber touch.
                  </p>
                  <p>
                    <span className="text-cyber-blue"> * </span>
                    My journey in tech is driven by curiosity and a desire to build applications that solve
                    real-world problems. I'm constantly exploring new technologies and techniques to expand
                    my coding arsenal.
                  </p>
                  <p>
                    <span className="text-cyber-blue"> * </span>
                    When I'm not hacking away at code, you can find me contributing to open source projects.
                  </p>
                  <p>
                    <span className="text-cyber-blue"> */</span>
                  </p>
                  
                  <div className="pt-4 mt-4 border-t border-gray-700">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-neon-green">
                        <FaTerminal className="mr-2" />
                        <span>Problem Solver</span>
                      </div>
                      <div className="flex items-center text-cyber-blue">
                        <FaReact className="mr-2" />
                        <span>React Enthusiast</span>
                      </div>
                      <div className="flex items-center text-cyber-pink">
                        <FaNodeJs className="mr-2" />
                        <span>Full Stack Developer</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Skills section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-terminal-black border-2 border-neon-green flex items-center justify-center mr-4">
                <span className="text-neon-green font-mono">S</span>
              </div>
              <h3 className="text-2xl font-mono text-white">
                <GlitchText text="SKILLS & TECHNOLOGIES" intensity="low" />
              </h3>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-neon-green to-transparent"></div>
            </div>
            
            {/* Skills tabs and visualization */}
            <div className="bg-terminal-black border border-neon-green/30 p-6 rounded-lg shadow-neon-green">
              {/* Tabs */}
              <div className="flex overflow-x-auto mb-6 pb-2">
                {tabs.map(tab => (
                  <motion.button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2 mr-2 whitespace-nowrap font-mono text-sm transition-all ${
                      activeTab === tab.id 
                        ? 'bg-neon-green/10 text-neon-green border-b-2 border-neon-green' 
                        : 'text-gray-400 hover:text-neon-green hover:bg-neon-green/5'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
              
              {/* Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                key={activeTab}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {skillSets[activeTab].map((skill, index) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                        {skill.icon && <skill.icon className={`mr-2 ${skill.color}`} size={20} />}
                        <span className="font-mono text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-cyber-black border border-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${skill.color ? 'bg-gradient-to-r from-neon-green to-cyber-blue' : 'bg-neon-green'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Experience and Education section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-terminal-black border-2 border-cyber-blue flex items-center justify-center mr-4">
                  <span className="text-cyber-blue font-mono">E</span>
                </div>
                <h3 className="text-2xl font-mono text-white">
                  <GlitchText text="EXPERIENCE" intensity="low" color="cyber-blue" />
                </h3>
                <div className="ml-4 flex-grow h-px bg-gradient-to-r from-cyber-blue to-transparent"></div>
              </div>
              
              {/* Timeline */}
              <div className="relative ml-4">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-cyber-blue via-neon-green to-cyber-purple"></div>
                
                {/* Experience items */}
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="mb-10 ml-6 relative"
                  >
                    {/* Timeline node */}
                    <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full border-2 border-cyber-blue bg-cyber-black"></div>
                    
                    <div className="bg-terminal-black p-5 rounded-lg border border-gray-800 hover:border-cyber-blue/50 transition-all duration-300">
                      <h3 className="text-xl text-cyber-blue font-mono">{exp.title}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-300">{exp.company}</p>
                        <p className="text-sm text-cyber-blue">{exp.period}</p>
                      </div>
                      <p className="text-gray-400">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-8">
                <div className="w-8 h-8 bg-terminal-black border-2 border-cyber-pink flex items-center justify-center mr-4">
                  <span className="text-cyber-pink font-mono">E</span>
                </div>
                <h3 className="text-2xl font-mono text-white">
                  <GlitchText text="EDUCATION" intensity="low" color="cyber-pink" />
                </h3>
                <div className="ml-4 flex-grow h-px bg-gradient-to-r from-cyber-pink to-transparent"></div>
              </div>
              
              {/* Timeline */}
              <div className="relative ml-4">
                {/* Timeline line */}
                <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-cyber-pink via-cyber-purple to-neon-green"></div>
                
                {/* Education items */}
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="mb-10 ml-6 relative"
                  >
                    {/* Timeline node */}
                    <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full border-2 border-cyber-pink bg-cyber-black"></div>
                    
                    <div className="bg-terminal-black p-5 rounded-lg border border-gray-800 hover:border-cyber-pink/50 transition-all duration-300">
                      <h3 className="text-xl text-cyber-pink font-mono">{edu.degree}</h3>
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-300">{edu.school}</p>
                        <p className="text-sm text-cyber-pink">{edu.year}</p>
                      </div>
                      <p className="text-gray-400">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Interests section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16"
          >
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-terminal-black border-2 border-cyber-purple flex items-center justify-center mr-4">
                <span className="text-cyber-purple font-mono">I</span>
              </div>
              <h3 className="text-2xl font-mono text-white">
                <GlitchText text="INTERESTS" intensity="low" color="cyber-purple" />
              </h3>
              <div className="ml-4 flex-grow h-px bg-gradient-to-r from-cyber-purple to-transparent"></div>
            </div>
            
            <div className="bg-terminal-black border border-cyber-purple/30 p-6 rounded-lg shadow-neon-purple">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {['Web Security', 'UI/UX Design', 'API Development', 'Open Source', 'AI', 'Mobile Development', 'Cloud Computing', 'Cybersecurity'].map((interest, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(189, 0, 255, 0.1)',
                      borderColor: 'rgba(189, 0, 255, 0.5)'
                    }}
                    className="border border-gray-800 p-4 rounded text-center hover:shadow-neon-purple transition-all duration-300"
                  >
                    <span className="text-gray-300 text-sm font-mono">{interest}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-6">
              Want to know more or discuss a potential collaboration?
            </p>
            <div className="flex justify-center gap-4">
              <DisruptionButton 
                color="green" 
                href="#contact"
              >
                GET IN TOUCH
              </DisruptionButton>
              
              <DisruptionButton 
                color="blue" 
                href="#projects"
              >
                VIEW PROJECTS
              </DisruptionButton>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;