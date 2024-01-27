import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './Home';

import About from './About';

import Contact from './Contact';

import Projects from './Projects';

import Gallery from './Gallery';

const App = () => {

  return (

    <div>

      <Routes>

          <Route exact path='/'element = {<Home/>}> </Route>

          <Route path='/about' element={<About/>}> </Route>

          <Route path='/projects' element = {<Projects/>}> </Route>

          <Route path='/gallery' element = {<Gallery/>}> </Route>

          <Route path='/contact' element = {<Contact/>}> </Route>

      </Routes>
    
    </div>

  );

}

export default App;
