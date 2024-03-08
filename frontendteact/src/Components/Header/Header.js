import './Header.css';
import logo from '../../Assets/logo.svg';

function Header()
{
   return (
    <div className='HeaderContainer'>
          <div className='HeaderNavigation'>
                <img src={logo} width='160' height='160'/>
                <h3>Jobs</h3>
                <h3>Membership</h3>
                <h3>Newsletter</h3>
                <h3>Writers</h3>
                <h3>Blog</h3>
          </div>
            <button>Sign Up</button>
    </div>
   );
}

export default Header;