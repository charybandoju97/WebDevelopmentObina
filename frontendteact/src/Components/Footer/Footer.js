import './Footer.css';
import react from 'react';
import logo from  '../../Assets/logo.svg';

import dailer from  '../../Assets/dialer.png';
import fb from  '../../Assets/facebook.png';
import insta from  '../../Assets/Instagram.png';

function Footer()
{
  return (
   <div className='FooterContainer'>
     <div className='SectionFooterOne'>
       <div className='FooterNavOne'>
          <img src={logo} width='200' height='200'/>
           <h4>Find the best writing jobs in<br/> one place and hire writers.</h4>
       </div>
       <div className='FooterNavTwo'>
          <h5>For Writers</h5>
          <h4>Find a Job</h4>
          <h4>Weekly Newsletter</h4>
          <h4>Writer Membership</h4>
          <h4>Writer Application</h4>
          <h4>Reviews</h4>
       </div>
       <div className='FooterNavTwo'>
          <h5>For Business</h5>
          <h4>Find a Job</h4>
          <h4>Weekly Newsletter</h4>
          <h4>Writer Membership</h4>
          <h4>Writer Application</h4>
          <h4>Reviews</h4>
       </div>
       <div className='FooterNavTwo'>
          <h5>Resources</h5>
          <h4>Find a Job</h4>
          <h4>Weekly Newsletter</h4>
          <h4>Writer Membership</h4>
          <h4>Writer Application</h4>
          <h4>Reviews</h4>
       </div>
       <div className='FooterNavTwo'>
          <h5>Writers</h5>
          <h4>Find a Job</h4>
          <h4>Weekly Newsletter</h4>
          <h4>Writer Membership</h4>
          <h4>Writer Application</h4>
          <h4>Reviews</h4>
       </div>
     </div>
     <div className='SectionFooterTwo'>
        <img src={fb} width="40" height="40"/>
        <img src={insta} width="40" height="40"/>
        <img src={dailer} width="40" height="40"/>
     </div>
  </div>);
}

export default Footer;
