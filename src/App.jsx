import React from 'react';
import './styles/index.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
 import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="App bg-cyber-black min-h-screen crt">
      <Navbar />
      
      <main>
          <HomePage />  
        <AboutPage />
         <ProjectsPage />
       <ContactPage />  
      </main>
      
      <Footer />
    </div>
  );
}

export default App;