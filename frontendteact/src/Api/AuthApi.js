import axios from 'axios';
import { url } from '../Utils/Utils.js';

const loginEndPoint="login";
const registerEndPoint="register";
const logoutEndPoint="logout";

const login=async(loginData)=>{
    try{
    const response=await axios.post(`${url}/${loginEndPoint}`,loginData,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.login)
        {
          return response.data; 
        }
        else
        {
          return "unsuccessfull"
        }
    }
    catch(err)
    {
        throw new err;
    }
   
}

const logout=async()=>{
    try{
    const response=await axios.get(`${url}/${logoutEndPoint}`,{headers:{'Content-Type':'application/json'},withCredentials:true});
        if(response.data.cookie)
        {
        return response.data; 
        }
        else
        {
        return "unsuccessfull"
        }
    }
    catch(err)
    {
        throw new err;
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
        return "unsuccessfull"
        }
    }
    catch(err)
    {
        throw new err;
    }
}

export {login,logout,register};