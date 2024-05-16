// import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
let Settings = () => {
    return (


<div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 min-h-screen">
<Navbar />
<Sidebar />

<div className="p-4 pt-6 sm:ml-64">
<div className="mt-12">
<div className="p-2 space-y-2">
            <p className="text-4xl pb-4">Settings</p>

            <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
                <p className="font-bold text-2xl">Profile</p>
                <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <div>
                <p className='font-bold text-2xl'>Name</p>
                <p className='text-gray-400'>Account type</p>
                </div>
                </div>
                <div><button className='pl-4 pr-4 p-2 bg-blue-400 rounded-lg flex gap-2'>Edit 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
                </svg>
                </button></div>
                </div>
            </div>

            <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
                <p className="font-bold text-2xl">Change Password</p>
                <form>
                    <div className="grid grid-cols-2 space-y-4 items-center">
                    <label htmlFor='password'>Current password</label>
                        <input type="password" placeholder="Enter current password" className="rounded-lg" />
                        <label htmlFor='assword'>New password</label>
                        <input type="password" placeholder="Enter a new password" className="rounded-lg" />
                        <label htmlFor='password'>Confirm password</label>
                        <input type="password" placeholder="Re-enter password" className="rounded-lg" />
                    </div>
                    <div className="pt-4 flex justify-end">
                <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Save</button>
        </div>
                </form>
            </div>
        </div>
</div>
</div>

</div>
    )
}

export default Settings;