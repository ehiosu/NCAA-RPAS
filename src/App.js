
import './App.css';
import './tailwind.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Stuff from './components/stuff';
import React, {useEffect} from 'react';
import { initFlowbite } from 'flowbite';

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
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
