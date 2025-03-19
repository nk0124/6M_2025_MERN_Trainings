
const express=require('express')
const app=express()
const PORT=5000;

const api=require("../neeta/server/routes/ApiRoutes")
app.use("/api", api)

const db=require("../neeta/server/config/db")

app.get("/" , (req,res)=>{
    res.json({
        status:200,
        success:true,
        message:"Server is running"
    })
})


app.all("/**" , (req,res)=>{
    res.status(404).json({
        status:404,
        success:false,
        message:"Not Found",
    })
})




app.listen(PORT, ()=>{
    console.log("Server is running at " , PORT)
})





