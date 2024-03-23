import Header from '../../Components/Header/Header.js';
import lines from '../../Assets/backgroundlines.png';
import women from '../../Assets/woman.webp';
import JobProfile from '../../Components/JobProfiles/JobProfile.js';

import neilsen from '../../Assets/nielsen.webp';
import publicis from '../../Assets/publicis.webp';
import technical from '../../Assets/technical.webp';
import uplan from '../../Assets/uplan.webp';
import junior from '../../Assets/junior.webp';
import ibm from '../../Assets/ibm.webp';
import Footer from '../../Components/Footer/Footer.js';
import { myProfile } from '../../Api/AuthApi.js';
import { useEffect, useState } from 'react';
import './MyProfile.css';
function MyProfile()
{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[mobile,setMobile]=useState("");
    const[address,setAddress]=useState("");


    useEffect(()=>{
        getMyProfile();
    },[]);

    const getMyProfile=()=>{
        myProfile()
        .then(e=>{
             setName(e.name);
             setAge(e.age);
             setAddress(e.address);
             setMobile(e.mobile);
        })
        .catch(err=>{
            throw err;
        })
    }
   return (
    <div className='MyProfileContainer'>
        <Header/>
             <div className='ProfileBox'>
                <h1>Profile</h1>
                <h2>Name: {name}</h2>
                <h2>Age: {age}</h2>
                <h2>Mobile: {mobile}</h2>
                <h2>Address: {address}</h2>

             </div>
         <Footer/>
    </div>
   );
}

export default MyProfile;