import './JobProfile.css';

function JobProfile({profileImg,heading, description})
{
    return (
        <div className="JobProfileContainer">
            <div className="ProfileSection">
             
                <img src={profileImg} width="70" height="70" className="imageIcon"/>
                <div className="ProfileHeadingSection">
                    <h2>{heading}</h2>
                    <h3>{description}</h3>
                </div>
                <div className="ProfileButtons">
                    <button>Apply</button>
                    <button>View Job</button>
                </div>
            </div>
            <hr className="ProfileLine"/>
        </div>
    );
}
export default JobProfile;