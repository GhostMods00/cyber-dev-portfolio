import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../components/GlitchText';
import CyberButton from '../components/CyberButton';

const ProjectsPage = () => {
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Sample project data - replace with your actual projects
  const projectsData = [
    {
      id: 1,
      title: "Crypto Dashboard",
      description: "Interactive dashboard for tracking cryptocurrency prices and portfolio performance with real-time updates.",
      image: "/images/project-placeholder.jpg", // Replace with your project image
      technologies: ["React", "Node.js", "Chart.js", "API Integration"],
      category: "frontend",
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project-repo",
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with user authentication, product management, and payment processing.",
      image: "/images/project-placeholder.jpg",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      category: "fullstack",
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project-repo",
      featured: true
    },
    {
      id: 3,
      title: "Task Management API",
      description: "RESTful API for task management with authentication, authorization, and comprehensive documentation.",
      image: "/images/project-placeholder.jpg",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      category: "backend",
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project-repo",
      featured: false
    },
    {
      id: 4,
      title: "Weather App",
      description: "Weather application featuring location detection, 5-day forecasts, and interactive maps.",
      image: "/images/project-placeholder.jpg",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      category: "frontend",
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project-repo",
      featured: false
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "Content management system with markdown support, user roles, and commenting functionality.",
      image: "/images/project-placeholder.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      category: "fullstack",
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project-repo",
      featured: false
    },
    {
      id: 6,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with filtering and export capabilities.",
      image: "/images/project-placeholder.jpg",
      technologies: ["D3.js", "React", "CSS Grid", "RESTful APIs"],
      category: "frontend",
      demoLink: "https://example.com",
      codeLink: "https://github.com/yourusername/project-repo",
      featured: true
    }
  ];
  
  // Filter categories
  const filters = [
    { value: 'all', label: 'ALL' },
    { value: 'frontend', label: 'FRONTEND' },
    { value: 'backend', label: 'BACKEND' },
    { value: 'fullstack', label: 'FULLSTACK' },
    { value: 'featured', label: 'FEATURED' }
  ];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : activeFilter === 'featured'
      ? projectsData.filter(project => project.featured)
      : projectsData.filter(project => project.category === activeFilter);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 bg-cyber-black text-white">
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
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-mono mb-4">
              <span className="text-neon-green">&gt;</span> MY_PROJECTS<span className="text-neon-green animate-blink">_</span>
            </h2>
            <div className="h-px w-24 bg-neon-green mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of my recent work. Each project reflects my commitment to clean code, innovative solutions, and cybersecurity best practices.
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center mb-12 gap-2">
            {filters.map((filter) => (
              <button
                key={filter.value}
                className={`
                  px-4 py-2 text-sm font-mono border rounded transition-all duration-300
                  ${activeFilter === filter.value 
                    ? 'border-neon-green text-neon-green bg-neon-green/10' 
                    : 'border-gray-600 text-gray-400 hover:text-neon-green hover:border-neon-green'}
                `}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} variants={itemVariants} />
            ))}
          </motion.div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center text-gray-400 py-16">
              <p>No projects found matching this filter.</p>
            </div>
          )}
          
          {/* Call to action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-gray-400 mb-6">
              Interested in working together? Let's build something amazing.
            </p>
            <CyberButton 
              color="green" 
              href="#contact"
              size="lg"
            >
              CONTACT ME
            </CyberButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Project card component

const ProjectCard = ({ project, variants }) => {
    return (
      <motion.div 
        className="bg-terminal-black border border-neon-green/30 rounded-lg overflow-hidden relative z-10"
        variants={variants}
        whileHover={{ 
          y: -10, 
          boxShadow: "0 15px 30px -10px rgba(0, 255, 65, 0.3)",
          transition: { duration: 0.3 }
        }}
        // Subtle floating animation
        animate={{
          y: [0, -5, 0],
          boxShadow: [
            "0 5px 15px -5px rgba(0, 255, 65, 0.1)",
            "0 10px 20px -5px rgba(0, 255, 65, 0.2)",
            "0 5px 15px -5px rgba(0, 255, 65, 0.1)"
          ]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 3,
          ease: "easeInOut"
        }}
      >
        {/* Project image */}
        <div className="relative overflow-hidden h-48">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            {/* 3D layered overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-transparent to-cyber-blue/10"></div>
            <div className="absolute inset-0 animate-scanline bg-gradient-to-b from-transparent via-neon-green to-transparent opacity-10"></div>
          </div>
          
          {/* Featured badge with 3D effect */}
          {project.featured && (
            <div className="absolute top-2 right-2 bg-cyber-pink text-black px-3 py-1 text-xs font-mono transform -rotate-3 shadow-neon-pink z-20">
              FEATURED
            </div>
          )}
          
          {/* 3D corner accent */}
          <div className="absolute top-0 left-0 w-8 h-2 bg-neon-green"></div>
          <div className="absolute top-0 left-0 w-2 h-8 bg-neon-green"></div>
        </div>
        
        {/* Project content */}
        <div className="p-6 border-t border-neon-green/20">
          <h3 className="text-xl font-mono text-neon-green mb-2">{project.title}</h3>
          <p className="text-gray-400 mb-4 text-sm h-20 overflow-hidden">{project.description}</p>
          
          {/* Technologies with 3D hover effect */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <motion.span 
                key={index} 
                className="px-2 py-1 bg-cyber-black text-xs font-mono text-gray-300 rounded border border-gray-800"
                whileHover={{ 
                  y: -2, 
                  x: 2,
                  backgroundColor: "rgba(0, 255, 65, 0.1)",
                  borderColor: "rgba(0, 255, 65, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                {tech}
              </motion.span>
            ))}
            {project.technologies.length > 3 && (
              <motion.span 
                className="px-2 py-1 bg-cyber-black text-xs font-mono text-gray-300 rounded border border-gray-800"
                whileHover={{ 
                  y: -2, 
                  x: 2,
                  backgroundColor: "rgba(0, 255, 65, 0.1)",
                  borderColor: "rgba(0, 255, 65, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                +{project.technologies.length - 3} more
              </motion.span>
            )}
          </div>
          
          {/* Action buttons with 3D effects */}
          <div className="flex gap-3">
            <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CyberButton 
                color="blue" 
                size="xs"
                href={project.demoLink}
                className="w-full text-center"
                glowing={true}
              >
                DEMO
              </CyberButton>
            </motion.div>
            
            <motion.div className="flex-1" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <CyberButton 
                color="green" 
                size="xs"
                href={project.codeLink}
                className="w-full text-center"
                glowing={true}
              >
                CODE
              </CyberButton>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom edge lighting effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-50"></div>
      </motion.div>
    );
  };

export default ProjectsPage;