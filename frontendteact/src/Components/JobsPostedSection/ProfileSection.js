import { useState } from 'react';
import './ProfileSection.css';

function ProfileSection({profile,type,salaryRange,partOrFull,img,currentStatus,link})
{
   const [applyNow,setApplyNow]=useState('');
   return <div className='SectionContainer'>
     <div className='SubSectionContainerOne'>
          <img src={img}/>
          <div className='SectionText'>
            <h3>{profile}</h3>
             <div className='SectionSubText'>
                <h4>{salaryRange} / year</h4>
                <h4>{type}</h4>
                <h4>{partOrFull} Time</h4>
             </div>
          </div>
     </div>
     <div className='SubSectionContainerTwo'>
          <h5>{currentStatus?"Application Open":"Application Closed"}</h5>
          {currentStatus?<button onClick={()=>link}>Apply Now</button>:""} 
          </div>
   </div>
}

export default ProfileSection;