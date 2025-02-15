// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import Dashboard from './Dashboard';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
  

// const SignUp = () => {

//   const[FormData,setFormData]=useState({
//     email:'',
//     password:'',
//     designation:'',
//     adminCode:''
//   })
//   console.log(FormData);

  // const notify = () => toast("Account created successfully");
  // const navigate=useNavigate();
  // const notify=()=>{
  //   toast.success('Account created successfully')
  //   navigate('/admin');
  //  }

  // function signupHandler(event){
  //   const{ name, value, checked, type}=event.target;
  //   setFormData((prevFormData)=>{
  //     return{
  //       ...prevFormData,
  //       [name]: type === 'checkbox' ? checked : value,
  //     }
  //   })
  // }

  // const AsubmitHandler=async(e)=>{
  //   e.preventDefault();
  //   console.log('finally printing the admin signup data');
  //   console.log(FormData);
  //   try {
  //     const response = await fetch('http://localhost:4000/api/v1/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(FormData),
  //     });

  //     if (response.ok) {
  //       const result = await response.json();
  //       alert('Grievance Registered successfully: '+ JSON.stringify(result) );
  //     } else {
  //       alert('Error: ');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // }
//   const navigate = useNavigate();
//   const AsubmitHandler = async (e) => {
//     e.preventDefault();
//     console.log('Sending admin signup data:', FormData);
    
//     try {
//       const response = await fetch('http://localhost:4000/api/v1/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(FormData),
//       });
  
//       const result = await response.json();
  
//       if (response.ok) {
//         toast.success('Account created successfully');
//         // You can navigate here after success if needed
//         navigate('/dashboard');
//       } else {
//         toast.error('Error: ' + result.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       toast.error('There was an error with the request');
//     }
//   };
 

  


  
  
//   return (
//     <div>
//       <div class="flex justify-center items-center mt-16">
//     <div class="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
//         <form onSubmit={AsubmitHandler}>
//             <label class="block text-gray-700 text-sm  text-start">Enter Your Email</label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text" name="email" id='email' onChange={signupHandler} value={FormData.email} required /><br></br>
//             <label class="block text-gray-700 text-sm  text-start mt-2">Create Password</label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                type="password" name="password" onChange={signupHandler} value={FormData.password} required/><br></br>
//             {/* <label class="block text-gray-700 text-sm  text-start mt-2">Hash Key</label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"type="password" name="password" /><br></br> */}
//             {/* this is for dropdown menu for designataion */}
//             <label htmlFor='designation'>Designation</label>
//             <select
//               onChange={signupHandler}
//               id='designation'
//               name="designation"
//               value={FormData.designation}
//               required
//             >
//             {/* "Mentor","Hostel","Academics" */}
//             <option value=""></option>
//             <option value="Hostel">Hostel Authority</option>
//             <option value="Academics">Grievance Committee</option>
//             <option value="Mentor">Mentor</option>
//             </select>

//             <label class="block text-gray-700 text-sm  text-start mt-2">Admin Code</label>
//             <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                type="password" name="adminCode" onChange={signupHandler} value={FormData.adminCode} required/><br></br>
            

//         </form> <br></br>
//         <button class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg"type='submit'>Create Account</button>
//         <ToastContainer/>
//         </div>
//         </div>
//     </div>
//   )
// }

// export default SignUp

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    designation: '',
    adminCode: '',
  });

  const navigate = useNavigate();

  function signupHandler(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  const AsubmitHandler = async (e) => {
    e.preventDefault();
    console.log('Sending admin signup data:', FormData);

    try {
      const response = await fetch('http://localhost:4000/api/v1/adminsingup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Account created successfully');
        navigate('/admin');
      } else {
        toast.error('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('There was an error with the request');
    }
  };

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
        <form onSubmit={AsubmitHandler}>
          <label className="block text-gray-700 text-sm text-start">Enter Your Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            onChange={signupHandler}
            value={FormData.name}
            required
          />

          <label className="block text-gray-700 text-sm text-start mt-2">Enter Your Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            onChange={signupHandler}
            value={FormData.email}
            required
          />

          <label className="block text-gray-700 text-sm text-start mt-2">Create Password</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            onChange={signupHandler}
            value={FormData.password}
            required
          />

          <label className="block text-gray-700 text-sm text-start mt-2">Designation</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={signupHandler}
            name="designation"
            value={FormData.designation}
            required
          >
            <option value=""></option>
            <option value="hostel">Hostel </option>
            <option value="academics">Academics</option>
            <option value="other">Other</option>
            <option value="administrative">Administrative</option>
            <option value="facility">Facility</option>
          </select>

          <label className="block text-gray-700 text-sm text-start mt-2">Admin Code</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="adminCode"
            onChange={signupHandler}
            value={FormData.adminCode}
            required
          />

          <button
            className="bg-red-500 text-white font-bold py-2 px-4 mt-4 rounded-lg w-full"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;