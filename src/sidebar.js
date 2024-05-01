import logo from './assets/Logo.png';
import { FaHome, FaInfoCircle, FaAddressBook } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col
                        bg-primary text-secondary shadow-lg">
            <div>
                <img src={logo} alt='logo' className='relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto shadow-lg' />
            </div>
            <SideBarIcon icon={<FaHome size='28' />} />
            <SideBarIcon icon={<FaInfoCircle size='28' />} />
            <SideBarIcon icon={<FaGear size='28' />} />
            <SideBarIcon icon={<FaAddressBook size='28' />} />
        </div>
    );
};

const SideBarIcon = ({ icon, text = 'tooltip' }) => (
    <div className='sidebar-icon group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)

export default SideBar;