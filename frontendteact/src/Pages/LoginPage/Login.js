import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './Login.css';

function Login()
{
    return (
        <div className='SignupContainer'> 
          <Header/>
           <div className='RegistrationForm'>
             <h2>Login into your account</h2>
             <h4>Welcome back! Please enter your details..</h4>
             <div className='Option'>
              <label>Email</label>
              <input type="text" placeholder='Email'/>
             </div>
             <div className='Option'>
              <label>Password</label>
              <input type="text" placeholder='Password'/>
             </div>
             <div className='Option'>
               <button>Login</button>
             </div>
             <h6>Don't have an account? <span onClick={()=>window.location.href="/SignUp"}>Sign Up </span></h6>
           </div>
          <Footer/>
        </div>);
   
}

export default Login;