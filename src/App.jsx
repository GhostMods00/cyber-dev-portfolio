import React from 'react';
import './styles/index.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CyberCursor from './components/CyberCursor';
import MatrixBackground from './components/MatrixBackground';
import ParallaxBackground from './components/ParallaxBackground';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App bg-cyber-black min-h-screen crt">
      {/* Global Effects */}
      <MatrixBackground opacity={0.05} density="low" speed="medium" />
      <ParallaxBackground />
      <CyberCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;