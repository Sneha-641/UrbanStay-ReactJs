import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from '../assets/output-onlinepngtools.png';
import T1 from '../assets/testimonial-1.jpg';
import T2 from '../assets/testimonial-2.jpg';
import T3 from '../assets/testimonial-3.jpg';
import T4 from '../assets/testimonial-4.jpg';

const testimonials = [
  {
    id: 1,
    name: 'Smriti Singh',
    role: 'Profession',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam',
    avatar: T1,
  },
  {
    id: 2,
    name: 'Aryan Mehta',
    role: 'Profession',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam',
    avatar: T2,
  },
  {
    id: 3,
    name: 'Vijay Kumar',
    role: 'Profession',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam',
    avatar: T3,
  },
  {
    id: 4,
    name: 'Alice Beth',
    role: 'Profession',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, numquam',
    avatar: T4,
  }
];

const TestimonialCarousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-16 mx-32 my-16" style={{ backgroundImage: `url(${Img})` }}>
      <div className="container space-x-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-white shadow-md border border-l-2 border-l-gray-300">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
