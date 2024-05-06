import { Datepicker } from "flowbite-react";
let Specificphase = () => {
    return (
        <div className="p-2">
            <p className="text-4xl pb-4">Specific phase</p>

            <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
                <p className="text-2xl">Fill Form</p>

                <form className="space-y-2">
                    <div className="grid grid-cols-2 space-y-2 items-center xs:max-lg:text-xs">
                    <label>Full name of the (company, <br />closecorporation or trust ) * </label>
                    <input type="text" className=" p-2 rounded-lg" />
                    <label>Full business or residential address * </label>
                    <textarea name="" id="" cols="30" rows="6"></textarea>
                    <label>Telephone number * </label>
                    <input type="text" pattern="\d*" maxLength="11" className=" p-2 rounded-lg" />
                    <label>Registration number of company </label>
                    <input type="text" pattern="\d*" maxLength="11" className=" p-2 rounded-lg" />
                    <label>Date of Registration of company</label>
                    <Datepicker color="light" className="w" />
                    <label>Upload CAC*</label>
                    <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-full" />
                    <label>Upload C07*</label>
                    <input type="file" className="bg-gray-400 rounded-lg xs:max-lg:w-full" />
                    </div>

                    <p className="font-bold">Full particulars in respect of each director / member / trustee (At least 1) *</p>
                <div className="overflow-y-auto rounded-lg">
<table className="table-auto mx-auto text-sm text-left rtl:text-right xs:w-1/4 md:w-3/4 text-center">
<thead className="text-xs text-gray-700 uppercase bg-red-200">
<tr>
    <th scope="col" className="px-6 py-3">
        Surname & Initials
    </th>
    <th scope="col" className="px-6 py-3">
        Position
    </th>
    <th scope="col" className="px-6 py-3">
        Nationality
    </th>
    <th scope="col" className="px-6 py-3">
        Passport Number
    </th>
    <th scope="col" className="px-6 py-3">
        Director's Data Page
    </th>
</tr>
</thead>
<tbody>
<tr className="bg-blue-200">
    <td className="px-6 py-4">
        stuff
    </td>
    <td className="px-6 py-4">
        stuff
    </td>
    <td className="px-6 py-4">
        stuff
    </td>
    <td className="px-6 py-4">
        stuff
    </td>
    <td className="px-6 py-4">
    <input type="file" id="files" class="hidden"/>
    <label for="files" className="bg-green-300 p-2 rounded-md cursor-pointer">Upload</label>
    </td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-start gap-2 p-4 xs:max-lg:col-start-1 xs:max-lg:col-end-3">
                <input type="checkbox" />
                <p className="border-2 border-black">I hereby declare that the above particulars contained herein as well 
                as the documentation submitted in support of the application are 
                true and correct in every respect and apply herewith for registration 
                of RPA in Nigeria, onto the Nigerian Civil Aircraft Register and / or for 
                the processing of RPA Operator's certificate and other approvals 
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
    )
}

export default Specificphase;