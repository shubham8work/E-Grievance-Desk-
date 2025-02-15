const express=require('express');
const app=express();
const cors = require('cors');

require('dotenv').config();
const port=process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const dbconnect = require("./config/database");
dbconnect();
// route import and mount
const registerRoute=require("./routes/grievance");
app.use('/api/v1',registerRoute);


app.get('/',(req,res)=>{
    res.send("This is your Home page baby")
})
app.listen(port, () => {
    console.log(`Server started successfully at ${port}`);
})