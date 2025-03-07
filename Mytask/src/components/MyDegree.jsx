

// export default function MyDegree({degree,college,intro}){
//     return(
//         <>
//        <h2>Myself Introduction {intro}</h2>
//        <p>College Name: {college}</p>
//        <p>Degree : {degree}</p>

//         </>
//     )
// }


import { useContext } from "react";
import { UserContext } from "./Introduction";

export default function MyDegree() {
    const userData = useContext(UserContext); // Consuming context

    return <h3>Degree: {userData.degree}</h3>;
}
