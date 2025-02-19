import { Fragment } from "react"
export default function Colors(){
    let colors=["red","green", "blue","pink","black"]
    return(
        <>
            {colors.map((color,index)=>{
                // console.log("hello", color, index);
                return(
                    <Fragment key={index}>
                        <h1>{color}</h1>
                        <p>Hello</p>
                    </Fragment>
                )
            })}
        </>
    )
}