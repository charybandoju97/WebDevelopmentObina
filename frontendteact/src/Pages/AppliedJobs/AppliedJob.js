import { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './AppliedJob.css';

function AppliedJob()
{
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [year,setYears]=useState('');
    const [previousSalary,setpreviousSalary]=useState('');
    const [notice,setNotice]=useState('');
    
    const formSubmission=()=>{
        if(!name || name===null){
            alert("Name can't be empty!");
            return;
        }
        if(!contact || contact===null){
            alert("Contact can't be empty!");
            return;
        }
        if(!year || year===null){
            alert("Year can't be empty!");
            return;
        }
        if(!previousSalary || previousSalary===null){
            alert("PreviousSalary can't be empty!");
            return;
        }
        if(!notice || notice===null){
            alert("Notice can't be empty!");
            return;
        }
        alert("Successully applied to newletter!");
    }
    return (
        <div className="AppliedJobContainer">
           <Header/>
            <div className='JobApplyContainer'>
                <div className='AppliedForm'>
                    <h3>Apply Soon! Till Appplication Open</h3>
                    <input type='text' placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
                    <input type='text' placeholder='Contact'  onChange={(e)=>setContact(e.target.value)}/>
                    <input type='text' placeholder='YearsOfExperience'  onChange={(e)=>setYears(e.target.value)}/>
                    <input type='text' placeholder='Previous Salary'  onChange={(e)=>setpreviousSalary(e.target.value)}/>
                    <input type='text' placeholder='Notice Period'  onChange={(e)=>setNotice(e.target.value)}/>
                    <button onClick={()=>formSubmission()}>Submit</button>
                </div>
            </div>
           <Footer/>
        </div>
    )
}

export default AppliedJob;