

const mongoose=require("mongoose")


mongoose.connect("mongodb://localhost:27017/Cartclick")
.then(()=>{
    console.log("data is connected successfully!!")
})


.catch(()=>{
    console.log("While error database connected")
})