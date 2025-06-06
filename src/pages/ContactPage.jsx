import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import DisruptionButton from '../components/DisruptionButton';

const ContactPage = () => {
  const form = useRef();
  // Form state
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
    loading: false
  });
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.user_name || !formData.user_email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: 'Please fill out all required fields.',
        loading: false
      });
      return;
    }
    
    // Set loading state
    setFormStatus({
      ...formStatus,
      loading: true
    });
    
    //EmailJS service ID, template ID, and public key
    const serviceId = 'service_qg6xwh9';
    const templateId = 'template_wfl5807';
    const publicKey = 'JXZTpcfYlMrn-w6V2';
    
    // Send the email
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        
        // Success message
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I\'ll respond as soon as possible.',
          loading: false
        });
        
        // Reset form
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: '',
            loading: false
          });
        }, 5000);
      })
      .catch((error) => {
        console.error('Email error:', error.text);
        
        // Error message
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Something went wrong. Please try again later.',
          loading: false
        });
      });
  };

  // Social media links
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/GhostMods00', icon: 'GitHub' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/waleed-zaryab-79571517a', icon: 'LinkedIn' },
    { name: 'X', url: 'https://x.com/O_zee9', icon: 'X' },
    { name: 'CodePen', url: 'https://codepen.io/GhostMods00', icon: 'CodePen' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-cyber-black text-white">
      {/* Background effects */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-sm opacity-20 z-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 pt-16 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-mono mb-4">
              <span className="text-neon-green">&gt;</span> CONNECT<span className="text-neon-green animate-blink">_</span>
            </h2>
            <div className="h-px w-24 bg-neon-green mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Interested in working together? Have a question? Let's connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-terminal-black border border-neon-green/30 p-6 rounded-lg shadow-neon-green">
                <h3 className="text-xl font-mono text-neon-green mb-6">SEND A MESSAGE</h3>
                
                <form ref={form} onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-mono mb-2" htmlFor="user_name">
                      NAME<span className="text-cyber-pink">*</span>
                    </label>
                    <input
                      className="w-full bg-cyber-black border border-gray-700 rounded py-2 px-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors duration-300"
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-mono mb-2" htmlFor="user_email">
                      EMAIL<span className="text-cyber-pink">*</span>
                    </label>
                    <input
                      className="w-full bg-cyber-black border border-gray-700 rounded py-2 px-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors duration-300"
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-mono mb-2" htmlFor="subject">
                      SUBJECT
                    </label>
                    <input
                      className="w-full bg-cyber-black border border-gray-700 rounded py-2 px-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors duration-300"
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-400 text-sm font-mono mb-2" htmlFor="message">
                      MESSAGE<span className="text-cyber-pink">*</span>
                    </label>
                    <textarea
                      className="w-full bg-cyber-black border border-gray-700 rounded py-2 px-3 text-gray-300 focus:outline-none focus:border-neon-green transition-colors duration-300 h-32 resize-none"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  {/* Form status message */}
                  {formStatus.submitted && (
                    <div className={`p-3 mb-4 rounded text-sm ${formStatus.success ? 'bg-neon-green/10 text-neon-green' : 'bg-cyber-pink/10 text-cyber-pink'}`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <div className="flex justify-end">
                    <DisruptionButton 
                      color="green" 
                      type="submit"
                      disabled={formStatus.loading}
                    >
                      {formStatus.loading ? 'SENDING...' : 'SEND MESSAGE'}
                    </DisruptionButton>
                  </div>
                </form>
              </div>
            </motion.div>
            
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                {/* Connect section */}
                <div className="bg-terminal-black border border-cyber-blue/30 p-6 rounded-lg shadow-neon-blue">
                  <h3 className="text-xl font-mono text-cyber-blue mb-6">CONTACT INFO</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-mono text-gray-400 mb-1">EMAIL</h4>
                      <p className="text-gray-300">westendcrew1982@gmail.com</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-mono text-gray-400 mb-1">LOCATION</h4>
                      <p className="text-gray-300">Sydney, Australia</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-mono text-gray-400 mb-1">AVAILABILITY</h4>
                      <p className="text-gray-300">Open to freelance & full-time opportunities</p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media Links */}
                <div className="bg-terminal-black border border-cyber-purple/30 p-6 rounded-lg shadow-neon-purple">
                  <h3 className="text-xl font-mono text-cyber-purple mb-6">CONNECT ONLINE</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link, index) => (
                      <a 
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 border border-gray-700 rounded-lg hover:border-cyber-purple transition-colors duration-300 group"
                      >
                        <span className="w-8 h-8 bg-cyber-purple/20 rounded-full flex items-center justify-center mr-3 group-hover:bg-cyber-purple/30 transition-colors duration-300">
                          {/* Replace with actual icons if you have an icon library */}
                          <span className="text-cyber-purple">{link.icon[0]}</span>
                        </span>
                        <span className="text-gray-300 group-hover:text-cyber-purple transition-colors duration-300">{link.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Resume Download */}
                <div className="bg-terminal-black border border-cyber-pink/30 p-6 rounded-lg shadow-neon-pink">
                  <h3 className="text-xl font-mono text-cyber-pink mb-4">DOWNLOAD RESUME</h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    Get a comprehensive overview of my skills, experience, and education.
                  </p>
                  <DisruptionButton 
  color="pink" 
  href="/resume.pdf"
  className="w-full text-center"
  download={true}
  onClick={() => console.log("Resume downloaded")}
>
  DOWNLOAD CV
</DisruptionButton>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;