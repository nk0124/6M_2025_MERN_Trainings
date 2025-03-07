 // props drilling 
// import React from "react";
// import MyCollege from "./MyCollege";
//   export default function Introduction(){
//     const intro="Hello, I am Neeta!";
//     const college="Guru Nanak Dev University";
//     const degree ="B.Tech";
//     return(
//         <>
//         <MyCollege intro={intro} college={college} degree={degree} />
//         </>
//     )
// }


import { createContext,useContext } from "react";
import MyCollege from "./MyCollege";

export let UserContext=createContext()  //named export
export default function Introduction(){
    const userData = {
        intro:"Hello , I am Neeta !",
        college:"Guru Nanak Dev University",
        degree:"B.Tech",
    };
    return(
       <UserContext.Provider value={userData}>
          <MyCollege/>
       </UserContext.Provider>
    )
}