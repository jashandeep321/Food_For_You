import Container from 'react-bootstrap/Container';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo.png'
import smartphone from '../img/smartphone.png';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Offer from './Offer';
import Footer from './Footer';
import Grid from './Grid';
import Menu from './Menu';

function Home() {
  const [showOffer, setShowOffer] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Hide the offer section when navigating to "/Grid", "/Menu", and "/Footer"
    setShowOffer(
      !(
        location.pathname.includes('/Grid') ||
        location.pathname.includes('/Menu') ||
        location.pathname.includes('/Footer')
      )
    );
  }, [location.pathname]);
  return (
    <div className='outer' id='main'>
      <div className='homesec'>
        <div className='header'>
          <div className='head pt-3 ms-4 me-4'>
            <Link to="/"> <img src={logo} className="logoimg img-fluid float-start" /></Link>
            <div className="ms-auto float-end mt-3">
              <Link to="/pages/ContactUs"> <img src={smartphone} className="phoneimg float-end img-fluid" /></Link>
              <div class="navbar-phone float-end text-end ms-auto mt-1">
                <p class="delivery fw-bold mb-lg-0 mb-0">EXPRESS DELIVERY </p>
                <h4 class="fw-bold">1800 258 888</h4>
              </div>
            </div>
          </div>
          <Navbar expand="lg" className=" w-100 p-0">
            <Container className='me-0 ms-auto'>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle ms-4" style={{ marginTop: "-3.5rem" }} />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Link to="/" className='fs-5 pe-5 ps-4 fw-bold nav'>Home</Link>
                  <Link to ="/Grid" className='fs-5 pe-5 ps-4 fw-bold nav'>OurStory</Link>
                  <Link to="/Menu" className='fs-5 pe-5 ps-4 fw-bold nav'>Menu</Link>
                  <Link to="/Footer" className='fs-5 pe-5 ps-4 fw-bold nav'>AboutUs</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        {/* <Offer/> */}
       
        {showOffer && <Offer />}
       
      </div>


      <section className="route_comp">
        <Routes>
          <Route exact path="/pages/ContactUs" element={<ContactUs/>} />
          <Route exact path="/pages/Login" element={<Login/>} />
          <Route exact path="/Grid" element={<Grid/>} />
          <Route exact path="/Menu" element={<Menu/>} />
          <Route exact path="/Footer" element={<Footer/>} />
          {/* <Route exact path="/" element={<Home/>} /> */}

        </Routes>
      </section>

    </div>

  );
}
export default Home;


