import {useState} from 'react';
import Content from './Content';
let NavSide = ()=> {
    let [open, isOpen] = useState(true);
    let [close, isClosed] = useState(true);

    let show = () => {
        isOpen(!open);
        isClosed(!close);
    }
        
    return (
        <div className="">
            <div className={`${open ? 'w-60': 'hidden'} sidebar bg-blue-300 duration-300 h-screen xs:max-lg:hidden`}>
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

            <div className={`${close ? 'hidden': 'block'} sidebar-mobile bg-green-500 h-96 md:hidden absolute right-0 left-0 top-14 z-50 `}>
                <div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div className='text-center pb-2'>
                    <p className='md:font-bold'>JGS-0001</p>
                    <p className='md:text-2xl'>John Doe</p>
                </div>

                <hr />

                   <div className='pt-2 space-y-2'>
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

                    <svg onClick={show} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 absolute top-0 right-0 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>

            <div className={`${open ? 'ml-60': 'ml-0'} navbar bg-red-300 absolute top-0 right-0 left-0 flex justify-between items-center duration-300 xs:max-lg:ml-0`}>
                <div className="flex items-center gap-2">
                <svg onClick={show}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
                <img src="/images/ncaa.png" className="w-20 xs:max-lg:w-14" alt="ncaa logo" />
                </div>

                <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                </div>
            </div> 

            {/* <Content /> */}
            <div className={`${open ? 'ml-60': 'ml-0'} xs:max-lg:${open ? 'ml-0': null} p-4 duration-300 bg-yellow-500 ml-60 absolute top-20 right-0 left-0 xs:max-lg:top-14`}>
            
            <p className='text-4xl'>Dashboard</p>

            <div className='flex justify-around p-4'>
                <div className=' border-2 border-slate-400 rounded-md p-2 '>
                    <div className='flex justify-around gap-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className='text-2xl'>Drones Registered</p>
                    </div>
                    <p>Number: 2</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>

                <div className=' border-2 border-slate-400 rounded-md p-2'>
                    <div className='flex justify-around gap-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <p className='text-2xl'>Drone Application Pending</p>
                    </div>
                    <p>Number: 2</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </div>

            <table className='table-auto border border-slate-500 mx-auto'>
                <thead className='bg-red-200'>
                    <tr>
                        <th>Drone ID</th>
                        <th>Drone Name</th>
                        <th>Drone Manufacturer</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-400'>
                    <tr>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                    </tr>
                    <tr>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                    </tr>
                    <tr>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                    </tr>
                    <tr>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                        <td>stuff</td>
                    </tr>
                </tbody>
            </table>
            </div>


        </div>
    )
}

export default NavSide;