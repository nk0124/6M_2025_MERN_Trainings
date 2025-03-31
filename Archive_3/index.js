const express=require("express")
const data=require("./data")
const app=express()
const PORT=5001 

app.use(express.urlencoded({extended:true}))
app.use(express.json({limit:"40mb"}))
app.use(express.static("./server/public/"))
const api=require("./server/routes/ApiRoutes")
app.use("/api", api)

const db=require("./server/config/db")
app.listen(PORT,()=>{
    console.log("SERVER is running at ", PORT);
})

app.get("/",(req,res)=>{
    res.json({
        status:200,
        success:true, 
        message:"Server is running"
    })
})

app.all("/**",(req,res)=>{
    res.status(404).json({
        status:404,
        success:false,
        message:"Not Found!!"
    })
})