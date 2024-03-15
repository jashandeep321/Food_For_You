// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Car from "./Components/Carousel"; 
import Home from './Components/Home';
import Menu from './Components/Menu';
// import Slider from './Components/Slider';
// import Carousel from './Components/Carousel';
import Auth from './Components/pages/Login';
import Signup from './Components/pages/Signup';
import Grid from './Components/Grid';
import Footer from './Components/Footer';
import Reservation from './Components/Reservation';
// import About from './Components/pages/About';
import Main from './Components/Main';
import ContactUs from './Components/pages/ContactUs';
import Products from './Components/products';
// import Login from './Components/pages/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='home'>
          
            <Home />  
            <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path='/' element={<Main/>}/>
        <Route path='/ContactUs' element={<ContactUs/>}/>
        {/* <Route path='/Menu' element={<Menu/>}/> */}
      <Route exact path = '/Products' element={<Products/>}/>
      </Routes>
      
            
           {/* <Menu/>
            <Car/>
            <Grid/>
            <Reservation/>
            <Footer/>  */}
          
        </div>
      </div>
    </Router>
  );
}

export default App;
