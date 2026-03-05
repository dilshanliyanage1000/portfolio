import { useCallback, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AllProject from './views/AllProjects';
import AboutMe from './views/AboutMe';
import Contact from './views/Contact';

import SmoothScroll from "./components/SmoothScroll";
import LenisScrollRestoration from "./components/LenisScrollRestoration";

const App = () => {

  const [lenis, setLenis] = useState(null);

  const handleLenisReady = useCallback((instance) => {
    setLenis(instance);
  }, []);

  return (
    <>
      <SmoothScroll onReady={handleLenisReady} />
      <LenisScrollRestoration lenis={lenis} />

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