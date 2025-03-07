import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const nav = useNavigate()

 
    const submitForm = (e) => {
        console.log("Function called!")
        e.preventDefault()

        if (email === "admin@gmail.com" && password === "123456") {
            nav("/admin")
        }
        else if(email === 'user@gmail.com' && password === "123"){
            nav("/")
        }
        else{
            console.log("Wrong Credentials!")
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-4 mx-auto my-5">
                        <h2>Login Form</h2>

                        <form onSubmit={submitForm}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value)
                                    }}
                                />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}