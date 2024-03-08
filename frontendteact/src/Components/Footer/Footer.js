import './Footer.css';
import react from 'react';
import logo from  '../../Assets/logo.svg';

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
       <div className='FooterNavTwo'>

       </div>
       <div className='FooterNavFour'>

       </div>
     </div>
     <div className='SectionFooterTwo'>
        <img src=''/>
        <img src=''/>
        <img src=''/>
     </div>
  </div>);
}

export default Footer;
