import React, { useRef } from 'react';
import Skills from './content/Skills.js';
import About from './content/About.js';
import Home from './content/Home.js';
import Projects from './content/Projects.js';
import Contact from './content/Contact.js';

const ContentContainer = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className='block items-center w-full h-screen ml-32'>
            <div ref={homeRef} id='home' className='content h-full'>
                <Home />
            </div>
            <div ref={aboutRef} id='about' className='content h-full'>
                <About />
            </div>
            <div ref={skillsRef} id='skills' className='content h-full'>
                <Skills />
            </div>
            <div ref={projectsRef} id='projects' className='content h-full'>
                <Projects />
            </div>
            <div ref={contactRef} id='contact' className='content h-full'>
                <Contact />
            </div>
        </div>
    );
}

export default ContentContainer;
