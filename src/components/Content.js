const ContentContainer = () => {
    return (
        <div className='block items-center w-full bg-gray-300 ml-20'>
            <div id='home' className='content'>
                <h1>Home</h1>
            </div>
            <div id='about' className='content'>
                <h1>About</h1>
            </div>
            <div id='skills' className='content'>
                <h1>Skills</h1>
            </div>
            <div id='contact' className='content'>
                <h1>Contact</h1>
            </div>
        </div>
    );
}

export default ContentContainer;