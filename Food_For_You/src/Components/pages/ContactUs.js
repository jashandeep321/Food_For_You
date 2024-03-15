// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import './Style.css';
// import CloseButton from 'react-bootstrap/CloseButton';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import axios from 'axios';
// const ContactUs = () => {
//   const [show, setShow] = useState(true); // Initialize the modal as visible

//   const handleClose = () => {
//     // You can put any logic here if needed
//     setShow(false); // Hide the modal
//   };

//   const [userData, setUserData] = useState({
//     UName: '',
//     UEmail: '',
//     Comments: '',
//   });

//   function sendData() {
//     axios.post("http://localhost:8081/contactus_user", userData)
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


// return (

//   <Modal show={show} onHide={handleClose}>
//     <div className='cross2 m-3 mb-0'><Link to="/">  <CloseButton className=' float-end' /></Link></div>

//     <Modal.Body>
//       <Form className="form-container p-5 pt-0">
//         <h1 className="form-title text-center">Contact Us</h1>
//         <div className="form-group mt-3">
//           <label>Name</label>
//           <input
//             type="name"
//             className="form-control mt-1"
//             placeholder="e.g Jane Doe" required
//             onChange={(e) => { setUserData({ ...userData, UName: e.target.value }) }}
//           />
//         </div>

//         <div className="form-group mt-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control mt-1"
//             placeholder="Email Address" required
//             onChange={(e) => { setUserData({ ...userData, UEmail: e.target.value }) }}
//           />
//         </div>

//         <div className="form-group mt-3">
//           {/* <label>Query</label> */}
//           <Form.Control as="textarea" rows={3} placeholder="Enter your message" required 
//           onChange={(e) => { setUserData({ ...userData, Comments: e.target.value }) }}
//           />
//         </div>


//         <div className="d-grid gap-2 mt-4">
//           <button type="submit" className="btn btn-primary" onSubmit={sendData}>
//             Submit
//           </button>
//         </div>
//       </Form>
//     </Modal.Body>
//   </Modal>

// );
// };

// export default ContactUs;


import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ContactUs = () => {
  const [userData, setUserData] = useState({
    UName: '',
    UEmail: '',
    Comments: '',
  });

  const sendData = () => {
    axios.post("http://localhost:8081/contactus_user", userData)
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
  };

  return (
    <div style={styles.modalContainer}>
      <div style={styles.closeButtonContainer}>
        <Link to="/">
          <button style={styles.closeButton}>&times;</button>
        </Link>
      </div>

      <div>
        <Form style={styles.formContainer}>
          <h1 style={styles.formTitle}>Contact Us</h1>

          <div style={styles.formGroup}>
            <label>Name</label>
            <input
              type="name"
              style={styles.input}
              placeholder="e.g Jane Doe" required
              onChange={(e) => { setUserData({ ...userData, UName: e.target.value }) }}
            />
          </div>

          <div style={styles.formGroup}>
            <label>Email address</label>
            <input
              type="email"
              style={styles.input}
              placeholder="Email Address" required
              onChange={(e) => { setUserData({ ...userData, UEmail: e.target.value }) }}
            />
          </div>

          <div style={styles.formGroup}>
            <Form.Control as="textarea" rows={3} placeholder="Enter your message" required
              style={styles.input}
              onChange={(e) => { setUserData({ ...userData, Comments: e.target.value }) }}
            />
          </div>

          <div style={styles.submitButtonContainer}>
            <button type="button" style={styles.submitButton} onClick={sendData}>
              Submit
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const styles = {
  modalContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px', // Adjust the width as needed
    width: '100%',
  },
  closeButtonContainer: {
    marginBottom: '0',
    textAlign: 'right',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  formContainer: {
    padding: '20px',
    paddingTop: '0',
  },
  formTitle: {
    textAlign: 'center',
    fontFamily: 'Gabelisa',
    marginBottom: '1rem',
    fontSize: '3.5rem',
  },
  formGroup: {
    marginTop: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
  },
  submitButtonContainer: {
    display: 'grid',
    gap: '2',
    marginTop: '20px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: 'white',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ContactUs;
