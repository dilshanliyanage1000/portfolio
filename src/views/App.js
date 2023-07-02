// import React from 'react';

// import Home from './Home';

// import About from './About';

// import Contact from './Contact';

// import Projects from './Projects';

// import Services from './Services';

// function App() {

//   let Component;

//   switch (window.location.pathname) {

//     case "/":
//       Component = Home
//       break

//     case "/about":
//       Component = About
//       break

//     case "/projects":
//       Component = Projects
//       break

//     case "/services":
//       Component = Services
//       break
      
//     case "/contact":
//       Component = Contact
//       break

//     default:
//       Component = Home
//       break
//   }

//   return (

//     <div>

//       <Component />

//     </div>

//   );
  
// }

// export default App;

import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './Home';

import About from './About';

import Contact from './Contact';

import Projects from './Projects';

import Services from './Services';

const App = () => {

  return (

   <Routes>

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

   </Routes>

  );

}

export default App;
