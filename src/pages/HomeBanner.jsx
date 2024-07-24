import React from 'react';
import Img from '../assets/output-onlinepngtools.png'

const HomeBanner = () => {
  return (
    <div>
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center" 
      style={{ backgroundImage: `url(${Img})` }}
    >
      <div className="text-center text-black">
        <p className="font-bold text-[20px] underline mb-4 underline-offset-4"> Luxury Living </p>
        <h1 className="text-6xl font-bold mb-6 w-[700px]">Discover A Brand Luxurious Hotel</h1>
        <div className="flex space-x-4 justify-center p-4 font-semibold">
          <button className="bg-prim px-8 py-2 rounded h-12 uppercase">Our Room</button>
          <button className="bg-white px-8 py-2 rounded uppercase">Book Room</button>
        </div>
      </div>
      </div>
        <div className="container mx-auto p-4 pt-16 bg-light">
            <div className="bg-white shadow-lg rounded-lg px-6 py-8 relative -mt-32 mb-8 mx-16">
              <div className="flex flex-wrap items-center justify-between space-x-4">
                <input type="text" placeholder="Check in" className="p-2 border border-gray-400 rounded w-64"/>
                <input type="text" placeholder="Check out" className="p-2 border  border-gray-400 rounded w-64"/>
                <select className="p-2 border rounded w-64  border-gray-400 text-gray-400">
                  <option>Adult</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select className="p-2 border rounded w-64  border-gray-400 text-gray-400">
                  <option>Child</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </select>
                <button className="bg-prim text-white px-4 py-2 rounded w-48">Submit</button>
              </div>
            </div>
            </div>
            </div>
    
  );
};

export default HomeBanner;
