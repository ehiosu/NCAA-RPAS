import {useState} from 'react';

let Sidebar = ({open}) => {
    return (
        <div className={`${open ? 'w-60': 'hidden'} sidebar w-60 bg-red-400 duration-300 h-screen xs:max-lg:hidden`}>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-21 h-21 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div className='text-center pb-2'>
                    <p className='md:font-bold'>JGS-0001</p>
                    <p className='md:text-2xl'>John Doe</p>
                </div>

                <hr />

                   <div className='pt-6 space-y-6'>
                    <p className='hover:bg-green-700 cursor-pointer text-xl'>Dashboard</p>
                    <div>
                        <p className='md:text-xl'>Register Drone</p>
                        <p className='hover:bg-green-700 cursor-pointer'>-Fresh Issue</p>
                        <p className='hover:bg-green-700 cursor-pointer'>-Variation</p>
                    </div>
                    <div>
                        <p className='md:text-xl'>Report to NCAA</p>
                        <p className='hover:bg-green-700 cursor-pointer'>-Incident / Accident Report</p>
                        <p className='hover:bg-green-700 cursor-pointer'>-Resell Drone</p>
                    </div>
                    <p className='hover:bg-green-700 cursor-pointer md:text-xl'>Renewal of ROC</p>
                   </div>
                </div>
            </div>
    )
}

export default Sidebar;