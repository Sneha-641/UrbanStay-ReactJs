import React from 'react';
import T1 from '../assets/team-1.jpg';
import T2 from '../assets/team-2.jpg';
import T3 from '../assets/team-3.jpg';
import T4 from '../assets/team-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const teams = [
    {
        image: T4,
        title: 'Full Name',
        description: 'Designation',
    },
    {
        image: T1,
        title: 'Full Name',
        description: 'Designation',
    },
    {
        image: T3,
        title: 'Full Name',
        description: 'Designation',
    },
    {
        image: T2,
        title: 'Full Name',
        description: 'Designation',
    }
];

const Teamcard = ({image,title, description}) => (
    <div className="bg-white rounded shadow-lg w-1/2 relative">
        <img src={image} alt={title} className="w-full"/>
        <div className="absolute -mt-6 ml-24 text-white flex">
          <a href="#" className=" bg-prim mr-2 px-4 py-2"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className=" bg-prim mr-2 px-4 py-2"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className=" bg-prim mr-2 px-4 py-2"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
        <div className="flex flex-col px-6 pt-6 pb-4 items-center">
            <p className="text-xl font-bold mb-2">{title}</p>
            <p className="text-center">{description}</p>
        </div>
        
    </div>
);

function Team() {
    return (
        <div className="container mx-auto px-16 pt-8  bg-light ">
            <div className="text-center mb-12">
                <p className="text-prim uppercase underline underline-offset-4 font-bold text-lg mb-4">Our Team</p>
                <h2 className="text-5xl font-bold">Explore Our <span className="text-prim uppercase">Staff</span></h2>
            </div>
            <div className="flex space-x-8">
                {teams.map((team, index) => (
                    <Teamcard
                        key={index}
                        image={team.image}
                        title={team.title}
                        description={team.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Team;
