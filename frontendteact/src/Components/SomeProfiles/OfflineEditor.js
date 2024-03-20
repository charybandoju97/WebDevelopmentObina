import JobOverview from "../JobOverview/JobOverview.js";
import ProfileSection from "../JobsPostedSection/ProfileSection.js";
import logo from '../../Assets/junior.webp';

function OfflineEditor()
{
    const formProfileSection={
       profile:"Offline Writer",
       jobType:"Ecommerce",
       partOrFull:"Full",
       salaryRange:"$51,000 - $85,000",
       currentStatus:false
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
            link={'/JobProfile/Applied/OfflineEditor'}
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

export default OfflineEditor;