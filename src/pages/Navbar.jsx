import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  return (
    <nav className="bg-dark text-white py-4 px-32">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-prim">UrbanStay</div>
        <ul className="flex space-x-12 text-lg">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Rooms</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
        <div className="flex space-x-4 text-prim">
          <a href="#" ><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" ><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" ><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" ><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#" ><FontAwesomeIcon icon={faYoutube} /></a>
        </div>

      </div>
    </nav>
  )
};

export default Navbar;
