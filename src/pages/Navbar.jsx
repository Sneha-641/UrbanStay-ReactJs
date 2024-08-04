import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../styles/navbar.css';



const Navbar = () => {
  return (
    <nav className="bg-dark text-white py-4 px-32">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-prim cursor-pointer"><NavLink to="/" className="hover-3d">UrbanStay</NavLink></div>
        <ul className="flex space-x-12 text-lg">
          <li><NavLink to="/" exact className="hover:text-prim">Home</NavLink></li>
          <li><NavLink to="/about" className="hover:text-prim">About</NavLink></li>
          <li><NavLink to="/services" className="hover:text-prim">Services</NavLink></li>
          <li><NavLink to="/rooms" className="hover:text-prim">Rooms</NavLink></li>
          <li><NavLink to="/contact" className="hover:text-prim">Contact</NavLink></li>
        </ul>
        <div className="flex space-x-4 text-prim">
          <a href="#" className="py-2"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="py-2"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="py-2"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="py-2"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#" className="py-2"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>

      </div>
    </nav>
  )
};

export default Navbar;
