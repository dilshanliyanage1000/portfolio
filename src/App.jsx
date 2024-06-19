import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Gallery from './views/Gallery';
import Projects from './views/Projects';
import Contact from './views/Contact';

const App = () => {

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
