// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import CloseButton from 'react-bootstrap/CloseButton';
// import './Style.css';
// import React, { useState } from "react"
// import Modal from "react-modal";
// import axios from 'axios';
// import Signup from './Signup';

// const modalStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     maxHeight: "75%", // Adjust the max height as needed
//     overflow: "auto", // Enable scrolling if the content overflows the max height
//     padding: 0,
//     transform: "translate(-50%, -50%)",
//   },
// };





//   // const handleSignUp = (e) => {
//   //   e.preventDefault();
//   //   axios.post("http://localhost:8081/signin_user", formData)
//   //     .then(response => {
//   //       if (response.status === 200) {
//   //         let d = response.data;
//   //         console.log(d);
//   //         console.log(response.status);
//   //         setMessage("User authenticated successfully");

//   //         // Close the sign-in page or redirect to another page
//   //         // You can implement this based on your application's structure
//   //         // For example, set a state to conditionally render the sign-in page or redirect
//   //       }
//   //     })
//   //     .catch(error => {
//   //       console.error(error);
//   //       setMessage("Error authenticating user");
//   //     });
//   // };

//   let [Mode, setMode] = useState("signin");
//   let [Open, setOpen] = useState(true);

//   const changeAuthMode = () => {
//     setMode(Mode === "signin" ? "signup" : "signin");
//   }

//   const closeModal = () => {
//     setOpen(false);
//   }

  
//   // if (Mode === "signin") {
//     export default function AuthForm(){
//       const [UName, setName] = useState('');
//         const [UEmail, setEmail] = useState('');
//         const [Password, setPassword] = useState('');
//         const [errorMessage, setErrorMessage] = useState('');
      
//         const handleLogin = () => {
//           axios.post('http://localhost:8081/api/login', { UEmail, Password })
//             .then(response => {
//               // Assuming the API response contains a success indicator
//               if (response.data.success) {
//                 // Redirect to '/Box3' on successful login
//                 console.log('Login successful');
//               } else {
//                 setErrorMessage('Incorrect email or password');
//               }
//             })
//             .catch(error => {
//               console.error('Login error:', error);
//               setErrorMessage('Error during login');
//             });
//         };
//     return (
      
//       <div className="form-container p-0">
//         <Modal
//         // isOpen={Open}
//         // onRequestClose={closeModal}
//         // style={modalStyles}
//         // contentLabel="Auth Modal"
//       >
//         <div className='cross2 float-end m-3'><Link to="/">  <CloseButton /></Link></div>

//         <form className="Auth-form ">
        
//           <div className="Auth-form-content">
//             <h1 className="form-title text-center">Sign In</h1>
//             <div className="text-center">
//               Not registered yet?{" "}
//               <Link to="/Signup">
//                 <span className="link-primary" >Sign Up</span>
//               </Link>
//             </div>
//             <div className="form-group mt-3">
//               <label>Name</label>
//               <input
//                 type="text"
//                 className="form-control mt-1"
//                 // value={formData.name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name" required
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 // value={formData.email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email" required
//               />
//             </div>
//             <div className="form-group mt-3 ">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1 mb-2"
//                 placeholder="Enter password"
//                 //  value={formData.password}
//                  onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className='mb-4 '>
//                          <input type='checkbox' className=' custom-control custom-cheakbox' id='check' />
//                         <label htmlFor='check' className='custom-input-label'>Remember me </label>
//                     </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary" onClick={handleLogin}>
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-3">
//               Forgot <a href="#">password?</a>
//             </p>
//           </div>
//         </form>
//         </Modal>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {/* Add the Signup component */}
//       <Signup />
//       </div>
//     )
//   }








// import { Link, useLocation } from 'react-router-dom';
// import CloseButton from 'react-bootstrap/CloseButton';
// import React, { useState, useEffect } from 'react';
// import Modal from 'react-modal';
// import axios from 'axios';
// import Signup from './Signup';

