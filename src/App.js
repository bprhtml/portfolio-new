import React from 'react';
import Banner from './Banner';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  return (
    <div id='everything'>
     <Banner />
     <Home />
     <Projects />
     <Skills />
     <About />
     <Contact />
    </div>
  );
}

export default App;
