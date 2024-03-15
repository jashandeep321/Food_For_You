import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import email from '../img/email.png';
import pin from '../img/pin.png';
import facebook from '../img/facebook.png';
import whatsapp from '../img/whatsapp.png';
import twitter from '../img/twitter.png';
import insta from '../img/insta.png';
import logo1 from '../img/logo1.png';
import bg1 from '../img/bg1.jpg';

function Footer() {
  return (
    <footer className="mt-5" id="footer">
      <div className="masthead" style={{ backgroundImage: `url(${bg1})` }}>
        <div className="color-overlay">
          <div className="row">
            <div className="col-md-4 col-lg-3 mt-4 mb-2">
            <a href='#main'>  <img src={logo1} className="img-fluid text-start" alt="Company Logo" /> </a>
            </div>
            <div className="col-md-9 col-lg-10 ms-5">
              <div className="row mt-5 text-start">
                <div className="col-sm-3 col-md-4 col-lg-5 pb-3 ">
                  <p className="para fs-5 me-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus sommodo viverra maecenes accumsan lacus
                    vel facilisis.
                  </p>
                </div>
                <div className="col-sm-4 col-lg-3"></div>
                <div className="col-sm-4 col-lg-4 ps-5">
                  <div className="pb-1">
                  
                    <p><a href="https://www.google.com/maps/search/chitkara+university/@30.6284003,76.5586976,11z/data=!3m1!4b1?entry=ttu">
                      <img src={pin} className="icons me-4" /></a>ROAD, BUILDING NAME, COUNTRY</p>
                  </div>
                  <div className="pb-4">
                  <p><a href="https://www.google.com/gmail/about/"><img src={email} className="icons me-4" /></a>INFO@COMPANY.COM</p>
                  </div>
                </div>
              </div>
              <div className="row text-start">
                <p className="company col-sm-5 col-lg-5  justify-content-center" href=""><br />© Company Name 2020. All Rights Reserved</p>
              </div>
              <br/>
            </div>
          </div>
          <div className="text-end pb-3 pe-2">
            <a href="https://www.facebook.com/ChitkaraU"><img src={facebook} className="me-3 img-fluid" /></a>
            <a href="https://www.instagram.com/chitkarau/"><img src={insta} className="me-3 img-fluid" /></a>
            <a href="https://web.whatsapp.com/"><img src={whatsapp} className="me-3 img-fluid" /></a>
            <a href="https://twitter.com/chitkarau"><img src={twitter} className="me-3 img-fluid" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
