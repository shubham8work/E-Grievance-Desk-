// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const Admin = () => {

// const navigate = useNavigate();
// const goToDashboard=()=>{
//   navigate('/dashboard');
// }

//   const goToaAdminSignUp = () => {
//     navigate('/adminsignup');
//   };
  
//   return (
//   <div class="flex justify-center items-center mt-16">
//     <div class=" bg-slate-100 rounded-lg shadow-md p-8">
//         <form>
//             <label class="block text-gray-700 text-sm  text-start">Email</label>
//             <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     type="text" name="username" /><br></br>
//             <label class="block text-gray-700 text-sm  mt-4 text-start">Password</label>
//             <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"type="password" name="password" /><br></br>
            
//         </form> <br></br>
//         <button onClick={goToDashboard} class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg">Login</button>

//         <div><button onClick={goToaAdminSignUp}>Sign Up/Forgot Password</button></div>
//     </div>
//   </div>
//   )
// }

// export default Admin




import React, { useState,useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();


  // DESIGNATION
  const getDesignation = async()=>{
    if(!email || !password){
      alert("please fill details");
      return;
    }
    const response = await fetch('http://localhost:4000/api/v1/getdesignation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:email,password:password}),
    });
    const data = await response.json();
    console.log(data);
    if(!data.success){
      alert(data.message);
      return;
    }

    if(data.designation) {
      navigate('/dashboard', { state: { designation  : data.designation,name:data.name } }); // Pass selected designation
    }
    else{
      alert("error..");
    }
  }




  // // DASHBOARD
  // const goToDashboard = async() => {
  //   await getDesignation();
  //   if (designation) {
  //     navigate('/dashboard', { state: { designation } }); // Pass selected designation
  //   }
  // };



  // SIGNUP
  const goToaAdminSignUp = () => {
      navigate('/adminsignup');
  };



  return (
    <div className="flex justify-center items-center mt-16">
      <div className="bg-slate-100 rounded-lg shadow-md p-8">
        <form>
          <label className="block text-gray-700 text-sm text-start">Email</label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="username"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label className="block text-gray-700 text-sm mt-4 text-start">Password</label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />

          {/* Dropdown for designation
          <label className="block text-gray-700 text-sm mt-4 text-start">Select Designation</label>
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Designation</option>
            <option value="hostel">Hostel</option>
            <option value="academics">Academics</option>
            <option value="other">Other</option>
            <option value="administrative">Administrative</option>
            <option value="facility">Facility</option>
            
          </select> */}
        </form>
        <br />
        <button onClick={getDesignation} className="bg-red-500 text-white font-bold py-1 px-4 rounded-lg">
          Login
        </button>
        <div><button onClick={goToaAdminSignUp}>Sign Up/Forgot Password</button></div>
      </div>
    </div>
  );
};

export default Admin;