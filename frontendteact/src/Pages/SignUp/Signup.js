import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Signup.css';

function Signup()
{
    return (
        <div className='SignupContainer'> 
          <Header/>
           <div className='RegistrationForm'>
             <h2>Create a new account</h2>
             <h4>Welcome! Get started with a free account.</h4>
             <div className='Option'>
              <label>Email</label>
              <input type="text" placeholder='Email'/>
             </div>
             <div className='Option'>
              <label>New Password</label>
              <input type="text" placeholder='New Password'/>
             </div>
             <div className='Option'>
              <label>Repeat New Password</label>
              <input type="text" placeholder='Repeat New Password'/>
             </div>
             <div className='Option'>
               <button>Sign Up</button>
             </div>
             <h6>Already have an account? <span onClick={()=>window.location.href="/Login"}>Log In</span></h6>
           </div>
          <Footer/>
        </div>);
   
}

export default Signup;