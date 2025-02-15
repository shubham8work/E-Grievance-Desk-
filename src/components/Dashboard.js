// import React, { useEffect, useState } from 'react'
// import AdminNav from './AdminNav';
// const API="http://localhost:4000/api/v1/fetchingdata";


// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);  // State to hold fetched posts
//   const [loading, setLoading] = useState(true);  

//   const fetchUsers = async (url) => {
//     try {
//       const response = await fetch(url);
//       const result = await response.json();  // Assuming response returns a JSON object
//       console.log(result);
//       if (result.success) {
//         setPosts(result.data);  // Accessing the `data` array from the response
//       }
//       setLoading(false);  // Set loading to false after data is fetched
//     } catch (error) {
//       console.log(error);
//       setLoading(false);  // Stop loading if an error occurs
//     }
//   };


//   useEffect(()=>{
//     fetchUsers(API);

//   },[])

//   return (
//     <div>
//       <br></br>
//       {/* <AdminNav/> */}
      
      
//       <div className="container-list">
//         {loading ? (
//           <h1>Loading...</h1>  // Show loading indicator while fetching data
//         ) : posts.length > 0 ? (
//           posts.map((postItem, index) => (
//             <div class="flex justify-center items-center mt-10" >
//             <div class="w-7/12 bg-slate-100 rounded-lg shadow-md p-4" key={index}>

              
//               <h3 className='text-left font-bold'>{postItem.grievancecategory}</h3>
//               <h3 className='text-left font-thin'>Name: {postItem.name}</h3>
//               <h3 className='text-left font-thin' >URN: {postItem.urn}</h3>
//               <h3 className='text-left font-thin '>Department: {postItem.department}</h3>
//               <h3 className='text-left font-thin'>Description: {postItem.grievancedescription}</h3>
              
//              </div>
              

//             </div>
//           ))
//         ) : (
//           <h1>No Data Available</h1>  // Show message if no posts are available
//         )}
//       </div>
//     </div>
//   )
// }

