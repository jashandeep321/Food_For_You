import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import './Style.css';
import React, { useState } from "react"
import Modal from "react-modal";
import axios from 'axios';

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxHeight: "75%", // Adjust the max height as needed
    overflow: "auto", // Enable scrolling if the content overflows the max height
    padding: 0,
    transform: "translate(-50%, -50%)",
  },
};



export default function AuthForm(props) {
  let [Mode, setMode] = useState("signin");
  let [Open, setOpen] = useState(true);
  
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    // address1: "",
    // address2: "",
    // pincode: "",
    // contact: "",
  });

  const [message, setMessage] = useState('');

  // const handleSignUp = (e) => {
  //   e.preventDefault();
  //   // setMessage(`Welcome! ${formData.name} Your email is  ${formData.email} and password is ${formData.password}`);
  //   // setOpen(false); 
  //   axios.post("http://localhost:8081/signin_user",formData).then(response=>
  //   {
  //     if(response.status===200){
  //       let d = response.data;
  //       console.log(d);
  //       console.log(response.status);
  //         setOpen(false); 
  //     }
  //   })
  // }; 
  


  const Login = () => {
    const [UEmail, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:8081/api/login', { UEmail, Password })
      .then(response => {
        // Assuming the API response contains a success indicator
        if (response.data.success) {
          // Redirect to '/Box3' on successful login
          console.log('Login successful');
        } else {
          setErrorMessage('Incorrect email or password');
        }
      })
      .catch(error => {
        console.error('Login error:', error);
        setErrorMessage('Error during login');
      });
  };
}
  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/signin_user", formData)
      .then(response => {
        if (response.status === 200) {
          let d = response.data;
          console.log(d);
          console.log(response.status);
          setMessage("User authenticated successfully");

          // Close the sign-in page or redirect to another page
          // You can implement this based on your application's structure
          // For example, set a state to conditionally render the sign-in page or redirect
        }
      })
      .catch(error => {
        console.error(error);
        setMessage("Error authenticating user");
      });
  };



  const changeAuthMode = () => {
    setMode(Mode === "signin" ? "signup" : "signin");
  }

  const closeModal = () => {
    setOpen(false);
  }

  
  if (Mode === "signin") {
    
    return (
      
      <div className="form-container p-0">
        <Modal
        isOpen={Open}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Auth Modal"
      >
        <div className='cross2 float-end m-3'><Link to="/">  <CloseButton /></Link></div>

        <form className="Auth-form ">
        
          <div className="Auth-form-content">
            <h1 className="form-title text-center">Sign In</h1>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Name</label>
              <input
                type="text"
                className="form-control mt-1"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter name" required
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter email" required
              />
            </div>
            <div className="form-group mt-3 ">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1 mb-2"
                placeholder="Enter password"
                 value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
            </div>
            <div className='mb-4 '>
                         <input type='checkbox' className=' custom-control custom-cheakbox' id='check' />
                        <label htmlFor='check' className='custom-input-label'>Remember me </label>
                    </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>
                Submit
              </button>
            </div>
            <p className="text-center mt-3">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
        </Modal>
        {message && (
        <div className="message" >
          <p>{message}</p>
        </div>
      )}
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
       <Modal
        isOpen={Open}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Auth Modal"
      >
          <div className='cross2 float-end m-3 '><Link to="/">  <CloseButton /></Link></div>
      <form className="Auth-form "onSubmit={(e) => e.preventDefault()} >
    
        <div className="Auth-form-content">
          <h1 className="form-title text-center">Sign Up</h1>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe" 
              value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address" 
              value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
          <div className="form-group mt-3">
              <label>Address 1</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Address 1"
                value={formData.address1}
                onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Address 2</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Address 2"
                value={formData.address2}
                onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
              />
            </div>
            <div className="form-group mt-3">
              <label>Pincode</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Pincode"
                value={formData.pincode}
                onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Contact</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Contact"
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                required
              />
            </div>
          <div className="form-group mt-3 ">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1 mb-2"
              placeholder="Password" 
              value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
            />
          </div>
          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-primary" onClick={handleSignUp}>
  Submit
</button>

          </div>
          
          <p className="text-end mt-2 mb-2">
          <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </p>
        </div>
      </form>
      </Modal>
      {message && (
        <div className="message">
          <p>{message}</p>
        </div>
      )}
    </div>
  )
}














