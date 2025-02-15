import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Feedback from './components/Feedback';
import Register from './components/Register';
import  Status from './components/Status';
import Nav from './components/Nav';
import Admin from './components/Admin';
import Success from './components/Success'
import StatusF from './components/StatusF';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import CardDetails from './components/CardDetails';


function App() {
  return (
    <div className="App">
      <div className='bg-slate-100'>
     <h1 className='font-bold  text-6xl text-center text-red-700 p-4'>e-Grievance Desk</h1>
     </div>
     {/* <Home></Home>
     <About></About>
     <Feedback></Feedback>
     <Register></Register>
     <Status></Status> */}

     <div>
      <nav class="bg-red-500 p-2">
        <div class="container mx-auto flex justify-between items-center">
        <div class="hidden md:flex space-x-8">
           <a href="/" class="text-white hover:text-white">Home</a>
           <a href="/register" class="text-white hover:text-white">Register Your Grievance</a>
           <a href="/status" class="text-white hover:text-white">Check Status</a>
           <a href="/feedback" class="text-white hover:text-white">Feedback</a>
           <a href="/about" class="text-white hover:text-white">About</a>
           <a href="/admin" class="text-white hover:text-white">Admin</a>
    </div>
    <div class="md:hidden">
      <button class="text-gray-300 hover:text-white">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div></nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/status" element={<Status />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/statusF" element={<StatusF />} />
        <Route path="/adminsignup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/carddetails' element={<CardDetails/>} />

      </Routes>

     </div>
    </div>
  );
}

export default App;
