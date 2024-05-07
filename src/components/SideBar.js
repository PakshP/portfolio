import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import { FaHome, FaInfoCircle, FaAddressBook } from 'react-icons/fa';
import { FaGear, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { IoRemoveOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';

const SideBar = () => {
    const [ activeSection, setActiveSection] = useState('');

    const handleIconClick = (section) => {
        setActiveSection(section);
        document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col bg-primary text-secondary shadow-2xl'>
            <div className='rounded-3xl bg-white relative flex items-center justify-center h-14 w-14 mt-5 mb-2 mx-auto shadow-lg'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <IoRemoveOutline size='28' className='relative flex items-center justify-center mt-2 mb-2 mx-auto' />
            <SideBarIcon icon={<FaLinkedinIn size='28' />} text='LinkedIn' onClick={() => window.open('https://www.linkedin.com/in/paksh-patel')} />
            <SideBarIcon icon={<FaGithub size='28' />} text='GitHub' onClick={() => window.open('https://github.com/PakshP')} />
            <IoRemoveOutline size='28' className='relative flex items-center justify-center mt-2 mb-2 mx-auto' />
            <SideBarIcon icon={<FaHome size='28' />} text='Home' onClick={() => handleIconClick('home')} />
            <SideBarIcon icon={<FaInfoCircle size='28' />} text='About' onClick={() => handleIconClick('about')} />
            <SideBarIcon icon={<FaGear size='28' />} text='Skills' onClick={() => handleIconClick('skills')} />
            <SideBarIcon icon={<FaAddressBook size='28' />} text='Contact' onClick={() => handleIconClick('contact')} />
        </div>
    );
};

const SideBarIcon = ({ icon, text, onClick }) => (
    <button className='sidebar-icon group' onClick={onClick}>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100 translate-x-2'>
            {text}
        </span>
    </button>
)

SideBarIcon.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default SideBar;