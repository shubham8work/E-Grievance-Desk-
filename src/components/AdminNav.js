// import React from 'react'

// const AdminNav = () => {

//   return (
//     <div>
//         <nav>
//         <ul>
//           <button  >All</button><br></br>
//           <button >Academics</button><br></br>
//           <button >Hostel</button><br></br>
//           <button >Facility</button><br></br>
//           <button >Other</button>
//         </ul>
//         </nav>
//     </div>
//   )
// }

// export default AdminNav

import React, { useState, useEffect } from 'react';

const AdminNav = () => {
  const [grievanceData, setGrievanceData] = useState([]); // State to store fetched data
  const [filteredGrievances, setFilteredGrievances] = useState([]); // State to store filtered data

  // Fetch grievance data from API
  useEffect(() => {
    const fetchGrievances = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/v1/fetchingdata'); // Replace with your API URL
        const result = await response.json();
        
        // Ensure result.data is an array, even if it's empty or API failed
        if (result.success && Array.isArray(result.data)) {
          setGrievanceData(result.data); // Store the fetched data (result.data is the array)
          setFilteredGrievances(result.data); // Initially display all grievances
        } else {
          setGrievanceData([]); // Set to an empty array if API returns unexpected data
          setFilteredGrievances([]);
          console.error('API returned an error or unexpected data:', result.message);
        }
      } catch (error) {
        console.error('Error fetching grievances:', error);
        setGrievanceData([]); // Set an empty array in case of an error
        setFilteredGrievances([]);
      }
    };

    fetchGrievances();
  }, []);

  // Function to filter grievances based on category
  const handleClick = (category) => {
    if (category === 'All') {
      setFilteredGrievances(grievanceData); // Show all grievances if "All" is selected
    } else {
      const filtered = grievanceData.filter(grievance => grievance.category === category);
      setFilteredGrievances(filtered);
    }
  };

  return (
    <div>
      <nav class="bg-red-500 p-2">
        <ul class="container mx-auto flex justify-between items-center">
          <div class="hidden md:flex space-x-8"> 
          <li><button onClick={() => handleClick('All')}>All</button><br /></li>
          <li><button onClick={() => handleClick('Academics')}>Academics</button><br /></li>
          <li><button onClick={() => handleClick('Hostel')}>Hostel</button><br /></li>
          <li><button onClick={() => handleClick('Facility')}>Facility</button><br /></li>
          <li><button onClick={() => handleClick('Other')}>Other</button></li>
          </div>
        </ul>
      </nav>
      <div>
        <h2>Filtered Grievances:</h2>
        {filteredGrievances.length > 0 ? (
          <ul>
            {filteredGrievances.map((grievance, index) => (
              <li key={index}>
                <p>Name: {grievance.name}</p>
                <p>Category: {grievance.category}</p>
                <p>Department: {grievance.dept}</p>
                <p>Email: {grievance.email}</p>
                <p>Description: {grievance.grievancedescription || 'N/A'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No grievances found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminNav;