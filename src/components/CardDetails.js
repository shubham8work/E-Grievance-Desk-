import React from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';






// const CardDetails = () => {
//   const location = useLocation();
//   const { post } = location.state;

//   // State for comment box visibility, input, and processing button visibility
//   const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
//   const [isProcessingVisible, setIsProcessingVisible] = useState(true); // State for "Processing" button
//   const [comment, setComment] = useState('');

//   // Function to handle "Processing" button click
//   const handleProcessingClick = () => {
//     setIsCommentBoxVisible(true); // Show the comment box
//   };

//   // Function to handle comment submission and update status
//   const handleSubmitComment = async () => {
//     if (!comment.trim()) {
//       alert('Please write a comment before submitting.');
//       return;
//     }

//     try {
//       // API call to update the grievance
//       const response = await fetch(`http://localhost:4000/api/v1/update-status/${post._id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: post._id, // Include grievance ID
//           grievstatus: 0, // Update status to 'processing' (0)
//           comment, // Include the comment
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         // alert('Grievance updated successfully!');
//         // console.log('Updated Grievance:', data);

        
//         setIsCommentBoxVisible(false);
//         setIsProcessingVisible(false);
//       } else {
//         alert(`Failed to update grievance: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error updating grievance:', error);
//       alert('An error occurred while updating the grievance.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center mt-10">
//       <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//         <h1 className="text-left font-bold text-2xl mb-4">{post.grievancecategory}</h1>
//         <h3 className="text-left font-thin">Name: {post.name}</h3>
//         <h3 className="text-left font-thin">URN: {post.urn}</h3>
//         <h3 className="text-left font-thin">Department: {post.department}</h3>
//         <h3 className="text-left font-thin">Description: {post.grievancedescription}</h3>
//         <h3 className="text-left font-thin">ID: {post._id}</h3>
//         <h3 className="text-left font-thin">Dealt By: </h3>

//         {/* Processing Button */}
//         {isProcessingVisible && (
//           <button
//             className="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
//             onClick={handleProcessingClick}
//           >
//             Processing
//           </button>
//         )}

//         {/* Comment Box */}
//         {isCommentBoxVisible && (
//           <div className="mt-4">
//             <textarea
//               className="w-full p-2 border rounded-lg"
//               rows="3"
//               placeholder="Write your comment here..."
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             ></textarea>
//             <button
//               className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-2"
//               onClick={handleSubmitComment}
//             >
//               Submit Comment
//             </button>
//           </div>
//         )}

//         {/* Resolved Button */}
//         <button
//           className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
//           onClick={() => alert('Status changed to Resolved. Add functionality for this action.')}
//         >
//           Resolved
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardDetails;





// const CardDetails = ({ adminEmail }) => {
//   const location = useLocation();
//   const { post } = location.state;
  

//   const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
//   const [comment, setComment] = useState('');
//   const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
//   const [dealtBy, setDealtBy] = useState(post.dealtby || 'Not Assigned');
//   const [grievstatus, setGrievstatus] = useState(post.grievstatus);

//   // Handle the "Processing" button click
//   const handleProcessingClick = () => {
//     if (!isCommentSubmitted) {
//       setIsCommentBoxVisible(true);
//     }
//   };

//   // Handle the comment submission
//   const handleSubmitComment = async () => {
//     if (!comment.trim()) {
//       alert('Please write a comment before submitting.');
//       return;
//     }
  
//     try {
//       // Prepare the data to send to the backend
//       const response = await fetch(`http://localhost:4000/api/v1/update-status/${post._id}`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: post._id,  // Send the Grievance ID
//           grievstatus: "0", // Set status to "Processing"
//           comment, // Send the comment
//           // dealtby: adminEmail, // Send the admin email
//         }),
//       });
    
  
//       const data = await response.json();
  
//       if (response.ok) {
//         // Update frontend state after successful submission
//         setIsCommentSubmitted(true);
//         setGrievstatus("0"); // Change status to "Processing"
//         setIsCommentBoxVisible(false);
//         setDealtBy(adminEmail); // Update "Dealt By" to admin email
//       } else {
//         alert(`Failed to update grievance: ${data.message}`);
//       }
//     } catch (error) {
//       console.error('Error updating grievance:', error);
//       alert('An error occurred while updating the grievance.');
//     }
//   };

//   return (
//     <div className="flex justify-center items-center mt-10">
//       <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
//         <h1 className="text-left font-bold text-2xl mb-4">{post.grievancecategory}</h1>
//         <h3 className="text-left font-thin">Name: {post.name}</h3>
//         <h3 className="text-left font-thin">URN: {post.urn}</h3>
//         <h3 className="text-left font-thin">Department: {post.department}</h3>
//         <h3 className="text-left font-thin">Description: {post.grievancedescription}</h3>
//         <h3 className="text-left font-thin">ID: {post._id}</h3>
//         <h3 className="text-left font-thin">Dealt By: {dealtBy}</h3>
//         <h3 className="text-left font-thin">
//           Status: {grievstatus === "-1" ? 'New' : 'Processing'}
//         </h3>

