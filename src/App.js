import React, { useState, useEffect, useRef } from 'react';
import logo from './assests/logo-home.png';
import home from './assests/home.png';
import about from './assests/info.png';
import skills from './assests/lightbulb-setting.png';
import contact from './assests/form.png';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const [indicatorStyle, setIndicatorStyle] = useState({});
  const navRefs = {
    home: useRef(null),
    about: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'contact'];
      let currentSection = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          currentSection = section;
        } else {
          break;
        }
      }
      if (navRefs[currentSection].current) {
        const { offsetTop, offsetHeight } = navRefs[currentSection].current;
        setIndicatorStyle({
          top: offsetTop + 'px',
          height: offsetHeight + 'px',
          opacity: 1
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className={`navBar ${isOpen ? 'open' : ''}`}>
        <a className='menu' onClick={toggleMenu}>
          <img src={logo} alt='logo' className='logo' />
        </a>
        <div className={`navbuttons ${isOpen ? 'open' : ''}`}>
          <div className="highlightBox" style={indicatorStyle} />
          <a ref={navRefs.home} href='#home'>
            <img src={home} alt='home' />
            <span className='navButtonText'>Home</span>
          </a>
          <a ref={navRefs.about} href='#about'>
            <img src={about} alt='about' />
            <span className='navButtonText'>About</span>
          </a>
          <a ref={navRefs.skills} href='#skills'>
            <img src={skills} alt='skills' />
            <span className='navButtonText'>Skills</span>
          </a>
          <a ref={navRefs.contact} href='#contact'>
            <img src={contact} alt='contact' />
            <span className='navButtonText'>Contact</span>
          </a>
        </div>
      </div>
      <main>
        <section id='home' className='main-section'>
          <h1>Home</h1>
        </section>
        <section id='about' className='main-section'>
          <h1>About</h1>
        </section>
        <section id='skills' className='main-section'>
          <h1>Skills</h1>
        </section>
        <section id='contact' className='main-section'>
          <h1>Contact</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
