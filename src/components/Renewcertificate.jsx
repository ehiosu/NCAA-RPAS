import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import {Link} from 'react-router-dom';
import {drones} from './dronelist';

let Renewcertificate = () => {
    return (
<div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 min-h-screen">
<Navbar />
<Sidebar />

<div className="p-4 pt-6 sm:ml-64">
<div className="mt-12">
<div className="p-2">
 <p className='text-4xl'>Renew Certificate</p>

 <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
 <p className="text-2xl">Renew Certificate</p>

 <form className="space-y-2">
                    <div className="grid grid-cols-2 space-y-3 items-center xs:max-lg:text-xs">
                        <label>Select drone</label>
                        <select id="drones" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2">
                            <option defaultValue>---</option>
                            {
                                drones.map((i)=> {
                                    return <option value={i.name}>{i.name}</option>
                                })
                            }
                        </select>
                        <label htmlFor="">Upload proof of purchase</label>
                        <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-full" />            
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

export default Renewcertificate;