import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';


let Reselldrone = () => {
    return (
<div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 min-h-screen">
<Navbar />
<Sidebar />

<div className="p-4 pt-6 sm:ml-64">
<div className="mt-12">
<div className="p-2">
 <p className='text-4xl'>Resell drone</p>

 <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
 <p className="text-2xl">Enter Details</p>

 <form className="space-y-2">
                    <div className="grid grid-cols-2 space-y-3 items-center xs:max-lg:text-xs">
                        <label>Select drone to sell</label>
                        <select id="drones" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2">
                            <option defaultValue>---</option>
                            <option value="passport">Drone 1</option>
                            <option value="nin">Drone 2</option>
                            <option value="licence">Drone 3</option>
                        </select>
                        <label htmlFor="">Upload proof of purchase</label>
                        <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-full" />
                        <label>Buyer ID *</label>     
                        <input type="text" className="rounded-lg" />               
                        </div>
                    <div className="flex justify-between pt-2">
                        <Link to='/dashboard'><button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Back</button></Link>
                        <Link to=''><button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Submit</button></Link>
                    </div>
                </form>
    </div>
</div>
</div>
</div>
</div>
    )
}

export default Reselldrone;