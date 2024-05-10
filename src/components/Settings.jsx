import {Link} from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
let Setting = () => {
    return (


<div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400">
<Navbar />
<Sidebar />

<div className="p-4 pt-6 sm:ml-64">
<div className="mt-12">
<div className="p-2 space-y-2">
            <p className="text-4xl pb-4">Settings</p>

            <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
                <p className="font-bold text-2xl">Change Password</p>
                <form>
                    <div className="grid grid-cols-2 space-y-4 items-center">
                        <label for='password'>New password</label>
                        <input type="text" placeholder="" className="rounded-lg" />
                        <label for='password'>Confirm password</label>
                        <input type="text" placeholder="" className="rounded-lg" />
                    </div>
                    <div className="pt-4 flex justify-end">
            <Link reloadDocument to='/droneupload'><button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Save</button></Link>
        </div>
                </form>
            </div>
        </div>
</div>
</div>

</div>
    )
}

export default Setting;