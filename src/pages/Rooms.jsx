// Rooms.jsx
import React from 'react';
import Roomcard from './Roomcard';
import R1 from '../assets/room-1.jpg';
import R2 from '../assets/room-2.jpg';
import R3 from '../assets/room-3.jpg';

const rooms = [
    {
        image: R1,
        price: '$100/night',
        title: 'Junior Suite',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam ullam',
        rating: 5
    },
    {
        image: R2,
        price: '$150/night',
        title: 'Executive Suite',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam ullam',
        rating: 4
    },
    {
        image: R3,
        price: '$200/night',
        title: 'Super Deluxe',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quisquam ullam',
        rating: 5
    }
];

function Rooms() {
    return (
        <div className="container mx-auto px-16 pt-8 bg-light ">
            <div className="text-center mb-12">
                <p className="text-prim uppercase underline underline-offset-4 font-bold text-lg mb-4">Our rooms</p>
                <h2 className="text-5xl font-bold">Explore Our <span className="text-prim">ROOMS</span></h2>
            </div>
            <div className="flex space-x-8 pb-16">
                {rooms.map((room, index) => (
                    <Roomcard
                        key={index}
                        image={room.image}
                        price={room.price}
                        title={room.title}
                        description={room.description}
                        rating={room.rating}
                    />
                ))}
            </div>
        </div>
    );
}

export default Rooms;
