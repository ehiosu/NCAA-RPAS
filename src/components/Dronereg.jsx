import Navbar from './Navbar';
import Sidebar from "./Sidebar";
import {Link} from 'react-router-dom';
import {drones} from './dronelist';

let Dronereg = () => {
    return (
        <div className="bg-gradient-to-r from-slate-500 via-orange-200 to-purple-400 min-h-screen">
<Navbar />
<Sidebar />

<div className="p-4 pt-6 sm:ml-64">
<div className="mt-12">
<div className="p-2">
<p className='text-4xl pb-2'>Drone Menu</p>

<div className='space-y-4'>
{/* <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
    <div>
        <img src='/images/drone.jpg' className='h-20 rounded-lg' alt='drone' />
        <div className='grid md:grid-cols-4 space-y-4 space-x-2  items-center'>
        <label className=''>Manufacturer</label>
        <input type="text" className="rounded-lg bg-gray-300" placeholder='manufacturer name' />
        <label>Model</label>
        <input type="text" className="rounded-lg bg-gray-300" placeholder='model name' />
        <label>Serial number</label>
        <input type="text" className="rounded-lg bg-gray-300" placeholder='012345' />
        <label>Date of manufacture</label>
        <input type="text" className="rounded-lg bg-gray-300" placeholder='date of manufacture' />
        <label>Description of operation</label>
        <textarea rows="4" className="rounded-lg bg-gray-300" placeholder='description of operation'/>
        </div>
    </div>
    <div className="pt-4 flex justify-end">
    <Link reloadDocument to=''><button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Edit</button></Link>
    </div>
</div> */}


{
    drones.map((i) => {
        return (
            <div className="p-4 bg-white space-y-4 border border-gray-200 rounded-lg">
            <div>
                <img src={i.img} className='h-20 rounded-lg' alt='drone' />
                <div className='grid md:grid-cols-4 space-y-4 space-x-2  items-center'>
                <label className=''>Manufacturer</label>
                <input type="text" className="rounded-lg bg-gray-300" disabled placeholder={i.name} />
                <label>Model</label>
                <input type="text" className="rounded-lg bg-gray-300" disabled placeholder={i.model} />
                <label>Serial number</label>
                <input type="text" className="rounded-lg bg-gray-300" disabled placeholder={i.serial} />
                <label>Date of manufacture</label>
                <input type="text" className="rounded-lg bg-gray-300" disabled placeholder={i.date} />
                <label>Description of operation</label>
                <textarea rows="4" className="rounded-lg bg-gray-300" disabled placeholder={i.desc}/>
                </div>
            </div>
            <div className="pt-4 flex justify-end">
            <Link reloadDocument to=''><button className="bg-blue-400 p-2 pl-4 pr-4 rounded-md">Edit</button></Link>
            </div>
        </div>
        )
    })
}

</div>

</div>
</div>
</div>
</div>
    )
}

export default Dronereg;