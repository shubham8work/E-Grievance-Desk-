
// import React, { useState, useEffect } from 'react';

// const After = () => {

//   const [registrationId, setRegistrationId] = useState(null); // State to store the registration ID
//   const [error, setError] = useState(null);

//   // Fetch registration ID when the component mounts
//   useEffect(() => {
//     const fetchRegistrationId = async () => {
//       try {
//         const response = await fetch('http://localhost:4000/api/v1/register');

//         // Check if the response is okay
//         if (!response.ok) {
//           throw new Error(`Error: ${response.status} ${response.statusText}`);
//         }

//         const result = await response.json();
//         console.log('API Response:', result); // Debugging log

//         // Check if data exists and is an array
//         if (result && Array.isArray(result.data) && result.data.length > 0) {
//           setRegistrationId(result.data[0]._id); // Use the first entry's ID
//         } else {
//           setError('Registration data is not available.');
//         }
//       } catch (error) {
//         setError(`Error fetching registration ID: ${error.message}`);
//         console.error('Error fetching registration ID:', error);
//       }
//     };

//     fetchRegistrationId();
//   }, []);
//   return (
//     <div class="flex justify-center">
//         <div class="min-w-fit w-9/12 bg-slate-100 rounded-lg shadow-md p-8 mt-10">
//         <h3 class="text-2xl font-bold text-red-600">SUCCESS</h3>
//         <div><p>Your grievance has been successfully submitted!</p></div>
//         <br/>
//         <div class="text-xl font-bold text-red-600">
//             <h5>REG ID:{registrationId ? registrationId : 'Loading...'}</h5>
//         </div>
//         <br/>
//         <div>
//             <p>Please save this reistration number for future reference.<br/>
//             Your grievance would be addressed shortly, keep checking the status in the meantime. </p>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default After

import React from 'react';
import { useLocation } from 'react-router-dom';

const After = () => {
  const location = useLocation();
  const { registrationId } = location.state || {}; // Extract the registrationId from state

  return (
    <div className="flex justify-center">
      <div className="min-w-fit w-9/12 bg-slate-100 rounded-lg shadow-md p-8 mt-10">
        <h3 className="text-2xl font-bold text-red-600">SUCCESS</h3>
        <div>
          <p>Your grievance has been successfully submitted!</p>
        </div>
        <br />
        <div className="text-xl font-bold text-red-600">
          <h5>REG ID: {registrationId ? registrationId : 'Loading...'}</h5>
        </div>
        <br />
        <div>
          <p>
            Please save this registration number for future reference.
            <br />
            Your grievance will be addressed shortly. Keep checking the status in the meantime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default After;
