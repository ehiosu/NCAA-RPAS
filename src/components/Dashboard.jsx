let Dashboard = () => {
    return (
        <div className="p-2">
            <p className='text-4xl'>Dashboard</p>

<div className='md:flex justify-around p-4 xs:max-lg:space-y-2'>
    <div className="md:w-2/5 xs:max-w-md p-6 bg-white shadow border border-gray-200 rounded-lg relative">
        <div className="flex gap-5 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <p className='text-2xl'>Drones Registered</p>
        </div>

        <p className="pt-4">Number: <span>2</span></p>

        <svg data-dropdown-toggle="registered" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 cursor-pointer ml-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>

        <div id="registered" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
         <div className="py-2 text-xs text-gray-700 dark:text-gray-200">
          <p className="block px-4 py-2 hover:bg-gray-500">View details</p>
         </div>
        </div>  
    </div>
    

    <div className="md:w-2/5 xs:max-w-md p-6 bg-white shadow border border-gray-200 rounded-lg">
        <div className="flex gap-5 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
        <p className='text-xl'>Drone Application Pending</p>
        </div>

        <p className="pt-4">Number: <span>2</span></p>

        <svg data-dropdown-toggle="pending" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-20 h-20 cursor-pointer ml-auto">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>

        <div id="pending" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
         <div className="py-2 text-xs text-gray-700 dark:text-gray-200">
          <p className="block px-4 py-2 hover:bg-gray-500">Check Status</p>
         </div>
        </div>  
    </div>
</div>

<div className="overflow-y-auto rounded-lg">
<table className="table-auto mx-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 xs:w-1/4 md:w-3/4">
<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
<tr>
    <th scope="col" className="px-6 py-3">
        Drone ID
    </th>
    <th scope="col" className="px-6 py-3">
        Drone Name
    </th>
    <th scope="col" className="px-6 py-3">
        Drone Manufacturer
    </th>
    <th scope="col" className="px-6 py-3">
        Type
    </th>
    <th scope="col" className="px-6 py-3">
        Status
    </th>
    <th scope="col" className="px-6 py-3">
        Action
    </th>
</tr>
</thead>
<tbody>
<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        DR1001
    </th>
    <td className="px-6 py-4">
        Tiger
    </td>
    <td className="px-6 py-4">
        Yuneec
    </td>
    <td className="px-6 py-4">
        Government
    </td>
    <td className="px-6 py-4">
        Registered
    </td>
    <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
    </td>
</tr>
<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        DR1001
    </th>
    <td className="px-6 py-4">
        Tiger
    </td>
    <td className="px-6 py-4">
        Yuneec
    </td>
    <td className="px-6 py-4">
        Recreational
    </td>
    <td className="px-6 py-4">
        Registered
    </td>
    <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
    </td>
</tr>
<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        DR1001
    </th>
    <td className="px-6 py-4">
        Tiger
    </td>
    <td className="px-6 py-4">
        Yuneec
    </td>
    <td className="px-6 py-4">
        Recreational
    </td>
    <td className="px-6 py-4">
        Registered
    </td>
    <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
    </td>
</tr>
<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        DR1001
    </th>
    <td className="px-6 py-4">
        Tiger
    </td>
    <td className="px-6 py-4">
        Yuneec
    </td>
    <td className="px-6 py-4">
        Recreational
    </td>
    <td className="px-6 py-4">
        Registered
    </td>
    <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
    </td>
</tr>
<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        DR1001
    </th>
    <td className="px-6 py-4">
        Tiger
    </td>
    <td className="px-6 py-4">
        Yuneec
    </td>
    <td className="px-6 py-4">
        Recreational
    </td>
    <td className="px-6 py-4">
        Registered
    </td>
    <td className="px-6 py-4">
        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
    </td>
</tr>
</tbody>
</table>
</div>
            </div>
    )
}

export default Dashboard;