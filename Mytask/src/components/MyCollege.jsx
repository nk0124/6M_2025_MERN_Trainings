// import MyDegree from "./MyDegree";

// export default function MyCollege({intro,college,degree}){
//     return(
//         <>
//        <MyDegree intro={intro} college={college}  degree={degree} />
//         </>
//     )
// }


import { useContext } from "react";
import { UserContext } from "./Introduction";
import MyDegree from "./MyDegree";

export default function MyCollege() {
    const userData = useContext(UserContext); // Consuming context

    return (
        <div>
            <h1>{userData.intro}</h1>
            <h2>College: {userData.college}</h2> 
            <MyDegree />
        </div>
    );
}
