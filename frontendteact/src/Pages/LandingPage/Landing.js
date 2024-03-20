import Header from '../../Components/Header/Header.js';
import './Landing.css';
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

function Landing()
{
   return (
    <div className='LandingContainer'>
        <Header/>
        <div className='BannerContainer'>
            <div className='BannerSubOne'>
                <h1>
                    Find The Best Job
                </h1>
                <h3>
                We hand-pick paid writing opportunities, including remote,<br/> 
                freelance, contract, part-time, and full-time.
                </h3>
                <button onClick={()=>{
                       if(localStorage.getItem("LoginText")==="Logout")
                       {
                            alert("Subscribed Successfully");
                       }
                       else
                       {
                            alert("Login First!");
                       }
                }}>Subscribe To Job NewsLetter</button>
                <h6>Get the best writing jobs weekly. Free.</h6>
            </div>
            <div className='BannerSubTwo'>
            <img src={women} width="100%" height="100%"/>
            </div>
        </div>
        <div className='ProfileLanding'>
        <JobProfile profileImg={neilsen} heading={"Content Data Editor"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="contentDataEditor"
        link="/JobProfile/Applied/ContentDataEditor"/>
        <JobProfile profileImg={publicis} heading={"Copywriter"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="copyWriter"
        link="/JobProfile/Applied/Copywriter"/>
        <JobProfile profileImg={junior} heading={"Junior Offline Editor"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="offlineEditor"
        link="/JobProfile/Applied/JuniorOfflineEditor"
        />
        <JobProfile profileImg={technical} heading={"Technical Writer"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="technicalWriter"
        link="/JobProfile/Applied/TechnicalWriter"
       />
        <JobProfile profileImg={uplan} heading={"Content Data Editor"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="dataEditor"
         link="/JobProfile/Applied/ContentDataEditor"
        />
        <JobProfile profileImg={ibm} heading={"Content Designer"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="contentDesigner"
        link="/JobProfile/Applied/ContentDesigner"
        />
        </div>
         <Footer/>
    </div>
   );
}

export default Landing;