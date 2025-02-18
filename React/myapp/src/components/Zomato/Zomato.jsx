

import { Fragment } from "react";
import data from "./Zomato";

export default function Zomato(){
    let total=0
    return(
        <>
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((el,index)=>{
                    // total+=parseFloat(el?.info?.rating?.rating_text)
                    // console.log(total);
                    
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>
                                <img src={el?.info?.image?.url} style={{height:"100px", width:"100px"}}/>
                            </td>
                            <td>{el?.info?.name}</td>
                            <td className={
                                el?.info?.rating?.rating_text>=4
                                ?"text-success"
                                :el?.info?.rating?.rating_text>=3
                                ?"text-info"
                                :"text-warning"
                            }
                            >
                                {el?.info?.rating?.rating_text}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
        <hr/>
        {data?.map(
            (el,index)=>(
                <>
                <h1 key={index}>{el?.info?.name}</h1>
                </>
            )
        )}
        </>
    )
}