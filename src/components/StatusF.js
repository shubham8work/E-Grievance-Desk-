import React, { useState, useEffect } from 'react';

// const StatusF = () => {
//   const [grievanceData, setGrievanceData] = useState(null); // State to store fetched data

//   // Fetch the data from the API based on a specific ID
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/v1/register/672b51e10f21c33910e1ae2a'); // Replace with the ID you need
//         const data = await response.json();
        
//         console.log(data); // Log the response to check the data structure

//         // Check if the response contains data and set it
//         if (data.success && data.data) {
//           setGrievanceData(data.data); // Set the single object, not an array
//         } else {
//           console.error('No data found');
//         }
//       } catch (error) {
//         console.error('Error fetching grievance data:', error);
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array to run this effect only once

//   // If data is not fetched yet, display loading text
//   if (!grievanceData) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-8 bg-slate-100 rounded-lg shadow-md">
//       <h3 className="text-2xl font-bold text-center mb-4">Grievance Status</h3>
      
//       {/* Left and Right sections for registration details */}
//       <div className="flex justify-between mb-4">
//         <div className="left1">
//           <p><strong>Registration ID:</strong> #{grievanceData._id}</p>
//           <p><strong>Date Submitted:</strong> {new Date(grievanceData.createdAt).toLocaleDateString()}</p>
//         </div>
//         <div className="right1">
//           <p><strong>Complainant Name:</strong> {grievanceData.name}</p>
//           <p><strong>Category of Grievance:</strong> {grievanceData.grievancecategory}</p>
//         </div>
//       </div>

//       <h5 className="font-bold">Current Status: {grievanceData.grievstatus === '1' ? 'Solved' : 'Pending'}</h5>

//       {/* Left and Right sections for the person handling the grievance */}
//       <div className="flex justify-between mt-4">
//         <div className="left2">
//           <p><strong>Dealt by:</strong> {grievanceData.mentor}</p>
//           <p><strong>Mobile:</strong> {grievanceData.mobile}</p>
//         </div>
//         <div className="right2">
//           <p><strong>Designation:</strong> Department Head</p>
//           <p><strong>Mail:</strong> {grievanceData.email}</p>
//         </div>
//       </div>

     
//     </div>
//   );
// };

// export default StatusF;







const StatusF = ({ grievanceId }) => {
  const [grievanceData, setGrievanceData] = useState(null);
  console.log(grievanceData)

  // Fetch the data whenever the grievanceId changes
  useEffect(() => {
    if (!grievanceId) return; // Skip fetching if the ID is empty

    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/register/${grievanceId}`);
        const data = await response.json();

        console.log(data); // Log the response to check the data structure

        if (data.success && data.data) {
          setGrievanceData(data.data);
        } else {
          console.error('No data found');
        }
      } catch (error) {
        console.error('Error fetching grievance data:', error);
      }
    };

    fetchData();
  }, [grievanceId]); // Run the effect when the ID changes

  // If data is not fetched yet, display loading text
  if (!grievanceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 bg-slate-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center mb-4">Grievance Status</h3>
      
      <div className="flex justify-between mb-4">
        <div className="left1">
          <p><strong>Registration ID:</strong> #{grievanceData._id}</p>
          <p><strong>Date Submitted:</strong> {grievanceData.updatedDate}</p>
          <p><strong>Complainant Name:</strong> {grievanceData.name}</p>
          <p><strong>Category of Grievance:</strong> {grievanceData.grievancecategory}</p>
          <p><strong>Comment:</strong> {grievanceData.comment}</p>
        </div>
        <div className="right1">
        
        </div>
      </div>

      <h5 className="font-bold">
  Current Status: 
  {grievanceData.grievstatus === '-1'
    ? 'Pending'
    : grievanceData.grievstatus === '0'
    ? 'Processing'
    : grievanceData.grievstatus === '1'
    ? 'Resolved'
    : 'Unknown'}
</h5>

      <div className="flex justify-between mt-4">
        <div className="left2">
          <p><strong>Dealt by:</strong> {grievanceData.mentor}</p>
          <p><strong>Mobile:</strong> {grievanceData.mobile}</p>
        </div>
        <div className="right2">
          {/* <p><strong>Designation:</strong> Department Head</p> */}
          <p><strong>Mail:</strong> {grievanceData.email}</p>
        </div>
      </div>
    </div>
  );
};

export default StatusF;