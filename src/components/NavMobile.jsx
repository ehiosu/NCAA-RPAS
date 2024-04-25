let NavMobile = ({open, close, isClosed}) => {
    let away = () => {
        isClosed(!close);
        console.log(`clicked, close is ${close}`);
    }
    return (
        <div className={`${close ? 'hidden': 'block'} navbar-mobile bg-gray-700 h-96 md:hidden absolute right-0 left-0 top-14 z-50`}>
        <div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 mx-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
        <div className='text-center pb-2'>
            <p className='md:font-bold'>JGS-0001</p>
            <p className='md:text-2xl'>John Doe</p>
        </div>

        <hr />

           <div className='pt-2 space-y-2'>
            <p className='hover:bg-green-700 cursor-pointer text-xl'>Dashboard</p>
            <div>
                <p className='md:text-xl'>Register Drone</p>
                <p className='hover:bg-green-700 cursor-pointer'>-Fresh Issue</p>
                <p className='hover:bg-green-700 cursor-pointer'>-Variation</p>
            </div>
            <div>
                <p className='md:text-xl'>Report to NCAA</p>
                <p className='hover:bg-green-700 cursor-pointer'>-Incident / Accident Report</p>
                <p className='hover:bg-green-700 cursor-pointer'>-Resell Drone</p>
            </div>
            <p className='hover:bg-green-700 cursor-pointer md:text-xl'>Renewal of ROC</p>
           </div>
        </div>

            <svg onClick={away} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 absolute top-0 right-0 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </div>
       </div>
    )
}

export default NavMobile;