import {useState} from 'react'
import { useRef } from 'react';
import Dashboard from './Dashboard';
import Freshissue from './Freshissue';
import Dronedetails from './Dronedetails';
import Droneupload from './Droneupload';
import Appsuccess from './Appsuccess';
import Userprofile from './Userprofile';

let Content = () => {
    let [cont, changeContent] = useState();
        return (
        <div className={`content`}>
            {/* <Dashboard />
            <Freshissue />
            <Droneupload />
            <Dronedetails />
            <Appsuccess /> */}
            <Userprofile />
        </div>
    )
}


export default Content;