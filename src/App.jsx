import { Routes, Route, ScrollRestoration } from 'react-router-dom';
import Home from './views/Home';
import AllProject from './views/AllProjects';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';
import SmoothScroll from './components/SmoothScroll';

const App = () => {

  return (
    <>
      <SmoothScroll />
      <ScrollRestoration />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/allprojects' element={<AllProject />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );

}

export default App;