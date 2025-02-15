import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

// const Status = () => {
//   const [inputValue, setInputValue] = useState(''); // To store the Email/Reg. ID input
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Handle form input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   // Fetch data when button is clicked
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     try {
//       const response = await fetch(`http://localhost:4000/api/v1/register/${inputValue}`);
//       const data = await response.json();

//       if (response.ok && data.success) {
//         // If the data is found, navigate to the status page with the data
//         navigate('/StatusF', { state: { post: data.data } });
//       } else {
//         setError('No matching grievance found or invalid input.');
//       }
//     } catch (error) {
//       console.error('Error fetching grievance data:', error);
//       setError('There was an error fetching the data.');
//     }
//   };

//   return (
//     <div class="flex justify-center items-center mt-10"> 
//     <div class="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
//     <h3 class="text-left">Track your Grievance</h3>
//     <form>
//     <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Enter your Email/Reg.Id"  name="Name" />
//     </form><br></br>
//     <button class="bg-red-500 text-white font-bold py-1 px-4 rounded-lg" >Check</button>
//     </div>
//     </div>
//   )
// }

// export default Status



// const Status = () => {
//   const [inputValue, setInputValue] = useState(''); // To store the Email/Reg. ID input
//   const [error, setError] = useState(null);
//   const navigate = useNavigate();

//   // Handle form input change
//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   // Fetch data when button is clicked
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the form from reloading the page

//     try {
//       const response = await fetch(`http://localhost:4000/api/v1/register/${inputValue}`);
//       const data = await response.json();

//       if (response.ok && data.success) {
//         // If the data is found, navigate to the status page with the data
//         navigate('/StatusF', { state: { post: data.data } });
//       } else {
//         setError('No matching grievance found or invalid input.');
//       }
//     } catch (error) {
//       console.error('Error fetching grievance data:', error);
//       setError('There was an error fetching the data.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center mt-10"> 
//       <div className="w-full max-w-md bg-slate-100 rounded-lg shadow-md p-8">
//         <h3 className="text-left">Track your Grievance</h3>
//         <form onSubmit={handleSubmit}>
//           <input 
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500" 
//             type="text" 
//             placeholder="Enter your Email/Reg.Id"  
//             name="Name"
//             value={inputValue}
//             onChange={handleInputChange}
//           />
//         </form>
//         <br />
//         <button className="bg-red-500 text-white font-bold py-1 px-4 rounded-lg" onClick={handleSubmit}>
//           Check
//         </button>

//         {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
//       </div>
//     </div>
//   );
// };

// export default Status;




import StatusF from './StatusF';

const Status = () => {
  const [inputId, setInputId] = useState(''); 
  const [grievanceId, setGrievanceId] = useState(null); 
  // Handle input changes
  const handleInputChange = (e) => {
    setInputId(e.target.value); 
  };

  // Handle form submission to set the grievance ID
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputId.trim()) {
      setGrievanceId(inputId);
    } else {
      alert('Please enter a valid ID');
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Track Grievance Status</h2>

      {/* Input Form */}
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center gap-4">
        <input
          type="text"
          placeholder="Enter Registration ID"
          value={inputId}
          onChange={handleInputChange}
          className="p-2 border rounded w-full max-w-md"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-red-500 text-white rounded w-full max-w-md"
        >
          Track Status
        </button>
      </form>

      {/* Render StatusF Component Conditionally */}
      {grievanceId && (
        <div className="mt-6">
          <StatusF grievanceId={grievanceId} />
        </div>
      )}
    </div>
  );
};

export default Status;