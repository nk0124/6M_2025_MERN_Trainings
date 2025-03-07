import { useState } from "react"
import {ToastContainer,toast} from "react-toastify"
import { Navigate, useNavigate } from "react-router-dom";

 export default function Login(){
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const nav=useNavigate();

   const submitForm=(event)=>{
      console.log("hello world");
      event.preventDefault();
      if(email==="admin@clickcart.com" && password==="admin"){
         toast("login successfully !")
         nav("/admin")
      } else if(email==="neeta@gmail.com" && password==="123"){
        toast("login successfully !")
        nav("/");
      }
      else if(email !=="clickcart@gmail.com" && password !=="1234"){
        toast.error("Valid email & password")
        //  nav("/register")
      } 
      else{
         toast("Wrong Credentials!")
      }
   }
   const handleLogout=()=>{
      nav("/register")
   }
    return (
       <>
 <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "lightgray" }}>
    <div className="container" >
    <div className="row justify-content-center">
      <div className="col-md-4 col-lg-4" style={{marginTop:"3rem"}}>
        <div className="card">
          <div className="card-body">
            <form  onSubmit={submitForm}>
              <div className="form-group">
              <h1 className=" text-center">Login</h1>
                <label htmlFor="email" className="py-1">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email" value={email}
                  required="" onChange={(event)=>{
                        setEmail(event.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="py-1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder=" Enter Password" value={password}
                  required=""  onChange={(event)=>{
                     setPassword(event.target.value);
                  }}
                />
              </div>
              <button className="btn btn-danger mt-2">Login</button>
              <button className="btn btn-danger mt-2 mx-3" onClick={handleLogout}>Log Out</button>
            </form>
            <p className="mt-3">
              Not registered?
              <a href="/register" style={{textDecoration:"none",color:"red",marginLeft:"1rem"}}>Create an account</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
  
       </>
    )
}

