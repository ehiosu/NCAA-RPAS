import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {useState} from 'react';
import {Link} from 'react-router-dom'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
let Droneupload = () => {
    let [startDate, setStartDate] = useState(new Date());
    return (
<div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 min-h-screen">
<Navbar />
<Sidebar />

<div className="p-4 pt-6 sm:ml-64">
<div className="mt-12">
<div className="p-2">
            <p className="text-4xl pb-4">Upload Documents</p>

            <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <p className="text-lg">Upload Documents</p>

                <form>  
                    <div className="grid grid-cols-2 space-y-2 items-center xs:max-lg:text-sm">
                    <label>Manufacturer of the aircraft *</label>
                    <input type="text" className="rounded-lg" />
                    <label>Manufacturer's model of aircraft *</label>
                    <input type="text" className="rounded-lg"/>
                    <label>Aircraft Serial number *</label>
                    <input type="text" className="rounded-lg"/>
                    <label>Date of Manufacture</label>
                    <DatePicker className="w-full rounded-lg bg-gray-300 cursor-pointer" showIcon  showYearDropdown dateFormat='dd/MM/yyyy' enableTabLoop={false} selected={startDate} onChange={(date) => setStartDate(date)}  />
                    <label>Maximum take-off mass (kg) *</label>
                    <input type="number" className="rounded-lg"/>
                    <label>Upload drone photo</label>
                    <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-full" />
                    <label>Description of Operation</label>
                    <textarea rows="4" className="rounded-lg"/>
                    </div>
                    <div className="flex justify-between pt-2">
                        <Link to='/freshissue'><button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Back</button></Link>
                        <Link to='/dronedetails'><button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Next</button></Link>
                    </div>
                </form>
            </div>

        </div>
</div>
</div>

</div>
    )
}

export default Droneupload;