import {useState} from 'react';
let Dashboard = () => {
    let [open, setOpen] = useState(true);

    let show = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className="flex">

            <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-green-300 relative`}>
            <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 absolute cursor-pointer right-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            <div>
               <img src="/images/ncaa.png" alt="ncaa logo" className={`mx-auto w-20 left-0`} />
            </div>
            </div>

            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
            
                <h1>Home Page</h1>
            </div>
            </div>
        </div>
    )
}

export default Dashboard;