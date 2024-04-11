import { useState} from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Signup.css';
import { register } from '../../Api/AuthApi.js';
import { useNavigate } from 'react-router-dom';

function Signup()
{
  const navigate=useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[confirmPassword,setConfirmPassword]=useState("");

    let formSignUp={
      email:email,
      password:password
    }

    const submitRegisterData=()=>{
      let reg=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
         if(!email)
         {
           alert("Write email address!");
           return;
         }
         if(!reg.test(email))
         {
           alert("Write proper email address!");
           return;
         }
         if(!password)
         {
           alert("Write passwor!");
           return;
         }
         if(password!==confirmPassword)
         {
           alert("Password not match!");
           return;
         }
         register(formSignUp)
         .then(data=>navigate("/Profile"))
         .catch(err=>{throw new err});
    }

    return (
        <div className='SignupContainer'> 
          <Header/>
           <div className='RegistrationForm'>
             <h2>Create a new account</h2>
             <h4>Welcome! Get started with a free account.</h4>
             <div className='Option'>
              <label>Email</label>
              <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
             </div>
             <div className='Option'>
              <label>New Password</label>
              <input type="password" placeholder='New Password' onChange={(e)=>setPassword(e.target.value)}/>
             </div>
             <div className='Option'>
              <label>Repeat New Password</label>
              <input type="password" placeholder='Repeat New Password' onChange={(e)=>setConfirmPassword(e.target.value)}/>
             </div>
             <div className='Option'>
               <button onClick={()=>submitRegisterData()}>Sign Up</button>
             </div>
             <h6>Already have an account? <span onClick={()=>window.location.href="/Login"}>Log In</span></h6>
           </div>
          <Footer/>
        </div>);
   
}

export default Signup;