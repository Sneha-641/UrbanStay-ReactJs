import React from 'react';
import Img2 from '../assets/luxa.org-opacity-changed-img2.jpg';
import Img1 from '../assets/luxa.org-opacity-changed-jorg-angeli-1tyuLfDOnG0-unsplash.jpg';
import Img3 from '../assets/luxa.org-opacity-changed-rod-long-2P_ifaetDm0-unsplash.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeBanner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <Slider {...settings} className="absolute inset-0 w-full h-full">
        <div>
          <img src={Img1} alt="Luxury Living" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Img2} alt="Luxury Living" className="w-full h-full object-cover" />
        </div>
        <div>
          <img src={Img3} alt="Luxury Living" className="w-full h-full object-cover" />
        </div>
        </Slider>
        <div className="absolute inset-0 flex items-center justify-center text-center text-black z-10">
          <div>
          <p className="font-bold text-[20px] underline mb-4 underline-offset-4 text-white"> Luxury Living </p>
          <h1 className="text-6xl font-bold mb-6 w-[700px] text-white">Discover A Brand Luxurious Hotel</h1>
          <div className="flex space-x-4 justify-center p-4 font-semibold">
            <button className="bg-prim px-8 py-2 rounded h-12 uppercase hover:text-white hover:border-2 border-black hover:shadow-lg">Our Room</button>
            <button className="bg-white px-8 py-2 rounded uppercase hover:border-2 border-black hover:shadow-lg">Book Room</button>
          </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 pt-16 bg-light">
        <div className="bg-white shadow-lg rounded-lg px-6 py-8 relative -mt-32 mb-8 mx-16">
          <div className="flex flex-wrap items-center justify-between space-x-4">
            <input type="text" placeholder="Check in" className="p-2 border border-gray-400 rounded w-64"/>
            <input type="text" placeholder="Check out" className="p-2 border border-gray-400 rounded w-64"/>
            <select class="p-2 border rounded w-64 border-gray-400 text-gray-400">
                <option value="" disabled selected>Adult</option>
                <option className="text-black">1</option>
                <option className="text-black">2</option>
                <option className="text-black">3</option>
            </select>
            <select class="p-2 border rounded w-64 border-gray-400 text-gray-400">
                <option value="" disabled selected>Child</option>
                <option className="text-black">0</option>
                <option className="text-black">1</option>
                <option className="text-black">2</option>
            </select>
            <button className="bg-prim text-white px-4 py-2 rounded w-48">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;



