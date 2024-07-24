import React from 'react';
import Navbar from './pages/Navbar';
import HomeBanner from './pages/HomeBanner';
import About from './pages/About';
import Room from './pages/Rooms';
import Client from './pages/TestimonialCarousel';
import './App.css';
import ServiceSection from './pages/ServiceSection';
import Team from './pages/Team';
import Newsletter from './pages/Newsletter';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomeBanner/>
      <About/>
      <Room/>
      <ServiceSection/>
      <Client/>
      <Team/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
