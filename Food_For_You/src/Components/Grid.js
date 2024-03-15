import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from "react";
import sec11 from '../img/sec11.jpg';
import sec21 from '../img/sec21.jpg';
import sec3 from '../img/sec3.jpg';

const textStyle = {
  color: 'white',    
  textAlign: 'left', 
};

export default function Grid() {
  return (
    <section className="grid m-5 mr-auto ml-auto" id="grid">
      <div className="row justify-content-center">
        <div className="set1 col-6 pb-3" style={{ width: '680px' }}>
          <div style={{ position: 'relative' }}>
            <img src={sec11} className="img-fluid" alt="..." />
            <div className="card-img-overlay col-3 m-4 mt-5" style={textStyle}>
              <h4 className="fw-bold">TRY IT TODAY</h4>
              <h1 className="fw-bold display-4">MOST POPULAR PASTA</h1>
            </div>
          </div>
        </div>
        <div className="col-6" style={{ width: '680px' }}>
          <div className="set2 pb-3">
            <div style={{ position: 'relative' }}>
              <img src={sec21} className="img-fluid" alt="..." />
              <div className="card-img-overlay col-6 m-3 mt-2" style={textStyle}>
                <h4 className="fw-bold">TRY IT TODAY</h4>
                <h1 className="fw-bold display-6">MOST FUN FOOD TASTE</h1>
              </div>
            </div>
          </div>
          <div className="set2 pb-4">
            <div style={{ position: 'relative' }}>
              <img src={sec3} className="img-fluid" alt="..." />
              <div className="card-img-overlay col-8 m-3" style={textStyle}>
                <h4 className="fw-bold">TRY IT TODAY</h4>
                <h1 className="fw-bold display-6">FRESH AND CHILI</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
