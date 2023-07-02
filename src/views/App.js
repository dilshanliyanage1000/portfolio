import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';

import About from './About';

import Contact from './Contact';

import Projects from './Projects';

import Services from './Services';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="/portfolio/projects" element={<Projects />} />
        <Route path="/portfolio/services" element={<Services />} />
      </Routes>
    </Router>
  );
  
}

export default App;
