import {useState} from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import NavMobile from './NavMobile';
import Content from './Content';

let User = () => {
    let [open, isOpen] = useState(true);
    let [close, isClosed] = useState(true);

    return (
    <div className='relative flex'>
            <Sidebar open = {open} />

        <div className='flex-1 bg-yellow-300 h-screen'>
            <Navbar open = {open} isOpen = {isOpen} close = {close} isClosed={isClosed} />

            <NavMobile close = {close} isClosed={isClosed} />

            <Content />  
        </div>
    </div>

    )
}

export default User;