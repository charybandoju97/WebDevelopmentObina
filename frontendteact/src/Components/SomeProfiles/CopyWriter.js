import JobOverview from "../JobOverview/JobOverview.js";
import ProfileSection from "../JobsPostedSection/ProfileSection.js";
import logo from '../../Assets/nielsen.webp';

function ContentDataEditor()
{
    const formProfileSection={
       profile:"Script Writer",
       jobType:"Ecommerce",
       partOrFull:"Full",
       salaryRange:"$51,000 - $85,000",
       currentStatus:"Application Open"
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

export default ContentDataEditor;