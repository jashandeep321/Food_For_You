import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import { BrowserRouter as  Routes, Route, Link } from 'react-router-dom';
import logo from '../img/logo.png'
import smartphone from '../img/smartphone.png';
import About from './pages/ContactUs';
import leave from '../img/leave.png';
import pasta1 from '../img/pasta1.png';

function Offer() {
  return (
<div className='mainview' id='offer'>
          <div class="content m-5 col-sm-12 col-md-5 text-center float-start">
            <img src={leave} className="float-start col-md-1 img-fluid" />
            <h1 class=" hungry display-5">ARE YOU HUNGRY?</h1>
            <div class="title">DONT WAIT!</div>
            <h4 class="fw-bold">LETS START TO ORDER FOOD NOW</h4>
            <hr class="line col-md-7 ms-auto me-auto" />
            <div class="offer_sec"></div>
            <div class="off col-md-11 justify-content-center">
              <p class="offer mt-3 me-0 ms-4">THIS MONDAY HAPPY HOUR</p>
              <h1 class="offer_no display-4 ms-2"> 1+1=3</h1>
            </div>
            <Link to="/pages/Login"> <button class="now" onclick="/pages/Login">ORDER NOW</button></Link>
          </div>
          <section class="img col-sm-12 col-md-6 float-start">
          <img src={pasta1} className="img-fluid h-100" />
            </section>
        </div>
  );

}
export default Offer;