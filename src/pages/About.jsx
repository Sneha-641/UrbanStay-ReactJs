import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel , faUsers , faUserGear } from '@fortawesome/free-solid-svg-icons';
import A1 from '../assets/about-1.jpg';
import A2 from '../assets/about-2.jpg';
import A3 from '../assets/about-3.jpg';
import A4 from '../assets/about-4.jpg';

const About = () => {
  return (
    <>
    <div className="container mx-auto px-32 bg-light flex space-x-16 items-center">
      <div className=" text-left w-1/2">
              <p className="uppercase font-bold text-prim text-md mb-4 underline underline-offset-4">About us</p>
              <h2 className="text-5xl font-bold ">Welcome to <span className="text-prim">UrbanStay</span></h2>
              <p className="text-md mt-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet clita duo justo magna dolore erat amet
              </p>
              <div className="flex justify-between space-x-2 ">
                <div className="text-center shadow py-8 px-16 my-4 border">
                <FontAwesomeIcon icon={faHotel} size='3x' className="text-prim"/>
                  <div className="text-2xl font-bold text-gray-800">7861</div>
                  <div className="text-gray-600">Rooms</div>
                </div>
                <div className="text-center shadow px-16 py-8 my-4 border">
                <FontAwesomeIcon icon={faUsers} size='3x' className="text-prim"  />
                  <div className="text-2xl font-bold text-gray-800">1234</div>
                  <div className="text-gray-600">Staffs</div>
                </div>
                <div className="text-center shadow px-16 py-8 border my-4">
                    <FontAwesomeIcon icon={faUserGear} size='3x' className="text-prim" />
                  <div className="text-2xl font-bold text-gray-800">4321</div>
                  <div className="text-gray-600">Clients</div>
                </div>
              </div>
              <button className="bg-prim text-white px-8 py-4 rounded uppercase text-">Explore More</button>
            </div>
      <div className="flex space-x-4">
            <div className="flex flex-col items-end space-y-4 my-8 pt-16">
              <img src={A1} alt="Resort" className="w-[240px] h-[220px] shadow-lg"/>
              <img src={A3} alt="Pool" className="w-[150px] shadow-lg"/>
            </div>
            <div className="flex flex-col my-8 space-y-4 items-left">
              <img src={A2} alt="Resort" className="w-[280px] shadow-lg"/>
              <img src={A4} alt="Pool" className="w-[220px]  shadow-lg"/>
            </div>
          </div>
       </div>
    </>  
  )
}

export default About
