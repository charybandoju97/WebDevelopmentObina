import './Header.css';
import logo from '../../Assets/logo2.jpg';

function Header()
{
   return (
    <div className='HeaderContainer'>
          <div className='HeaderNavigation'>
                <img src={logo} width='100' height='60'/>
                <h3>Jobs</h3>
                <h3>Membership</h3>
                <h3>Newsletter</h3>
                <h3>Writers</h3>
                <h3 onClick={()=>{window.location.href="/"}} style={{cursor:"pointer"}}>Home</h3>
          </div>
            <button onClick={()=>{window.location.href="/SignUp"}}>Sign Up</button>
    </div>
   );
}

export default Header;