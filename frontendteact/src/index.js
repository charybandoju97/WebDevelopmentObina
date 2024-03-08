import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Pages/LandingPage/Landing.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Pages/SignUp/Signup.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

