import React from 'react';
import S1 from '../assets/room-1.jpg';
import S2 from '../assets/food.jpg';
import S3 from '../assets/spa.jpg';
import S4 from '../assets/sports.jpg';
import S5 from '../assets/party.jpg';
import S6 from '../assets/gym.jpg';


// Card Component
const Card = ({ icon, title, description }) => {
  return (
    <div className=" bg-white shadow-xl rounded-sm p-16 py-12">
      <div className="flex items-center justify-center mb-6 ">
        <img src={icon} alt={title} className="w-full h-40" />
      </div>
      <h2 className="text-2xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

// Services Component
const ServiceSection = () => {
  const hotelIcon = S1;
  const foodIcon = S2;
  const spaIcon = S3;
  const sportsIcon = S4;
  const eventIcon = S5;
  const gymIcon = S6;

  const services = [
    {
      id: 1,
      icon: hotelIcon,
      title: 'Rooms & Apartment',
      description: 'Experience hospitality with our amenities and personalized services.'
    },
    {
      id: 2,
      icon: foodIcon,
      title: 'Food & Restaurant',
      description: 'Enjoy delicious meals at our hotel\'s on-site restaurant.'
    },
    {
      id: 3,
      icon: spaIcon,
      title: 'Spa & Fitness',
      description: 'Relax with our spa services and stay active in our fitness center.'
    },
    {
      id: 4,
      icon: sportsIcon,
      title: 'Sports & Gaming',
      description: 'Enjoy sports activities and gaming options with our facilities and entertainment offerings.'
    },
    {
      id: 5,
      icon: eventIcon,
      title: 'Event & Party',
      description: 'Host unforgettable events and parties with us, we make every occasion special.'
    },
    {
      id: 6,
      icon: gymIcon,
      title: 'Gym & Yoga',
      description: 'Stay fit with our gym and find your balance with our yoga sessions.'
    }
  ];

  return (
    <div className=" bg-light py-4 px-16">
      <p className="uppercase text-center font-bold text-prim text-lg mb-4 underline underline-offset-4">Our Services</p>
      <h1 className="text-5xl font-bold text-center mb-10">Explore Our <span className="text-prim">SERVICES</span></h1>
      <div className="grid grid-cols-3 justify-center gap-8">
        {services.map(service => (
          <Card key={service.id} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
