import { Datepicker} from "flowbite-react";
let Dronedetails2 = () => {
    return (
        <div className="p-2">
            <p className="text-4xl pb-4">Drone Details</p>
            
            <div className=" p-6 bg-white border border-gray-200 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-20 h-20">
            <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
            </svg>

            <form className="space-y-1">
                <div className="flex gap-1 items-center justify-evenly">
                    <label>Manufacturer</label>
                    <input type="text" className="rounded-lg bg-gray-400" />
                </div>
                <div className="flex gap-1 items-center justify-evenly">
                    <label>Serial number</label>
                    <input type="text" className="rounded-lg bg-gray-400" />
                </div>
                <div className="flex gap-1 items-center justify-evenly">
                    <label>Model</label>
                    <input type="text" className="rounded-lg bg-gray-400" />
                </div>
                <div className="flex gap-1 items-center justify-evenly">
                    <label>Mass (K.g.)</label>
                    <input type="number" pattern="\d*" className="rounded-lg bg-gray-400" />
                </div>
                <div className="flex gap-1 items-center justify-evenly">
                    <label>Date Manufactured</label>
                    <Datepicker />
                </div>
                <div className="flex gap-1 items-center justify-evenly">
                    <label>Description of Operation</label>
                    <textarea rows="4" className="rounded-lg bg-gray-400" />
                </div>
            </form>

            <div className="pt-4">
            <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Back</button>
            </div>

            </div>
        </div>
    )
}

export default Dronedetails2;