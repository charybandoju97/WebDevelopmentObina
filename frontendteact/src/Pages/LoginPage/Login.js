import { useEffect,useState } from 'react';
import { login } from '../../Api/AuthApi.js';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Login.css';
import {useNavigate} from 'react-router-dom';

function Login()
{
  const navigate=useNavigate();

  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
 
  let formLogin={
    email:email,
    password:password
  }

  const submitLoginData=()=>{
    if(!email)
    {
      alert("Write email address!");
      return;
    }
    if(!password)
    {
      alert("Write password!");
      return;
    }
    login(formLogin)
    .then(data=>{
      if(data)
      {
        alert("Login successfull");
        navigate('/');
      }
      else
      {
        alert("Check email or password");
        navigate('/Login');
      }
      
     })
    .catch(err=>{throw new err});
}
    return (
        <div className='SignupContainer'> 
          <Header/>
           <div className='RegistrationForm'>
             <h2>Login into your account</h2>
             <h4>Welcome back! Please enter your details..</h4>
             <div className='Option'>
              <label>Email</label>
              <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
             </div>
             <div className='Option'>
              <label>Password</label>
              <input type="text" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
             </div>
             <div className='Option'>
               <button onClick={()=>submitLoginData()}>Login</button>
             </div>
             <h6>Don't have an account? <span onClick={()=>window.location.href="/SignUp"}>Sign Up </span></h6>
           </div>
          <Footer/>
        </div>);
   
}

export default Login;