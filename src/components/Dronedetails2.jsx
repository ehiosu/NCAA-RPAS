import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
let Dronedetails2 = () => {
    let [startDate, setStartDate] = useState(new Date());
    return (
        <div className="p-2">
            <p className="text-4xl pb-4">Drone Details</p>
            
            <div className=" p-6 bg-white border border-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
            </svg>

            <form>
                <div className="grid grid-cols-2 space-y-2 items-center xs:max-lg:text-sm">
                <label>Manufacturer</label>
                <input type="text" className="rounded-lg" />
                <label>Serial number</label>
                <input type="text" className="rounded-lg" />
                <label>Model</label>
                <input type="text" className="rounded-lg" />
                <label>Mass (K.g.)</label>
                <input type="number" pattern="\d*" className="rounded-lg" />
                <label>Date Manufactured</label>
                <DatePicker className="w-full rounded-lg bg-gray-300 cursor-pointer" showIcon  showYearDropdown dateFormat='dd/MM/yyyy' enableTabLoop={false} selected={startDate} onChange={(date) => setStartDate(date)}  />
                <label>Description of Operation</label>
                <textarea rows="4" className="rounded-lg" />
                </div>
                <div className="pt-4">
            <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Back</button>
            </div>
            </form>

            

            </div>
        </div>
    )
}

export default Dronedetails2;