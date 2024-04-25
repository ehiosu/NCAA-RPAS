let Dronedetails = () => {
    return (
        <div className="p-2">
            <p className="text-4xl pb-4">Drone Details</p>
            
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <p className="text-lg">Enter Drone Details</p>
                <p>Upload an affidavit confirming the following:</p>

                <div>
                    <form className="space-y-3">
                        <div>
                            <label>Proof of ownership of the RPA</label>
                            <input type="file" className="bg-gray-400" />
                        </div>
                        <div>
                            <label>Date of Birth (16yrs and above)</label>
                            <input type="file" className="bg-gray-400" />
                        </div>
                        <div>
                            <label>Identification Type</label>
                            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2">
                            <option selected>---</option>
                            <option value="passport">International Passport</option>
                            <option value="nin">National Identification Number</option>
                            <option value="licence">Driver's Licence</option>
                            </select>
                        </div>
                        <div>
                            <label>Identification Number</label>
                            <input type="number" />
                        </div>
                        <div>
                            <label>Copy of Bio-Data page</label>
                            <input type="file" className="bg-gray-400" />
                        </div>
                        <p className="text-lg">Accept Terms and Conditions</p>
                        <div className="flex items-start gap-2">
                            <input type="checkbox" />
                            <p className="border-2 border-black">I hereby declare that the above particulars contained herein as well <br /> 
                            as the documentation submitted in support of the application are <br />
                            true and correct in every respect and apply herewith for registration <br />
                            of RPA in Nigeria, onto the Nigerian Civil Aircraft Register and / or for <br />
                            the processing of RPA Operator's certificate and other approvals <br />
                            from the Authority
                            </p>
                        </div>
                        <div className="flex justify-between">
                        <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Back</button>
                        <button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Dronedetails;