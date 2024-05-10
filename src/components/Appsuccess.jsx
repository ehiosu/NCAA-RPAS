import {Link} from 'react-router-dom';
let Appsuccess = () => {
    return (
        <div className="space-y-2 pt-20">
            <div className="md:w-2/5 xs:max-w-md mx-auto p-8 w bg-green-500 rounded-lg">
                <p className="text-2xl">Your application has been submitted, you will receive feedback in 2-4 working dats</p>
            </div>
            <div className="flex justify-center">
            <Link reloadDocument to='/dashboard'><button className=" bg-blue-400 p-2 pl-4 pr-4 rounded-md text-white">Go to Dashboard</button></Link>
            </div>
        </div>
    )
}

export default Appsuccess;