// export default Dashboard




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const API = "http://localhost:4000/api/v1/fetchingdata";

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const fetchUsers = async (url) => {
//     try {
//       const response = await fetch(url);
//       const result = await response.json();
//       if (result.success) {
//         setPosts(result.data);
//       }
//       setLoading(false);
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(API);
//   }, []);

//   const handleCardClick = (postItem) => {
//     navigate(`/carddetails`, { state: { post: postItem } });
//   };

//   return (
//     <div>
//      <button>processing</button>
//      <button>resolved</button>
//       <div className="container-list">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : posts.length > 0  ? (
//           posts.map((postItem, index) => (
//             <div
//               key={index}
//               className="flex justify-center items-center mt-10"
//               onClick={() => handleCardClick(postItem)}
//               style={{ cursor: 'pointer' }}
//             >
//               <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//                 <h3 className="text-left font-bold">{postItem.grievancecategory}</h3>
//                 <h3 className="text-left font-thin">Name: {postItem.name}</h3>
//                 <h3 className="text-left font-thin">URN: {postItem.urn}</h3>
//                 <h3 className="text-left font-thin">Department: {postItem.department}</h3>
//                 <h3 className="text-left font-thin">Description: {postItem.grievancedescription}</h3>
//                 <h3 className="text-left font-thin">ID: {postItem._id}</h3>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h1>No Data Available</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]); // State for filtered data
//   const [loading, setLoading] = useState(false); // State for loading
//   const navigate = useNavigate(); // Initialize navigate

//   // Fetch all data from API
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(API);
//       const result = await response.json();
//       if (result.success) {
//         setPosts(result.data);
//         setFilteredPosts(result.data); // Initially show all data
//       } else {
//         console.error("Failed to fetch data:", result.message);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//     setLoading(false);
//   };

//   // Fetch data when the component is loaded
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Function to filter posts by grievstatus
//   const showProcessingPosts = () => {
//     const processingPosts = posts.filter((post) => post.grievstatus ==="0");
//     setFilteredPosts(processingPosts);
//   };

//   // Function to handle card click and navigate to CardDetails
//   const handleCardClick = (postItem) => {
//     navigate('/carddetails', { state: { post: postItem } }); // Pass the post data to CardDetails
//   };

//   return (
//     <div>
//       {/* Filter Buttons */}
//       <div className="flex justify-start gap-4 mb-4">
//         <button
//           className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
//           onClick={showProcessingPosts} // Filter posts with grievstatus = 0
//         >
//           Processing
//         </button>
//         <button
//           className="bg-gray-500 text-white font-bold py-2 px-4 rounded"
//           onClick={() => setFilteredPosts(posts)} // Show all posts
//         >
//           Show All
//         </button>
//       </div>

//       {/* Cards Container */}
//       <div className="container-list">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : filteredPosts.length > 0 ? (
//           filteredPosts.map((postItem, index) => (
//             <div
//               key={index}
//               className="flex justify-center items-center mt-10"
//               style={{ cursor: 'pointer' }}
//               onClick={() => handleCardClick(postItem)} // Navigate on click
//             >
//               <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//                 <h3 className="text-left font-bold">{postItem.grievancecategory}</h3>
//                 <h3 className="text-left font-thin">Name: {postItem.name}</h3>
//                 <h3 className="text-left font-thin">URN: {postItem.urn}</h3>
//                 <h3 className="text-left font-thin">Department: {postItem.department}</h3>
//                 <h3 className="text-left font-thin">Description: {postItem.grievancedescription}</h3>
//                 <h3 className="text-left font-thin">ID: {postItem._id}</h3>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h1>No Data Available</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [posts, setPosts] = useState([]);
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const location = useLocation(); // Access designation passed from Admin
//   const navigate = useNavigate();

//   const designation = location.state?.designation; // Get the designation from state

  

//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//         const response = await fetch(`http://localhost:4000/api/v1/fetchDataByGrievanceCategory/${designation}`);
//         const result = await response.json();
//         if (result.success) {
//             setFilteredPosts(result.data);
//         } else {
//             console.error('Failed to fetch data:', result.message);
//         }
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
//     setLoading(false);
// };

// // Fetch data when the component loads
// useEffect(() => {
//     fetchUsers(designation); // Pass designation as a parameter
// }, [designation]);

//   // Fetch data when the component loads
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Handle card click
//   const handleCardClick = (postItem) => {
//     navigate('/carddetails', { state: { post: postItem } });
//   };

//   return (
//     <div>
//       <div className="container-list">
//         {loading ? (
//           <h1>Loading...</h1>
//         ) : filteredPosts.length > 0 ? (
//           filteredPosts.map((postItem, index) => (
//             <div
//               key={index}
//               className="flex justify-center items-center mt-10"
//               style={{ cursor: 'pointer' }}
//               onClick={() => handleCardClick(postItem)}
//             >
//               <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//                 <h3 className="text-left font-bold">{postItem.grievancecategory}</h3>
//                 <h3 className="text-left font-thin">Name: {postItem.name}</h3>
//                 <h3 className="text-left font-thin">URN: {postItem.urn}</h3>
//                 <h3 className="text-left font-thin">Department: {postItem.department}</h3>
//                 <h3 className="text-left font-thin">Description: {postItem.grievancedescription}</h3>
//                 <h3 className="text-left font-thin">ID: {postItem._id}</h3>
//               </div>
//             </div>
//           ))
//         ) : (
//           <h1>No Data Available</h1>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // const designation = location.state?.designation;
  const { designation, name } = location.state || {}; // Admin's designation
  console.log(designation);
  console.log(name);
  // const name=location.state?.name;
  // console.log(name);
  // console.log(location.state)
  // console.log(location.state)
  // console.log(location.state?.designation);
  // const name=location.state?.name;
  // console.log('admin Name :',name);

  // Log to check if the designation is correctly passed
  console.log('Admin Designation:', designation);

  // Fetch data based on grievance category or designation
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4000/api/v1/fetchDataByGrievanceCategory/${designation}`);
      const result = await response.json();

      console.log('Fetched posts:', result); // Log to verify the API response

      if (result.success) {
        setPosts(result.data); // Store all data
        setFilteredPosts(result.data); // Initially show all data
      } else {
        console.error('Failed to fetch data:', result.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setLoading(false);
  };

  // Fetch data when the component loads
  useEffect(() => {
    fetchUsers();
  }, [designation]);

  // Handle card click to navigate to detailed view
  const handleCardClick = (postItem) => {
    navigate('/carddetails', { state: { post: postItem } });
  };

  // Filter posts based on selected filter (Show All, Processing, Resolved, Pending)
  const handleFilter = (status) => {
    let filtered = [];
    
    console.log(`Applying filter for status: ${status}`);
    
    // Ensure grievancecategory is used instead of designation
    const adminDesignation = designation;  // Example: admin designation is 'hostel'
    
    // Show all posts that match the admin's grievance category
    if (status === 'all') {
      filtered = posts.filter((post) => {
        console.log(`Post ID: ${post._id}, grievancecategory: ${post.grievancecategory}`);
        return post.grievancecategory === adminDesignation; // Match based on grievancecategory
      });
    } 
    // Filter posts with 'grievstatus' "0" (Processing) and matching grievancecategory
    else if (status === 'processing') {
      filtered = posts.filter((post) => {
        const isProcessing = post.grievstatus === "0"; // Ensure string comparison for "0"
        console.log(`Post ID: ${post._id}, grievstatus: ${post.grievstatus}, isProcessing: ${isProcessing}`);
        return isProcessing && post.grievancecategory === adminDesignation;
      });
    } 
    // Filter posts with 'grievstatus' "1" (Resolved) and matching grievancecategory
    else if (status === 'resolved') {
      filtered = posts.filter((post) => {
        const isResolved = post.grievstatus === "1"; // Ensure string comparison for "1"
        console.log(`Post ID: ${post._id}, grievstatus: ${post.grievstatus}, isResolved: ${isResolved}`);
        return isResolved && post.grievancecategory === adminDesignation;
      });
    }
    // Filter posts with 'grievstatus' "-1" (Pending) and matching grievancecategory
    else if (status === 'pending') {
      filtered = posts.filter((post) => {
        const isPending = post.grievstatus === "-1"; // Ensure string comparison for "-1"
        console.log(`Post ID: ${post._id}, grievstatus: ${post.grievstatus}, isPending: ${isPending}`);
        return isPending && post.grievancecategory === adminDesignation;
      });
    }
  
    console.log('Filtered posts:', filtered);
    setFilteredPosts(filtered); // Update filtered posts state
  };

  return (
    <div>
      {/* Buttons for filtering */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => handleFilter('all')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Show All
        </button>
        <button
          onClick={() => handleFilter('processing')}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Processing
        </button>
        <button
          onClick={() => handleFilter('resolved')}
          className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2"
        >
          Resolved
        </button>
        <button
          onClick={() => handleFilter('pending')}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Pending
        </button>
      </div>

      {/* Display posts */}
      <div className="container-list mt-10">
        {loading ? (
          <h1>Loading...</h1>
        ) : filteredPosts.length > 0 ? (
          filteredPosts.map((postItem, index) => (
            <div
              key={index}
              className="flex justify-center items-center mt-4"
              style={{ cursor: 'pointer' }}
              onClick={() => handleCardClick(postItem)}
            >
              <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
              
              
                <h3 className="text-left font-bold">{postItem.grievancecategory}</h3>
                <h3 className="text-right font-bold">{postItem.updatedDate}</h3>
                <h3 className="text-left font-bold">{name}</h3>
                
                <h3 className="text-left font-thin"><strong>Name:</strong> {postItem.name}</h3>
                <h3 className="text-left font-thin"><strong>URN:</strong> {postItem.urn}</h3>
                <h3 className="text-left font-thin"><strong>Department:</strong> {postItem.department}</h3>
                <h3 className="text-left font-thin"><strong>Description:</strong> {postItem.grievancedescription}</h3>
                <h3 className="text-left font-thin"><strong>Contact No:</strong> {postItem.mobile}</h3>
                <h3 className="text-left font-thin"><strong>ID:</strong> {postItem._id}</h3>
              </div>
            </div>
          ))
        ) : (
          <h1>No Data Available</h1>
        )}
      
      </div>
      
    </div>
  );
};

export default Dashboard;



