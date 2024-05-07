import React, { useRef } from 'react';

const ContentContainer = () => {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <div className='block items-center w-full h-screen ml-20'>
            <div id='welcome-bar' className='welcome-bar'>
                <h1 className='m-2 ml-3 text-left flex-1'>Welcome to My Portfolio!</h1>
                <div className='flex '>
                    <img alt='profile' src='https://avatars.githubusercontent.com/u/77445921?v=4' 
                         className='rounded-full h-10 w-10 m-2 mr-3' />
                </div>
            </div>
            <div id='line' className='h-1 bg-gray-900' />
            <div ref={homeRef} id='home' className='content1 h-full'>
                <h1>Home</h1>
            </div>
            <div id='line' className='h-1 bg-gray-900' />
            <div ref={aboutRef} id='about' className='content2 h-full'>
                <h1>About</h1>
            </div>
            <div id='line' className='h-1 bg-gray-900' />
            <div ref={skillsRef} id='skills' className='content1 h-full'>
                <h1>Skills</h1>
            </div>
            <div id='line' className='h-1 bg-gray-900' />
            <div ref={contactRef} id='contact' className='content2 h-full'>
                <h1>Contact</h1>
            </div>
        </div>
    );
}

export default ContentContainer;
