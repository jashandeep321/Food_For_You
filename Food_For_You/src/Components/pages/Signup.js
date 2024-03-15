import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [userData, setUserData] = useState({
    // UID: '',
    UName: '',
    UEmail: '',
    Password: '',
    PAdd1: '',
    PAdd2: '',
    Pincode: '',
    Contact: '',
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

  return (
    <>
      <div className="form-container d-flex align-items-center justify-content-center p-4">
        <div className='cross2 float-end m-3'>
          <Link to="/">
            {/* You need to import CloseButton and use it here */}
            {/* <CloseButton /> */}
          </Link>
        </div>

        <form className="Auth-form">
          <div className="Auth-form-content">
            <h1 className="form-title text-center">Sign Up</h1>
            <div className="text-center">
              Already registered?{" "}
              <Link to="/Auth">
                <span className="link-primary">Sign In</span>
              </Link>
            </div>
            {/* <div className="form-group mt-3">
              <label>User </label><br />
              <input type="number" onChange={(e) => { setUserData({ ...userData, UID: e.target.value }) }} placeholder="e.g Jane Doe" className="form-control mt-1" required />
            </div> */}
            <div className="form-group mt-3">
              <label>Full Name</label><br />
              <input type="text" onChange={(e) => { setUserData({ ...userData, UName: e.target.value }) }} placeholder="e.g Jane Doe" className="form-control mt-1" required />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input type="email" onChange={(e) => { setUserData({ ...userData, UEmail: e.target.value }) }} placeholder="Email Address" className="form-control mt-1" required />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input type="password" onChange={(e) => { setUserData({ ...userData, Password: e.target.value }) }} placeholder="Password" className="form-control mt-1" required />
            </div>
            <div className="form-group mt-3">
              <label>Address 1</label>
              <input type="text" onChange={(e) => { setUserData({ ...userData, PAdd1: e.target.value }) }} required className="form-control mt-1" placeholder="Enter Address 1" />
            </div>
            <div className="form-group mt-3">
              <label>Address 2</label>
              <input  type="text" onChange={(e) => { setUserData({ ...userData, PAdd2: e.target.value }) }} className="form-control mt-1"
                placeholder="Enter Address 2" />
            </div>
            <div className="form-group mt-3">
              <label>Pincode</label>
              <input  type="number" onChange={(e) => { setUserData({ ...userData, Pincode: e.target.value }) }} required className="form-control mt-1"
                placeholder="Enter Pincode" />
            </div>
            <div className="form-group mt-3">
              <label>Contact</label>
              <input type="number" onChange={(e) => { setUserData({ ...userData, Contact: e.target.value }) }} required className="form-control mt-1"
                placeholder="Enter Contact" />
            </div>
            <div className="d-grid gap-2 mt-4">
            <button className="btn btn-primary" type="button" onClick={sendData} >Sign Up</button>
            </div>
            <p className="text-center mt-2 mb-2">Have an account? <Link to="/Login">Login</Link></p>
          </div>
        </form>
      </div>
    </>
  );
}

export default Signup;














// import React from 'react'
// // import { Link} from 'react-router-dom';

// import { useState } from "react";
// import axios from "axios";

// export default function Signup() {
//   // const currentDate = new Date().toISOString().split('T')[0];
//   const [userData, setUserData] = useState({
//     UID: '',
//         UName: '',
//         UEmail: '',
//         Password: '',
//         PAdd1: '',
//         PAdd2: '',
//         Pincode: '',
//         Contact: '',
//   });

//   function sendData() {
//     axios.post("http://localhost:8081/signup_user", userData)
//       .then(response => {
//         if (response.status === 200) {
//           let d = response.data;
//           console.log(d);
//           console.log(response.status);
          
          
//         }
//       })
//       .catch(error => {
//         console.error("Error sending data:", error);
//       });
//   }

//   return (
//     <>
//       <style>
//         {`
//         .signupHead{
//           color: #006400;
//           font-weight:bold;
//           font-size: 50px
          
//         }
//           .signupFormContainer {
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin-top: 20px; /* Adjusted margin top */
//             margin-bottom: 20px; /* Adjusted margin bottom */
//           }

//           .signupForm {
//             background-color: #e0f2e9; /* Light green background */
//             border-radius: 8px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//             padding: 20px;
//             width: 300px;
//             max-width: 90%; /* Adjusted maximum width */
//           }

//           .signupLabel {
//             font-weight: bold;
//             margin-bottom: 5px;
//             display: block;
//             color: #006400; /* Dark green color */
//           }

//           .signupInput {
//             width: 100%;
//             padding: 8px;
//             margin-bottom: 10px;
//             box-sizing: border-box;
//             border: 1px solid #4caf50; /* Dark green border */
//             border-radius: 4px;
//           }

//           .signupButton {
//             background-color: #4caf50; /* Dark green color */
//             color: #fff;
//             cursor: pointer;
//             padding: 10px;
//             border: none;
//             border-radius: 4px;
            
//           }
//           .signupLogin{
//             color:#006400;
            
//           }
//           .signupButton:hover {
//             background-color: #45a049; /* Darker green on hover */
//           }

//           /* Add some additional styling for better readability */
//           .signupDiv {
//             margin-bottom: 15px;
//           }
//         `}
//       </style>
//       <h2 className="signupHead" align="center">Register</h2>
//       <div className="signupFormContainer">
       
//         <form className="signupForm">
         
//           <div className="signupDiv">
//             <label className="signupLabel">Enter id: </label><br />
//             <input className="signupInput" type="number" onChange={(e) => { setUserData({ ...userData, UID: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <label className="signupLabel">Enter name: </label><br />
//             <input className="signupInput" type="text" onChange={(e) => { setUserData({ ...userData, UName: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <label className="signupLabel">Enter email: </label><br />
//             <input className="signupInput" type="email" onChange={(e) => { setUserData({ ...userData, UEmail: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <label className="signupLabel">Enter Password: </label><br />
//             <input className="signupInput" type="number" onChange={(e) => { setUserData({ ...userData, Password: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <label className="signupLabel">Enter add1: </label><br />
//             <input className="signupInput" type="varchar" onChange={(e) => { setUserData({ ...userData, PAdd1: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <label className="signupLabel">Enter Address2: </label><br />
//             <input className="signupInput" type="text" onChange={(e) => { setUserData({ ...userData, PAdd2: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <label className="signupLabel">Enter code: </label><br />
//             <input className="signupInput" type="number" onChange={(e) => { setUserData({ ...userData, Pincode: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <label className="signupLabel">Enter contact: </label><br />
//             <input className="signupInput" type="number" onChange={(e) => { setUserData({ ...userData, Contact: e.target.value }) }} />
//           </div>
//           <div className="signupDiv">
//             <input className="signupButton" type="button" onClick={sendData} value="Register" />
//           </div>
//           {/* <p className="signupLogin">Have an account? <Link to="/Login">Login</Link></p> */}
//         </form>
//       </div>
//     </>
//   );
// }