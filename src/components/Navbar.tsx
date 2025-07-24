import { useState } from 'react';
import './Navbar.css';
import { FaYoutube, FaFacebook, FaInstagram, FaBars, FaXmark } from 'react-icons/fa6';

type NavbarProps = {
  mobileNo: string;
  email: string;
  socialLinks: {
    youtube: string;
    facebook: string;
    instagram: string;
  };
};

const Navbar = ({ mobileNo, email, socialLinks }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span>📱 {mobileNo}</span>
        <span>✉️ {email}</span>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <FaXmark /> : <FaBars />}
      </div>

      <div className={`navbar-right ${isOpen ? 'open' : ''}`}>
        <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer">
    
          <FaYoutube />
        </a>
        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
         <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      
      </div>
    </nav>
  );
};

export default Navbar;
