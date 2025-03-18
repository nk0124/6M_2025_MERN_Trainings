
const mongoose=require("mongoose")

// mongoose.connect("mongodb://127.0.0.1:27017/strayToStayDb")
mongoose.connect("mongodb://localhost:27017/nextClick")
.then(()=>{
    console.log("Database is connected!!");
})
.catch((error)=>{
    console.log("Error while connecting database", error);
})