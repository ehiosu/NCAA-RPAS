import {useState} from 'react'
import { useRef } from 'react';
import Userprofile from './Userprofile';
import Dashboard from './Dashboard';
import Freshissue from './Freshissue';
import Dronedetails from './Dronedetails';
import Droneupload from './Droneupload';
import Appsuccess from './Appsuccess';
import Dronedetails2 from './Dronedetails2';
import Specificphase from './Specificphase';

let Content = () => {
    let [cont, changeContent] = useState();

        return (
        <div className={`content`} >
            <Userprofile />
            <Dashboard />
            <Freshissue />
            <Droneupload />
            <Dronedetails />
            <Appsuccess />
            <Dronedetails2 />
            <Specificphase />

        </div>
    )
}


export default Content;