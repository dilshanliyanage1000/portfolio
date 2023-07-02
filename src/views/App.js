import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './Home';

import About from './About';

import Contact from './Contact';

import Projects from './Projects';

import Services from './Services';

const App = () => {

  return (

   <Switch>

      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/about'>
        <About/>
      </Route>

      <Route path='/projects'>
        <Projects/>
      </Route>

      <Route path='/services'>
        <Services/>
      </Route>

      <Route path='/contact'>
        <Contact/>
      </Route>

   </Switch>
   

  );

}

export default App;
