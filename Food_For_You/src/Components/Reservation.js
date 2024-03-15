// import React, { useState } from "react";
// import sec21 from '../img/sec21.jpg';
// import sec3 from '../img/sec3.jpg';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// function Reservation() {
//   const getCurrentTime = () => {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     return `${hours}:${minutes}`;
//   };
//   const [formData, setFormData] = useState({
//     UName: '',
//     REmail: '',
//     RDate: '',
//     RTime: '',
//     Rcount: '',
   
//   });
//   // function sendData() {
//   //   axios.post("http://localhost:8081/reservation_user", formData)
//   //     .then(response => {
//   //       if (response.status === 200) {
//   //         let d = response.data;
//   //         console.log(d);
//   //         console.log(response.status);
//   //       }
//   //     })
//   //     .catch(error => {
//   //       console.error("Error sending data:", error);
//   //     });
//   // }
//   const sendData = () => {
//     axios.post("http://localhost:8081/reservation_user", formData)
//       .then(response => {
//         if (response.status === 200) {
//           const tableNumber = response.data.tableNumber;
//           console.log('Table Number:', tableNumber);
//           // Handle the table number as needed (e.g., display it to the user)
//         }
//       })
//       .catch(error => {
//         console.error("Error sending data:", error);
//       });
//   };
//   // const generateRandomNumber = () => {
//   //   if (formData.fname && formData.email && formData.date && formData.time && formData.people) {
//   //     const randomNumber = random(1, 15);
//   //     const message = `*Table No. ${randomNumber} is booked on the name of ${formData.fname} for ${formData.people} people.`;
//   //     document.querySelector('.demo').innerHTML = message;
//   //     clearForm();
//   //   }
//   // };

//   const random = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

  
//   // const clearForm = () => {
//   //   setFormData({
//   //     fname: "",
//   //     email: "",
//   //     date: "",
//   //     time: "",
//   //     people: "",
//   //   });
//   // };

//   return (
//     <section className="booktable m-5">
//       <div className="text text-center mt-5">
//         <h4 className="head fw-bold">RESERVATION</h4>
//         <h1 className="events mb-5 pb-5">BOOK YOUR TABLE</h1>
//       </div>

//       <form name="myForm" onSubmit={(e) => e.preventDefault()} className="pb-5">
//         <div className="d-flex-justify-content-center">
//           <div className="d-flex justify-content-center">
//             <div className="mb-4 col-sm-3 col-lg-3 me-4">
//               <input
//                 type="text"
//                 id="fname"
//                 className="name form-control form-control-lg"
//                 name="fname"
//                 placeholder="NAME"
//                 // value={formData.fname}
//                 onChange={(e) => setFormData({ ...formData, UName: e.target.value })}
//                 minLength="3"
//                 maxLength="40"
//                 required
//               />
//             </div>
//             <div className="mb-4 col-sm-3 col-lg-3">
//               <input
//                 type="time"
//                 id="time"
//                 className="name form-control form-control-lg"
//                 name="time"
//                 placeholder={getCurrentTime()} 
//                 defaultValue={getCurrentTime()} 
//                 onChange={(e) => setFormData({ ...formData, RTime: e.target.value })}
//                 required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="d-flex-justify-content-center">
//           <div className="d-flex justify-content-center">
//             <div className="mb-4 col-sm-3 col-lg-3 me-4">
//               <input
//                 type="email"
//                 id="email"
//                 className="name form-control form-control-lg"
//                 name="lname"
//                 placeholder="EMAIL@gmail.com"
//                 pattern=".+@gmail\.com"
//                 size="30"
//                 // value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, REmail: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="mb-4 col-sm-3 col-lg-3">
//               <input
//                 type="number"
//                 min="1"
//                 max="20"
//                 id="no"
//                 className="name form-control form-control-lg"
//                 name="people"
//                 placeholder="Count of PEOPLE"
//                 // value={formData.people}
//                 onChange={(e) => setFormData({ ...formData, Rcount: e.target.value })}
//                 required
//               />
//             </div>
//           </div>
//         </div>

