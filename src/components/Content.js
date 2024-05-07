const ContentContainer = () => {
    return (
        <div className='block items-center w-full bg-gray-800 ml-20'>
            <div id='welcome-bar' className='welcome-nav bg-gray-700 shadow-sm flex items-center'>
                <h1 className='m-2 ml-3 text-left flex-1'>Welcome to My Portfolio!</h1>
                <div className='flex '>
                    <img alt='linkedin' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png' className='rounded-full h-10 w-10 m-2 mr-3 cursor-pointer' />
                    <img alt='github' src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='rounded-full h-10 w-10 m-2 mr-3 cursor-pointer' />
                    <img alt='profile' src='https://avatars.githubusercontent.com/u/77445921?v=4' className='rounded-full h-10 w-10 m-2 mr-3 cursor-pointer' />
                </div>
            </div>
            <div id='home' className='content'>
                <h1>Home</h1>
            </div>
            <div id='about' className='content bg-gray-700 shadow-sm'>
                <h1>About</h1>
            </div>
            <div id='skills' className='content'>
                <h1>Skills</h1>
            </div>
            <div id='contact' className='content bg-gray-700 shadow-sm'>
                <h1>Contact</h1>
            </div>
        </div>
    );
}

export default ContentContainer;
