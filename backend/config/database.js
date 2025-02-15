const mongoose=require('mongoose');
require('dotenv').config();
// const dotenv = require('dotenv');


const dbconnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    .then(() => console.log("DB ka Connection is Successful"))
    .catch( (error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    } );
}
// const mongoose = require('mongoose');

//  const dbconnect  = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URI);
//     console.log("MongoDB connected successfully");
//   } catch (err) {
//     console.log("error in facing db")
//     process.exit(1);
//   }
// }
module.exports=dbconnect;