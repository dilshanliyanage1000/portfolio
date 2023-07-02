import React from 'react';

import Home from './Home';

import About from './About';

import Contact from './Contact';

import Projects from './Projects';

import Services from './Services';

function App() {

  let Component;

  switch (window.location.pathname) {

    case "/portfolio":
      Component = Home
      break

    case "/portfolio/about":
      Component = About
      break

    case "/portfolio/projects":
      Component = Projects
      break

    case "/portfolio/services":
      Component = Services
      break
      
    case "/portfolio/contact":
      Component = Contact
      break

    default:
      Component = Home
      break
  }

  return (

    <div>

      <Component />

    </div>

  );
  
}

export default App;
