
const express = require('express')

const  app=express();
const PORT = 5000;

app.get('/name' ,(req,res)=>{
    // res.send("My name is Neeta Kumari");
    res.json({
        status:200,
        success:true,
        message:"My name is Neeta Kumari"
    })
})

app.post('/college' , (req,res)=>{
    //  res.send("Guru Nanak Dev University")
     res.json({
        status:200,
        success:true,
        message:"Guru Nanak Dev University"
     })
})

app.get('/hobby' , (req,res)=>{
      res.send({hobby:"coding and travel"})
})

app.post('/course' , (req,res)=>{
    res.send({course:"Mern stack devlopment"})
})

app.get('/tech' , (req,res)=>{
    res.send({course:"JavaScript, React , Node.js"})
})

app.listen(PORT,()=>{
    console.log("app listening on port" , PORT)
})




