const mongoose=require('mongoose');
const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    // designation:{
    //     type:String,
    //     required:true,
    //     enum:["Mentor","Hostel","Academics"]
    // },
    designation:{
        type:String,
        required:true,
        enum:["academics","hostel","administrative","facility","other"]
    },

    password:{
        type:String,
        required:true,
    }
   
    

    
})
// admin login schema
const Adminlogin=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
    
    
})



module.exports=mongoose.model("Alogin",Adminlogin)
module.exports=mongoose.model("Admin",adminSchema)

