import React, { useState, useEffect } from 'react';
import logo from './assests/logo-home.png';
import home from './assests/home.png';
import about from './assests/info.png';
import skills from './assests/lightbulb-setting.png';
import contact from './assests/form.png';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const [scrollIndicatorHeight, setScrollIndicatorHeight] = useState(0);
  const [scrollIndicatorTop, setScrollIndicatorTop] = useState(0);

  useEffect(() => {
    const updateScrollIndicator = () => {
      const scrolled = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrolled / totalHeight;
      const indicatorHeight = scrollPercent * window.innerHeight;
      setScrollIndicatorHeight(indicatorHeight);
      setScrollIndicatorTop((scrollPercent * (window.innerHeight - indicatorHeight)));
    };

    // Update scroll indicator on mount and on scroll
    updateScrollIndicator();
    window.addEventListener('scroll', updateScrollIndicator);

    // Cleanup listener when the component unmounts
    return () => window.removeEventListener('scroll', updateScrollIndicator);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navBar ${isOpen ? 'open' : ''}`}>
      <div className="scrollIndicator" 
           style={{ height: `${scrollIndicatorHeight}px`, 
           top: `${scrollIndicatorTop}px`,}}></div>
      <a href='#' className='menu' onClick={toggleMenu}>
        <img src={logo} alt='logo' className='logo' />
      </a>
      <div className={`navbuttons ${isOpen ? 'open' : ''}`}>
        <a href='#home'>
          <img src={home} alt='home' />
          <span className='navButtonText'>Home</span>
        </a>
        <a href='#about'>
          <img src={about} alt='about' />
          <span className='navButtonText'>About</span>
        </a>
        <a href='#skills'>
          <img src={skills} alt='skills' />
          <span className='navButtonText'>Skills</span>
        </a>
        <a href='#contact'>
          <img src={contact} alt='contact' />
          <span className='navButtonText'>Contact</span>
        </a>
      </div>
    </div>
  );
}

export default App;
