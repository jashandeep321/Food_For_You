import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/ContactUs';
import Offer from './Offer';
import spaghetti from '../img/spaghetti.png';
import img1 from '../img/img1.png';
import img2 from '../img/img2.png';
import img3 from '../img/img3.png';
// import products from'./products';
function Menu() {
  return (
    <div className='menu' id='menu'>
        <div class="spaghetti float-start">
        <img src={spaghetti} className="img-fluid" /></div>
        <div class="choose_enjoy text-center mt-5" id="enjoy">

            <h1 class="display-5 d-flex justify-content-center">CHOOSE & ENJOY</h1>
            <p class="description mt-4 fs-6">Lorem ipsum dolor sit amet,consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dollore manga alique.<br/>
                Quis ipsum suspendisse ultrices gravida. Risus sommodo viverra maecenes accumsan lacus vel
                facilisis.
            </p>
            <div class="green "></div>
            <div class="row m-auto mt-5">
                <div class="imgset col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="img1 m-auto">
                    <img src={img1} className="card-img-top img-fluid" alt='Burger' />
                        <div class="img-body mt-4 justify-content-center">
                            <h4>LOREM IPSUM DOLOR</h4>
                            <p class="">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do</p>
                            <Link to="/products">
                                <button class="now mb-5" onclick="myfunction()">ORDER NOW</button>
                                </Link>
                        </div>
                    </div>
                </div>
                <div class="imgset col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="img1 m-auto" >
                    <img src={img2} className="card-img-top img-fluid" alt='Burger' />

                        <div class="img-body mt-4">
                            <h4>LOREM IPSUM DOLOR</h4>
                            <p class="">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do</p>
                            <Link to="/products">
                                <button class="now mb-5" onclick="myfunction()">ORDER NOW</button>
                                </Link>
                        </div>
                    </div>
                </div>
                <div class="imgset col-sm-12 col-md-4 col-lg-4 col-12">
                    <div class="img1 m-auto" >
                    <img src={img3} className="card-img-top img-fluid" alt='Burger' />
                        <div class="img-body mt-4">
                            <h4>LOREM IPSUM DOLOR</h4>
                            <p class="">Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed do</p>
                            <Link to="/products">
                                <button class="now mb-5" onclick="myfunction()">ORDER NOW</button>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}
export default Menu;