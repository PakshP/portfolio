import React, { useState } from 'react';
import logo from './assests/logo-home.png';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="topnav">
      <a className="active" href="#home">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <div className={`navbuttons ${isOpen ? 'open' : ''}`}>
        <a href="#about">About</a>
        <a href="#skills">Skils</a>
        <a href="#contact">Contact</a>
      </div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default App;
