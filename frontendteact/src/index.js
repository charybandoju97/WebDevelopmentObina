import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Pages/LandingPage/Landing.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Pages/SignUp/Signup.js';
import Login from './Pages/LoginPage/Login.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

