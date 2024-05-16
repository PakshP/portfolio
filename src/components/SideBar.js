import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import PropTypes from 'prop-types';

const SideBar = () => {
    const [activeSection, setActiveSection] = useState('');

    console.log(activeSection);

    const handleIconClick = (section) => {
        setActiveSection(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='fixed top-0 left-0 h-screen w-32 m-0 flex flex-col bg-[#111111] justify-between'>
            <div>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                </div>
                <button className='sidebar-icon' onClick={() => handleIconClick('home')} onKeyDown={() => {}}>
                    Home
                </button>
                <button className='sidebar-icon' onClick={() => handleIconClick('about')} onKeyDown={() => {}}>
                    About
                </button>
                <button className='sidebar-icon' onClick={() => handleIconClick('skills')} onKeyDown={() => {}}>
                    Skills
                </button>
                <button className='sidebar-icon' onClick={() => handleIconClick('projects')} onKeyDown={() => {}}>
                    Projects
                </button>
                <button className='sidebar-icon' onClick={() => handleIconClick('contact')} onKeyDown={() => {}}>
                    Contact
                </button>
            </div>
            <div className='mb-5'>
                <SideBarIcon icon={<FaLinkedinIn size='28' />} text='LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/paksh-patel')} />
                <SideBarIcon icon={<FaGithub size='28' />} text='GitHub' onClick={() => window.open('https://github.com/PakshP')} />
            </div>
        </div>
    );
};

const SideBarIcon = ({ icon, onClick }) => (
    <button className='sidebar-links group' onClick={onClick}>
        {icon}
    </button>
);

SideBarIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    onClick: PropTypes.func.isRequired
};

export default SideBar;
