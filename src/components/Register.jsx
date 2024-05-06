import {Link} from 'react-router-dom'
import {countryList2} from './Countries';
import { Datepicker} from "flowbite-react";
let Register = () => {
    return (
        <div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 ">
        <div className="">
        <img src="/images/ncaa.png" alt="ncaa logo" className="mx-auto" />
        <p className="text-4xl font-bold text-center p-6">Create Account</p>
        <form>
            <div className="flex flex-col mx-auto lg:w-2/4 sm:w-3/4 space-y-1">
            <input type="text" placeholder="First Name" className="bg-gray-300 p-2 rounded-lg" />
            <input type="text" placeholder="Last Name" className="bg-gray-300 p-2 rounded-lg"  />
            <input type="email" placeholder="Email" className="bg-gray-300 p-2 rounded-lg"  />
            
            <label className='text-white' >Date of Birth</label>
            <Datepicker title='Date of Birth' placeholder='date' color="light"/>



<select id="countries" className=" rounded-lg bg-gray-300 p-2 text-gray-500">
    <option defaultValue>Select Country</option>
    {
        Object.values(countryList2).map((country, j) => {
            return <option key={j}>{country}</option>
        })
    }
  </select>

  <label className="text-white" htmlFor="file_input">Upload Passport</label>
  <input className=" text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-300" id="file_input" type="file" />
  <p className="mt-1 text-gray-500" id="file_input_help">SVG, PNG, JPG.</p>


            <div className="text-white">
                <p className="md:text-lg xs:text-xs">Already have an account? <Link to='/login'><span className="cursor-pointer text-blue-700">Sign in</span></Link></p>
                <p className="md:text-lg xs:text-xs pt-2">Forgot your password? <span className="cursor-pointer text-blue-700">Reset Password</span></p>
            </div>

            <div className="w-full"><button className="bg-blue-400 px-6 py-3 rounded-lg font-bold text-white w-full">Create account</button></div>
            </div>
        </form>
    </div>
    </div>
    )
}


export default Register;