import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';
import './Style.css';
import React, { useState } from "react"
import Modal from "react-modal";
import axios from 'axios';
import Login from './Login';
const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxHeight: "75%", // Adjust the max height as needed
    overflow: "auto", // Enable scrolling if the content overflows the max height
    padding: 0,
    transform: "translate(-50%, -50%)",
  },
};



export default function Signup() {
  // const currentDate = new Date().toISOString().split('T')[0];
  const [userData, setUserData] = useState({
    UID: '',
    UName: '',
    UEmail: '',
    Password: '',
    PAdd1:'',
    PAdd2:'',
    Pincode: '', 
  Contact :'',
  });

  function sendData() {
    axios.post("http://localhost:8081/signup_user", userData)
      .then(response => {
        if (response.status === 200) {
          let d = response.data;
          console.log(d);
          console.log(response.status);
          
          
        }
      })
      .catch(error => {
        console.error("Error sending data:", error);
      });
  }




  // const changeAuthMode = () => {
  //   setMode(Mode === "signin" ? "signup" : "signin");
  // }

  // const closeModal = () => {
  //   setOpen(false);
  // }

  
  // if (Mode === "signin") {
    

  return (
    <div className="Auth-form-container">
       {/* <Modal
        // isOpen={Open}
        // onRequestClose={closeModal}
        // style={modalStyles}
        // contentLabel="Auth Modal"
      > */}
          <div className='cross2 float-end m-3 '><Link to="/">  <CloseButton /></Link></div>
      <form className="Auth-form "onSubmit={(e) => e.preventDefault()} >
    
        <div className="Auth-form-content">
          <h1 className="form-title text-center">Sign Up</h1>
          <div className="text-center">
            Already registered?{" "}
            <Link to="/Login">
            <span className="link-primary" 
            // onClick={changeAuthMode}
            >Sign In</span>
            </Link>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane Doe" 
              // value={formData.name}
                onChange={(e) => { setUserData({ ...userData, UName: e.target.value }) }} 
                required
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address" 
              // value={formData.email}
                onChange={(e) => { setUserData({ ...userData, UEmail: e.target.value }) }}
              required
            />
          </div>
          <div className="form-group mt-3 ">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1 mb-2"
              placeholder="Password" 
              // value={formData.password}
                onChange={(e) => { setUserData({ ...userData, Password: e.target.value }) }}
                required
            />
          </div>
          <div className="form-group mt-3">
              <label>Address 1</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Address 1"
                // value={formData.address1}
                onChange={(e) => { setUserData({ ...userData, PAdd1: e.target.value }) }} 
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Address 2</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Address 2"
                // value={formData.address2}
                onChange={(e) => { setUserData({ ...userData, PAdd2: e.target.value }) }}
              />
            </div>
            <div className="form-group mt-3">
              <label>Pincode</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Pincode"
                // value={formData.pincode}
                onChange={(e) => { setUserData({ ...userData, Pincode: e.target.value }) }}
                required
              />
            </div>
            <div className="form-group mt-3">
              <label>Contact</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Contact"
                // value={formData.contact}
                onChange={(e) => { setUserData({ ...userData, Contact: e.target.value }) }}
                required
              />
            </div>
          
          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-primary" onClick={sendData} >
  Submit
</button>

          </div>
          
          <p className="text-end mt-2 mb-2">
          <span className="link-primary" 
          // onClick={changeAuthMode}
          >
              Sign In
            </span>
          </p>
        </div>
      </form>
      {/* </Modal> */}
      
    </div>
  )
}
