import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    return (
        <>
            <div className="flex space-x-24 bg-dark p-16 pt-24 text-white">
                <div className="bg-prim w-1/4 p-12 py-4 text-white">
                    <h1 className="font-bold text-4xl mb-4">UrbanStay</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatibus quo quidem soluta omnis</p>
                </div>
                <div className="flex space-x-48">
                <div className="flex flex-col space-y-4">
                    <p className="font-bold text-xl text-prim underline underline-offset-4">Contact</p>
                    <p>123 Street, New York, USA</p>
                    <p>+012 34567890</p>
                    <p>info@example.com</p>
                    <div className="flex text-prim space-x-1">
                       <a href="#" className="border p-2 px-4 custom"><FontAwesomeIcon icon={faFacebookF} /></a>
                       <a href="#" className="border p-2 px-4 custom"><FontAwesomeIcon icon={faTwitter} /></a>
                       <a href="#" className="px-4 p-2 custom border"><FontAwesomeIcon icon={faInstagram} /></a>
                       <a href="#" className="px-4 p-2 custom border"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="font-bold text-xl text-prim underline underline-offset-4">Company</p>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Support</p>
                </div>
                <div className="flex flex-col space-y-2">
                    <p className="font-bold text-xl text-prim underline underline-offset-4">Services</p>
                    <p>Food and Restaurant</p>
                    <p>Spa & Fitness</p>
                    <p>Sports & Gaming</p>
                    <p>Event & Party</p>
                    <p>Gym & Yoga</p>
                </div>
                
                </div>
            </div>

        </>
    )
}

export default Footer;