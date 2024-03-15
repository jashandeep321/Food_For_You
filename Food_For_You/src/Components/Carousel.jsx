import React, { useState } from "react";
import "./v.css";
import slider1 from '../img/slider1.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
import { Carousel } from "react-bootstrap";

const Car = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const checkNext = () => {
    const labels = document.querySelectorAll("#slider label");
    const nextIndex =
      selectedIndex === labels.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(nextIndex);
  };

  const check = (index) => setSelectedIndex(index);

  return (
    <div className="justify-content-center align-item-center m-auto">
        <div class="text text-center mt-5 pb-4">
                <h4 class="head fw-bold">DISCOVER</h4>
                <h1 class="events">UPCOMING EVENTS</h1>
                <p class="description">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do eiusmod tempor
                    incididunt ut labore et dollore manga <br/> alique.
                    Quis ipsum suspendisse ultrices gravida. Risus sommodo viverra maecenes accumsan lacus vel
                    facilisis.</p>
                
            </div>
      <div className=" swiper d-flex justify-content-center mt-5">
        <div className="md:w-2/4 md:mb-0 mb-0 flex flex-col text-center items-center">
          <section
            id="slider"
            className="w-40 h-30 inline-flex items-center justify-center flex-shrink-0"
          >
            <input
              type="radio"
              name="slider"
              id="s1"
              checked={selectedIndex === 0}
              onClick={() => check(0)}
            />
            <input
              type="radio"
              name="slider"
              id="s2"
              checked={selectedIndex === 1}
              onClick={() => check(1)}
            />
            <input
              type="radio"
              name="slider"
              id="s3"
              checked={selectedIndex === 2}
              onClick={() => check(2)}
            />
            <label htmlFor="s1" id="slide1">
              <img
                className="fea"
                src={slider1}
                height="100%"
                width="100%"
              />
            </label>
            <label htmlFor="s2" id="slide2">
              <img
                className="fea"
                src={slider2}
                height="100%"
                width="100%"
              />
            </label>
            <label htmlFor="s3" id="slide3">
              <img
                className="fea"
                src={slider3}
                height="100%"
                width="100%"
              />
            </label>
          </section>
          <div className="pagination justify-content-center mb-5">
          
            <button
              onClick={() => check(1)}
              className={`pagination-button ${selectedIndex === 1 ? "active" : ""}`}
            ></button>
            <button
              onClick={() => check(0)}
              className={`pagination-button ${selectedIndex === 0 ? "active" : ""}`}
            ></button>
            <button
              onClick={() => check(2)}
              className={`pagination-button ${selectedIndex === 2 ? "active" : ""}`}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;

// import React, { useState } from 'react';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './v.css'; // Add your custom styles here

// const App = () => {
//     const [sliderSettings, setSliderSettings] = useState({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       centerMode: true, // Enable center mode
//       centerPadding: '0', // Adjust this value to control spacing between images
//     });
  
//     return (
//       <div>
//         <h1>Welcome to My Website</h1>
//         <div className="slider-container">
//           <Slider {...sliderSettings}>
//             <div className="slide">
//               <img src="https://via.placeholder.com/400x200" alt="Slide 1" />
//             </div>
//             <div className="slide">
//               <img src="https://via.placeholder.com/400x200" alt="Slide 2" />
//             </div>
//             <div className="slide">
//               <img src="https://via.placeholder.com/400x200" alt="Slide 3" />
//             </div>
//           </Slider>
//         </div>
//         <div className="pagination">
//           <p>1 of 3</p>
//         </div>
//       </div>
//     );
//   };
  

// export default App;


// import React, { Component, useState } from "react";
// import { render } from 'react-dom';
// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import './v.css'; // Add your custom styles here

// const Car = () => {
//   const [sliderSettings, setSliderSettings] = useState({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   });

//   return (
//     <div>
//       <div className="slider-container" id="slider">
//         <Slider {...sliderSettings}>
//           <div id="slide1" className="slide">
//             <img src="https://via.placeholder.com/400x200" alt="Slide 1" />
//           </div>
//           <div id="slide2" className="slide">
//             <img src="https://via.placeholder.com/400x200" alt="Slide 2" />
//           </div>
//           <div id="slide3" className="slide">
//             <img src="https://via.placeholder.com/400x200" alt="Slide 3" />
//           </div>
//         </Slider>
//         <input type="radio" name="slider" id="s1" checked={true} />
//         <input type="radio" name="slider" id="s2" />
//         <input type="radio" name="slider" id="s3" />
//       </div>
//     </div>
//   );
// };
// export default Car;
// // render(<Car />, document.getElementById('root'));
