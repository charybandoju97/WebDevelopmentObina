import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import { profile } from '../../Api/AuthApi.js';
import { useNavigate } from 'react-router-dom';


function ProfileSignUp()
{
    const navigate=useNavigate();

    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[mobile,setMobile]=useState("");
    const[address,setAddress]=useState("");

    

    let formSignUp={
      name:name,
      age:age,
      mobile:mobile,
      address:address
    }

    const submitRegisterData=()=>{
         if(!name)
         {
           alert("Write name!");
           return;
         }
         if(!age)
         {
           alert("Write age!");
           return;
         }
         if(!mobile)
         {
           alert("Write mobile!");
           return;
         }
         if(!address)
         {
           alert("Write address!");
           return;
         }

         profile(formSignUp)
         .then(data=>{alert("Profile created! Kindly Login");
          navigate("/Login");
        })
         .catch(err=>{throw new err});
    }

    return (
        <div className='SignupContainer'> 
          <Header/>
           <div className='RegistrationForm'>
             <h2>Create a new Profile</h2>
             <h4>Welcome! To the new world of Write Hub.</h4>
             <div className='Option'>
              <label>Name *</label>
              <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
             </div>
             <div className='Option'>
              <label>Age *</label>
              <input type="text" placeholder='Age' onChange={(e)=>setAge(e.target.value)}/>
             </div>
             <div className='Option'>
              <label>Mobile Number *</label>
              <input type="text" placeholder='Mobile Number' onChange={(e)=>setMobile(e.target.value)}/>
             </div>
             <div className='Option'>
              <label>Address *</label>
              <input type="text" placeholder='Address' onChange={(e)=>setAddress(e.target.value)}/>
             </div>
             <div className='Option'>
               <button onClick={()=>submitRegisterData()}>Submit Profile</button>
             </div>
           </div>
          <Footer/>
        </div>);
   
}

export default ProfileSignUp;