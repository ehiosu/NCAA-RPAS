import Dashboard from "./Dashboard";
import Freshissue from "./Freshissue";
import Dronedetails from './Dronedetails';
import Droneupload from './Droneupload';
import Appsuccess from './Appsuccess';
import Userprofile from './Userprofile';
import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import Dronedetails2 from "./Dronedetails2";

// import '../flowbite/dist/flowbite.min.js';

let Stuff = () => {
    return (
    <div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400">
    <Navbar />
    <Sidebar />

<div className="p-4 pt-6 sm:ml-64">
  <div className="mt-12">
        <Userprofile />
        <Dashboard />
        <Freshissue />
        <Droneupload />
        <Dronedetails />
        <Appsuccess />
        <Dronedetails2 />
  </div>
</div>

    </div>
    )
}

export default Stuff;