//         <div className="d-flex-justify-content-center">
//           <div className="d-flex justify-content-center">
//             <div className="mb-4 col-sm-3 me-4 col-lg-3">
//               <input
//                 type="date"
//                 id="date"
//                 className="name form-control form-control-lg"
//                 name="date"
//                 placeholder="DATE"
//                 // value={formData.date}
//                 onChange={(e) => setFormData({ ...formData, RDate: e.target.value })}
//                 required
//               />
//             </div>
//             <div className="mb-4 col-sm-3 col-lg-3">
//               <button className="now rounded w-100" type="submit" onClick={sendData}>
//                 FIND A TABLE
//               </button>
//             </div>
//           </div>
//         </div>
//       </form>
//       <div className="demo text-center text-danger mb-5"></div>
//     </section>
//   );
// }

// export default Reservation;
import React, { useState } from "react";
import axios from 'axios';

function Reservation() {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    UName: '',
    REmail: '',
    RDate: '',
    RTime: '',
    Rcount: '',
  });

  const [message, setMessage] = useState('');

  const sendData = () => {
    axios.post("http://localhost:8081/reservation_user", formData)
      .then(response => {
        if (response.status === 200) {
          const tableNumber = response.data.tableNumber;
          if (tableNumber) {
            setMessage(`Table No. ${tableNumber} is booked on the name of ${formData.UName} for ${formData.Rcount}`);
          } else {
            setMessage('Reservation unsuccessful. No available tables for the given criteria.');
          }
        }
      })
      .catch(error => {
        console.error("Error sending data:", error);
        setMessage('Error sending data. Please try again.');
      });
  };

  return (
    <section className="booktable m-5">
      <div className="text text-center mt-5">
        <h4 className="head fw-bold">RESERVATION</h4>
        <h1 className="events mb-5 pb-5">BOOK YOUR TABLE</h1>
      </div>

      <form name="myForm" onSubmit={(e) => e.preventDefault()} className="pb-5">
        <div className="d-flex-justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="mb-4 col-sm-3 col-lg-3 me-4">
              <input
                type="text"
                id="fname"
                className="name form-control form-control-lg"
                name="fname"
                placeholder="NAME"
                onChange={(e) => setFormData({ ...formData, UName: e.target.value })}
                minLength="3"
                maxLength="40"
                required
              />
            </div>
            <div className="mb-4 col-sm-3 col-lg-3">
              <input
                type="time"
                id="time"
                className="name form-control form-control-lg"
                name="time"
                placeholder={getCurrentTime()} 
                defaultValue={getCurrentTime()} 
                onChange={(e) => setFormData({ ...formData, RTime: e.target.value })}
                required
              />
            </div>
          </div>
        </div>
        <div className="d-flex-justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="mb-4 col-sm-3 col-lg-3 me-4">
              <input
                type="email"
                id="email"
                className="name form-control form-control-lg"
                name="lname"
                placeholder="EMAIL@gmail.com"
                pattern=".+@gmail\.com"
                size="30"
                onChange={(e) => setFormData({ ...formData, REmail: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 col-sm-3 col-lg-3">
              <input
                type="number"
                min="1"
                max="20"
                id="no"
                className="name form-control form-control-lg"
                name="people"
                placeholder="Count of PEOPLE"
                onChange={(e) => setFormData({ ...formData, Rcount: e.target.value })}
                required
              />
            </div>
          </div>
        </div>

        <div className="d-flex-justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="mb-4 col-sm-3 me-4 col-lg-3">
              <input
                type="date"
                id="date"
                className="name form-control form-control-lg"
                name="date"
                placeholder="DATE"
                onChange={(e) => setFormData({ ...formData, RDate: e.target.value })}
                required
              />
            </div>
            <div className="mb-4 col-sm-3 col-lg-3">
              <button className="now rounded w-100" type="submit" onClick={sendData}>
                FIND A TABLE
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="demo text-center text-danger mb-5">
        {message && <p>{message}</p>}
      </div>
    </section>
  );
}

export default Reservation;
