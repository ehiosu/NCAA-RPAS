import {Link} from 'react-router-dom';
let Login = () => {
    return (
        <div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 h-screen">
            <div className="pt-20">
            <img src="/images/ncaa.png" alt="ncaa logo" className="mx-auto" />
            <p className="text-4xl font-bold text-center p-6">Sign in</p>
            <form>
                <div className="flex flex-col mx-auto lg:w-2/4 sm:w-3/4 space-y-4">
                <input type="text" placeholder="Username / User ID" className="bg-gray-300 p-2 rounded-lg" />
                <input type="password" placeholder="Password" className="bg-gray-300 p-2 rounded-lg"  />

                <div className="mx-auto">
                    <p className="md:text-lg xs:text-xs">New to the Portal? Please <Link to='/register'><span className="cursor-pointer text-blue-700">Register</span></Link></p>
                    <p className="md:text-lg xs:text-xs pt-2">Forgot your password? <span className="cursor-pointer text-blue-700">Reset Password</span></p>
                </div>

                <Link to='/stuff'><div className="w-full"><button className="bg-blue-400 px-6 py-3 rounded-lg font-bold text-white w-full">Login</button></div></Link>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login;