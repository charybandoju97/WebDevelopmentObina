import './Header.css';
import logo from '../../Assets/logo2.jpg';
import { useEffect, useState } from 'react';
import { checkForCookie, logout } from '../../Api/AuthApi';
import { useNavigate } from 'react-router-dom';

function Header()
{
      const navigate=useNavigate();

      const [signUpButtonName,setsignUpButtonName]=useState('');

      useEffect(()=>{
         setsignUpButtonName(localStorage.getItem("LoginText"));

         checkForCookie()
         .then(data=>{
            if(data)
             {
                  localStorage.setItem("LoginText","Logout")
             }
             else
             {
                  localStorage.setItem("LoginText","Signup")
             }
         })
      },[signUpButtonName]);

      const checkForLogout=()=>{
      logout()
      .then(data=>{
            console.log("check",data);
          if(data)
          {
            alert("Successfully Logout");
            navigate("/");
            window.location.reload();
          }
          else
          {
            navigate('/Signup');
          }
      })
      .catch(err=>{throw new err});
      }

   return (
    <div className='HeaderContainer'>
          <div className='HeaderNavigation'>
                <img src={logo} width='100' height='60'/>
                <h3>Jobs</h3>
                <h3>Membership</h3>
                <h3>Newsletter</h3>
                <h3>Writers</h3>
                <h3 onClick={()=>{window.location.href="/"}} style={{cursor:"pointer"}}>Home</h3>
          </div>
            <button onClick={()=>{checkForLogout()}}>{signUpButtonName}</button>
    </div>
   );
}

export default Header;