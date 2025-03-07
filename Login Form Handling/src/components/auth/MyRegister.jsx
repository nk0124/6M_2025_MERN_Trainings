import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PageTitle from "../layouts/PageTitle"
import { toast } from "react-toastify"
import { ClockLoader, GridLoader } from "react-spinners"
import { useForm } from "react-hook-form"

export default function MyRegister() {
    const {register, handleSubmit, formState:{errors}, reset}=useForm()
    const [load,setLoad]=useState(false)
    const nav = useNavigate()
    const submitForm=(data)=>{
        console.log(data);
        reset()
    }
    const handleError=(errors)=>{
        console.log(errors);
        
    }
    return (
        <>
            <main className="main">
                <PageTitle>Register</PageTitle>
                {/* Contact Section */}
                <section id="contact" className="contact section">
            
                {/* End Google Maps */}
                <div className="container" >
                    <ClockLoader color="lightgreen" size="50" cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
                    <div className={load==true && "d-none"}>
                        <div className="row justify-content-center gy-4">
                    
                        <div className="col-lg-6">
                            <form
                            method="post"
                            className="php-email-form"
                            onSubmit={handleSubmit(submitForm, handleError)}
                            >
                            <div className="row gy-4">
                            
                                <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Your name"
                                    
                                    {...register("name", {required:{
                                        value:true, message:"name is required"
                                    }})}
                                />
                                <span className="text-danger">{errors?.name?.message}</span>
                                </div>
                                <div className="col-md-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    placeholder="Your Email"
                                  
                                    {...register("email",{
                                        required:{
                                            value:true,
                                            message:"email is required"
                                        },
                                        pattern:{
                                            value:/^[a-zA-Z0-9\-\_\.]+\@+[a-zA-Z0-9]+\.+[a-zA-Z]{2,3}$/,
                                            message:"Email is not valid"
                                        }
                                    })}
                                />
                                <span className="text-danger">{errors?.email?.message}</span>
                                </div>
                                <div className="col-md-12">
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    placeholder="Your Password"
                              
                                    {...register("password")}
                                />
                                </div>
                                <div className="col-md-12">
                                <input
                                    className="form-control"
                                    name="number"
                                    type="contact"
                                    placeholder="Your Contact"
                                  
                                    {...register("contact", {
                                        minLength:{
                                            value:10,
                                            message:"Contact must be of 10 digits"
                                        },
                                        maxLength:{
                                            value:10,
                                            message:"Contact must be of 10 digits"
                                        },

                                    })}
                                />
                                <span className="text-danger">{errors?.contact?.message}</span>
                                </div>
                                <div className="col-md-12">
                                <input
                                    className="form-control"
                                    name="address"
                                    type="text"
                                    placeholder="Your Address"
                           
                                    {...register("address")}
                                />
                                </div>
                                <div className="col-md-12 text-center">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">
                                    Your message has been sent. Thank you!
                                </div>
                                <button type="submit">sumbit</button>
                                </div>
                            </div>
                            </form>
                        </div>
                        {/* End Contact Form */}
                        </div>
                    </div>
                </div>
                </section>
                {/* /Contact Section */}
            </main>
            
        </>
    )
}