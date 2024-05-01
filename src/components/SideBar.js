import logo from '../assets/Logo.png';
import { FaHome, FaInfoCircle, FaAddressBook } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { IoRemoveOutline } from 'react-icons/io5';

const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-20 m-0
                        flex flex-col
                        bg-primary text-secondary shadow-2xl'>
            <div className='rounded-3xl bg-white relative flex items-center justify-center h-14 w-14 mt-5 mb-2 mx-auto shadow-lg'>
                <img src={logo} alt='logo' className='logo'/>
            </div>
            <IoRemoveOutline size='28' className='relative flex items-center justify-center mt-2 mb-2 mx-auto' />
            <SideBarIcon icon={<FaHome size='28' />} text='Home' href='#home' />
            <SideBarIcon icon={<FaInfoCircle size='28' />} text='About' href='#about' />
            <SideBarIcon icon={<FaGear size='28' />} text='Skills' href='#skills' />
            <SideBarIcon icon={<FaAddressBook size='28' />} text='Contact' href='#contact' />
        </div>
    );
};

const SideBarIcon = ({ icon, text}) => (
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100 translate-x-2'>
            {text}
        </span>
    </div>
)

export default SideBar;