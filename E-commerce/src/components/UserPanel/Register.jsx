import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [name,setName]=useState("");
    const[last,setLast]=useState("");
    const [gender,setGender]=useState("");
    const [bday,setBday]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const nav=useNavigate();

    const submitForm=(event)=>{
        event.preventDefault();// prevent page reload
        // console.log("function called",{name,last,bday,gender,email,phone}) ;
        nav("/login")
    }    


    return (
      <>
        <div className="d-flex align-items-center justify-content-center min-vh-100" style={{ backgroundColor: "lightgray" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="card p-4 shadow">
                  <h4 className="text-center">Sign Up</h4>
                  <form onSubmit={submitForm}>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">First Name</label>
                        <input type="text" className="form-control" required value={name} onChange={(event)=>{
                            setName(event.target.value);
                        }}/>
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Last Name</label>
                        <input type="text" className="form-control" required value={last} onChange={(event)=>{
                            setLast(event.target.value);
                        }}/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Birthday</label>
                        <input type="date" className="form-control" required  value={bday}
                        onChange={(event)=>{
                            setBday(event.target.value);
                        }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label d-block">Gender</label>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="male"  value="Male"
                           onChange={(event)=>{
                             setGender(event.target.value)}} checked={gender === "Male"}
                          />
                          <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="gender" id="female" value="Female"
                           onChange={(event)=>{
                             setGender(event.target.value)}} checked={gender === "Female"}
                          />
                          <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" required value={email} 
                         onChange={(event)=>{
                            setEmail(event.target.value);
                         }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label">Phone Number</label>
                        <input type="tel" className="form-control" required maxLength={"10"} value={phone}
                         onChange={(event)=>{
                            setPhone(event.target.value);
                         }}
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-danger w-25">Submit</button>
                    </div>
                    <div className="row mb-3">
                        <div className="col-md-6">
                        <p className="mt-3">
                      Already have an account ?
                       <a href="/login" style={{textDecoration:"none",color:"red",marginLeft:"1rem"}}>Log in</a>
                       </p>
                        </div>

                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

  