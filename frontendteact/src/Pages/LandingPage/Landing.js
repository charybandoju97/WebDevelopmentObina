import Header from '../../Components/Header/Header.js';
import './Landing.css';
import lines from '../../Assets/backgroundlines.png';
import women from '../../Assets/woman.webp';
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
                <button>Subscribe To Job NewsLetter</button>
                <h6>Get the best writing jobs weekly. Free.</h6>
            </div>
            <div className='BannerSubTwo'>
            <img src={women} width="100%" height="100%"/>
       
            </div>
            
        </div>
    </div>
   );
}

export default Landing;