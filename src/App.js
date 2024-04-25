
import './App.css';
import './tailwind.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import Stuff from './components/stuff';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Login />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/userprofile' element={<User/>} />
        <Route path='/stuff' element={<Stuff/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
