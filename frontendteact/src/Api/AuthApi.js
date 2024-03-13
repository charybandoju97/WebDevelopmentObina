import axios from 'axios';
import { url } from '../Utils/Utils.js';

const loginEndPoint="login";
const registerEndPoint="register";
const logoutEndPoint="logout";
const cookieCheckEndPoint="cookieRequest";

const login=async(loginData)=>{
    try{
    const response=await axios.post(`${url}/${loginEndPoint}`,loginData,{headers:{'Content-Type':'application/json'},withCredentials:true});
    if(response.data.login)
        {
            console.log("login",response.data)
         localStorage.setItem("LoginText","Logout")
          return true; 
        }
        else
        {
            console.log("not login",response.data)
          localStorage.setItem("LoginText","Sign Up")
          return false;
        }
    }
    catch(err)
    {
        localStorage.setItem("LoginText","Sign Up")
        throw err;
    }  
}

const checkForCookie=async ()=>{
    try{
        const response=await axios.get(`${url}/${cookieCheckEndPoint}`,{headers:{'Content-Type':'application/json'},withCredentials:true});
            if(response.data.cookie)
            {
            return true; 
            }
            else
            {
            return false;
            }
        }
        catch(err)
        {
            throw  err;
        }
}
const logout=async()=>{
    try{
    const response=await axios.get(`${url}/${logoutEndPoint}`,{headers:{'Content-Type':'application/json'},withCredentials:true});
        
       if(response.data.cookieRemoved)
        {
        localStorage.setItem("LoginText","Sign Up")
        return true; 
        }
        else
        {
        localStorage.setItem("LoginText","Sign Up")
        return false;
        }
    }
    catch(err)
    {
        localStorage.setItem("LoginText","Sign Up")
        throw  err;
    }
}

const register=async(registerData)=>{
    try{
    const response=await axios.post(`${url}/${registerEndPoint}`,registerData,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.register)
        {
        return response.data; 
        }
        else
        {
        return "unsuccessfull register";
        }
    }
    catch(err)
    {
        throw err;
    }
}

export {login,logout,register,checkForCookie};