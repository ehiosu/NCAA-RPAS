let Droneupload = () => {
    return (
        <div className="p-2">
            <p className="text-4xl pb-4">Upload Documents</p>

            <div className="p-4 bg-white border border-gray-200 rounded-lg">
                <p className="text-lg">Upload Documents</p>

                <div>
                    <form className="space-y-3">
                        <div>
                            <label>Manufacturer of the aircraft *</label>
                            <input type="text" className="rounded-lg bg-gray-400" />
                        </div>
                        <div>
                            <label>Manufacturer's model of aircraft *</label>
                            <input type="text" className="rounded-lg bg-gray-400"/>
                        </div>
                        <div>
                            <label>Aircraft Serial number *</label>
                            <input type="text" className="rounded-lg bg-gray-400"/>
                        </div>
                        <div>
                            <label>Date of Manufacture</label>
                            <input type="text" className="rounded-lg bg-gray-400" />
                        </div>
                        <div>
                            <label>Maximum take-off mass (kg) *</label>
                            <input type="number" className="rounded-lg bg-gray-400"/>
                        </div>
                        <div>
                            <label>Upload drone photo</label>
                            <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-4/5" />
                        </div>
                        <div className="flex items-center">
                            <label>Description of Operation</label>
                            <textarea rows="4" className="rounded-lg bg-gray-400"/>
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

export default Droneupload;