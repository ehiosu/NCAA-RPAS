
import './App.css';
import './tailwind.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element= {<Login />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/userprofile' element={<Profile/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
