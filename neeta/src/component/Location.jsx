import { Fragment } from "react"

function Location(){
  let  locations=["Jalandhar","Kartarpur","Amritsar","Delhi","Mohali"]
    return(
       <>
         {locations.map((location,index)=>{
           return(
             <Fragment key={index}>
                <h1>{location}</h1>
             </Fragment>
           )
         })}
       </>
    )
}

export default Location;