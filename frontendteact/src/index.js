import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Pages/LandingPage/Landing.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signup from './Pages/SignUp/Signup.js';
import Login from './Pages/LoginPage/Login.js';
import JobProfile from './Pages/JobProfiles/JobProfile.js';
import AppliedJob from './Pages/AppliedJobs/AppliedJob.js';
import NewsLetter from './Pages/NewsLetter/NewsLetter.js';
import Job from './Pages/Jobs/Jobs.js';
import ProfileSignUp from './Components/ProfileSignUp/ProfileSignUp.js';
import MyProfile from './Pages/MyProfilePage/MyProfile.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/JobProfile/:id" element={<JobProfile/>}/>
      <Route path="/NewsLetter" element={<NewsLetter/>}/>
      <Route path="/JobProfile/Applied/:id" element={<AppliedJob/>}/>
      <Route path="/Jobs" element={<Job/>}/>
      <Route path="/Profile" element={<ProfileSignUp/>}/>
      <Route path="/MyProfile" element={<MyProfile/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

