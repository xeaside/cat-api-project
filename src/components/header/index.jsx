import { Link } from "react-router-dom";
import './header.css'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='logoText'> <Link to='/'>GetCatPic</Link></div>
      <nav className='navbarButtons'>
        <Link to="/">Main</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/registration">Registration</Link>
      </nav>
    </div>
  );
};

export default Header;
