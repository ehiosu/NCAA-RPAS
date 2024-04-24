
import './App.css';
import './tailwind.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import User from './components/User';
import NavSide from './components/NavSide';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Login />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/userprofile' element={<User/>} />
        <Route path='/side' element={<NavSide/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
