import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './NewsLetter.css';

function NewsLetter()
{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    
    const formSubmission=()=>{
        if(!name || name===null){
            alert("Name can't be empty!");
            return;
        }
        if(!email || email===null){
            alert("Email can't be empty!");
            return;
        }
        alert("Successully applied to newletter!");
    }
    return (
        <div className="NewsLetterContainer">
           <Header/>
            <div className='JobApplyContainer' style={{marginTop:"0px"}}>
                <div className='AppliedForm'>
                    <h3 style={{fontSize:"25px", marginBottom:"0px"}}>Best Writing Newsletter</h3>
                    <h5>Great reads, cool tools, jobs, tips, and friendly encouragement to do your best writing.</h5>
                    <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                    <input type='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                    <button type='button' onClick={()=>formSubmission()}>Send Me Best Writing NewsLetter</button>
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default NewsLetter;