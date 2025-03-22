import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutPreview from '../components/AboutPreview';

const HomePage = () => {
  return (
    <div className="bg-cyber-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      {/* Other sections will be added later */}
    </div>
  );
};

export default HomePage;