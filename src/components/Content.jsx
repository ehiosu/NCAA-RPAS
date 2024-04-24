import {useState} from 'react'

let Content = () => {
    return (
        <div className={`content`}>
            
            <p className='text-4xl'>Dashboard</p>

            <div className='md:flex space-y-2 justify-around p-4'>
                <div className=' border-2 border-slate-400 rounded-md p-2 '>
                    <div className='flex justify-around gap-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className='text-2xl'>Drones Registered</p>
                    </div>
                    <p>Number: 2</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>

                <div className=' border-2 border-slate-400 rounded-md p-2'>
                    <div className='flex justify-around gap-10'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    <p className='text-2xl'>Drone Application Pending</p>
                    </div>
                    <p>Number: 2</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
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
    )
}

export default Content;