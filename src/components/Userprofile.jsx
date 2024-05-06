import {Nigeria} from './Nigeria';

let userprofile = () => {
    let states = Nigeria.map((i) => {
        return i.state;
    });
    return (
        <div className="p-2 space-y-2">

            <p className="text-4xl pb-4">User Profile</p>
            
            <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">

                <div className="p-4 border border-gray-200 rounded-lg">
                <p>Personal Information</p>

                <div className="pt-4">
                   <div>
                        <div className="md:flex justify-between items-center xs:max-lg:space-y-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fillRule="currentColor" className="w-24 h-24 xs:max-lg:mx-auto">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>

                        <form className=''>
                            <div className='grid grid-flow-row-dense grid-cols-2 space-y-2 items-center'>
                            <label className=''>User ID*</label>
                            <input type="text" placeholder="JGS-001" className="rounded-lg" />
                            <label>Title*</label>
                            <select id="countries" className=" border border-gray-300 text-gray-900 text-sm rounded-lg p-2 w-full">
                            <option defaultValue>---</option>
                            <option value="mr">Mr.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="miss">Miss</option>
                            </select>
                            <label>DOB*</label>
                            <input type="text" className="rounded-lg" />
                            </div>
                        </form>

                        <form className=''>
                            <div className='grid grid-cols-2 space-y-2 items-center'>
                            <label>First Name*</label>
                            <input type="text" className="rounded-lg" />
                            <label>Middle Name*</label>
                            <input type="text" className="rounded-lg"/>
                            <label>Last Name*</label>
                            <input type="text" className="rounded-lg"/>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                </div>

                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <p>Contact Information</p>

                <form className='md:flex justify-between xs:max-lg:space-y-2'>
                <div className='grid grid-cols-2 space-y-2 items-center'>
                    <label className=''>Mobile Number</label>
                    <div className="flex items-center">
                    <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 md:px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#3b8655"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#3b8655"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                   +234
                    </div>
                   <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
                   <div className="relative w-full">
                    <input type="text" maxLength="10" id="phone-input" className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-lg border-s-0 border " pattern="\d*" placeholder="80xxxxxxxx" required />
                   </div>
                   </div>

                   <label>Alternate Number</label>
                    <div className="flex items-center">
                    <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 md:px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32"><path fill="#fff" d="M10 4H22V28H10z"></path><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#3b8655"></path><path d="M25,4h6V28h-6c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" transform="rotate(180 26 16)" fill="#3b8655"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg>
                   +234
                    </div>
                   <label htmlFor="phone-input" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Phone number:</label>
                   <div className="relative w-full">
                    <input type="text" maxLength="10" id="phone-input" className="block p-2.5 w-full z-20 text-sm text-gray-900 rounded-e-lg border-s-0 border " pattern="\d*" placeholder="80xxxxxxxx" required />
                   </div>
                   </div>

                   <label>Address</label>
                     <textarea rows="4" className="rounded-lg"/> 

                    <label>State</label>
                     <select id="countries" className=" rounded-lg p-2 text-gray-500">
                    <option defaultValue>Select state</option>
                 {
                     states.map((i,j) => {
                             return <option key={j}>{i}</option>
                         })
                 }
                     </select>

                     <label>Local government</label>
                     <select id="countries" className=" rounded-lg p-2 text-gray-500">
                 <option defaultValue>Select Local Government</option>
                 {
                     states.map((i,j) => {
                             return <option key={j}>{i}</option>
                         })
                 }
               </select>
                </div>

                <div className='grid grid-cols-2 space-y-2 items-center'>
                <label htmlFor="email">Email</label>
                <input type='text' className="rounded-lg" />
                <label htmlFor="alt-email">Alternative Email</label>
                <input type='text' className="rounded-lg" />
                <label htmlFor="additional">Additional information</label>
                <textarea rows="4" className="rounded-lg" />
                </div>

                </form>
                </div>

                <div className="pt-4 flex justify-end">
                <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Continue</button>
                </div>
            </div>

        </div>

    )
}

export default userprofile;