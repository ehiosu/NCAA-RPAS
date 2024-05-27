import './App.css';
import './tailwind.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Stuff from './components/stuff';
import React, {useEffect} from 'react';
import { initFlowbite } from 'flowbite';
import Dashboard from './components/Dashboard';
import Freshissue from './components/Freshissue';
import Droneupload from './components/Droneupload';
import Dronedetails from './components/Dronedetails';
import Settings from './components/Settings';
import Reportincident from './components/Reportincident';
import Userprofile from './components/Userprofile';
import Reselldrone from './components/Reselldrone';
import Renewcertificate from './components/Renewcertificate';
// import Dronemenu from './components/Dronemenu';
import Dronereg from './components/Dronereg';

function App() {
  useEffect(() => {
    initFlowbite();
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Login />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/stuff' element={<Stuff/>} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/freshissue' element={<Freshissue />} />
        <Route path='/droneupload' element={<Droneupload />} />
        <Route path='/dronedetails' element={<Dronedetails />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/reportincident' element={<Reportincident />} />
        <Route path='/userprofile' element={<Userprofile />} />
        <Route path='/reselldrone' element={<Reselldrone />} />
        <Route path='/renewcertificate' element={<Renewcertificate />} />
        <Route path='/dronemenu' element={<Dronereg />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
