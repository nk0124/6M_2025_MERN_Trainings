

import { Fragment } from "react"
export default function Studentarray(){
    let students=["Raj","Noor","Sakshi","Mehak","Ravi","Sahil"]
    return(
        <>
            {students.map((student,index)=>{
                // console.log("hello", color, index);
                return(
                    <Fragment key={index}>
                        <h1>{student}</h1>
                        {/* <p>Hello</p> */}
                    </Fragment>
                )
            })}
        </>
    )
}



