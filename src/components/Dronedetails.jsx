import { Datepicker} from "flowbite-react";
let Dronedetails = () => {
    return (
        <div className="p-2">
            <p className="text-4xl pb-4">Drone Details</p>
            
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <p className="text-lg">Enter Drone Details</p>
                <p>Upload an affidavit confirming the following:</p>

                <form>
                    <div className="grid grid-cols-2 space-y-2 items-center xs:max-lg:text-sm">
                    <label>Proof of ownership of the RPA</label>
                    <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-full" />
                    <label>Date of Birth (16yrs and above)</label>
                    <Datepicker />
                    <label>Identification Type</label>
                            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2">
                            <option defaultValue>---</option>
                            <option value="passport">International Passport</option>
                            <option value="nin">National Identification Number</option>
                            <option value="licence">Driver's Licence</option>
                            </select>
                    <label>Identification Number</label>
                    <input type="number" className="rounded-lg" />
                    <label>Copy of Bio-Data page</label>
                    <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-fu" />
                        <div className="flex items-start gap-2 p-4 xs:max-lg:col-start-1 xs:max-lg:col-end-3">
                            <input type="checkbox" />
                            <p className="border-2 border-black w-full">I hereby declare that the above particulars contained herein as well <br /> 
                            as the documentation submitted in support of the application are <br />
                            true and correct in every respect and apply herewith for registration <br />
                            of RPA in Nigeria, onto the Nigerian Civil Aircraft Register and / or for <br />
                            the processing of RPA Operator's certificate and other approvals <br />
                            from the Authority
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Back</button>
                        <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Next</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Dronedetails;