import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<ServiceSection />} />
            <Route path="/testimonials" element={<Client />} />
            <Route path="/team" element={<Team />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </Router>
      <Newsletter/>
      <Footer/>
      </>
    );
}

export default App;
