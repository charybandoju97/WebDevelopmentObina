import './JobProfile.css';
import neilsen from '../../Assets/nielsen.webp';

function JobProfile()
{
    return (
        <div className="JobProfileContainer">
               <hr className="ProfileLine"/>
            <div className="ProfileSection">
             
                <img src={neilsen} width="70" height="70" className="imageIcon"/>
                <div className="ProfileHeadingSection">
                    <h2>Content Data Editor</h2>
                    <h3>NielsenFull-Time, Mid-Level, Editorial Remote</h3>
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