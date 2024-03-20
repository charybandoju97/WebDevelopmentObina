import JobOverview from "../JobOverview/JobOverview.js";
import ProfileSection from "../JobsPostedSection/ProfileSection.js";
import logo from '../../Assets/nielsen.webp';

function CopyWriter()
{
    const formProfileSection={
       profile:"Content Data Writer",
       jobType:"Content",
       partOrFull:"Full",
       salaryRange:"$51,000 - $85,000",
       currentStatus:true
    }

    const formJobOverview={
        datePosted:"March 11, 2024",
        locationType:"Onsite",
        offeredSalary:"$51,000 - $85,000",
        expirationDate:"March 12, 2024",
     }

    return (
        <div className="CommonContenContainer">
           <ProfileSection 
            profile={formProfileSection.profile}
            type={formProfileSection.jobType}
            partOrFull={formProfileSection.partOrFull}
            salaryRange={formProfileSection.salaryRange}
            currentStatus={formProfileSection.currentStatus}
            img={logo}
            link={'/JobProfile/Applied/ContentDataEditor'}
           />
           <JobOverview
            datePosted={formJobOverview.datePosted}
            locationType={formJobOverview.locationType}
            offeredSalary={formJobOverview.offeredSalary}
            expirationDate={formJobOverview.expirationDate}
           />
        </div>
    );
}

export default CopyWriter;