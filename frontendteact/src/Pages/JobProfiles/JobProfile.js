import Footer from '../../Components/Footer/Footer.js';
import Header from '../../Components/Header/Header.js';
import CopyWriter from '../../Components/SomeProfiles/ContentDataEditor.js';
import ContentDataEditor from '../../Components/SomeProfiles/ContentDataEditor.js';
import OfflineEditor from '../../Components/SomeProfiles/OfflineEditor.js';
import './JobProfile.css';
import { useParams } from 'react-router-dom';

function JobProfile()
{

    const {id}=useParams();

    console.log(id);
    return (<div>
       <Header/>
        { 
          id==="contentDataEditor"?
          (<ContentDataEditor/>):
          (id==="copyWriter")?
          (<CopyWriter/>):
          (<OfflineEditor/>)
         }
       <Footer/>
    </div>)
}

export default JobProfile;