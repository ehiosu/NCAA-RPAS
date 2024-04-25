import {Link} from 'react-router-dom'
import {countryList2} from './Countries';
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

            <label class="text-white" for="file_input">Upload Passport</label>
<div class="relative">
  <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
  </div>
  <input datepicker type="" class=" rounded-lg bg-gray-300 p-2 block w-full ps-10 " placeholder="Select date" />
</div>

<select id="countries" class=" rounded-lg bg-gray-300 p-2 text-gray-500">
    <option selected>Select Country</option>
    {
        Object.values(countryList2).map((country) => {
            return <option>{country}</option>
        })
    }
  </select>

  <label class="text-white" for="file_input">Upload Passport</label>
  <input class=" text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-300" id="file_input" type="file" />
  <p class="mt-1 text-gray-500" id="file_input_help">SVG, PNG, JPG.</p>


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