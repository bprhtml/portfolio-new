import React, { useState } from 'react';
import Banner from './Banner';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import { Link, animateScroll as scroll } from "react-scroll";

function App() {
  const [theme, setTheme] = useState('light');

  const handleClick = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  const themeStyles = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div id='everything' style={themeStyles}>
      <button id='theme' onClick={handleClick}>
        <img id='bulb' src={theme === 'light' ? 'light.svg' : 'dark.svg'} alt='Theme Toggle' />
      </button>
      <Banner />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

const lightTheme = {
  backgroundColor: 'rgb(240,240,240)',
  color: 'rgb(20,20,20)',
  marginBlock: '10vh'
}

const darkTheme = {
  backgroundColor: 'rgb(20,20,20)',
  color: 'rgb(240,240,240)',
  marginBlock: '10vh'
}

export default App;
