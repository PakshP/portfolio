import React, { useState } from 'react';
import logo from './assests/logo-home.png';
import home from './assests/home.png';
import about from './assests/info.png';
import skills from './assests/lightbulb-setting.png';
import contact from './assests/form.png';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navBar'>
      <a className='logo' onClick={toggleMenu}>
        <img src={logo} alt='logo' className='logo' />
      </a>
      <div className={`navbuttons ${isOpen ? 'open' : ''}`}>
        <a href='#home'>
          <img src={home} alt='home' />
        </a>
        <a href='#about'>
          <img src={about} alt='about' />
        </a>
        <a href='#skills'>
          <img src={skills} alt='skills' />
        </a>
        <a href='#contact'>
          <img src={contact} alt='contact' />
        </a>
      </div>
    </div>
  );
}

export default App;
