import React from 'react';
import './Jobs.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import JobProfile from '../../Components/JobProfiles/JobProfile.js';
import neilsen from '../../Assets/nielsen.webp';
import publicis from '../../Assets/publicis.webp';
import technical from '../../Assets/technical.webp';
import uplan from '../../Assets/uplan.webp';
import junior from '../../Assets/junior.webp';
import ibm from '../../Assets/ibm.webp';

function Job()
{
    return (
        <div>
          <Header/>
        <div className='JobContainer'>
          <div className='ProfileLanding'>
          <JobProfile profileImg={technical} heading={"Technical Writer"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="technicalWriter"
        link="/JobProfile/Applied/TechnicalWriter"
       />
        <JobProfile profileImg={uplan} heading={"Content Data Editor"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="dataEditor"
         link="/JobProfile/Applied/ContentDataEditor"
        />
        <JobProfile profileImg={ibm} heading={"Content Designer"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="contentDesigner"
        link="/JobProfile/Applied/ContentDesigner"
        />
        <JobProfile profileImg={neilsen} heading={"Content Data Editor"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="contentDataEditor"
        link="/JobProfile/Applied/ContentDataEditor"/>
        <JobProfile profileImg={publicis} heading={"Copywriter"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="copyWriter"
        link="/JobProfile/Applied/Copywriter"/>
        <JobProfile profileImg={junior} heading={"Junior Offline Editor"} description={"NielsenFull-Time, Mid-Level, Editorial Remote"} paramID="offlineEditor"
        link="/JobProfile/Applied/JuniorOfflineEditor"
        />
       
        </div>
</div>
          <Footer/>
        </div>
    )
}

export default Job;