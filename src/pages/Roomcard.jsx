// RoomCard.jsx
import React from 'react';

const Roomcard = ({ image, price, title, description, rating }) => (
    <div className="bg-white rounded shadow-lg w-1/2 relative">
        <img src={image} alt={title} className="w-full"/>
        <div className="bg-prim absolute -mt-6 ml-6 w-32 h-8 font-semibold text-white text-center items-center">{price}</div>
        <div className="flex justify-between px-6 pt-6 pb-4 items-center">
            <p className="text-xl font-bold">{title}</p>
            <div className="flex">
                {[...Array(rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-prim" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                ))}
            </div>
        </div>
        <p className="text-left px-6">{description}</p>
        <div className="flex space-x-4 justify-between p-6 font-semibold">
            <button className="bg-prim px-8 py-2 rounded h-12 uppercase text-white">view details</button>
            <button className="bg-dark px-8 py-2 rounded uppercase text-white">Book Room</button>
        </div>
    </div>
);

export default Roomcard;
