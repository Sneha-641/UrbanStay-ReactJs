import React from 'react'
import HomeBanner from './HomeBanner'
import About from './About';
import Room from './Rooms';
import Client from './TestimonialCarousel';
import '../App.css';
import ServiceSection from './ServiceSection';
import Team from './Team';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <About/>
      <Room/>
      <ServiceSection/>
      <Client/>
      <Team/>
    </div>
  )
}

export default Home
