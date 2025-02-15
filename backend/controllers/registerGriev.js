const Register=require("../models/Register");
const Admin=require("../models/Admin");


const bcrypt=require("bcryptjs");

const jwt = require('jsonwebtoken');


// this is for register grievance
exports.registerGriev=async (req,res)=>{
    try{
        const{name,email,mobile,department,gender, mentor,grievancecategory,grievancedescription,year,urn,grievstatus=-1,comment="",flag=0,dealtby="",updatedDate}=req.body;
        // validate 
        if(!name || !email || !mobile|| !department || !gender || !mentor ||!grievancecategory || !grievancedescription ||!year ||!urn){
            return res.status(400).json({
                success:false,
                message:"Please fill in all fields"
            });
        }
        const response = await Register.create({name,email,mobile,department,gender, mentor,grievancecategory,grievancedescription,year,urn,grievstatus,comment,flag,dealtby,updatedDate});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Successfully'
            }
        );

    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:error.message,
        })

    }
}

// THis is for admin signup
// exports.adminSignup=async(req,res)=>{
    
//     try{
//         const{name,email,designation,password,adminCode}=req.body;
//         if(adminCode !== process.env.ADMIN_CODE){
//             return res.json({
//                 success:false,
//                 message:"Unauthorized"
//             })
//         }
//         console.log(process.env.ADMIN_CODE);

//         // check karo user already exist hai ki nahi
//         const existingAdmin = await Admin.findOne({email});
//         if(existingAdmin){
//             return res.status(404).json({
//                 success:false,
//                 message:"Admin already exist"
//             })
//         }
//         console.log("hellow g");
//         // password ko secure kiye and store kiye hai
//         let hashedPassword;
//         try{
//             hashedPassword=await bcrypt.hash(password,10);

//         }
//         catch(error){
//             console.error(error)
//             return res.status(500).json({
//                 success:false,
//                 message:"error in hashing password"
//             })

//         }
//         // admin ko create karo and store in db
//         const admin = await Admin.create({
//             name,email,designation,password:hashedPassword,
//         })
//         console.log(admin);
//         return res.status(200).json({
//             success:true,
//             message:"user created successfully"
//         })


//     }
//     catch(error){
//         return res.status(404).json({
//             success:false,
//             message:"please try later to signup"
//         }) 
//     }
// }

exports.adminSignup = async (req, res) => {
    try {
        const { name, email, designation, password, adminCode } = req.body;

        // Ensure password is provided
        if (!password) {
            return res.status(400).json({
                success: false,
                message: "Password is required",
            });
        }

        // Check if all fields are provided
        if (!name || !email || !designation || !password || !adminCode) {
            return res.status(400).json({
                success: false,
                message: "Please fill in all fields",
            });
        }

        // Check if admin code is correct
        if (adminCode !== process.env.ADMIN_CODE) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

         
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({
                success: false,
                message: "Admin already exists",
            });
        }

        // Hash the password securely
        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (error) {
            console.error("Error in hashing password:", error);
            return res.status(500).json({
                success: false,
                message: "Error in hashing password",
            });
        }

        // Create and store admin in DB
        const admin = await Admin.create({
            name, email, designation, password: hashedPassword,
        });

        return res.status(200).json({
            success: true,
            message: "Admin created successfully",
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Server error, please try again later",
        });
    }
};

// get admin designation
exports.getDesignation = async(req,res) => {

  try{
    const{email,password}=req.body;
    if(!email || !password ){
      return res.status(400).json({
          success:false,
          message:"please fill all the details"
      })
    }

    // check if admin exist or not
    const admin =await Admin.findOne({email});
    if(!admin){
        return res.status(400).json({
            success:false,
            message:"invalid email or password"
        })
    }
    else{
        // check if password is correct or not
        const isMatch =await bcrypt.compare(password,admin.password)
        if(!isMatch){
            return res.status(400).json({
                success:false,
                message:"invalid email or password"
            })
        }
        else{
          return res.status(200).json({
            success:true,
            name:admin.name,
            designation:admin.designation
          })
        }
    }
  }
  catch(error){
      console.error(error);
        return res.status(404).json({
            success:false,
            message:"please try later to login"
        })
  }
}

// This is for admin Login
exports.adminLogin=async(req,res)=>{
    try{
        const{email,password}=req.body;
        console.log(email,password);
        if(!email || !password ){
            return res.status(400).json({
                success:false,
                message:"please fill all the details"
            })
        }
        // check if admin exist or not
        const admin =await Admin.findOne({email})
        if(!admin){
            return res.status(400).json({
                success:false,
                message:"invalid email or password"
            })
        }
        else{
            // check if password is correct or not
            const isMatch =await bcrypt.compare(password,admin.password)
            if(!isMatch){
                return res.status(400).json({
                    success:false,
                    message:"invalid email or password"
                })


            }
        }
        return res.status(200).json({
            success:true,
            message:"admin logged in successfully",
        })



    }
    catch(error){
        console.error(error);
        return res.status(404).json({
            success:false,
            message:"please try later to login"
        })

    }
}

// controllers for fetching data from backend
exports.fetchingData=async(req,res)=>{
    try {
        const data = await Register.find();
        console.log(data);
       
        res.status(200).json({
            success: true,
            data: data,
            message: "Data fetched successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(404).json({
            success: false,
            message: "There is something wrong in fetching data"
        });
    }
}

