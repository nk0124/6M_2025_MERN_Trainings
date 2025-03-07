import { useState } from "react";

export default function Counter(){
    var [x, setX]=useState(0)
    let [arr, setArr]=useState([])
    const [email,setEmail]=useState("janki@gmail.com")
    const [password,setPassword]=useState("")
    const inc=()=>{
       setX(x+1)
    }
    const dec=()=>{
        setX(x-1)
    }
    const addToDo=()=>{
        let y= prompt("Enter to-do")
        setArr([...arr,y]) 
        //spread operator makes copy of previous array and we store the value of y with it 
    }
    const changeEmail=(event)=>{
        // console.log("hello", event.target.value);
        setEmail(event.target.value)
    }

    return(
        <>
        <h1>X is {x}</h1>
        <button onClick={inc}>++{x}</button>
        <button onClick={dec}>--</button>
        <h1>{x}</h1>
        <h1>To do list</h1>
        <button onClick={addToDo}>Add</button>
        <ul>
            {arr?.map((el,index)=>(
                <li key={index}>{el}</li>
            ))}
        </ul>
        Email:  <input className="form-control" value={email} onChange={changeEmail}/>
        <h1>{email}</h1>
        Password: 
        <input value={password} onChange={(e)=>{setPassword(e.target.value);
        }}/>
        <h1>{password}</h1>
        <input type="checkbox"/>
        <br/>
        Gender <input type="radio"/>Male
         <input type="radio"/>Female
        </>
    )
}