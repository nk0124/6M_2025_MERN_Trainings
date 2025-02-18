
import { Link } from "react-router-dom";

export default function Path(){
    return(
        <>
        <Link to={"/color"}> 1. Color </Link>
        <br/>
        <Link to={"/zomato"}> 2. Zomato</Link>
        </>
    )
}