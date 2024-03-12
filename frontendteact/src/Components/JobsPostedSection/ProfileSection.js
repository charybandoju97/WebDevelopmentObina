import './ProfileSection.css';

function ProfileSection({profile,type,salaryRange,partOrFull,img,currentStatus})
{
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
          <h5>{currentStatus}</h5>
          </div>
   </div>
}

export default ProfileSection;