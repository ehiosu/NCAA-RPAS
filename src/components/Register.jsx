import {Link} from 'react-router-dom'
let Register = () => {
    return (
        <div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 h-screen">
        <div className="pt-20">
        <img src="/images/ncaa.png" alt="ncaa logo" className="mx-auto" />
        <p className="text-4xl font-bold text-center p-6">Create Account</p>
        <form>
            <div className="flex flex-col mx-auto lg:w-2/4 sm:w-3/4 space-y-4">
            <input type="text" placeholder="First Name" className="bg-gray-300 p-2 rounded-lg" />
            <input type="text" placeholder="Last Name" className="bg-gray-300 p-2 rounded-lg"  />
            <input type="email" placeholder="Email" className="bg-gray-300 p-2 rounded-lg"  />
            <div className="mx-auto">
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