//         {/* Processing Button */}
//         {grievstatus === "-1" && (
//           <button
//             className="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
//             onClick={handleProcessingClick}
//           >
//             Processing
//           </button>
//         )}

//         {/* Comment Box */}
//         {isCommentBoxVisible && (
//           <div className="mt-4">
//             <textarea
//               className="w-full p-2 border rounded-lg"
//               rows="3"
//               placeholder="Write your comment here..."
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             ></textarea>
//             <button
//               className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-2"
//               onClick={handleSubmitComment}
//             >
//               Submit Comment
//             </button>
//           </div>
//         )}

//         {/* Resolved Button */}
//         {grievstatus === "0" && (
//           <button
//             className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
//             onClick={() => alert('Status changed to Resolved. Add functionality for this action.')}
//           >
//             Resolved
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default CardDetails;


const CardDetails = ({ adminEmail }) => {
  
  const location = useLocation();
  const { post } = location.state;
  console.log(post);

  const [isCommentBoxVisible, setIsCommentBoxVisible] = useState(false);
  const [comment, setComment] = useState('');
  const [isCommentSubmitted, setIsCommentSubmitted] = useState(false);
  const [dealtBy, setDealtBy] = useState(post.dealtby || 'Not Assigned');
  const [grievstatus, setGrievstatus] = useState(post.grievstatus);

  // Handle the "Processing" button click
  const handleProcessingClick = () => {
    if (!isCommentSubmitted) {
      setIsCommentBoxVisible(true);
    }
  };
  
  // Handle the comment submission for "Processing"
  const handleSubmitComment = async () => {
    if (!comment.trim()) {
      alert('Please write a comment before submitting.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:4000/api/v1/update-status-comment/${post._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grievstatus: "0", // Set status to "Processing"
          comment, // Include the comment in the request body
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setIsCommentSubmitted(true);
        setGrievstatus("0"); // Update the status to "Processing"
        setIsCommentBoxVisible(false); // Hide the comment box
        setDealtBy(adminEmail); // Set "Dealt By" to the admin's email
        alert('Grievance updated to Processing with your comment.');
      } else {
        alert(`Failed to update grievance: ${data.message}`);
      }
    } catch (error) {
      console.error('Error updating grievance:', error);
      alert('An error occurred while updating the grievance.');
    }
  };

  // Handle the "Resolved" button click
  // const handleResolvedClick = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:4000/api/v1/update-status/${post._id}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         id: post._id,
  //         grievstatus: "1", // Set status to "Resolved"
  //       }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       setGrievstatus("1"); // Change status to "Resolved"
  //       alert('Status changed to Resolved');
  //     } else {
  //       alert(`Failed to resolve grievance: ${data.message}`);
  //     }
  //   } catch (error) {
  //     console.error('Error resolving grievance:', error);
  //     alert('An error occurred while resolving the grievance.');
  //   }
  // };

  const handleResolvedClick = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/update-status/${post._id}`, {  // Fix here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          grievstatus: "1", // Only send the new status
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setGrievstatus("1"); // Update local state to Resolved
        alert('Status changed to Resolved');
      } else {
        alert(`Failed to resolve grievance: ${data.message}`);
      }
    } catch (error) {
      console.error('Error resolving grievance:', error);
      alert('An error occurred while resolving the grievance.');
    }
  };
  

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-7/12 bg-slate-100 rounded-lg shadow-md p-4">
        <h1 className="text-left font-bold text-2xl mb-4">{post.grievancecategory}</h1>
        <h3 className="text-left font-thin"><strong>Name: {post.name}</strong></h3>
        <h3 className="text-left font-thin"><strong>URN:</strong> {post.urn}</h3>
        <h3 className="text-left font-thin"><strong>Department:</strong> {post.department}</h3>
        <h3 className="text-left font-thin"><strong>Year:</strong> {post.year}</h3>
        <h3 className="text-left font-thin"><strong>Description:</strong> {post.grievancedescription}</h3>
        <h3 className="text-left font-thin"><strong>ID:</strong> {post._id}</h3>
        <h3 className="text-left font-thin"><strong>Comment:</strong> {post.comment}</h3>
        

        <h3 className="text-left font-thin">Dealt By: {dealtBy}</h3>
        <h3 className="text-left font-thin">
          Status: {grievstatus === "-1" ? 'New' : grievstatus === "0" ? 'Processing' : 'Resolved'}
        </h3>

        {/* Processing Button */}
        {grievstatus === "-1" && (
          <button
            className="bg-red-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
            onClick={handleProcessingClick}
          >
            Processing
          </button>
        )}

        {/* Comment Box */}
        {isCommentBoxVisible && (
          <div className="mt-4">
            <textarea
              className="w-full p-2 border rounded-lg"
              rows="3"
              placeholder="Write your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <button
              className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-2"
              onClick={handleSubmitComment}
            >
              Submit Comment
            </button>
          </div>
        )}

        {/* Resolved Button */}
        {grievstatus === "0" && (
          <button
            className="bg-green-500 text-white text-1xl font-bold py-1 px-4 rounded-lg mt-6"
            onClick={handleResolvedClick}
          >
            Resolved
          </button>
        )}
      </div>
    </div>
  );
};

export default CardDetails;