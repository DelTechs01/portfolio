import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Home from './Home';
import Projects from './projects';
import About from './About';
import Contact from './contact';
import Skills from './Skills';
import Footer from './Footer';
import Resume from './Resume';
import Navbar from './Navbar';
import Education from './Education'; // Added Education import

function App() {
  return (
    <Router>
      <div className="font-sans">
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/education" element={<Education />} /> // Added Education route
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;