// Controller to fetch data by ID 
exports.fetchDataById = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Fetch the document by ID
      const data = await Register.findById(id);
  
      if (!data) {
        return res.status(404).json({
          success: false,
          message: 'Data not found'
        });
      }
  
      res.status(200).json({
        success: true,
        data: data,
        message: 'Data fetched successfully'
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        message: 'There was an error fetching the data'
      });
    }
  }



// update grievance

// exports.updateGrievanceComment = async (req, res) => {
//     try {
//       const { id } = req.params; // Extract the ID from request parameters
//       const { comment } = req.body; // Extract data from the request body
  
//       // Check if required fields are present
//     //   if (!comment || grievstatus === undefined) {
//     //     return res.status(400).json({ message: 'Comment and grievstatus are required' });
//     //   }
  
//       // Find and update the grievance
//       const updatedGrievance = await Register.findByIdAndUpdate(
//         id,
//         { 
//           $set: { comment },
//         },
//         { new: true } // Return the updated document
//       );
  
//       if (!updatedGrievance) {
//         return res.status(404).json({ message: 'Grievance not found' });
//       }
  
//       res.status(200).json({
//         message: 'Grievance updated successfully',
//         grievance: updatedGrievance,
//       });
//     } catch (error) {
//       console.error('Error updating grievance:', error);
//       res.status(500).json({ message: 'Internal Server Error', error });
//     }
//   };


// exports.updateGrievanceStatusAndComment = async (req, res) => {
//     try {
//       const { id } = req.params; // Grievance ID from the URL
//       const { comment, grievstatus } = req.body; // Extract comment and grievstatus from the request body
  
//       // Validate input
//       if (!id || comment === undefined || grievstatus === undefined) {
//         return res.status(400).json({ message: 'ID, comment, and grievstatus are required.' });
//       }
  
//       // Find and update the grievance by ID
//       const updatedGrievance = await Register.findByIdAndUpdate(
//         id,
//         { 
//           $set: { 
//             comment, // Update comment
//             grievstatus, // Update grievstatus
//           },
//         },
//         { new: true } // Return the updated document
//       );
  
//       // Handle case where grievance is not found
//       if (!updatedGrievance) {
//         return res.status(404).json({ message: 'Grievance not found.' });
//       }
  
//       // Send success response
//       res.status(200).json({
//         message: 'Grievance updated successfully.',
//         grievance: updatedGrievance,
//       });
//     } catch (error) {
//       console.error('Error updating grievance:', error);
//       res.status(500).json({ message: 'Internal Server Error', error });
//     }
//   };




exports.updateGrievanceStatusAndComment = async (req, res) => {
    try {
      const { id } = req.params; // Grievance ID from the URL
      const { comment, grievstatus} = req.body; // Extract fields from the request body
  
      // Validate if all required fields are provided
      if (!id || comment === undefined || grievstatus === undefined ) {
        return res.status(400).json({
          message: 'ID, comment, grievstatus are required.',
        });
      }
  
      // Find the grievance by ID and update the fields
      const updatedGrievance = await Register.findByIdAndUpdate(
        id,
        {
          $set: {
            comment, // Update comment
            grievstatus, // Update grievstatus
            // dealtby, // Update dealtBy
          },
        },
        { new: true } // Return the updated document
      );
  
      // Handle case where grievance is not found
      if (!updatedGrievance) {
        return res.status(404).json({ message: 'Grievance not found.' });
      }
  
      // Send success response
      res.status(200).json({
        message: 'Grievance updated successfully.',
        grievance: updatedGrievance,
      });
    } catch (error) {
      console.error('Error updating grievance:', error);
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  };





//   fetch data by designation
exports.fetchDataByGrievanceCategory = async (req, res) => {
    try {
        const { grievancecategory } = req.params; // Use grievancecategory instead of designation
        console.log("Received grievancecategory:", grievancecategory); // Log for debugging

        if (!grievancecategory) {
            return res.status(400).json({
                success: false,
                message: "Grievance category is required",
            });
        }

        // Query using grievancecategory
        const data = await Register.find({ grievancecategory: new RegExp(`^${grievancecategory}$`, "i") });
        console.log("Query Result:", data); // Log the query result

        if (!data.length) {
            return res.status(404).json({
                success: false,
                message: "No records found for this grievance category",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Data fetched successfully",
            data,
        });
    } catch (error) {
        console.error("Error fetching data by grievance category:", error);
        return res.status(500).json({
            success: false,
            message: "Server error, please try again later",
        });
    }
};



// this is for update grievance status on clicking resolved button
exports.resolveGrievanceStatus = async (req, res) => {
    try {
      const { id } = req.params; // Grievance ID from the URL
      const { grievstatus } = req.body; // Extract grievstatus from the request body
  
      // Validate required fields (ID and grievstatus only)
      if (!id || grievstatus === undefined) {
        return res.status(400).json({
          message: 'ID and grievstatus are required.',
        });
      }
  
      // Ensure the status is "1" (Resolved)
      if (grievstatus !== "1") {
        return res.status(400).json({
          message: 'Invalid status. Only "1" is allowed for resolving.',
        });
      }
  
      // Update the grievance status
      const updatedGrievance = await Register.findByIdAndUpdate(
        id,
        {
          $set: { grievstatus },
        },
        { new: true } // Return the updated document
      );
  
      if (!updatedGrievance) {
        return res.status(404).json({ message: 'Grievance not found.' });
      }
  
      res.status(200).json({
        message: 'Grievance resolved successfully.',
        grievance: updatedGrievance,
      });
    } catch (error) {
      console.error('Error resolving grievance:', error);
      res.status(500).json({ message: 'Internal Server Error', error });
    }
  };