// const modalStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     maxHeight: '75%', // Adjust the max height as needed
//     overflow: 'auto', // Enable scrolling if the content overflows the max height
//     padding: 0,
//     transform: 'translate(-50%, -50%)',
//   },
// };

// export default function AuthForm() {
//   const [UName, setName] = useState('');
//   const [UEmail, setEmail] = useState('');
//   const [Password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   // const [isOpen, setIsOpen] = useState(false);

//   const location = useLocation();

//   const handleLogin = () => {
//     axios.post('http://localhost:8081/api/login', { UEmail, Password }, { timeout: 5000 })
//       .then(response => {
//         // Assuming the API response contains a success indicator
//         if (response.data.success) {
//           // Redirect to '/Box3' on successful login
//           console.log('Login successful');
//         } else {
//           setErrorMessage('Incorrect email or password');
//         }
//       })
//       .catch(error => {
//         console.error('Login error:', error);
//         setErrorMessage('Error during login');
//       });
//   };

//   // useEffect(() => {
//   //   // Check if the current route is the one where you want to open the modal
//   //   if (location.pathname === '/pages/Login') {
//   //     setIsOpen(true);
//   //   }
//   // }, [location.pathname]);

//   // const closeModal = () => {
//   //   setIsOpen(false);
//   // };

//   return (
//     <div className="form-container p-0">
//       {/* <Modal isOpen={isOpen} style={modalStyles} contentLabel="Auth Modal"> */}
//         <div className="cross2 float-end m-3">
//           <Link to="/">
//             {/* <CloseButton onClick={closeModal} /> */}
//           </Link>
//         </div>

//         <form className="Auth-form">
//           <div className="Auth-form-content">
//             <h1 className="form-title text-center">Sign In</h1>
//             <div className="text-center">
//               Not registered yet?{' '}
//               <Link to="/Signup">
//                 <span className="link-primary">Sign Up</span>
//               </Link>
//             </div>
//             {/* <div className="form-group mt-3">
//               <label>Name</label>
//               <input
//                 type="text"
//                 className="form-control mt-1"
//                 value={UName}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter name"
//                 required
//               />
//             </div> */}
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 value={UEmail}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email"
//                 required
//               />
//             </div>
//             <div className="form-group mt-3 ">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1 mb-2"
//                 placeholder="Enter password"
//                 value={Password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary" onClick={handleLogin}>
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-3">
//               Forgot <a href="#">password?</a>
//             </p>
//           </div>
//         </form>
//       {/* </Modal> */}
//       {errorMessage && <p className="error-message">{errorMessage}</p>}

//       {/* Add the Signup component */}
//       <Signup />
//     </div>
//   );
// }



import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const [UEmail, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    axios.post('http://localhost:8081/api/login', { UEmail, Password })
      .then(response => {
        if (response.data.success) {
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

  return (
    <>
      {/* <h2 className='loginHead'>Login</h2> */}
      <div className="form-container d-flex align-items-center justify-content-center p-4">
        <div className='cross2 float-end m-3'>
          <Link to="/">
            {/* You need to import CloseButton and use it here */}
            {/* <CloseButton /> */}
          </Link>
        </div>

        <form className="Auth-form">
          <div className="Auth-form-content">
            <h1 className="form-title text-center">Sign In</h1>
            <div className="text-center">
              Not registered yet?{" "}
              <Link to="/Signup">
                <span className="link-primary">Sign Up</span>
              </Link>
            </div>
            <div className="form-group mt-3">
              <label>Email:</label>
              <input type="text" value={UEmail} className="form-control mt-1" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" required/>
            </div>
            <div className="form-group mt-3">
              <label>Password:</label>
              <input type="password" value={Password} className="form-control mt-1" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" required/>
            </div>
            <div className='mb-4'>
              <input type='checkbox' className=' custom-control custom-cheakbox' id='check' />
              <label htmlFor='check' className='custom-input-label'>Remember me </label>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" onClick={handleLogin} className="btn btn-primary">Login</button>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p className="text-center mt-3">Forgot <Link to="/Signup">password?</Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;


